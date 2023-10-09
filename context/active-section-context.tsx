'use client'
import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from 'react';
import type {SectionName} from "@/lib/types";


type ActiveSectionContextProviderProps = {
    children: ReactNode
}
type ActiveSectionContextType = {
    activeSection: SectionName
    timeOfLastClick: number
    setTimeOfLastClick:Dispatch<SetStateAction<number>>
    setActiveSection: Dispatch<SetStateAction<SectionName>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

export const ActiveSectionContextProvider = ({children}: ActiveSectionContextProviderProps) => {
    const [activeSection, setActiveSection] = useState<SectionName>('Home')
    const [timeOfLastClick, setTimeOfLastClick] = useState(0)
    return <ActiveSectionContext.Provider value={{activeSection, setActiveSection,timeOfLastClick, setTimeOfLastClick}}>
        {children}
    </ActiveSectionContext.Provider>
};

export const useActiveSectionContext =()=> {
    const context = useContext(ActiveSectionContext)
    if (!context) {
        throw new Error('useActiveSectionContext must be used within an ActiveSectionContextProvider')
    }
    return context
}
