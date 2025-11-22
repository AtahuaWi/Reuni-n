import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Key } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

interface Props {
  apiKey: string;
  setApiKey: (key: string) => void;
}

const GeminiAssistant: React.FC<Props> = ({ apiKey, setApiKey }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: 'Hola. Soy tu asistente virtual de la MTD. He analizado la transcripción de la reunión. ¿Tienes dudas sobre los trámites, tu tesis o la próxima reunión?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;
    if (!apiKey) {
      alert("Por favor ingresa tu API Key de Gemini para continuar.");
      return;
    }

    const newMessage: ChatMessage = {
      role: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Format history for API
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const responseText = await sendMessageToGemini(history, newMessage.text, apiKey);

      setMessages(prev => [...prev, {
        role: 'model',
        text: responseText,
        timestamp: new Date()
      }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'model',
        text: 'Lo siento, hubo un error al conectar con Gemini. Verifica tu API Key.',
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="bg-blue-600 p-4 flex items-center justify-between text-white">
        <div className="flex items-center gap-2">
          <Bot className="w-6 h-6" />
          <div>
            <h3 className="font-bold">Asistente MTD</h3>
            <p className="text-xs text-blue-100">Basado en la transcripción oficial</p>
          </div>
        </div>
      </div>

      {/* API Key Input if missing */}
      {!apiKey && (
        <div className="p-4 bg-amber-50 border-b border-amber-100 text-amber-800 text-sm flex flex-col gap-2">
          <p className="flex items-center gap-2 font-medium">
            <Key className="w-4 h-4" /> Configuración Requerida
          </p>
          <p>Para usar el chat inteligente, necesitas una API Key de Google Gemini.</p>
          <input 
            type="password" 
            placeholder="Pega tu API Key aquí..."
            className="w-full p-2 border border-amber-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
            onChange={(e) => setApiKey(e.target.value)}
          />
        </div>
      )}

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
        {messages.map((msg, idx) => (
          <div 
            key={idx} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] rounded-2xl p-4 shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-br-none' 
                  : 'bg-white text-slate-700 border border-slate-100 rounded-bl-none'
              }`}
            >
              <div className="flex items-center gap-2 mb-1 opacity-70 text-xs">
                {msg.role === 'user' ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
                <span>{msg.role === 'user' ? 'Tú' : 'Asistente'}</span>
              </div>
              <p className="whitespace-pre-wrap text-sm leading-relaxed">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
             <div className="bg-white p-4 rounded-2xl rounded-bl-none border border-slate-100 shadow-sm flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                <span className="text-sm text-slate-500">Analizando reunión...</span>
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-slate-200">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            disabled={!apiKey || isLoading}
            placeholder={!apiKey ? "Configura tu API Key arriba" : "Pregunta sobre pagos, fechas, o trámites..."}
            className="flex-1 p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-slate-100 disabled:cursor-not-allowed"
          />
          <button
            onClick={handleSend}
            disabled={!apiKey || isLoading || !inputValue.trim()}
            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-slate-300 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeminiAssistant;