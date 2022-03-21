import { Paper, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import img1 from '../../../images/people-1.png';

const OurBlogsContainer = styled.div`
    height: 100vh;
    width: 100vw;
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
`;
const BlogItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* margin-left: 20px; */
    margin-top: 30px;
`;
const BlogItem = styled.div`
    margin-left: 20px;
    height: 500px;
    width: 300px;
    .blog-item{
        padding: 20px;
    }
`;
const BlogWriter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; \
    margin-bottom: 15px;
    .name{
        margin-left: 15px;
    }
`;

const OurBlogs = () => {
    return (
        <OurBlogsContainer>
            <Typography variant="h4">Our Blog</Typography>
            <Typography variant="h2">From Our News</Typography>
            <BlogItemContainer>
                <BlogItem>
                    <Paper elevation={3} className="blog-item">
                        <BlogWriter>
                            <img src={img1} alt="" />
                            <Typography className="name" variant='h5'>Lolly small</Typography>
                        </BlogWriter>
                        <Typography variant="body2" sx={{ fontSize: '20px' }}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque voluptas recusandae at minima praesentium sit, laborum odio libero a debitis similique, provident ullam neque maiores sapiente nulla magni doloremque molestiae.</Typography>
                        <NavLink to="/news"> learn more... </NavLink>
                    </Paper>
                </BlogItem>
                <BlogItem>
                    <Paper elevation={3} className="blog-item">
                        <BlogWriter>
                            <img src={img1} alt="" />
                            <Typography className="name" variant='h5'>Lolly small</Typography>
                        </BlogWriter>
                        <Typography variant="body2" sx={{ fontSize: '20px' }}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque voluptas recusandae at minima praesentium sit, laborum odio libero a debitis similique, provident ullam neque maiores sapiente nulla magni doloremque molestiae.</Typography>
                        <NavLink to="/news"> learn more... </NavLink>
                    </Paper>
                </BlogItem>
                <BlogItem>
                    <Paper elevation={3} className="blog-item">
                        <BlogWriter>
                            <img src={img1} alt="" />
                            <Typography className="name" variant='h5'>Lolly small</Typography>
                        </BlogWriter>
                        <Typography variant="body2" sx={{ fontSize: '20px' }}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque voluptas recusandae at minima praesentium sit, laborum odio libero a debitis similique, provident ullam neque maiores sapiente nulla magni doloremque molestiae.</Typography>
                        <NavLink to="/news"> learn more... </NavLink>
                    </Paper>
                </BlogItem>

            </BlogItemContainer>
        </OurBlogsContainer>
    );
};

export default OurBlogs;