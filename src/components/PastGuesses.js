import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PastGuesses({
    color1, color2, color3, color4, color5,
    num1, num2, num3, num4, num5 }) {

    //    document.getElementById(`guess${guessCount}`).classList.add(color)

    return (
        <>
            <div id="pastGuesses">
                <div className="pastGuess">
                    <p id="guess"
                        className={color1}>{num1 || num1 == "0" ? num1 : ""}</p>
                </div>
                <div className="pastGuess">
                    <p id="guess"
                        className={color2}>{num2 || num2 == "0" ? num2 : ""}</p>
                </div>
                <div className="pastGuess">
                    <p id="guess"
                        className={color3}>{num3 || num3 == "0" ? num3 : ""}</p>
                </div>
                <div className="pastGuess">
                    <p id="guess"
                        className={color4}>{num4 || num4 == "0" ? num4 : ""}</p>
                </div>
                <div className="pastGuess">
                    <p id="guess"
                        className={color5}>{num5 || num5 == "0" ? num5 : ""}</p>
                </div>
            </div>
        </>
    )
}