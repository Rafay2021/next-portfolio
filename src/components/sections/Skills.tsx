export const skillsData = [
  { heading: 'React', content: 'FRONTEND' },
  { heading: 'Next.js', content: 'FRAMEWORK' },
  { heading: 'Node.js', content: 'BACKEND' },
  { heading: 'Express', content: 'BACKEND FRAMEWORK' },
  { heading: 'Postgresql', content: 'DATABASE' },
  { heading: 'Linux / Git', content: 'Dev Tooling' },
];

export function SkillsList() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {skillsData.map((data) => (
        <div
          key={data.heading}
          className='border-2 rounded px-4 py-3'>
          <h3>{data.heading}</h3>
          <p>{data.content}</p>
        </div>
      ))}
    </div>
  );
}

export default function Skills(props: React.HtmlHTMLAttributes<HTMLElement>) {
  return (
    <section
      className='section'
      {...props}>
      <h3 className='heading-accent'>Skills</h3>
      <SkillsList />
    </section>
  );
}
