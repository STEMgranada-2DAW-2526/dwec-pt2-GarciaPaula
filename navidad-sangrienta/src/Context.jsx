import { createContext, useEffect, useReducer } from 'react'

export const Context = createContext()

const INITIAL_STATE = {
    damageDealt: 0,
    waveGoal: 100,
    caramels: 20,
    damagePerShot: 1,
    autoShotsPerSecond: 1,
    upgrades: [],
    numeroOleada: 1,
    damageUpgradePrice: 15,
    damagePerShotIncrease: 0,
    multiplierPrice: 1 // Esto es para mí para que me funcione. Luego lo tengo que cambiar para meterlo en upgrades
}

function reducer(state, action) {

    let estadoSalida = state;

    if (action.type === "CLICK_SHOOT") {
        estadoSalida = {
            ...state,
            caramels: state.caramels + state.damagePerShot,
            damageDealt: state.damageDealt + state.damagePerShot
        }
    } else if (action.type === "AUTO_SHOOT" && state.caramels >= autoShotPrice) {
        estadoSalida = {
            ...state,
            caramels: state.caramels - autoShotPrice,
            damagePerShot: state.damagePerShot + 1
        }
    } else if (action.type === "BUY_MULTIPLIER" && state.caramels >= multiplierPrice) {
        estadoSalida = {
            ...state,
            caramels: state.caramels - multiplierPrice,
            autoShotsPerSecond: state.autoShotsPerSecond + 1
        }
    } else if (action.type === "BUY_DAMAGE_UPGRADE" && state.caramels >= damageUpgradePrice) {

        if (state.upgrades.lenght === 0) {

            estadoSalida = {
                ...state,
                caramels: state.caramels - damageUpgradePrice,
                damageUpgradePrice: state.damageUpgradePrice + 30,
                damagePerShotIncrease: state.damagePerShotIncrease + 2,
                upgrades: ["increase1"]
            }

        } else if (state.upgrades.lenght === 1) {

            estadoSalida = {
                ...state,
                caramels: state.caramels - damageUpgradePrice,
                damageUpgradePrice: state.damageUpgradePrice + 50,
                damagePerShotIncrease: state.damagePerShotIncrease + 5,
                upgrades: [...state.upgrades, "increase2"]
            }

        } else if (state.upgrades.lenght === 2) {

            estadoSalida = {
                ...state,
                caramels: state.caramels - damageUpgradePrice,
                damagePerShotIncrease: state.damagePerShotIncrease + 10,
                upgrades: [...state.upgrades, "increase3"]
            }
        } 

    } else if (action.type === "NEXT_WAVE" && state.damageDealt >= state.waveGoal) {
        estadoSalida = {
            ...state,
            damageDealt: 0,
            waveGoal: state.waveGoal + (state.numeroOleada * 1,10),
            numeroOleada: state.numeroOleada + 1
        }
    }

    return estadoSalida
}

export function Provider({ children }) {

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

    useEffect(() => {
        const timer = setInterval(() => {
            dispatch({ type: "SEGUNDO" })
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <Context.Provider value={{
            ...state,
            dispararManual: () => dispatch({ type: "CLICK_SHOOT" }),
            disparoAutomatico: () => dispatch({ type: "AUTO_SHOOT" }),
            aumentoDisparosAutomaticos: () => dispatch({ type: "BUY_MULTIPLIER" }),
            aumentoDanioPorDisparo: () => dispatch({ type: "BUY_DAMAGE_UPGRADE" }),
            siguienteOleada: () => dispatch({ type: "NEXT_WAVE" })
        }}>
            {children}
        </Context.Provider>
    )
}
