import { useContext } from 'react'
import { Context } from 'Context'
import torre from './assets/torre.png'

export default function Game() {

    const {  damageDealt, waveGoal, caramels, damagePerShot, autoShotsPerSecond, upgrades, waveNumber,
    damageUpgradePrice, damagePerShotIncrease, multiplierPrice, dispararManual } = useContext(Context)

    return (
        <div>
            <h1 >🎁 Navidad Sangrienta 🎁</h1>

            <p >
                Daño de Oleada: {damageDealt} / {waveGoal}
                Caramelos: {caramels}
                Oleada: {waveNumber}
            </p>

            <img
                src={torre}
                onClick={dispararManual}
            />
        </div>
    )
}
