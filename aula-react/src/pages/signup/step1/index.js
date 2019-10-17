import React, { Component } from 'react';
import Navbar from '../../components/Navbar';

export default class Step1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            date: '',
            cpf: 0,
            agree: false
        }
    }

    handleChange = (e) => {

        let state = Object.assign({}, this.state);

        let field = e.target.id;

        state[field] = e.target.value;

        this.setState(state);
    }

    isChecked = (e) => {
        this.setState(prevState => prevState.agree = !prevState.agree);
    }

    render() {
        return (
            <div className="mainNoColor geral">

                <Navbar />

                <section id="formSection">

                    <div className="header">
                        <p>Você está em
                            Página incial/Abertura de conta</p>
                        <p className="bold">Dados pessoais</p>
                    </div>

                    <div className="formContainer">
                        <form onSubmit={() => this.props.change(1, this.state)}>
                            <label className="cursorP" htmlFor="name">Nome</label>
                            <input onChange={(e) => this.handleChange(e)} id="name" type="text" placeholder="Roberto Silva" />
                            <label className="cursorP" htmlFor="date">Data de nascimento</label>
                            <input onChange={(e) => this.handleChange(e)} id="date" type="text" placeholder="11/06/1993" />
                            <label className="cursorP" htmlFor="cpf">CPF</label>
                            <input onChange={(e) => this.handleChange(e)} id="cpf" type="text" placeholder="444.444.444-90" />
                            <div>
                                <input onChange={(e) => this.isChecked(e)} id="agree" type="checkbox" />
                                <label className="cursorP" htmlFor="agree">Li e concordo com os termos.</label>
                                <button className="btnBlue itensHovered" type="submit" href="#">Continuar</button>
                            </div>
                        </form>
                    </div>

                </section>

                <section id="infoContainer">
                    <p>Primeiro precisamos te conhecer.</p>
                    <p className="boldBlue">Vamos lá?</p>
                </section>

            </div>
        );
    }
}
