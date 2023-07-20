import { useEffect, useState } from "react";
import styled from "styled-components";
import { MakeIntroContents } from "./../style/style";
import axios from "axios";

export default function Introuduce() {
    const [data, setData] = useState<any[]>([]);
    const getData = async () => {
        await axios
            .get(`https://chohyunjung0107.github.io/data/about.json`)
            .then((res) => {
                setData(res.data.data.refer);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <MakeIntroContents ht={true}>
            <h1>Introuduce</h1>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <MakeTextBox>
                    {data.map((v) => {
                        return <p key={v.id}>{v.contents}</p>;
                    })}
                </MakeTextBox>
                <MakeImgBox></MakeImgBox>
            </div>
        </MakeIntroContents>
    );
}

export const MakeTextBox = styled.div`
    width: 70%;
    height: 650px;
    margin-left: 1%;
    padding: 1%;

    p {
        width: 97%;
        text-align: left;
        font-size: 25px;
        line-height: 1.7;
    }
`;

export const MakeImgBox = styled.div`
    width: 30%;
    background: #ccc;
    margin-right: 1%;

    background-image: url("https://i.namu.wiki/i/uWrgjlzRQhle_pJDVDrKMCIfUYoBKYMtPuS2w1gO_7Dykv3Xams6eSr8Ui2CGrsgDqy2pEFgXJv43XDFkMa2Nq2xu6gI3PDqU6QUKI6A9FLfzdRGsiZZQI6tFbrSW5l9DHipbxxdY5F_r82qOAkHjg.webp");
    background-size: cover;
`;

export const MakeFlex = styled.div`
    display: flex;
`;
