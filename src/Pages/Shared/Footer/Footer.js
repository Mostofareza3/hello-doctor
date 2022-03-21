import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Room, Twitter } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
// import { mobile } from "../responsive";
import background from '../../../images/footer-bg.png';

const Container = styled.div`
  display: flex;
  text-align: left;
  background: url(${background});
  margin-top: 100px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;

`;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`; 
const Payment = styled.img`
width: 50%;
`;

const Footer = () => {
    return (
        <Container>
      <Left>
        <Logo> Doctors Portal</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt id
          maiores vel accusantium nesciunt mollitia natus quam eligendi adipisci
          doloribus!
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <LinkedIn />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title> Important Links </Title>
        <List>
          <ListItem>Emergency Dental Care</ListItem>
          <ListItem>Checkup</ListItem>
          <ListItem>Surgery</ListItem>
          <ListItem>Dental Care</ListItem>
          <ListItem>Doctors List</ListItem>
          <ListItem>FAQ</ListItem>
          <ListItem>Baby Care</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>

          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight: "10px"}}/> 123 pachlish , chattogram , Bangladesh. 
          </ContactItem>
          <ContactItem>
             <Phone style={{marginRight: "10px"}}/> +01874438160
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight: "10px"}}/> mostofa.reza3@gmail.com
          </ContactItem>

          <Payment src="https://i.ibb.co/tZVmMzQ/Payment-Options.jpg"/>
      </Right>
    </Container>
    );
};

export default Footer;