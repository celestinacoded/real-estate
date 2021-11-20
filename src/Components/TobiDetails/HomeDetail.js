import React from 'react'
import styled from "styled-components";
// import vid from './Video/vid.mp4' 
import PartDetail from './PartDetail';

const HomeDetail = () => {
    return (
        <Container> 
            <Wrapper> 
               <View> 
               <ViewSection> 
                   <ViewThis> 
                   <Video  type="video/mp4" controls 
                   /> 
                    <HomeImageContainer> 
                    <HomeImage /> 
                    <HomeImage/> 
                    </HomeImageContainer> 
                    <HomeImageContainer> 
                    <HomeImage2/> 
                    <HomeImage2/> 
                    <HomeImage2/> 
                    </HomeImageContainer> 
                    <HomeImageContainer2> 
                    <HomeImage3/> 
                    <HomeImage3/> 
                    </HomeImageContainer2> 
 
                    <FormSection> 
                    <Form> 
                            <Title> Schedule a Viewing </Title> 
                            <InputHold> 
                            <Input placeholder="Name" /> 
                            </InputHold> 
                            <InputHold> 
                            <Input placeholder="Email" /> 
                            </InputHold> 
                            <InputHold> 
                            <Input placeholder="Phone Number" /> 
                            </InputHold> 
                            <InputHold> 
                            <Input placeholder="Comments or Questions" /> 
                            </InputHold> 
                             
                            <Button> 
                                Go 
                            </Button> 
                    </Form> 
                    </FormSection> 
                   </ViewThis> 
                </ViewSection> 
                        <PartDetail/>
                        
                
               </View> 
            </Wrapper> 
        </Container> 
    );
}

export default HomeDetail

const Title = styled.div` 
font-size: 30px; 
margin: 15px 0; 
`; 
const InputHold = styled.div` 
 
`; 
 
const Input = styled.input` 
width: 350px; 
height: 40px; 
outline: none; 
border: 1px solid lightgray; 
padding-left: 8px; 
`; 
 
const Form = styled.div` 
display: flex; 
flex-direction: column; 
align-items: center; 
`; 
// const Dummy = styled.div` 
// color:blue; 
// font-size: 30px; 
// font-weight: bold; 
 
// ` 
 
// const DetailText6 = styled.div` 
// display:flex; 
// font-size: 13px; 
// color:black; 
// ` 
 
const Button = styled.button` 
  width:250px; 
  height: 40px; 
  background-color:#0561eb; 
  border-radius: 20px 20px; 
  border-color: none; 
  border: 0; 
  font-weight: bold; 
  font-size:18px; 
  cursor: pointer; 
  outline: none; 
  color:white; 
  margin-top: 20px; 
  transition: all 350ms; 
 
  :hover { 
      background-color:#021b42 
 
  } 
`; 
 
 
 
const FormSection = styled.div` 
width : 856px; 
background-color:#e6ebf3; 
display: flex; 
flex-direction: column; 
justify-content: center; 
align-items: center; 
` 
const HomeImage3 = styled.div` 
margin:5px 5px; 
width:840px; 
height:600px; 
background-color: blue; 
border-radius:5px 5px 0px 0px; 
` 
const HomeImage2 = styled.div` 
margin:5px 5px; 
width:300px; 
height:200px; 
background-color: blue; 
border-radius:5px 5px 0px 0px; 
` 
const HomeImageContainer2 = styled.div` 
justify-content: center; 
align-items: center; 
display:flex; 
flex-direction: column; 
` 
const HomeImageContainer = styled.div` 
display:flex; 
` 
const ViewThis = styled.div` 
display : flex; 
flex-direction: column; 
` 
 
const HomeImage = styled.img` 
margin:5px 5px; 
width:420px; 
height:250px; 
background-color: blue; 
border-radius:5px 5px 0px 0px; 
 
` 
const View = styled.div` 
 
display: flex; 
justify-content: center; 
flex-wrap: wrap; 
background-color:#e6ebf3; 
` 
 
const Video = styled.video` 
width: 100%; 
height: 850px; 
background-color:white; 
border-radius:5px; 
` 
const ViewSection = styled.div` 
display:flex; 
flex-direction:column; 
flex:1; 
height: 100vh; 
/* min-height: 100vh; */ 
width: 525px; 
background-color: white; 
overflow-y: scroll; 
` 
const Container = styled.div` 
width : 100%; 
height: 100%; 
min-height: 100vh; 
background-color: White; 
` 
const Wrapper = styled.div` 
padding-top: 50px; 
display: flex;
justify-content: space between; 
flex-direction: column; 
/* align-items: center; */ 
`;