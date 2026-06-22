'use client';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

const Home: React.FC = () => {
  return (
    <main className='sm:mx-5 md:mx-10 lg:mx-20'>
      <Hero id='/' />
      <About id='about' />
      <Projects id='projects' />
      <Skills id='skills' />
      <Contact id='contact' />
    </main>
  );
};

export default Home;
