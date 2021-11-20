import React from 'react' 
import styled from 'styled-components' 
 
const PartDetail = () => { 
    return ( 
        <ViewSectionDetail> 
            <DetailTextHolder1> 
                      <DetailText0> 
                          Contact the Agent 
                    </DetailText0>   
            </DetailTextHolder1> 
 
                        <ButtonHolder> 
                            <Button1> 
                                Message 
                            </Button1> 
                            <Button2> 
                                Request video meeting

                            </Button2> 
                        </ButtonHolder> 
                        <CardHolder> 
                            <Card> 
                            <Image/> 
                            </Card> 
                            <Card> 
                                <Image/> 
 
                            </Card> 
                        </CardHolder> 
                        
        </ViewSectionDetail> 
    ) 
} 
 
export default PartDetail 
 
 
const Image = styled.img` 
width:430px; 
height:180px; 
background-color: white; 
` 
const Card  =  styled.div` 
overflow: hidden; 
margin:5px 5px; 
width: 430px; 
height:250px; 
border-radius: 20px 20px; 
background-color:blue; 
` 
 
const CardHolder = styled.div` 
margin:5px 5px; 
display: flex; 
flex-direction: column; 
justify-content: center; 
align-items: center; 
` 
 
const Button2 = styled.button` 
width:220px; 
height: 46px; 
border-radius: 20px 20px; 
background-color:blue; 
/* position: relative; */ 
overflow: hidden; 
/* text-overflow: ellipsis; */ 
/* white-space: nowrap; */ 
/* display: block; */ 
text-align: center; 
transition: all 350ms; 
opacity: 1; 
font-weight: bold; 
cursor: pointer; 
border: none; 
margin:0px 5px; 
color:white; 
font-size: 16px; 
 
:hover { 
    background-color:#021b42; 
} 
 
` 
const Button1 = styled.button` 
width:220px; 
height: 46px; 
border-radius: 20px 20px; 
background-color:white; 
/* position: relative; */ 
overflow: hidden; 
/* text-overflow: ellipsis; */ 
/* white-space: nowrap; */ 
/* display: block; */ 
text-align: center; 
transition: all 350ms; 
opacity: 1; 
font-weight: bold; 
cursor: pointer; 
color: blue; 
border: 1px solid blue; 
margin:0px 5px; 
font-size: 16px; 
 
:hover{ 
    background-color: #ddd; 
} 
 
` 
const ButtonHolder = styled.div` 
display: flex; 
/* justify-content: space-between; */ 
` 
// const DetailTextHolder2 = styled.div` 
// margin:5px 5px; 
// display: flex; 
// text-decoration-line: underline; 
// ` 
 
const DetailTextHolder1 = styled.div` 
margin:5px 5px; 
display: flex; 
justify-content: center; 
align-items: center; 
` 
 
const DetailText0 = styled.div` 
margin:5px 5px; 
font-weight: 700; 
font-size: 25px; 
` 
 
const ViewSectionDetail = styled.div` 
width: 475px; 
height: 100%; 
min-height: 100vh; 
background-color: white; 
`;