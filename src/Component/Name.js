import styled from "styled-components";
import NextButton from "./NextButton";
import GlobalStyle from "./GlobalStyle";
import { useState } from "react";
import Undermsg from "./Undermsg";
import TopLion from "./TopLion";


const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    padding-top: 44px;
    height: 812px;
    //background-color: #FFFBEE;
`;

const TopContainer = styled.div`
    width: 90%;
    height: 65px;
    margin: 0 auto;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Playground = styled.div`
    width: 90%;
    height: 655px;
    margin: 0 auto;
    padding-top: 49px;
    text-align: center;
`;


const NameText = styled.div`
    width: 100%;
    height: 30px;
    text-align: center;
    color: #412917;
    margin-bottom: 165px;
    border-radius: 0;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NamePleaseBox = styled.div`
    color: #412917;
    font-size: 16px;
    text-align: left;
`;

const Detail = styled.div`
    color: #7E593E;
    height: 28px;
    font-size: 12px;
    display: flex;
    align-items: center;
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    padding-left: 26px;
    
`;
const InputName = styled.input`
    width: 80%;
    height: 40px;
    padding-left: 5px;
    border-width: 1px;
    border: none;
    border-bottom: solid 1px #94987E;
    margin-top: 5px;
    margin-bottom: 219px;
    background-color: transparent;
    font-size: 1rem;
    &:focus {
                outline: none;
    }
`;


function Name() {
    const [input, setInput] = useState('');
    const [color, setColor] = useState("#D3D3D3");

    const onChange = (e) => {
        setInput(e.target.value);
        setColor(input.length <= 1 ? "#D3D3D3" : "#FF7A00");
    };

    return (
        <>
        <GlobalStyle />
            <Container>
                <TopContainer>
                    <TopLion 
                        count = {0}
                        prevpos= {'32px'}
                        pos = {'32px'} />
                </TopContainer>
                <Playground>
                    <NameText>먼저 당신의 이름을 알려주세요</NameText>
                    <Form>
                        <NamePleaseBox>이름을 입력해주세요</NamePleaseBox>
                        <Detail>실명 입력</Detail>
                        <InputName
                            onChange = {onChange} 
                            placeholder="ex) 김멋사"
                        />
                
                    </Form>
                    <NextButton
                        info={input}
                        color={color}
                        classN={"Name"} />
                    <Undermsg />
                </Playground>
            </Container>
            
        </>
    );
}

export default Name;