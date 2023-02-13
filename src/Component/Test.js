import React, { useState } from "react";
import styled, {keyframes} from "styled-components"
import { useLocation } from "react-router-dom";

function Test() {
    const location = useLocation();
    console.log('state', location.state);
    
    const [userInfo, setUserInfo] = useState(
        location.state
    );



    return (
        <>
            <div>여긴 test입니다.</div>
            <div>{userInfo.name}</div>
            <div>{userInfo.nickname}</div>
            <div>{userInfo.major}</div>
            <div>{userInfo.contact}</div>
            <div>{userInfo.email}</div>
            <div>{userInfo.mbti}</div>
        </>
    );
}

export default Test;