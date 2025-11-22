import React, { useState } from 'react';
import { DocumentReq } from '../types';
import { CheckCircle, AlertCircle, FileText, ChevronDown, ChevronUp } from 'lucide-react';

const DOCUMENTS_DATA: DocumentReq[] = [
  {
    id: '1',
    title: 'Constancia de Egreso',
    description: 'Documento que certifica la culminación de los cursos.',
    status: 'in_progress',
    important: true,
    details: [
      'Trámite: Virtual (Correo/Sistema)',
      'Tiempo estimado: Aprox. 3 semanas',
      'Requisito previo: Estar al día en pagos de creditaje.',
      'Nota: Hubo retrasos administrativos, se están liberando por lotes.'
    ]
  },
  {
    id: '2',
    title: 'Certificado de Finalización de Estudios',
    description: 'Documento oficial con las notas obtenidas.',
    status: 'pending',
    important: true,
    details: [
      'Trámite: Solicitud virtual, pero entrega física de requisitos.',
      'Requisito Crítico: 2 juegos de fotos tamaño carnet (físicas).',
      'Especificaciones Foto: Fondo blanco, sin lentes, ropa formal, actual.',
      'Entrega: Presencial en Escuela de Posgrado o vía courier (coordinar con Eric).'
    ]
  },
  {
    id: '3',
    title: 'Constancia de No Adeudo',
    description: 'Valida que no se debe nada a la universidad (Biblioteca, Finanzas, etc.).',
    status: 'pending',
    important: true,
    details: [
      'Proceso: Interno (La escuela consulta a las dependencias).',
      'Validez: Tiene vigencia de 5 a 6 meses.',
      'Recomendación: Sacarlo cerca a la fecha de sustentación para que no caduque.'
    ]
  },
  {
    id: '4',
    title: 'Orden de Mérito',
    description: 'Documento opcional sobre el ranking en la promoción.',
    status: 'pending',
    important: false,
    details: [
      'Opcional: No es obligatorio para la sustentación.',
      'Uso: Fines laborales o personales.'
    ]
  }
];

const DocumentTracker: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Trámites Administrativos</h2>
        <p className="text-slate-600">
          Guía interactiva de los 4 documentos mencionados en la reunión.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        {DOCUMENTS_DATA.map((doc) => (
          <div 
            key={doc.id} 
            className={`bg-white rounded-xl shadow-sm border transition-all duration-300 ${
              doc.important ? 'border-l-4 border-l-blue-500' : 'border-l-4 border-l-slate-300'
            }`}
          >
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold text-lg text-slate-800">{doc.title}</h3>
                </div>
                {doc.important && (
                  <span className="bg-red-50 text-red-600 text-xs px-2 py-1 rounded-full font-medium flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> Obligatorio
                  </span>
                )}
              </div>
              
              <p className="text-slate-600 text-sm mb-4">{doc.description}</p>
              
              <button 
                onClick={() => toggleExpand(doc.id)}
                className="w-full flex items-center justify-between text-sm font-medium text-blue-600 hover:text-blue-700 bg-blue-50 p-2 rounded-lg transition-colors"
              >
                {expandedId === doc.id ? 'Ocultar detalles' : 'Ver requisitos y detalles'}
                {expandedId === doc.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {expandedId === doc.id && (
                <div className="mt-4 pt-4 border-t border-slate-100 animate-in fade-in slide-in-from-top-2 duration-200">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Pasos y Detalles</h4>
                  <ul className="space-y-2">
                    {doc.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentTracker;