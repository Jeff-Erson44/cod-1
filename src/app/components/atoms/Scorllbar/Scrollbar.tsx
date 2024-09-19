'use client'
import React, { useEffect, useState } from "react";
import './_Scrollbar.scss';

export const Scrollbar = () => {
    const [scrollWidth, setScrollWidth] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollProgress = (scrollTop / scrollHeight) * 100;
            setScrollWidth(scrollProgress);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="scrollbar">
            <div className="scrollbar_progress" style={{ width: `${scrollWidth}%` }} />
        </div>
    );
}
