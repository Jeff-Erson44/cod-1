import React from 'react';

type CursorIconProps = {
    color: string; 
};

export const CursorIcon = ({ color }:CursorIconProps) => {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_23_1225)">
            <path d="M3.82543 12L2.08728 0.890365L12 6.21918L6.94181 7.7397L3.82543 12Z" fill={color} />
        </g>
        <defs>
            <filter id="filter0_d_23_1225" x="0.823199" y="0.258523" width="12.4405" height="13.6371" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="0.631858" />
            <feGaussianBlur stdDeviation="0.631858" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23_1225" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23_1225" result="shape" />
            </filter>
        </defs>
        </svg>
    );
};
