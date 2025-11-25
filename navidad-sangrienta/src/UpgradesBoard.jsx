import canion from './assets/canion.png'
import reno from './assets/reno_lanza_cohetes.png'
import torre from './assets/torre.png'
import arbol from './assets/arbol_laser.png'
import multiplicador from './assets/multiplicador.png'

export default function UpgradesBoard() {
    return (

        <div>
            <h2>MEJORAS</h2>
            <div>
                <img src={canion} onClick={accion} />
                <p >{nombre}</p>
                <p> {damageUpgradePrice}</p>
            </div>
        </div>)

}