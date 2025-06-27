const { use, default: React } = require("react")

const { useState } = React

const App = () => {
    const [izquierdaHabilitado, SetIzquierdaHabilitado]= useState(false)
    const [derechoHabilitado, SetDerechoHabilitado]= useState(true)
}

const toogleDerecho = () => {
    SetIzquierdaHabilitado(!izquierdaHabilitado)
    SetDerechoHabilitado(!SetDerechoHabilitado)
}

return (
    <>
    <button disabled= {izquierdaHabilitado} onClick={tooIzquierdo}>
        Izquierdo
    </button>
    <button disabled= {derechoHabilitado} onClick={toogleDerecho}>
        Derecho
    </button>
    </>
)


const contenedor = document.getElementById("root")
const root= ReactDOM.createRoot(contenedor)
root.render(<app/>)