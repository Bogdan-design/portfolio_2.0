'use client'
import React from 'react';
import Image from "next/image";
import Photo from '@/public/photo.jpg'
import {motion} from "framer-motion";
import Link from "next/link";
import {BsArrowRight, BsLinkedin} from "react-icons/bs";
import {HiDownload} from "react-icons/hi";
import {FaGithubSquare} from "react-icons/fa";
import {useSectionInView} from "@/lib/hooks";
import {useActiveSectionContext} from "@/context/active-section-context";

export const Intro = () => {
const {ref} = useSectionInView({sectionName:'Home',threshold: 0.5})
    const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext()
    return (
        <section ref={ref} id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{
                            type: 'tween',
                            duration: 0.2,
                        }}
                    >
                        <Image src={Photo}
                               alt='Bogdan portret'
                               width='192'
                               height='192'
                               quality='95'
                               priority={true}
                               className='h-24 w-24 rounded-full border-[0.35rem] object-cover border-white shadow-xl'
                        />
                    </motion.div>
                    <motion.span
                        className='text-2xl absolute bottom-0 right-0'
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{
                            type: 'spring',
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}>
                        👋
                    </motion.span>
                </div>
            </div>
            <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
                      initial={{opacity: 0, y: 100}}
                      animate={{opacity: 1, y: 0}}
            >
                <span className="font-bold">Hello, I'm Bogdan.</span> I'm a{" "}
                <span className="font-bold">developer</span> with{" "}
                <span className="font-bold">3 years</span> of experience. I enjoy
                building <span className="italic">sites & apps</span>. My focus is{" "}
                <span className="underline">React (Next.js)</span>.
            </motion.h1>
            <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
                        initial={{opacity: 0, y: 100}}
                        animate={{opacity: 1, y: 0}}
                        transition={{
                            delay:0.1
                        }}
            >
                <Link href='#contact' className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full
                outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
                      onClick={()=>{
                          setActiveSection('Contact')
                          setTimeOfLastClick(Date.now())
                      }}
                >Contact
                    me here
                    <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/>
                </Link>

                <a href='/CV.pdf' download className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full
                outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'
                >
                    Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/>
                </a>

                <a href="https://www.linkedin.com/in/bohdan-bochkovskyi-6288a2193/" target='_blank' className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full
                focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/80'
                >
                    <BsLinkedin/>
                </a>

                <a href="https://github.com/Bogdan-design" target='_blank' className='group bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full
                focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/80'
                >
                    <FaGithubSquare/>
                </a>
            </motion.div>
        </section>
    );
};