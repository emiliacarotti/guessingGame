import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <>
            <footer>
                <div id="resetCircle">
                    <button id="resetButton" onClick={refreshPage} >RESET</button>
                </div>
            </footer>
        </>
    )
}