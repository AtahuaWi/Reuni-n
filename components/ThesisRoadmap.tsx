import React from 'react';
import { BookOpen, UserCheck, Clock, CheckCircle2 } from 'lucide-react';

const ThesisRoadmap: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Ruta de Tesis y Asesoría</h2>
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
          <p className="text-blue-800 font-medium">
            <span className="font-bold">Objetivo:</span> Formalizar asesores y completar el Plan de Tesis para sustentar.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Case 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-t-green-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <CheckCircle2 size={64} />
          </div>
          <h3 className="text-lg font-bold text-slate-800 mb-2">Caso 1: Listos</h3>
          <p className="text-sm text-slate-500 mb-4 uppercase tracking-wide font-semibold">Prioridad Alta</p>
          <div className="space-y-3 text-slate-600 text-sm">
            <p>• Tesis/Trabajo completado.</p>
            <p>• Ya tienen contacto con asesor.</p>
            <div className="bg-green-50 p-3 rounded-lg text-green-800 mt-4">
              <strong>Acción:</strong> Pasan a revisión (Jurados/Revisores). Tiempo aprox: 15 días para observaciones.
            </div>
          </div>
        </div>

        {/* Case 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-t-amber-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <UserCheck size={64} />
          </div>
          <h3 className="text-lg font-bold text-slate-800 mb-2">Caso 2: En Proceso</h3>
          <p className="text-sm text-slate-500 mb-4 uppercase tracking-wide font-semibold">Regularización</p>
          <div className="space-y-3 text-slate-600 text-sm">
            <p>• Tienen Plan de Tesis avanzado.</p>
            <p>• Falta formalización oficial del asesor.</p>
            <div className="bg-amber-50 p-3 rounded-lg text-amber-800 mt-4">
              <strong>Acción:</strong> La escuela enviará la formalización del asesor en breve. Deben continuar trabajando.
            </div>
          </div>
        </div>

        {/* Case 3 */}
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-t-red-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <BookOpen size={64} />
          </div>
          <h3 className="text-lg font-bold text-slate-800 mb-2">Caso 3: Sin Definir</h3>
          <p className="text-sm text-slate-500 mb-4 uppercase tracking-wide font-semibold">Acción Requerida</p>
          <div className="space-y-3 text-slate-600 text-sm">
            <p>• No tienen Plan de Tesis definido.</p>
            <p>• No tienen asesor asignado.</p>
            <div className="bg-red-50 p-3 rounded-lg text-red-800 mt-4">
              <strong>Acción:</strong> Reenviar solicitud (Anexo 11) urgente a Eric para asignación.
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 text-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5" /> Metodología de Trabajo
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-blue-300 mb-2">Reuniones de Asesoría</h4>
            <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm">
              <li>Formato "Gestión de Proyectos".</li>
              <li>Frecuencia: 1 vez al mes (inicio) o 2 veces (avanzados).</li>
              <li>Días probables: Segundos y cuartos jueves del mes.</li>
              <li>Plataforma: Zoom (se grabará evidencia).</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-300 mb-2">Entregables</h4>
            <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm">
              <li>Diagrama de Gantt del proyecto.</li>
              <li>Avances de capítulos (Marco teórico, metodológico, etc.).</li>
              <li>Uso de plataforma <strong>NEO</strong> para seguimiento.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThesisRoadmap;