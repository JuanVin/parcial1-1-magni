import { useParams } from "react-router-dom"
import "./detalleAuto.css"
import json from "../data/autos.json"
import Menu from "./Menu"
const DetalleAuto = () => {
    let { index } = useParams()
    let auto
    for (const key in json) {
        if (index === key) auto = json[key]
    }
    return (

        <>
            <Menu></Menu>
            <div className="container">

                <div className="row mt-5">
                    <h1 className="mb-5"> {auto.marca} - {auto.modelo}</h1>
                    <div className="col">
                        <img className="card-img-top" src={process.env.PUBLIC_URL + "/img/" + auto.imagen} alt="Card image cap"></img>
                    </div>
                    <div className="col">
                        <h2>Detalles: </h2>
                        <h2>{auto.marca}</h2>
                        <h2>{auto.modelo}</h2>
                        <h3>{auto.localidad}</h3>
                        <p className="mt-5">Año: {auto.anio}</p>
                        {(auto.precio === "0")
                                ?
                                <p style={{ color: "rgb(243, 117, 59)", fontSize: "25px" }} className="card-text"><strong>Consular</strong></p>
                                :
                                <p style={{ color: "rgb(243, 117, 59)", fontSize: "25px" }} className="card-text">Precio: <strong>${auto.precio}</strong></p>
                            }
                        <a href="/nuestros_autos" className="btn btn-primary">Volver</a>
                    </div>
                </div>
            </div></>

    )
}
export default DetalleAuto