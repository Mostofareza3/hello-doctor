import { Container, Input, TextareaAutosize, TextField, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import background from '../../../images/chair.png'

const ContactContainer = styled.div`
    height: 90vh;
    /* width: 100vw; */
    padding: 30px;
    /* background-image: url(${background}); */
    /* background-image: url(${background}), linear-gradient(#000, #000); */
    /* opacity: 0.3; */
    background-image:
    linear-gradient(to bottom, rgba(0, 0, 0, 0.586), rgba(0, 0, 0, 0.586)),
    url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Form = styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .input-field{
        background-color: white;
        margin-bottom: 15px;
        border-radius: 5px;
    }
`;
const Button= styled.button`
    height: 40px;
    width: 120px;
    border: none;
    background-color: cyan;
    border-radius: 5px;

`;

const ContactUs = () => {
    return (
        <>
            <ContactContainer>
                <Typography variant="h4">Contact US</Typography>
                <Typography variant="h2">Always Contact With Us</Typography>
                <Form>
                    <TextField className="input-field" placeholder="subject" fullWidth/>
                    <TextField placeholder="email" className="input-field" fullWidth/>
                    <TextField placeholder="message" className="input-field" fullWidth/>
                    <Button>Submit</Button>
                </Form>
            </ContactContainer>
        </>
    );
};

export default ContactUs;