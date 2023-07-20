import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { GlobalStyle } from "./style/style";

import styled from "styled-components";
import Introuduce from "./pages/IntrouducePage";
import WorkPage from "./pages/WorkPage";
import ContactPage from "./pages/ContactPage";

import { Link, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <MakeHeader>
                <div>home</div>
                <ul>
                    <li>ABOUT</li>
                    <li>PROJECT</li>
                    <li>CONTACT</li>
                </ul>
            </MakeHeader>
            <MakeContetents>
                {/* 소개 페이지 */}
                <Introuduce />
                {/* 작업물 안내 페이지  */}
                <WorkPage />
                {/* 컨택트 페이지 */}
                <ContactPage />
            </MakeContetents>
            <MakeFooter>footer</MakeFooter>
        </div>
    );
}

export default App;

const basicHeight = "797px";

export const MakeHeader = styled.div`
    width: 100%;
    height: 80px;
    background: #6666;

    display: flex;
    aline-content: center;
    justify-content: space-between;

    position: sticky;
    top: 0px;
    left: 0px;

    div {
        width: 50px;
        background: green;
        line-height: 80px;
        margin-left: 1%;
    }

    ul {
        width: 50%;
        list-style: none;
        display: flex;
        gap: 0 2%;
        justify-content: flex-end;
        margin-right: 1%;
        padding: 3px;
    }

    li {
        border-top: 1px solid #000;
        padding: 5px;
        cursor: pointer;
    }
`;
export const MakeContetents = styled.div`
    width: 100%;
    // height: ${basicHeight};
    background: #999;
`;
export const MakeFooter = styled.div`
    width: 100%;
    height: 50px;
    background: #ccc;
`;

export const MakeFlext = styled.div`
    display: flex;
`;
