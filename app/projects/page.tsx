import { subtitle, title } from '@/components/common/primitives';
import ProjectCard from '@/components/projects/projectCard';
import { projects } from '@/constants/data';
import { Card, CardBody } from '@nextui-org/card';
import { Spacer } from '@nextui-org/spacer';
import { Tabs, Tab } from '@nextui-org/tabs';

export default function ProjectPage() {
  return (
    <div className="flex flex-col space-y-5 w-full">
      <h1 className={title()}>My Works</h1>
      <h3 className={subtitle()}>
        A showcase of my work, that highlights my skillset and curiosity.
      </h3>
      <Spacer y={8} />
      {/* <div className="flex w-full flex-col">
        <Tabs aria-label="Options">
          <Tab key="photos" title="Photos">
            <Card>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="music" title="Music">
            <Card>
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="videos" title="Videos">
            <Card>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div> */}
      <Spacer y={8} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
