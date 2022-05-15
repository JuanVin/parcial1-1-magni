
import Menu from "./Menu"
import "./nuestrosAutos.css"
import json from "../data/autos.json"
import Car from "./Auto"
const NuestrosAutos = (objeto) => {
    let todosLosAutos = []

    for (const auto in json) {
        todosLosAutos.push(json[auto])
    }
    return (
        <>
            <Menu></Menu>
            <div className="container">
                <div className="todosLosAutos mt-5">
                    <h2>Nuestros autos: </h2>
                    <Car autos={todosLosAutos}></Car>
                </div>
            </div>
        </>
    )
}
export default NuestrosAutos