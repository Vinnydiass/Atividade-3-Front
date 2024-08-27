import { Container, Nav, Navbar } from "react-bootstrap";

export default function Pagina(props){
    return(
        <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home" className="text-">Sistema Acadêmico</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Principal</Nav.Link>
                    <Nav.Link href="/fundamentos">Fundamentos</Nav.Link>
                    <Nav.Link href="/array">Array</Nav.Link>
                    <Nav.Link href="/clientes">Clientes</Nav.Link>
                    <Nav.Link href="/nomes">Nomes</Nav.Link>
                </Nav>ci
            </Container>
        </Navbar>


        <div className="bg-secondary text-black text-left p-5">
            <h1>{props.titulo}</h1>
        </div>

        <conntainer>
           {props.children}
        </conntainer>
    </>
    )
}

