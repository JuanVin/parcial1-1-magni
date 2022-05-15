const Menu = () => {

    function traerParametro(){
        let parametro = document.getElementById("buscador").value.trim()   
        if(parametro !== null && parametro !== "") {
            window.location.href = `/busqueda/${parametro}`
        }else {
            window.alert("Debe ingresar un parametro")
        }
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#">Navbar</a>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/nuestros_autos">Nuestros autos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contacto">Concacto</a>
                    </li>
                </ul>

            </div>
            <input class="form-control mr-sm-2" style={{width: "15%"}} type="search" id="buscador" placeholder="Search" aria-label="Search"></input>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={traerParametro}>Buscar</button>
        </nav>
    )
}

export default Menu