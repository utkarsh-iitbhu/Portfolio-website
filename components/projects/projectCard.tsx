'use client';

import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { Image } from '@nextui-org/image';
import { Link } from '@nextui-org/link';
import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  img: string;
  link: string;
  label: string;
}

// ... (import statements)

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <Link isExternal href={project.link}>
      <Card
        className="max-w-sm cursor-pointer relative"
        isHoverable
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <CardHeader className="flex flex-col gap-3 items-start px-5">
          <Image
            alt="nextui logo"
            height={50}
            radius="sm"
            src={project.img}
            width={60}
          />
          <div className="flex flex-col">
            <p className="text-md font-semibold">{project.title}</p>
          </div>
        </CardHeader>
        <CardBody>
          <p>{project.description}</p>
        </CardBody>
        <Divider />
        <CardFooter className="text-sm p-5">{project.label}</CardFooter>
        {isHovered && (
          <div className="absolute top-0 left-0 w-full h-full transition-opacity duration-100">
            <Image
              alt="project image"
              src={project.img}
              width={400}
              height={400}
              className="opacity-70"
            />
          </div>
        )}
      </Card>
    </Link>
  );
};

export default ProjectCard;
