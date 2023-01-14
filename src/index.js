import react, { useState, useEffect } from "react";
import reactdomclient from "react-dom/client"
import { BrowserRouter, useNavigate, useParams, Routes, Route, Link } from "react-router-dom";

import {
    Header,
    Footer,
    Game
} from "./components"

function App() {

    const [header1, setHeader1] = useState("EMILIA'S GUESSING GAME")
    const [header2, setHeader2] = useState("Guess any number between 0 - 100 :")

    return (
        <>
            <header><Header header1={header1} header2={header2}></Header></header>
            <main><Game header1={header1} header2={header2} setHeader1={setHeader1} setHeader2={setHeader2}></Game></main>
            <footer><Footer></Footer></footer>
        </>
    )
}

const root = reactdomclient.createRoot(document.getElementById('app'));
root.render(<App />)