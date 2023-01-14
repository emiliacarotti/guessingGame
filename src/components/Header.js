import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ header1, header2 }) {

    return (
        <>
            <header>
                <h1 id="text1">{header1}</h1>
                <h2 id="text2">{header2}</h2>
            </header>
        </>
    )


}