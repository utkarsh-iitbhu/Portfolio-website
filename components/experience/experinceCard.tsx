import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Chip } from '@nextui-org/chip';
import { Divider } from '@nextui-org/divider';
import { Image } from '@nextui-org/image';
import { Link } from '@nextui-org/link';

interface Experience {
  id: number;
  title: string;
  company: string;
  img: string;
  link: string;
  location: string;
  label: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
}

const ExperienceCard: React.FC<{ experience: Experience }> = ({
  experience,
}) => {
  return (
    <div className="relative h-full">
      <div className="hidden sm:block before:absolute before:left-5 before:top-0 before:w-[1px] before:h-full dark:before:bg-gray-700 before:bg-gray-300 before:flex before:flex-col before:items-center after:absolute after:left-3 after:top-5 after:rounded-full after:w-4 after:h-4 after:bg-neutral-600 after:dark:bg-neutral-400 after:z-10"></div>
      <div
        className={`${experience.id !== 4 ? 'mb-8 sm:mb-24' : 'mb-0'} sm:ml-16`}
      >
        <Card className="p-5">
          <CardHeader className="flex gap-4 items-start">
            <Image
              src={experience.img}
              alt={experience.company}
              width={60}
              height={40}
            />
            <div className="flex justify-between w-full">
              <div>
                <h1 className="text-lg font-semibold">{experience.company}</h1>
                <h3 className="text-sm text-neutral-800 dark:text-neutral-200">
                  {experience.title}
                </h3>
              </div>
              <p className=" text-neutral-800 dark:text-neutral-200">
                {experience.location}
              </p>
            </div>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <p>{experience.description}</p>
            <Link
              isExternal
              className="cursor-pointer"
              href={experience.link}
              showAnchorIcon
            >
              {experience.label}
            </Link>
          </CardBody>
          <CardFooter className="flex flex-col gap-4 justify-start">
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill, index) => (
                <Chip radius="sm" key={index}>
                  {skill}
                </Chip>
              ))}
            </div>
            <Divider />
            <p className="text-sm text-neutral-800 dark:text-neutral-200">
              {experience.startDate} - {experience.endDate}
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ExperienceCard;
