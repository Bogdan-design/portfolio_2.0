import {useInView} from "react-intersection-observer";
import {useActiveSectionContext} from "@/context/active-section-context";
import {useEffect} from "react";
import type {SectionName} from "@/lib/types";

type useSectionInViewProps ={
    sectionName: SectionName
    threshold: number
}

export const useSectionInView = ({sectionName, threshold}:useSectionInViewProps)=>{
    const {ref,inView} = useInView({
        threshold:threshold
    })
    const {setActiveSection,timeOfLastClick}=useActiveSectionContext()

    useEffect(()=>{
        if (inView && Date.now() - timeOfLastClick>1000) {
            setActiveSection(sectionName)
        }
    },[inView,timeOfLastClick])

    return {ref}
}