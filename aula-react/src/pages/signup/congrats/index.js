import React, { Component } from 'react';
import Navbar from '../../components/Navbar';

export default class Congrats extends Component {
    render() {
        return (
            <div className="geral mainBackground">
                <Navbar />
                <section>
                    <span>Parabéns {this.props.name}, sua conta está pronta para uso.</span>
                    <button className="itensHovered btnOutline btnDefault">Voltar</button>
                </section>
            </div>
        );
    }
}
