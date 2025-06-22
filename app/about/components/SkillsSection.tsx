// components/about/SkillsSection.tsx
export default function SkillsSection() {
  const skills = [
    { name: 'Flexibility', value: 90 },
    { name: 'Organization', value: 80 },
    { name: 'Customer Satisfaction', value: 95 },
    { name: 'Communication', value: 85 },
  ];
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Professional Skills</h2>
        <div className="mt-8 space-y-6 max-w-md mx-auto">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-gray-700">
                <span>{skill.name}</span>
                <span>{skill.value}%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-pink-500" style={{ width: `${skill.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
