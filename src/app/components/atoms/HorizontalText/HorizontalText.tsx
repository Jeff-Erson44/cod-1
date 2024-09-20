import './_HorizontalText.scss'
import Image from 'next/image'

export const HorizontalText = () =>{
    return (
        <div className='container__horizontalText'> 
            <Image 
                src="/images/icons/horiz.svg"
                alt=""
                width={3600}
                height={175}
            />
        </div>
    )
}