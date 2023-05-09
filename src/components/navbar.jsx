import React, { Component } from "react";


class NavBar extends Component {
    render() {
        const { totalCounters, onCreate,onReset,maxCounters,atualCounters } = this.props;
        return (
            <nav className="navbar navbar-light bg-light">
                <div style={{ fontSize: "32px" }}>
                    {" Total "}
                    <span className="badge rounded-pill bg-secondary">
                        {totalCounters}
                    </span>
                </div>
                <a
                    className="navbar-brand"
                >
                    {"Primeiro trabalho de contadores. Máximo de contadores = "+ maxCounters}
                </a>

                <a >
                    <div>
                        Adicionar contadores
                        <button
                            onClick={() => onCreate()}
                            className="btn btn-secondary btn-sm"
                            style={{ backgroundColor: "green", marginLeft: "1vh", marginRight:"1vh" }}
                            disabled={maxCounters === atualCounters.length ? "disabled" : ""}
                            data-toggle="tooltip" title={maxCounters === atualCounters.length ? "Máximo de contadores" : ""}
                        >
                            +
                        </button>
                        <button
                            onClick={onReset}
                            className="btn btn-primary btn-sm m-2"
                        >
                            Resetar
                        </button>
                    </div>
                </a>
            </nav>
        );
    }
}
export default NavBar;
