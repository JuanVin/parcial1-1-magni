import "./Auto.css"

const Auto = (objeto) => {

    let cartaAuto = []

    objeto.autos.map((auto, index) => {
        {
            cartaAuto.push(
                <div className="grid-item">
                    <div key={index} className="tarjeta">
                        <a href={`/detalle_auto/${index}`}><img className="card-img-top" src={process.env.PUBLIC_URL + "/img/" + auto.imagen} alt="Card image cap"></img></a>
                        <h5 className="card-title">{auto.marca}</h5>
                            <p className="card-text">{auto.modelo}</p>
                        {(auto.precio === "0")
                                ?
                                <p style={{ color: "rgb(243, 117, 59)", fontWeight: "15px" }} className="card-text"><strong>Consular</strong></p>
                                :
                                <p style={{ color: "rgb(243, 117, 59)", fontWeight: "15px" }} className="card-text"><strong>${auto.precio}</strong></p>
                            }
                    </div>
                </div>
            )
        }

    })

    return (
        <div className="grid-container">
            {cartaAuto}
        </div>
    )
}
export default Auto