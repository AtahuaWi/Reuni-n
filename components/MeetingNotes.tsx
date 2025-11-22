import React from 'react';
import { Calendar, Users, Megaphone, AlertTriangle } from 'lucide-react';

const MeetingNotes: React.FC = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Next Meeting Card */}
      <div className="col-span-1 md:col-span-2 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 text-white shadow-lg flex flex-col md:flex-row items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <Calendar className="w-6 h-6" /> Próxima Reunión
          </h2>
          <p className="text-blue-100 mb-1">Jueves, 11 de Diciembre</p>
          <p className="text-3xl font-extrabold tracking-tight">7:30 PM</p>
          <p className="text-sm text-blue-200 mt-2">Vía Zoom (Enlace pendiente por correo)</p>
        </div>
        <div className="mt-4 md:mt-0 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 max-w-sm">
          <p className="text-sm">
            <strong>Agenda:</strong> Planificación de sustentaciones para 2025 y revisión de formalización de asesores.
          </p>
        </div>
      </div>

      {/* Graduation vs Ceremony */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h3 className="font-bold text-slate-800 text-lg mb-4 flex items-center gap-2">
          <Megaphone className="w-5 h-5 text-orange-500" />
          Aclaración Importante
        </h3>
        <div className="space-y-4">
            <div className="p-3 bg-slate-50 rounded border-l-4 border-slate-400">
                <h4 className="font-semibold text-slate-700">Fiesta de Egreso</h4>
                <p className="text-sm text-slate-600">Es la ceremonia actual. Se celebra haber terminado los cursos (Egresados).</p>
            </div>
            <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-800">Graduación</h4>
                <p className="text-sm text-blue-700">Es el acto oficial de obtener el grado. Requiere sustentar la tesis y tramitar el diploma.</p>
            </div>
        </div>
      </div>

      {/* Critical Alerts */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h3 className="font-bold text-slate-800 text-lg mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            Puntos Críticos
        </h3>
        <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex gap-2">
                <span className="font-bold text-slate-800 min-w-[80px]">Pagos:</span>
                <span>Se confirmó que el pago a asesores está aprobado. No hay excusa para que no asesoren.</span>
            </li>
            <li className="flex gap-2">
                <span className="font-bold text-slate-800 min-w-[80px]">Gustavo:</span>
                <span>Ya no trabaja en la universidad. El apoyo actual es Eric y el Dr. Bullón.</span>
            </li>
            <li className="flex gap-2">
                <span className="font-bold text-slate-800 min-w-[80px]">Fotos:</span>
                <span>La entrega de fotos para el Certificado de Notas es <strong>presencial</strong> (Físico).</span>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default MeetingNotes;