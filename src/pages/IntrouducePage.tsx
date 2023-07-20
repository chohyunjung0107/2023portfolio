import styled from "styled-components";
import { MakeIntroContents } from "./../style/style";

export default function Introuduce() {
    return (
        <MakeIntroContents>
            <h1>Introuduce</h1>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <MakeTextBox>
                    <p>/</p>
                </MakeTextBox>
                <MakeImgBox>/</MakeImgBox>
            </div>
        </MakeIntroContents>
    );
}

export const MakeTextBox = styled.div`
    width: 60%;
    height: 100px;
    background: #ccc;
`;

export const MakeImgBox = styled.div`
    width: 30%;
    height: 100px;
    background: #ccc;
`;

export const MakeFlex = styled.div`
    display: flex;
`;
