import { GameProvider } from './Context'
import Game from './Game.jsx'
import UpgradesBoard from './UpgradesBoard.jsx'

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