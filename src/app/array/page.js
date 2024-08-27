'use client'
import { Container, Nav, Navbar } from "react-bootstrap";
import Pagina from "../components/Pagina";

export default function Array() {
    const carros = ['corsa', 'celta', 'ferrari', 'fusca', 'cobalt']
    

    return (
        <Pagina titulo="Página de array">


            {carros.map(item => (
                <p>{item}</p>
            ))}

            <l>
                {carros.map(item => (
                    <li>{item}</li>
                ))}
            </l>
        </Pagina>
    )
}

