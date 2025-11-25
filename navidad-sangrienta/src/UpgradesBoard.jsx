import canion from './assets/canion.png'
import reno from './assets/reno_lanza_cohetes.png'
import arbol from './assets/arbol_laser.png'
import multiplicador from './assets/multiplicador.png'

export default function UpgradesBoard() {

    const {
    damageUpgradePrice,
    accion
    } = useContext(Context)


    return (

        <div>
            <h2>MEJORAS</h2>
            <div>
                <img src={canion} onClick={accion} />
                <p > Cañón de Turrón Explosivo</p>
                <p> {damageUpgradePrice}</p>
            </div>
        </div>)

}