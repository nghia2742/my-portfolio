import { ProjectItem } from './ProjectItem';
import FurnitureImage from '@/app/assets/furniture.png';
import ChatmeowImage from '@/app/assets/chatmeow.png';

const projectList = [
    {
        id: 1,
        name: 'Furniano',
        url: 'https://furniano.vercel.app',
        image: FurnitureImage,
        desc: "This furniture web project is organized on both backend and frontend. Backend code follows the MVC model, connecting to MongoDB, while the frontend utilizes UI libraries like Tailwind and DaisyUI for efficiency. Features include registration, login, Oauth2, product display through APIs, product filtering, shopping cart management, wishlists, and order payment processing. It focuses on optimizing the interface and ensuring compatibility with different devices.",
        res: '',
        tech: "NextJS, ExpressJS, Tailwind, DaisyUI, Redux Toolkit, Next-auth, MongoDB.",
    },
    {
        id: 2,
        name: 'Chat Meow',
        url: 'https://chat.meowtech.vn',
        image: ChatmeowImage,
        desc: 'This project employs generative AI, specifically ChatGPT, to deliver intelligent responses to users. The primary objective is to furnish a welcoming, user-friendly, and efficient interface and interaction via distinct characters within the space.',
        res: 'Included designing and implementing UX/UI, managing frontend logic, designing databases, and creating APIs to manage client-side requests. Additionally, actively engaged in code reviews, debugging, and issue resolution to uphold stringent source code standards and ensure system stability.',
        tech: "Laravel, MySQL, Booststrap, Jquery, ChatGPT.",
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
