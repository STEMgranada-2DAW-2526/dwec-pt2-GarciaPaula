import { createContext, useEffect, useReducer } from 'react'

export const Context = createContext()

const INITIAL_STATE = {
    damageDealt: 0,
    waveGoal: 100,
    caramels: 20,
    damagePerShot: 1,
    autoShotsPerSecond: 1,
    upgrades: []
}
