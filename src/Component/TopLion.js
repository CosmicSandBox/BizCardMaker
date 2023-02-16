import React from "react";
import styled, {keyframes} from "styled-components"


const Bar = styled.div`
    width: 90%;
    height: 13px;
    background-color: #96DB85;
    position: relative;
`;

const Prograss = styled.img`
    width: 80%;
    height: 5%;
    position: absolute;
    margin: auto 0;
    background-color: transparent;
    top: 5.7vh;
`;

function TopLion({lioncount}) {
    //2rem = name start, 사자 처음값
    const startpos = ['2rem', '2rem', '4.5rem', '7rem', '9.5rem', '12rem', '14.5rem', '17rem']
    const endpos = ['2rem', '4.5rem', '7rem', '9.5rem', '12rem', '14.5rem', '17rem', '19.5rem']

    const Move = keyframes`
        0% {
            top: 2rem;
            left: ${startpos[lioncount]};
        }
        
        100% {
            top: 2rem;
            left: ${endpos[lioncount]};
        }
    `;

    const Img = styled.img`
        width: 58px;
        height: 64px;
        position: absolute;
        background-color: transparent;
        top: 2rem;
        left: ${endpos[lioncount]};
        animation: ${Move} 2s 0s alternate 1;
    `;

    return (
        <>
            <Bar></Bar>

                    <Prograss src="img/prograss.png" />
                    <Img src="img/lion.png" />

        </>
    );
}

export default React.memo(TopLion);