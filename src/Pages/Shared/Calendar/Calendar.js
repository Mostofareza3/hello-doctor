import React from 'react';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import styled from 'styled-components';
import './Calender.css';

const Wrapper = styled.div`
    height: 100%;
`;

const Calendar = ({ date, setDate }) => {

    return (
        <Wrapper>
            <LocalizationProvider  dateAdapter={AdapterDateFns}>
            <StaticDatePicker
                className="calendar"
                displayStaticWrapperAs="desktop"
                value={date}
                onChange={(newValue) => {
                    setDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
        </Wrapper>
    );
};

export default Calendar;