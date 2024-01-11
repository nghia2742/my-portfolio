import Link from "next/link";
import { GithubIcon, GmailIcon, LinkedinIcon } from "./IconSVG";

export const Intro = () => {
    return (
        <div className="flex flex-col items-center" data-aos="fade-in">
            <div className="neumorphism w-full h-fit p-6 rounded-md mb-10 text-justify">
            Passionate and driven professional with a robust background in web development, aspiring to apply expertise in Fullstack development. Committed to ongoing learning and evolution within the dynamic tech realm. Goal-oriented to deliver innovative solutions, expand skill sets, and thrive in a collaborative team environment.
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
