import React from 'react';
import styled from 'styled-components';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import treatment from '../../../images/treatment.png'

const Wrapper = styled.div`
    display: flex;
    text-align: left;
    /* align-items: center; */
    justify-content: space-between;
    
`
const LeftContainer = styled.div`
    flex: 1;
`;
const RightContainer = styled.div`
    flex:2;
    /* margin-left: 40px; */
    padding: 50px;
`;
const Img = styled.img`
    height: 500px;
    width: 100%;
`
const Heading = styled.p`
    font-size: 35px;
    font-weight: 400;
`;

const Exceptional = () => {
    return (
        <Container>
            <Wrapper>
            <LeftContainer>
                    <Img src={treatment} alt=""/>
            </LeftContainer>
            <RightContainer>
                    <Heading>Exceptional Dental care here</Heading>
                    <Typography variant="body2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis consequatur vitae velit asperiores ipsum, doloribus explicabo perferendis obcaecati earum, aliquam ex! Similique assumenda deleniti minus numquam veritatis ad minima magni? Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sunt qui debitis natus, voluptatibus, fugit blanditiis sapiente sit maxime quas dicta fugiat laboriosam unde quibusdam quaerat excepturi tempora exercitationem a?</Typography>
            </RightContainer>
        </Wrapper>
        </Container>
    );
};

export default Exceptional;