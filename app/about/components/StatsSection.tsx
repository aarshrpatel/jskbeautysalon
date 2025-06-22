// components/about/StatsSection.tsx
const stats = [
  { label: 'Years Of Experience', value: '13+' },
  { label: 'Field Experts', value: '20+' },
  { label: 'Co-operate', value: '25+' },
  { label: 'Customers Winner', value: '5,000+' },
];
export default function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="p-8 bg-gray-100 text-center rounded-lg">
            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            <p className="mt-2 text-gray-700">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}