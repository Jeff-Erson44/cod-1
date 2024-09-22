import { CursorIcon } from '../CursorIcone/CursorIcone';
import './_Cursor.scss';

type CursorProps = {
    name: string;
    color: string;
    border: string;
    iconColor: string; 
};

export const Cursor = ({ name, color, border, iconColor }: CursorProps) => {
return (
    <div className='container__cursor'>
        <CursorIcon 
            color={iconColor}
        />
        <div className="container__cursor__text" style={{ background: color, border: `2px solid ${border}` }}>
            <p>@{name}</p>
        </div>
    </div>
    )
};
