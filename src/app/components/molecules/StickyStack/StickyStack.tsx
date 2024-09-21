import { ReactNode } from 'react'
import './_StickyStack.scss'
import React from 'react';

type StickyStackProps = {
    children : ReactNode;

}

export const StickyStack: React.FC<StickyStackProps> = ({children}) => {
    return (
        <div className='container__stickyStack'>
            {React.Children.map(children, (child) => (
                <div className="container__stickyStack--element" >
                    {child}
                </div>
            ))}
        </div>
    )
}