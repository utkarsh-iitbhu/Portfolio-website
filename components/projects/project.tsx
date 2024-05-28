import { projects } from '@/constants/data';
import ProjectCard from './projectCard';
import { title } from '../common/primitives';
import { Button } from '@nextui-org/button';
import NextLink from 'next/link';

const ProjectsSection = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex justify-start gap-8 items-center">
        <h1 className={title()}>Notable Projects</h1>
      </div>
      <div className="flex flex-wrap gap-4 sm:gap-8">
        {projects.map((project) => {
          if (project.id <= 3)
            return <ProjectCard project={project} key={project.id} />;
        })}
      </div>
      <Button as={NextLink} href="/projects" className="w-1/2 sm:w-1/4 mx-auto">
        More Projects
      </Button>
    </div>
  );
};

export default ProjectsSection;
