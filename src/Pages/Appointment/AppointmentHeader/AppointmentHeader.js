import { Grid } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import chair from '../../../images/chair.png';
import Calendar from '../../Shared/Calendar/Calendar';

const Container = styled.div`
    padding:50px ;

`;

const AppointmentHeader = ({ date, setDate }) => {

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ backgroundColor: 'gray' }} item xs={12} md={6}>
                    <Calendar date={date} setDate={setDate}></Calendar>
                </Grid>
                <Grid sx={{ backgroundColor: 'gray', padding: '10px' }} item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;