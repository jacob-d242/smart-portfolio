import react, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    position:relative;
`
const Slider = styled.div`
    position:fixed;
    top:0;
    right:2rem;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    transform: translateY(-50%);
`

const AnchorComponent = () => {
    const ref = useRef(null);
    const hiddenRef = useRef(null);

    return (
        <Container>
            <Slider ref={ref}>
                {
                    [...Array(25)].map((x, id) => {
                        // @ts-ignore
                        return <Link key={id} width={25} height={25} fill='currentColor' className="chain"/>
                    })
                }
                {/*<Anchor height={70} width={70}fill='currentColor'/>*/}
            </Slider>
        </Container>

    )
}

export default AnchorComponent;