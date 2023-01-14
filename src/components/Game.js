import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
    GuessCircle,
    PastGuesses
} from "/"

export default function Game({ header1, header2, setHeader1, setHeader2 }) {

    const [guess, setGuess] = useState()
    const [number, setNumber] = useState()
    const [difference, setDifference] = useState()
    const [guessCount, setGuessCount] = useState(0)
    const [printNumber, setPrintNumber] = useState(false)

    const [n, setN] = useState(1)
    const [colorToSetTo, setColorToSetTo] = useState("")
    const [color1, setColor1] = useState("")
    const [color2, setColor2] = useState("")
    const [color3, setColor3] = useState("")
    const [color4, setColor4] = useState("")
    const [color5, setColor5] = useState("")

    const [num1, setNum1] = useState()
    const [num2, setNum2] = useState()
    const [num3, setNum3] = useState()
    const [num4, setNum4] = useState()
    const [num5, setNum5] = useState()

    useEffect(() => {
        SetNumber()
    }, [])

    useEffect(() => {
        setPrintNumber(true) // this is the only way i get it to console log twice so i can actually see it
        PrintNumberFunction()

    }, [printNumber])

    function PrintNumberFunction() {
        console.log("Random number is", number)
    }

    function SetNumber() {
        setNumber(Math.floor(Math.random() * 101))
    }

    return (
        <>
            <GuessCircle
                setHeader1={setHeader1}
                setHeader2={setHeader2}
                guess={guess} setGuess={setGuess}
                number={number}
                difference={difference} setDifference={setDifference}
                guessCount={guessCount} setGuessCount={setGuessCount}
                setColor1={setColor1}
                setColor2={setColor2}
                setColor3={setColor3}
                setColor4={setColor4}
                setColor5={setColor5}
                colorToSetTo={colorToSetTo} setColorToSetTo={setColorToSetTo}
                n={n} setN={setN}
                num1={num1} setNum1={setNum1}
                num2={num2} setNum2={setNum2}
                num3={num3} setNum3={setNum3}
                num4={num4} setNum4={setNum4}
                num5={num5} setNum5={setNum5}
            ></GuessCircle>
            <PastGuesses
                color1={color1}
                color2={color2}
                color3={color3}
                color4={color4}
                color5={color5}
                num1={num1}
                num2={num2}
                num3={num3}
                num4={num4}
                num5={num5}
            ></PastGuesses>
        </>
    )

}