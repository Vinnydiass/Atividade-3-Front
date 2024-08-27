'use client'

import Pagina from "@/app/components/Pagina";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function nomes() {

    const [nome, setNome] = useState('Vinicius')


    function alterarNome() {
        const novoNome = nome == 'Vinicius' ? 'Vinicius Dias' : 'Vinicius'
        setNome(novoNome)
    }

    return (
        <Pagina titulo={"Nomes: " + nome}>
            <h1>{nome}</h1>
            <Button onClick={alterarNome}> Alterar nome</Button>
        </Pagina>
    )
}

