'use client'
import React, {Fragment} from 'react';
import {SectionHeading} from "@/components/section-heading";
import {useSectionInView} from "@/lib/hooks";
import {experiencesData} from "@/lib/data";
import {VerticalTimeline, VerticalTimelineElement,} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {useThemeContext} from "@/context/theme-context";

export const Experience = () => {
    const {ref} = useSectionInView({sectionName: 'Experience', threshold: 0.75})
    const {theme} = useThemeContext()
    return (
        <section id='experience'
                 ref={ref}
                 className='scroll-mt-28 mb-28 sm:mb-40'
        >
            <SectionHeading>My Experience</SectionHeading>
            <VerticalTimeline lineColor=''>
                {experiencesData.map((e, index) => (
                    <Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{
                                background: theme === 'light' ? '#f3f4f6' :'rgba(255,255,255,0.05)',
                                boxShadow:'none',
                                border:'1px solid rgba(0,0,0,0.05)',
                                textAlign:'left',
                                padding:'1rem 2rem'
                            }}
                            contentArrowStyle={{
                                borderRight: theme === 'light' ? '0.4rem solid #9ca3af' : '0.4rem solid rgba(255,255,255,0.05)'
                            }}
                            date={e.date}
                            icon={e.icon}
                            iconStyle={{
                                background: theme === 'light' ?'white' : 'rgba(255,255,255,0.05)',
                                fontSize:'1.5rem'
                            }}
                        >
                            <h3 className='font-semibold capitalize'>{e.title}</h3>
                            <p className='font-normal !mt-0'>{e.location}</p>
                            <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>{e.description}</p>
                        </VerticalTimelineElement>
                    </Fragment>
                ))}
            </VerticalTimeline>
        </section>
    );
};

