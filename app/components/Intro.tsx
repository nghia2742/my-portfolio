import Link from "next/link";
import { GithubIcon, GmailIcon, LinkedinIcon } from "./IconSVG";

export const Intro = () => {
    return (
        <div className="flex flex-col items-center" data-aos="zoom-in">
            <div className="neumorphism w-full h-fit p-6 rounded-md text-justify mb-10">
                I am a Web Developer focused on Node.js and React.js, boasting
                over 6 months of hands-on experience. I am highly responsible
                and committed to my work, constantly seeking personal growth. My
                goal is to contribute my skills in backend development and user
                interface design to drive innovation in new projects.
            </div>
            <div className="flex gap-4 w-full">
                <Link href={'https://github.com/nghia2742'} target="_blank" className="btn btn-ghost neumorphism_2nd p-2 rounded-full aspect-square flex justify-center items-center">
                    <GithubIcon/>
                </Link>
                <Link href={'mailto:nghia.nt2704@gmail.com'} target="_blank" className="btn btn-ghost neumorphism_2nd p-2 rounded-full aspect-square flex justify-center items-center">
                    <GmailIcon/>
                </Link>
                <Link href={'https://www.linkedin.com/in/ngotrongnghia'} target="_blank" className="btn btn-ghost neumorphism_2nd p-2 rounded-full aspect-square flex justify-center items-center">
                    <LinkedinIcon/>
                </Link>
            </div>
        </div>
    );
};
