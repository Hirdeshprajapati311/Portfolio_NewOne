import React from 'react';
import styled from 'styled-components';
import {education} from "../../data/constants";
import EducationCard from '../Cards/Educationcard';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';



const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
position:relative;
z-index:1;
align-items:center;
margin-bottom:50px;
`;

const Wrapper = styled.div`
max-width:1100px;
positon: relative;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
width:100%;
gap:12px;
margin-bottom:50px;
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

const TimelineSection = styled.div`
width:100%;
max-width:750px;
margin-top:10px;
flex-direction:column;
align-items:center;
justify-content:center;
gap:12px;
margin-left:-40px;
`;



const Education = () => {
  return (
    <Container id='education'>
      <Wrapper>
        <Title>Education</Title>
        <Desc>Here are some of the courses I have taken</Desc>
        <TimelineSection>
          <Timeline>
          {education.map((education, index) => (
            <TimelineItem key={index}>
          <TimelineContent sx={{py:"12px",px:"2"}}>
            <EducationCard education={education}/>
          </TimelineContent>
          <TimelineSeparator>
            <TimelineDot variant ="outlined" color="secondary"/>
            {index !== education.length - 1 && (<TimelineConnector style= {{background:"#854CE6"}} />)}
          </TimelineSeparator>
          </TimelineItem>
          ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
}

export default Education;
