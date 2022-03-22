import { Grid } from '@mui/material';
import React from 'react';
import styled from 'styled-components';


const ImageWrapper = styled.div`
    width: 300px ;
    height: 400px ;
    margin-bottom: 30px ;
    background-color: lightblue ;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column ;
`;
const Image = styled.img`
    height:100% ;
    width: 100% ;
    border: 2px solid purple ;
`;

const Doctor = ({ doctor }) => {
    const { name, image } = doctor;
    return (
        <>
            <Grid item xs={12} sm={6} md={3}>
                <ImageWrapper>
                    <Image
                        style={{ width: '200px', height: '200px' }}
                        src={`data:image/png;base64,${image}`} alt="" />
                    <h3>{name}</h3>
                </ImageWrapper>
            </Grid>

        </>
    );
};

export default Doctor;