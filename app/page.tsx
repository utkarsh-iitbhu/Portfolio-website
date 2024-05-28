import { Image } from '@nextui-org/image';
import Experience from '@/components/experience/experience';
import { Spacer } from '@nextui-org/spacer';
import Marquee from 'react-fast-marquee';
import { skills } from '@/constants/data';
import Education from '@/components/education';
import ProjectsSection from '@/components/projects/project';
import Hero from '@/components/hero';

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Spacer y={24} />
      <Marquee speed={75}>
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex justify-center items-center gap-2 mr-8"
          >
            <div className="bg-white rounded-2xl w-12 h-12 flex items-center justify-center">
              <Image
                src={skill.img}
                alt={skill.name}
                width={skill.id === 4 ? 18 : 40}
                height={40}
              />
            </div>
            <h1 className="text-lg font-semibold">{skill.name}</h1>
          </div>
        ))}
      </Marquee>
      <Spacer y={24} />
      <Experience />
      <Spacer y={24} />
      <ProjectsSection />
      <Spacer y={24} />
      <Education />
      <Spacer y={10} />
    </div>
  );
}
