export default function StatCard({ icon, label, value, sub, color = 'blue' }) {
  const colorMap = {
    blue: 'from-medical-600 to-medical-700',
    green: 'from-emerald-500 to-emerald-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
    teal: 'from-teal-500 to-teal-600',
    indigo: 'from-indigo-500 to-indigo-600',
  };

  const gradient = colorMap[color] || colorMap.blue;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className={`h-1 bg-gradient-to-r ${gradient}`} />
      <div className="p-5 flex items-start gap-4">
        <div className={`flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${gradient} text-white text-xl shadow-sm flex-shrink-0`}>
          {icon}
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900 leading-none">{value}</p>
          <p className="text-sm font-semibold text-gray-700 mt-0.5">{label}</p>
          {sub && <p className="text-xs text-gray-400 mt-1">{sub}</p>}
        </div>
      </div>
    </div>
  );
}
