import Image from "next/image"
import LogoMeowTech from '@/app/assets/logo_meowtech.png';

export const TimelineExp = () => {
    return (
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"  >
            <li >
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5 text-primary"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <div className="timeline-start md:text-end mb-10" data-aos="fade-up" data-aos-offset="200">
                    <time className="font-mono italic">Oct 2023</time>
                    <div className="flex gap-5 mt-8"></div>
                </div>
                <hr className="bg-primary "/>
            </li>
            <li>
                <hr className="bg-primary" />
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5 text-primary"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <div className="timeline-end mb-10" data-aos="fade-up" data-aos-delay="300">
                    <time className="font-mono italic">Present</time>
                    <div className="flex gap-5 mt-2">
                        <Image className="w-14 aspect-auto" src={LogoMeowTech} alt="Logo MeowTech"/>
                        <div>
                            <div className="text-lg font-black">MeowTech</div>
                            <p>Software Engineer</p>
                        </div>
                    </div>
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                    <time className="font-mono italic"></time>
                    <div className="text-lg font-black"></div>
                </div>
            </li>
        </ul>
    );
};
