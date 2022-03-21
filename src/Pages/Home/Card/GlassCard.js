import React from 'react';
// import profile from './images/ashutosh.png';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';

const Container = styled(animated.div)`
/* display: inline-block;
 */
/* display: flex; */
padding: 3em;
background: #C7D2FE66;
border-radius: 10px;
margin: 10px;
z-index: 1;
position: relative;
backdrop-filter: blur(10px);
border: 2px solid transparent;
background-clip: border-box;
cursor: pointer;
height: 350px;
`;

const StyledImg = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 20px;
`;

const StyledH1 = styled.h3`
    line-height: 1.5;
    letter-spacing: 1.5;
    font-family: "Gilroy";
`;

const StyledH3 = styled.p`
    /* line-height: 1.5; */
    letter-spacing: 1.15;
    font-family: "Gilroy";
    font-size: 20px;
`;

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(900px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const GlassCard = (service) => {
    const { name, description, img } = service.service;
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: config.default }))
    return (
        <Container
            onMouseMove={({ clientX: x, clientY: y }) => (set({ xys: calc(x, y) }))}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{
                transform: props.xys.interpolate(trans)
            }}
        >
            <StyledImg src={img} />
            <StyledH1>{name}</StyledH1>
            <StyledH3>{description}</StyledH3>
        </Container>
    );
}

export default GlassCard;