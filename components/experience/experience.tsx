'use client';

import React, { useRef, useState, useEffect } from 'react';
import ExperienceCard from './experinceCard';
import { title } from '../common/primitives';
import { experience } from '@/constants/data';

const Experience = () => {
  const [stickyTitle, setStickyTitle] = useState(false);
  const titleRef = useRef<HTMLHeadingElement | null>(null); // Initialize with null

  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current) {
        const scrollPosition = window.scrollY;
        const titlePosition = titleRef.current.getBoundingClientRect().top;

        if (titlePosition <= window.innerHeight * 0.5) {
          setStickyTitle(true);
        } else {
          setStickyTitle(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative h-full">
      <div className="grid grid-cols-1 sm:grid-cols-3 justify-between gap-5 relative">
        <div className="h-full relative">
          <h1
            ref={titleRef}
            className={`hidden sm:block ${
              stickyTitle ? 'sticky top-1/3' : ''
            } ${title()}`}
          >
            Work Experience
          </h1>

          {/* Mobile */}
          <h1 className={`${title()} sm:hidden block`}>Work Experience</h1>
        </div>
        <div className="flex flex-col col-span-2">
          {experience.map((experience) => (
            <ExperienceCard experience={experience} key={experience.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
