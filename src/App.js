import React from "react";
import logo from "./logo.svg";
//import "./App.css";

function MiNombre() {
    return <h1>Adalberto Zanabria Castro</h1>;
}

function Saludos() {
    return <h1>Saludos desde la Univa!</h1>;
}

function MyElement() {
    return (
        <div>
            <ul>
                <li>
                    Licenciatura en Ingeniería en Sistemas y Tecnologías de la
                    Información
                </li>

                <li>Décimo Cuatrimestre</li>

                <li>Clase Herramientas de Desarrollo para Ambientes Móviles</li>

                <li>Profesor Miguel Angel Gallardo Lemus</li>
            </ul>
        </div>
    );
}

class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
            </div>
        );
    }
}

class Layout extends React.Component {
    render() {
        return (
            <div>
                <style>{`
        /*Los apostrofes son importantes*/
        /*No lleva comillas en los valores*/
        table{
          width: 100%;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size:calc(10px + 2vmin);
          text-align: center;
        }

        table, th, td{
          border:5px solid #b4db66;
          background: #282c34;
          color: white;
        }
        `}</style>

                <table>
                    <thead>
                        <tr styles={{ align: "center, colspan:3" }}>
                            <td>
                                <br></br>
                                <header className="App-header">
                                    {
                                        //<img src={logo} className="App-logo" alt="logo"/>
                                    }
                                    <p>Creado utilizando React</p>
                                    <a
                                        className="App-link"
                                        href="https://reactjs.org"
                                        target="_blank"
                                        rel="noopener no referrer"
                                    >
                                        Learn React
                                    </a>
                                </header>
                                <br></br>
                            </td>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td styles={{ width: "15%", align: "center" }}>
                                MENU
                            </td>
                            <td styles={{ width: "70%", align: "center" }}>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                Examen Práctico Parcial 1
                                <MiNombre />
                                <Saludos />
                                <MyElement />
                                <Hello />
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                            </td>

                            <td styles={{ width: "15%", align: "center" }}>
                                ADVT
                            </td>
                        </tr>
                    </tbody>

                    <tfoot>
                        <tr>
                            <td>
                                <br></br>
                                FOOTER
                                <br></br>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}

function App() {
    return (
        <div className="App">
            <Layout></Layout>
        </div>
    );
}
export default App;
