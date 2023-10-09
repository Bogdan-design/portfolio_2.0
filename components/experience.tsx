'use client'
import React, {Fragment} from 'react';
import {SectionHeading} from "@/components/section-heading";
import {useSectionInView} from "@/lib/hooks";

import {experiencesData} from "@/lib/data";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const Experience = () => {
    const {ref} = useSectionInView({sectionName: 'Experience', threshold: 0.75})
    return (
        <section id='experience'
                 ref={ref}>
            <SectionHeading>My Experience</SectionHeading>
            <VerticalTimeline lineColor=''>
                {experiencesData.map((e, index) => (
                    <Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{
                                background:'#f3f4f6',
                                boxShadow:'none',
                                border:'1px solid rgba(0,0,0,0.05)',
                                textAlign:'left',
                                padding:'1rem 2rem'
                            }}
                            contentArrowStyle={{
                                borderRight:'0.4rem solid #9ca3af'
                            }}
                            date={e.date}
                            icon={e.icon}
                            iconStyle={{
                                background:'white',
                                fontSize:'1.5rem'
                            }}
                        >
                            <h3 className='font-semibold capitalize'>{e.title}</h3>
                            <p className='font-normal !mt-0'>{e.location}</p>
                            <p className='!mt-1 !font-normal text-gray-700'>{e.description}</p>
                        </VerticalTimelineElement>
                    </Fragment>
                ))}
            </VerticalTimeline>
        </section>
    );
};

