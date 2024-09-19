import './_Heading.scss';

export const Heading = () =>{
    return (
        <section className='container__heading'>
            <h1 className='desktop'>
                Que le plus fort, <br />
                <span>
                    l&apos;emporte!
                </span>
            </h1>
            <h1 className='mobile'>
                Que le <br />plus fort, <br />
                <span>
                    l&apos;emporte!
                </span>
            </h1>
        </section>
    )
}