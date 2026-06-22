import { CodeXml, Monitor, Rocket } from 'lucide-react';
import type { JSX } from 'react';

export type ListDataType = {
  heading: string;
  content: string;
  icon: JSX.Element;
};

export const listData: ListDataType[] = [
  {
    heading: 'Clean Code',
    content:
      'Readable, maintainable, well-structured code is a priority on every project',
    icon: <CodeXml />,
  },
  {
    heading: 'Full-Stack Thinking',
    content: 'Comfortable owning both frontend UI and backend API in one go.',
    icon: <Monitor />,
  },
  {
    heading: 'Always Learning',
    content:
      'Constantly exploring new tools, frameworks, and patterns to grow.',
    icon: <Rocket />,
  },
];

export const aboutData = [
  "I'm a Full-Stack Developer with a strong passion for building modern web applications. I enjoy working across the entire stack — from designing REST APIs in Node.js and Express to crafting polished, responsive UIs with React and Next.js.",
  'Currently deepening my skills in systems-level programming, Linux environments, and scalable backend architecture. I thrive in fast-moving projects where clean code and thoughtful UX matter.',
  "When I'm not coding, I'm exploring new tools, tinkering with my Linux dev environment, or working through side projects that push my skills forward.",
];

export function AboutList() {
  return (
    <div className='flex flex-col gap-5'>
      {listData.map((data) => {
        return (
          <div
            key={data.content}
            className='flex flex-col gap-2 border-2 p-5 rounded-lg'>
            <div className='flex items-center'>
              <span className='p-3 bg-accent border-2xl rounded-2xl'>
                {data.icon}
              </span>
              <h3 className='font-bold text-2xl px-3'>{data.heading}</h3>
            </div>
            <p className=''>{data.content}</p>
          </div>
        );
      })}
    </div>
  );
}

const About = (props: React.HtmlHTMLAttributes<HTMLElement>) => {
  return (
    <section
      className='section p-5 md:p-2'
      {...props}>
      <h3 className='heading-accent'>About</h3>
      <div className='md:flex flex-row gap-10'>
        <div className='flex flex-col items-center justify-between gap-5 flex-1 px-5 sm:py-5 md:py-20'>
          {aboutData.map((data) => (
            <p
              className=''
              key={data}>
              {data}
            </p>
          ))}
        </div>
        <div className='flex flex-col gap-5 flex-1'>
          <AboutList />
        </div>
      </div>
    </section>
  );
};

export default About;
