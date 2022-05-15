import { useParams } from "react-router-dom"
import Menu from "./Menu"
import Auto from "./Auto"
import json from "../data/autos.json"
import "./Home.css"
const Buscador = () => {
    let { parametro } = useParams(),
        autos = []

    parametro.toLowerCase()

    function traerPorParametro() {
        for (const auto in json) {
            if (json[auto].marca.toLowerCase().includes(parametro) || json[auto].modelo.toLowerCase().includes(parametro) || json[auto].anio.toLowerCase().includes(parametro)) {
                autos.push(json[auto])
            }
        }
        return autos
    }
    return (
        <>
            <Menu></Menu>
            <div className="container">
                <div className="destacados mt-5 p-3">
                    <h2>Encontrados: </h2>
                    <Auto autos={traerPorParametro()}></Auto>
                </div>
            </div>
        </>
    )
}

export default Buscador