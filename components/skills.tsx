'use client'
import React from 'react';
import {SectionHeading} from "@/components/section-heading";
import {useSectionInView} from "@/lib/hooks";
import {skillsData} from "@/lib/data";
import {motion} from "framer-motion";

const fadeInAnimationsVariants = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * i
        }
    })
}

export const Skills = () => {
    const {ref} = useSectionInView({sectionName: 'Skills', threshold: 0.75})
    return (
        <section ref={ref} id='skills' className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
            <SectionHeading>My Skills</SectionHeading>
            <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'
            >
                {skillsData.map((s, i) => (
                    <motion.li className='bg-white border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80'
                               key={i}
                               variants={fadeInAnimationsVariants}
                               initial='initial'
                               whileInView='animate'
                               viewport={{
                                   once: true
                               }}
                               custom={i}
                    >
                        {s}
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};
