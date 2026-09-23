import React, { Component } from 'react';
import axios from 'axios';
import './Personalidades.css';

export default class Personalidades extends Component {
    state = {
        personalidades: [],
        carregando: true,
        erro: null
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/personalidades')
            .then(res => {
                const personalidades = res.data || [];
                this.setState({ personalidades, carregando: false, erro: null });
            })
            .catch(error => {
                console.error("Erro ao carregar dados da API Go:", error);
                this.setState({ 
                    erro: "FALHA NA CONEXÃO: Certifica-te de que o servidor Go está ativo na porta 8000.",
                    carregando: false 
                });
            });
    }

    render() {
        const { personalidades, carregando, erro } = this.state;

        return (
            <section className="RetroContainer">
                <div className="RetroConsoleHeader">
                    <div className="ConsoleTitle">
                        <span className="PromptSymbol">&gt;</span>
                        <span className="ConsoleCommand">SELECT * FROM personalidades;</span>
                    </div>
                    <div className="ConsoleCounter">
                        REGISTROS: <span className="CounterNumber">[{personalidades.length.toString().padStart(2, '0')}]</span>
                    </div>
                </div>

                {carregando && (
                    <div className="RetroLoading">
                        <span className="BlinkingCursor">&gt;</span> CARREGANDO DADOS DO POSTGRESQL VIA GO API...
                    </div>
                )}

                {erro && (
                    <div className="RetroError">
                        <div className="ErrorTitle">! ALERTA DE CONEXÃO !</div>
                        <p>{erro}</p>
                        <div className="ErrorHint">Dica: Execute "go run main.go" no terminal da pasta celebridades.</div>
                    </div>
                )}

                <div className="GridPersonalidades">
                    {personalidades.map((p, index) => (
                        <article className="CardPersonalidades" key={p.id || index}>
                            <div className="CardHeader">
                                <span className="CardIdTag">REGISTRO #{String(p.id).padStart(3, '0')}</span>
                                <span className="CardLocationTag">BELÉM // PA</span>
                            </div>

                            <div className="CardBody">
                                <h3 className="CardTitle">{p.nome}</h3>
                                <div className="CardDivider"></div>
                                <p className="CardDescription">{p.historia}</p>
                            </div>

                            <div className="CardFooter">
                                <span className="CardTag">#HISTORIA_PARAENSE</span>
                                <span className="CardProtocol">HTTP/1.1 200 OK</span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        );
    }
}