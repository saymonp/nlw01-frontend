import React from "react";
import { Link } from "react-router-dom";
import { FiArrowDownLeft } from "react-icons/fi";

import "./styles.css";

import Logo from "../../assets/logo.svg";

const CreatePoint = () => {
    return (
        <div id="page-create-point">
            <header>
                <img src={Logo} alt="Ecoleta" />

                <Link to="/">
                    <FiArrowDownLeft />
                    Voltar para Home
                </Link>
            </header>

            <form>
                <h1>Cadastro do <br /> ponto de coleta</h1>
                <fieldset>
                    <legend>
                        <h2>Dados</h2>
                    </legend>

                    <div className="field">
                        <label htmlFor="name">Nome da Entidade</label>
                        <input 
                        type="text"
                        name="name"
                        id="name"
                        />
                    </div>

                    <div className="field-group">
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input 
                        type="email"
                        name="email"
                        id="email"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="whatsapp">Whatsapp</label>
                        <input 
                        type="text"
                        name="whatsapp"
                        id="whatsapp"
                        />
                    </div>
                    </div>


                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Endereço</h2>
                        <span>Selecione o endereço</span>
                    </legend>
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Items de coleta</h2>
                    </legend>
                </fieldset>
            </form>



            </div>
    );
}

export default CreatePoint;