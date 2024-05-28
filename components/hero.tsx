import { Image } from '@nextui-org/image';
import { subtitle, title } from './common/primitives';
import { Link } from '@nextui-org/link';
import { Code } from '@nextui-org/code';

const Hero = () => {
  return (
    <div className="flex flex-col space-y-8 sm:w-3/4">
      <Image
        isZoomed
        width={150}
        alt="NextUI Fruit Image with Zoom"
        src="/images/profile.jpeg"
      />
      <div className="flex flex-col">
        <h1 className={title()}>Utkarsh Kumar Sahu</h1>
        <h3 className={subtitle()}>Data Scientist</h3>
      </div>
      <div>
        <p>
          
        I am a passionate Data Scientist and Deep Learning Engineer with a strong foundation in machine learning, artificial intelligence, and advanced modeling techniques. My experience spans across developing and deploying sophisticated AI solutions, optimizing complex systems, and implementing state-of-the-art models in domains such as object detection, time series analysis, and natural language processing. I have a deep understanding of tools and frameworks like TensorFlow, PyTorch, and OpenCV, and have worked extensively with Docker, Kubernetes, and AWS for efficient deployment. My work also includes hands-on experience with large language models and generative adversarial networks, demonstrating my versatility and commitment to pushing the boundaries of technology.
        </p>
        <br />
        <p className="hidden sm:block">
          I am a team player with strong communication and collaboration skills.
          I am passionate about using technology to solve real-world problems.
        </p>
      </div>
      <div className="flex gap-4">
        <Link isExternal href="/resume.pdf">
          <Code size="md">!pip install @resume</Code>
        </Link>
        <Link isExternal href="mailto:utkarsh.bhuiit@gmail.com">
          <Code size="md">$ python mail</Code>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
