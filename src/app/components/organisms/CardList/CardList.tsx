import { StickyStack } from '../../molecules/StickyStack/StickyStack'
import './_CardList.scss'


export const CardList = () =>{
    return(
        <StickyStack>
            <div style={{ backgroundColor: 'lightcoral' }}>
                <h1>Section 1</h1>
            </div>
            <div style={{ backgroundColor: 'lightblue' }}>
                <h1>Section 2</h1>
            </div>
            <div style={{ backgroundColor: 'lightgreen' }}>
                <h1>Section 3</h1>
            </div>
        </StickyStack>
    )
}