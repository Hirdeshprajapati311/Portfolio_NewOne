import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
position:relative;
z-index:1;
align-items:center;
`;

const Wrapper = styled.div`
max-width:1100%px;
positon: relative;
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


const Experience = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Experiences</Title>
            <Desc>Here are some Projects</Desc>
            <TimeLineSection>
                <TimeLine>
                    {experiences}
                </TimeLine>
            </TimeLineSection>
        </Wrapper>
    </Container>
  )
}

export default Experience;
