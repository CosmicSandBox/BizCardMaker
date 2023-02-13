import React, { useState } from "react";
import styled, {keyframes} from "styled-components"


const Gray = styled.div`
    width: 90%;
    height: 8px;
    background-color: lightgray;
    position: relative;
`;

function TopLion(count) {

    console.log(count)

    const Move = keyframes`
        0% {
            top: 32px;
            left: ${count.prevpos};
        }
        
        100% {
            top: 32px;
            left: ${count.pos};
        }
    `;

    const Img = styled.img`
        width: 58px;
        height: 64px;
        position: absolute;
        background-color: transparent;

        top: 32px;
        left: ${count.pos};
        animation: ${Move} 2s;
    `;




    return (
        <>
            <Gray></Gray>
            <Img 
                src="img/lion.png" />
        </>
    );
}

export default TopLion;