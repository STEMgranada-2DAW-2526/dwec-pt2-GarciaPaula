import { GameProvider } from './Context'

export default function App() {

  return (
    <>
      <GameProvider>
        <div className="contenedor-principal">
          <Game />
          <UpgradesBoard />
        </div>
      </GameProvider>
    </>
  )
}