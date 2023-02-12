import React from "react";
import styled from "styled-components"
//import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import Info from "./Info";

const Btn = styled.button`
    width: 87%;
    height: 65px;
    background: ${(props) => props.color};
    border-radius: 10px;
    border: none;
    color: white;
    font-size: 16px;
    margin-bottom: 70px;
    `;


function NextButton({info, color, classN}) {
    const navigate = useNavigate();

    console.log(color)
    //체크랑 네브랑 같이 쓸 수 있는 방법은 없을까.
    // const check = () => {
    //     if(name.length > 0) {
    //         window.location.replace('/info');
    //     }
    //     else {
    //         alert("이름을 입력하세요.");
    //     };
    // }
    console.log(classN)
    const Nav = () => {
        if(classN === "Name") {
            navigate('/Info', {
                state: { name: info,
                },
            });
        }
        else if(classN === "Info") {
            
        }
    }

    return (
        <>
            <Btn
                type="button"
                onClick={() => {
                    Nav();
                }}
                color = {color}
            >다음 단계</Btn>
        </>
    );
}

export default NextButton;