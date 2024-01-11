'use client';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Avatar } from './components/Avatar';
import {
    DotIcon,
    ExternalLinkIcon,
    GeometricIcon,
    SquareIcon,
    TriangleIcon,
} from './components/IconSVG';
import { Intro } from './components/Intro';
import { Navbar } from './components/Navbar';
import { Skills } from './components/Skills';
import { Techs } from './components/Techs';
import { TimelineExp } from './components/TimelineExp';
import Link from 'next/link';
import { Great_Vibes } from 'next/font/google';
import { Projects } from './components/Projects';

const great_vibes = Great_Vibes({ weight: '400', subsets: ['latin'] });

export default function Home() {
    useEffect(() => {
        Aos.init({ duration: 1500, once: true });
    }, []);
    return (
        <main className="lg:flex h-fit">
            <section className="lg:sticky top-0 left-0 p-16 pt-24 lg:p-10 lg:w-2/5 lg:h-screen bg-blue flex flex-col items-center justify-center">
                <Avatar />
                <h1
                    className={`text-5xl font-bold text-center ${great_vibes.className}`}
                >
                    Nghia Ngo
                </h1>

                <h1 className="text-3xl font-bold text-center my-6  bg-clip-text text-transparent bg-gradient-to-bl from-30% from-purple-500 via-blue-500 to-pink-500 hover:from-pink-500 hover:via-blue-500 hover:to-purple-500 select-none">
                    Fullstack Web
                </h1>

                <Link
                    href={'https://www.cakeresume.com/nghia-trong-ngo'}
                    target="_blank"
                    className="btn btn-sm btn-outline btn-primary"
                >
                    <ExternalLinkIcon />
                    <span>My CV</span>
                </Link>
            </section>
            <section className="lg:w-3/5">
                <Navbar />

                {/* Wrap primary content */}
                <div className="p-10">
                    {/* INTRODUCE */}
                    <div className="mb-24">
                        <h1 className="antialiased text-3xl font-bold mb-5 flex gap-5 items-center">
                            <TriangleIcon />
                            Introduce
                        </h1>
                        <Intro />
                    </div>

                    {/* EXPERIENCE */}
                    <div className="mb-24">
                        <h1 className="antialiased text-3xl font-bold mb-5 flex gap-5 items-center">
                            <SquareIcon />
                            Experience
                        </h1>
                        <div className="mt-10">
                            <TimelineExp />
                        </div>
                    </div>

                    {/* SKILLS */}
                    <div className="mb-24">
                        <h1 className="antialiased text-3xl font-bold mb-5 flex gap-5 items-center">
                            <DotIcon />
                            Skills
                        </h1>
                        <h3 className="mb-10 font-mono">
                            Currently, I am working on...
                        </h3>
                        <div className="mb-10">
                            <Skills />
                        </div>
                        <h3 className="mb-10 font-mono">
                            And, I am proficient on...
                        </h3>
                        <div className="mb-10">
                            <Techs />
                        </div>
                    </div>

                    {/* PROJECTS */}
                    <div className="mb-24">
                        <h1 className="antialiased text-3xl font-bold mb-5 flex gap-5 items-center">
                            <GeometricIcon />
                            Projects
                        </h1>
                        <div className="mt-10">
                            <Projects />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
