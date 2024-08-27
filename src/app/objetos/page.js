'use client'
import { Container, Nav, Navbar } from "react-bootstrap";
import Pagina from "../components/Pagina";

export default function Objetos() {
    const carros = [
        {marca: 'GM', modelo: 'Corsa', cor: 'Rosa', fotos: ''},
        {marca: 'GM', modelo: 'Corsa', cor: 'Rosa', fotos: ''},
        {marca: 'GM', modelo: 'Corsa', cor: 'Rosa', fotos: ''},
        {marca: 'GM', modelo: 'Corsa', cor: 'Rosa', fotos: ''},
        {marca: 'GM', modelo: 'Corsa', cor: 'Rosa', fotos: ''}
    ]


    return (
        <Pagina titulo="Objetos">


            {carros.map(item => (
                <p>{item}</p>
            ))}

        </Pagina>
    )
}

