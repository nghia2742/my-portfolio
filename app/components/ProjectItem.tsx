import FurnitureImage from '@/app/assets/furniture.png';
import Link from 'next/link';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface Project {
    id: number;
    name: string;
    url: string;
    image: StaticImageData;
    desc: string;
    res: string;
    tech: string;
}

interface ProjectItemProps {
    project: Project;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
    return (
        <div className="mb-10" data-aos="zoom-in-down">
            <div className="collapse bg-base-200 mb-10">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    {project.name}
                </div>
                <div className="collapse-content text-justify pl-10">
                    <p className='pb-3'><b>Description:</b> {project.desc}</p>
                    {project.res != "" && <p className='pb-3'><b>Responsibilities:</b> {project.res}</p>}
                    <p className='pb-3'><b>Technologies & libraries:</b> {project.tech}</p>
                </div>
            </div>
            <div className="mx-auto lg:w-3/4 mockup-browser border bg-base-300">
                <div className="mockup-browser-toolbar">
                    <Link href={project.url} className="input text-sm leading-7" target="_blank">
                        {project.url}
                    </Link>
                </div>
                <div className="flex items-center justify-center bg-base-200">
                    <Image
                        src={project.image}
                        width={1024}
                        height={1024}
                        alt={project.name}
                    />
                </div>
            </div>
        </div>
    );
};
