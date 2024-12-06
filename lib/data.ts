import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import lifebook from "@/public/Lifebook.jpg";
import todolist from "@/public/todolist.jpg";
import cards from "@/public/cards.jpg";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "SiliconArt Sp. Z O.O. Fullstack Developer",
        location: "Poland, Warsaw",
        description:
            "Implemented state management with Redux and RTK Query for efficient data handling. " +
            "Collaborating with teams to design, develop, and deploy full-stack applications.",
        icon: React.createElement(FaReact),
        date: "2024 - present",
    },
    {
        title: "X-IBIS SP. Z O.O. Fullstack Developer",
        location: "Poland, Warsaw",
        description:
            "Developed dynamic web applications with React and Node.js. " +
            "Implemented state management with Redux and RTK Query for efficient data handling",
        icon: React.createElement(CgWorkAlt),
        date: "2022 - 2024",
    },
    {
        title: "Graduated bootcamp",
        location: "Poland, Warsaw",
        description:
            "Completed comprehensive training in frontend development, focusing on practical project-based learning.",
        icon: React.createElement(LuGraduationCap),
        date: "2021",
    },


] as const;

export const projectsData = [
    {
        title: "Cards",
        description:
            "The project involves the idea of teaching the English language through flashcards with sentences.",
        tags: ["React","Vite","Redux","TypeScript","Radix","Storybook"],
        imageUrl: cards,
        link:"https://cards-silk-five-85.vercel.app/",
    },
    {
        title: "Lifebook:",
        description:
            "The project is based on the idea of a social network with the implementation of basic functionality and interaction with the server.",
        tags: ["React","Redux","TypeScript"],
        imageUrl: lifebook,
        link:"https://bogdan-design.github.io/lifebook/",
    },
    {
        title: "Todolist",
        description:
            "The project is an enhanced to-do list with error validation, registration, and the ability to add and delete tasks through a server.",
        tags: ["React", "TypeScript","Redux","RTK","Formik","Material UI"],
        imageUrl: todolist,
        link:"https://bogdan-design.github.io/TodoList/",
    },

] as const;

export const skillsData = [
    "Node.js",
    "Express",
    "Nest.js",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "HTML",
    "CSS",
    "Sass",
    "Git",
    "React-hook-form",
    "Formik",
    "Redux",
    "RTK",
    "RTK Query",
    "REST API",
    "Docker",
    "Jest",
    "Storybook",
    "TDD",
    "Material-UI",
    "Radix",
    "Headless Ui",
    "Styled-Component",
    "Postman",
    "Swagger",
    "Figma",
    "Webpack",
    "Vite"
] as const;