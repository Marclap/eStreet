import { useSate } from 'next'
export default function Formulario() {
    return (
        <>
            <div class="bg-red-500 p-4 m-2">Formulario</div>
            <form class="row">
                <div class="col-md-3">
                    <input placeholder="Ingrese su nombre"></input>
                </div>
                <div class="col-md-3">
                    <input placeholder="Ingrese su apellido"></input>
                </div>
                <div class="col-md-3">
                    <input placeholder="Fecha de nacimiento"></input>
                </div>
                <div class="col-md-3">
                    <input placeholder="Ingrese su cedula"></input>
                </div>
                <div class="col-md-3">
                    <input placeholder="Ingrese correo electrónico"></input>
                </div>
                <div class="col-md-3">
                    <input placeholder="Ingrese contraseña"></input>
                </div>
                <div class="col-md-3">
                   <button>Guardar</button>
                </div>
            </form>
        </>
    )
}
