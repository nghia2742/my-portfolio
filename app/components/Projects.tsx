import { ProjectItem } from './ProjectItem';
import FurnitureImage from '@/app/assets/furniture.png';
import ChatmeowImage from '@/app/assets/chatmeow.png';

const projectList = [
    {
        id: 1,
        name: 'Furniture',
        url: 'https://furniture-store-ntn.vercel.app',
        image: FurnitureImage,
        desc: 'This is a personal project. I am focused on using ReactJS, Redux Toolkit to create UX/UI.',
    },
    {
        id: 2,
        name: 'Chat Meow',
        url: 'https://chat.meowtech.vn',
        image: ChatmeowImage,
        desc: "This is a company's project. Using the Laravel framework, primarily. My assignment guaranteed stable, rapid, and effective responses from API ChatGPT. I also designed the UI task for this chat platform.",
    },
];

export const Projects = () => {
    return (
        <div>
            {projectList.map((project) => (
                <ProjectItem key={project.id} project={project} />
            ))}
        </div>
    );
};
