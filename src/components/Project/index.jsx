import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import ProjectCard from '../Cards/Projectcard';
// import { projects } from '../../data/constants';

const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
position:relative;
z-index:1;
align-items:center;
`;

const Wrapper = styled.div`
max-width:1100px;
position: relative;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
width:100%;
gap:12px;
`;

const Title = styled.div`
font-size: 42px;
font-weight:600;
text-align:center;
margin-top:20px;
color: ${({theme}) => theme.text_primary};
@media screen and (max-width:768px){
  margin-top:12px;
  font-size: 32px
}
`;

const Desc = styled.div`
font-size:18px;
max-width:600px;
text-align:center;
color: ${({theme}) => theme.text_secondary};

@media (max-width:768px){
  font-size:16px;
}
`;

const ToggleGroup = styled.div`
display:flex;
border: 1.5px solid ${({theme}) => theme.primary};
color:${({theme}) => theme.primary};
font-size:16px;
border-radius:12px;
font-weight:500;
margin:22px 0;
@media(max-width:768px){
    font-size:14px;
}
`;

export const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    ${({ active, theme }) =>
        active && `
    background: ${theme.primary + 20};
    `
    }
    &:hover {
        background: ${({ theme }) => theme.primary + 8};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
    `
export const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`


export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     grid-gap: 32px;
     grid-auto-rows: minmax(100px, auto);
     @media (max-width: 960px) {
         grid-template-columns: repeat(2, 1fr);
     }
     @media (max-width: 640px) {
         grid-template-columns: repeat(1, 1fr);
     }
`;

const Projects = () => {

    const [toggle, setToggle] = useState("all");



  return (
    <Container>
        <Wrapper>
            <Title>My Projects</Title>
            <Desc>Here are some of my projects that I have worked on.</Desc>
            <ToggleGroup>
                <ToggleButton active  = {toggle === "all"} onClick={() => setToggle("all")}>All</ToggleButton>
                <Divider />
                <ToggleButton active = {toggle === "web app"} onClick={() => setToggle("web app")}>WEB App</ToggleButton>
                <Divider />
                <ToggleButton active = {toggle === "android app"} onClick={() => setToggle("android app")}>Android App</ToggleButton>
                <Divider />
                <ToggleButton active = {toggle === "machine learning"} onClick={() => setToggle("machine learning")}>Machine Learning</ToggleButton>
            </ToggleGroup>
            <CardContainer>
            {toggle === "all" && projects.map((project) => <ProjectCard key={project.id} project={project}/>)}
            {projects.filter((item) => item.category == toggle).map((project) => (<ProjectCard key={project.id} project ={project}/>))}
        
            </CardContainer>
        </Wrapper>
    </Container>
  )
}

export default Projects;
