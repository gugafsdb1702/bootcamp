import React, { Component } from 'react';
import NavBar from '../components/Navbar';

export default class NotFound extends Component {


    render() {
        return (
            <div class="geral mainBackground">
                <NavBar />
                <section>
                    <div id="notFound"></div>
                    <span>Ops! Página não encontrada.</span>
                    <button class="itensHovered btnOutline btnDefault">Voltar</button>
                </section>
            </div >
        );
    }
}