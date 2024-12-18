'use client'
import React from 'react';
import {SectionHeading} from "@/components/section-heading";
import {motion} from "framer-motion";
import {useSectionInView} from "@/lib/hooks";

export const About = () => {
    const {ref} = useSectionInView({sectionName:'About',threshold: 0.5})

    return (
        <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
                        initial={{opacity: 0, y: 100}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.175}}
                        id='about'
                        ref={ref}
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                After graduating with a degree in{" "}
                <span className="font-medium">Accounting and Finances</span>, I decided to pursue my
                passion for programming. I enrolled in a coding bootcamp and learned{" "}
                <span className="font-medium">fullstack web development</span>.{" "}
                <span className="italic">My favorite part of programming</span> is the
                problem-solving aspect. I <span className="underline">love</span> the
                feeling of finally figuring out a solution to a problem. My core stack
                is{" "}
                <span className="font-medium">
          TypeScript, React, Next.js, Node.js, Exspress, Nest.js, MongoDB
        </span>
                .I am always looking to
                learn new technologies. I am currently looking for a{" "}
                <span className="font-medium">full-time position</span> as a software
                developer.
            </p>

            <p>
                <span className="italic">When I'm not coding</span>, I enjoy playing
                video games, watching movies, and going to the gym. I also enjoy{" "}
                <span className="font-medium">learning new things</span>. I am currently
                learning about{" "}
                <span className="font-medium">history and philosophy</span>. I also like aviation and everything related to airplanes.
            </p>
        </motion.section>
    );
};
