import Menu from "./Menu"

const Contacto = () => {
    return (
        <div>
            <Menu></Menu>
            <div className="container">
                <h1 style={{color: "grey"}} className="mt-5">
                    ¿Necesitas ayuda o tenes alguna consulta?
                </h1>
                <p style={{fontSize: "20px"}}className="mt-5">Es importante que sepas que sólo somos un sitio web de clasificados. <strong>No nos hagas consultas
                    respecto a información de los vehículos que se publican en el portal.</strong>  Éstas son responsabilidad
                    exclusiva de sus anunciantes, y debes contactarlos desde la ficha de cada vehículo.
                </p>
                <p style={{fontSize: "20px"}} className="mt-5">
                    ¿Aún querés escribirnos?, entonces envíanos tus consultas, dudas o sugerencias a
                    <a href="#">consultas@atodomotor.com.ar</a>, te responderemos a la brevedad.
                </p>
            </div>
        </div>
    )
}
export default Contacto