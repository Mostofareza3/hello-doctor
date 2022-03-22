import { Paper, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import img1 from '../../../images/people-1.png';
import img2 from '../../../images/people-2.png';
import img3 from '../../../images/people-3.png';

const TestimonialContainer = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 50px ;
`;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 50px ;

`;
const TestimonialItem = styled.div`
    width: 400px;
    /* height: 500px; */
    padding: 15px;
    text-align:  left;
`;
const P = styled.p`
    font-size: 20px;
    font-weight: 200;
`;
const TestimonialImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
const Testimonial = () => {
    return (
        <TestimonialContainer>
            <Typography variant="h3">
                Our Happy Client Says
            </Typography>
            <Wrapper>
                <TestimonialItem>
                    <Paper elevation={3} sx={{ padding: '20px' }}>
                        <P>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque nulla nemo voluptatum doloribus excepturi eius illo aut ut tempore a iusto sunt, sit dignissimos cum dolores ipsam et inventore amet!
                        </P>

                        <TestimonialImg>
                            <img src={img1} alt="" />
                            <P sx={{ marginLeft: '15px' }}>Kollin Marks</P>
                        </TestimonialImg>
                    </Paper>
                </TestimonialItem>
                <TestimonialItem>
                    <Paper elevation={3} sx={{ padding: '20px' }}>
                        <P>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque nulla nemo voluptatum doloribus excepturi eius illo aut ut tempore a iusto sunt, sit dignissimos cum dolores ipsam et inventore amet!
                        </P>

                        <TestimonialImg>
                            <img src={img2} alt="" />
                            <P sx={{ marginLeft: '15px' }}>Emilly Marks</P>
                        </TestimonialImg>
                    </Paper>
                </TestimonialItem>
                <TestimonialItem>
                    <Paper elevation={3} sx={{ padding: '20px' }}>
                        <P>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque nulla nemo voluptatum doloribus excepturi eius illo aut ut tempore a iusto sunt, sit dignissimos cum dolores ipsam et inventore amet!
                        </P>

                        <TestimonialImg>
                            <img src={img3} alt="" />
                            <P sx={{ marginLeft: '15px' }}>Kollin Marks</P>
                        </TestimonialImg>
                    </Paper>
                </TestimonialItem>

            </Wrapper>
        </TestimonialContainer>
    );
};

export default Testimonial;