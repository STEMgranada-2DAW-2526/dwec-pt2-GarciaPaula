import { useContext } from 'react'
import { Context } from 'Context'
import torre from '/assets/torre.png'

export default function Game() {

    const { regalos, fabricarRegalo } = useContext(Context)

    return (
        <div class="panel-regalo">
            <h1 class="titulo-principal">🎁 Fábrica de Regalos 🎁</h1>

            <p class="contador-regalos">
                Regalos creados: {regalos.toFixed(2)} {/* Para mostrar 2 decimales sin cambiar el número original */}
            </p>

            <img
                className="regalo-img"
                src={regalo}
                onClick={fabricarRegalo}
            />
        </div>
    )
}
