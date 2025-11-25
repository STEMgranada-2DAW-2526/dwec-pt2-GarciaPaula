import { createContext, useEffect, useReducer } from 'react'

export const Context = createContext()

const INITIAL_STATE = {
    damageDealt: 0,
    waveGoal: 100,
    caramels: 20,
    damagePerShot: 1,
    autoShotsPerSecond: 1,
    upgrades: [],
    numeroOleada: 1
}

function reducer(state, action) {

    let nuevoEstado = { ...state }
    
    if (action.type === "CLICK_SHOOT") {
        nuevoEstado.damagePerShot = state.damagePerShot + 1
    } else if (action.type === "AUTO_SHOOT" && state.caramels >= upgradePrice) {
        nuevoEstado.caramels = state.caramels - state.upgradePrice
    

    return nuevoEstado
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
