import { ReactNode } from 'react'
import './_StickyStack.scss'
import React from 'react';

type StickyStackProps = {
    children : ReactNode;
    height?: string 
}

export const StickyStack: React.FC<StickyStackProps> = ({children, height = "100vh"}) => {
    return (
        <div className='container__stickyStack'>
            {React.Children.map(children, (child) => (
                <div className="container__stickyStack--element" style={{ height }}>
                    {child}
                </div>
            ))}
        </div>
    )
}