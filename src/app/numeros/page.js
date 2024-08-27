'use client'

import Pagina from "@/app/components/Pagina";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function nomes() {

    const [numero, setNumero] = useState(0)


    function mais() {
        const novoNumero = numero + 1
        setNumero(novoNumero)
    }

    function menos() {
        const novoNumero = numero - 1
        setNumero(novoNumero)
    }


    return (
        <Pagina titulo='Números'>
            <Button onClick={menos}>-</Button>
            <h1>{numero}</h1>
            <Button onClick={mais}>+ </Button>
        </Pagina>
    )
}