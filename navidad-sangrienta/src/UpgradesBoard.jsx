import canion from './assets/canion_turron.png'
import reno from './assets/reno_lanza_cohetes.png'
import arbol from './assets/arbol_laser.png'
import multiplicador from './assets/multiplicador.png'

export default function UpgradesBoard() {

    const {  damageDealt, waveGoal, caramels, damagePerShot, autoShotsPerSecond, upgrades, waveNumber,
        damageUpgradePrice, damagePerShotIncrease, multiplierPrice, dispararManual } = useContext(Context)


    return (

        <div>
            <h2>Mejoras de daño</h2>
            <div>
                <img src={canion} onClick={accion} />
                <p > Cañón de Turrón Explosivo</p>
                <p> {damageUpgradePrice}</p>
            </div>
        </div>)

}