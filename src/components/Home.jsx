import Menu from "./Menu";
import "./Home.css"
import json from "../data/autos.json"
import Auto from "./Auto";
import { useState, useEffect } from "react"

function Home() {

    const [isLoading, setIsLoading] = useState(true)
    const [autosDestacados, setAutosDestacados] = useState([null])

    useEffect(() => {
        soloDestacados()
    }, [isLoading])

    function soloDestacados() {
        let destacados = []
        for (const auto in json) {
            if (json[auto].destacado === "Y") destacados.push(json[auto])
        }
        setAutosDestacados(destacados)
        setIsLoading(false)
    }

    if (isLoading) {
        return (
            <h1>Cargando</h1>
        )
    }
    return (
        <>
            <div>
                <Menu></Menu>
                <div className="container">
                    <div className="header">
                        <h1><strong>A todo motor autos</strong></h1>
                        <p className>
                            Publicá sin registrarte y en un sólo paso. ¿Apurado por vender? Recibí ofertas en Efectivo de
                            concesionarios registrados. ¡Súper!
                        </p>
                    </div>
                    <div className="destacados">
                        <h2>Destacados</h2>
                        <div className="autos">
                            <Auto autos={autosDestacados}></Auto>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
