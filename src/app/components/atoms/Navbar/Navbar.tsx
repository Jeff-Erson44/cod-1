import './_Navbar.scss';
import Image from 'next/image';

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a>La piscine</a>
                </li>
                <li>
                    <a>0%</a>                    
                </li>
                <li>
                    <a>
                        <Image 
                            src="/images/icons/rectangle.png"
                            alt="test"
                            width={54}
                            height={27}
                        />
                    </a>
                </li>
            </ul>
        </nav>
    )
}