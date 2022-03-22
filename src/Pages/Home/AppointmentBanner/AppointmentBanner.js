import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 50px 0px ;
    height: 80vh ;
    padding: 0px 50px ;
`;

const Card = styled.div`
    height: 500px ;
    width: 300px ;
    border: 1px solid cyan ;
    padding:20px ;
    box-shadow: 5px 5px 5px gray ;
    border-radius: 10px ;
`;
const Image = styled.img`
    width: 100% ;
    height: 250px ;
`;

const H1 = styled.p`
    font-size: 40px;
    font-weight: 600
    margin-bottom: -30px ;
`;

const AppointmentBanner = () => {
    return (
        <>
            <H1>Our Facilities</H1>
            <Wrapper>
                <Card>
                    <div>
                        <Image src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
                    </div>
                    <div>
                        <h4>World Leading Cadalogist</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat qui eaque reiciendis magni pariatur ea corporis vero, voluptatem iure. Aperiam vel, itaque debitis voluptatem velit labore fuga fugit sapiente beatae?</p>
                    </div>
                </Card>
                <Card>
                    <div>
                        <Image src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
                    </div>
                    <div>
                        <h4>World Leading Cadalogist</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat qui eaque reiciendis magni pariatur ea corporis vero, voluptatem iure. Aperiam vel, itaque debitis voluptatem velit labore fuga fugit sapiente beatae?</p>
                    </div>
                </Card>
                <Card>
                    <div>
                        <Image src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
                    </div>
                    <div>
                        <h4>World Leading Cadalogist</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat qui eaque reiciendis magni pariatur ea corporis vero, voluptatem iure. Aperiam vel, itaque debitis voluptatem velit labore fuga fugit sapiente beatae?</p>
                    </div>
                </Card>
            </Wrapper>
        </>
    );
};

export default AppointmentBanner;