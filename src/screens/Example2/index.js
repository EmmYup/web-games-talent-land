import Game2 from '../../games/Game2';
import { Link } from 'react-router-dom';

const Example2 = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center h-screen font-gameboy bg-gray-900 text-pacman-yellow">
      <Game2 />

      <Link to="/">
        <button className="bg-green-500 text-white p-1 my-4 rounded w-40 self-center font-gameboy">
          Finalizar juego
        </button>
      </Link>
    </div>
  );
};

export default Example2;
