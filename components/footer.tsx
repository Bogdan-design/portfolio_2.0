import React from 'react';

export const Footer = () => {
    return (
        <footer className='mb-10 px-4 text-center text-gray-500'>
            <small className='mb-2 block text-xs'>
                &copy; 2023 Bogdan. All rights reserved.
            </small>
            <p className='text-xs'>
                <span>About this website:</span> build with React & Next.js (App router & Server Actions), Typescript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
            </p>
        </footer>
    );
};

