import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import {DiCssdeck} from "react-icons/di";  
import {FaBars} from "react-icons/fa";
import React, {useEffect, useState} from 'react';
import { useTheme } from "styled-components";
import { Link } from 'react-scroll';
 

const Nav = styled.div`
background-color:${({theme}) => theme.card_light};
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size:1rem;
position: sticky;
top: 0;
z-index: 10;
@media screen and (max-width: 960px){
    transition: 0.8s all ease;
}
`;

const NavContainer = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
height: 60px;
z-index: 1;
width:100%;
padding: 0 24px;
max-width:1200px;
`;

const NavLogo = styled(LinkR)`
width:80%;
padding: 0 6px;
display: flex;
justify-self: flex-start;
cursor:pointer;
text-decoration: none;
align-items: center;
color:${({theme}) => theme.text_primary};
@media screen and (max-width:640px){
    padding: 0 0px;
}
`;

const MobileIcon = styled.div`
display:none;
@media screen and (max-width: 640px) {
display:block;
position:absolute;
top:0;
right:0;
transform: translate(-100%, 50%);
font-size: 1.5rem;
cursor: pointer;
color: ${({theme}) => theme.text_primary};

@media screen and (min-width: 641px){
    opacity:0;
    pointer-events:none;
}
}
`;

const NavItems = styled.ul`
width:100%;
display:flex;
justify-content:center;
align-items:center;
gap: 32px;
list-style:none;
@media Screen and (max-width: 768px){
    display:none;
    opacity: 0;
    pointer-events: none;
}
`;

const NavLink = styled.a`
color: ${({theme}) => theme.text_primary};
font-weight: 500;
cursor:pointer;
text-decoration:none;
transition:all 0.2s ease-in-out;
&:hover{
    color: ${({theme}) => theme.text_secondary};
}
`;

const ButtonContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:80;
height:100%;
@media Screen and (max-width:640px){
    display:none;
}
`;

const GithubButton = styled.button`
background-color:transparent;
border: 1.8px solid ${({theme}) => theme.primary};
color: ${({theme}) => theme.primary};
border-radius: 20px;
justify-content:center;
align-items:center;
padding: 0 20px;
font-size: 1rem;
font-weight:500;
cursor:pointer;
height: 70%;
width: 160px;
&:hover{
    background-color: ${({theme}) => theme.primary};
    color: ${({theme}) => theme.white};
}

@media Screen and (max-width: 640px){
    font-size: 0.8rem;
}
`;

const MobileMenu = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
gap:16px;
position:absolute;
top:80%;
right:0;
width:100%;
padding: ${({open}) => (open?'12px 40px 24px 40px':'0')};
background: ${({theme}) => theme.card_light+'99'};
transition: all 0.5s ease-in-out;
transform: ${({open}) => open?"translateX(0)":"translateX(100%)"};
border-radius: 0 0 20 20px;
box-shadow:0 5px 10px rgba(0, 0, 0, 0.3);
height: ${({ open }) => (open ? 'auto' : '0')};
visibility: ${({open}) => (open ? 'visible':'hidden')};
overflow:hidden;
z-index: ${({open}) => (open ? '1':'-1')};
`;

const MobileLink = styled(LinkR)`
color: ${({theme}) => theme.text_primary};
font-weight:500;
cursor: pointer;
text-decoration:none;
transition:all 0.2s ease-in-out;
&:hover{
color:${({theme}) => theme.primary};
}

`;







const Navbar = () => {

    const[open, setOpen] = React.useState(false);
    const theme = useTheme();

    //This use effect is written in reason for it to the opened menu in moble view should go off when we swithed to desktop mode
    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth > 786){
                setOpen(false);
            }
        };

        window.addEventListener('resize',handleResize);
        return () => {
            window.removeEventListener('resize',handleResize);
        };
    }, []);

    

    return <Nav>
        <NavContainer>
            <NavLogo to="/">
                    <DiCssdeck size="2rem"/><span>Portfolio</span>
            </NavLogo>
            <MobileIcon>
                <FaBars onClick = {() => {setOpen(!open);}} />
            </MobileIcon>
            <NavItems>
                <NavLink href="#about">About</NavLink>
                <Link to="skills" smooth={true} duration={500}>
                <NavLink href="#about">Skills</NavLink>
                </Link>
                
                {/* <NavLink href="#about">Projects</NavLink> */}
                <NavLink href="#about">Education</NavLink>
            </NavItems>
            <ButtonContainer>
                <GithubButton>Github Profile</GithubButton>
            </ButtonContainer>
        </NavContainer>
        <MobileMenu open={open}>
            <MobileLink href="#about" onClick={() => {setOpen(!open);}}>
                About
            </MobileLink>
            <MobileLink href="#skills" onClick={() => {setOpen(!open);}}>
                Skills
            </MobileLink>
            {/* <MobileLink href="#projects" onClick={() => {setOpen(!open);}}>
                Projects
            </MobileLink> */}
            <MobileLink href="#education" onClick={() => {setOpen(!open);}}>
                Education
            </MobileLink>
            <GithubButton 
            style={{
                padding:"10px 16px",
                background:`${theme.primary}`,
                color: "white",
                width:"max-content",
            }}

            href="/"
            target="_blank"
            >
                Github Profile
            </GithubButton>
        </MobileMenu> 
    </Nav>
}

export default Navbar;