import { GoogleGenAI } from "@google/genai";

// Compressed context from the transcript for the AI
const MEETING_CONTEXT = `
CONTEXTO DE LA REUNIÓN (Maestría en Transformación Digital - MTD):
- Participantes: Dr. Bullón (Director/Coordinador), Eric (Apoyo administrativo), Alumnos (William, Rubén, Manolo, etc.).
- Fecha próxima reunión: Jueves 11 de Diciembre, 7:30 PM (Vía Zoom).
- Temas Clave:
  1. GRADUACIÓN VS CEREMONIA: La ceremonia próxima es "Fiesta de Egreso", no de graduación oficial porque faltan sustentar tesis.
  2. DOCUMENTOS ADMINISTRATIVOS (4 Requisitos):
     - Constancia de Egreso: Se tramita virtual, demora ~3 semanas. Costo bajo.
     - Certificado de Finalización de Estudios (Notas): Necesita fotos tamaño carnet (físicas, sin lentes, fondo blanco) entregadas presencialmente.
     - Constancia de No Adeudo: Trámite interno (biblioteca, finanzas). Demora ~6 meses si no se sustenta rápido.
     - Orden de Mérito: Opcional.
  3. TESIS Y ASESORES:
     - Caso 1: Tesis lista. Pasa a revisión (15 días). Prioridad para sustentar.
     - Caso 2: Tienen plan, falta formalizar asesor. Se actualizará la lista y se formalizará.
     - Caso 3: No tienen plan ni asesor. Deben enviar solicitud (formato anexo 11) nuevamente.
  4. PROCESO DE ASESORÍA:
     - Gestión de proyectos (Project Management).
     - Reuniones 1 o 2 veces al mes (según avance).
     - Se usará plataforma NEO.
     - Docentes/Asesores mencionados: Dr. Vilchez, Luis Núñez, Alberto Cáceda (se retiró), Dr. Guillermo.
  5. PAGOS: Se confirmó que ya se aprobó el pago a asesores, por lo que se exige formalización inmediata.
`;

export const sendMessageToGemini = async (
  history: { role: string; parts: { text: string }[] }[],
  message: string,
  apiKey: string
): Promise<string> => {
  if (!apiKey) {
    throw new Error("API Key is missing");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const chatSession = ai.chats.create({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: `Eres un asistente útil para los alumnos de la MTD (Maestría). 
        Usa el siguiente contexto de la transcripción de la reunión para responder dudas de manera precisa y ordenada. 
        Si no sabes la respuesta basada en el contexto, dilo. Mantén un tono profesional y empático.
        ${MEETING_CONTEXT}`,
      },
      history: history,
    });

    const result = await chatSession.sendMessage({
      message: message,
    });

    return result.text || "Lo siento, no pude generar una respuesta.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};