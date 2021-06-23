import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import selectors from '../../store/selectors/app';
import apexLogo from '../../assets/apex-logo-white.png';
import { useState } from 'react';
import { useEffect } from 'react';

const Home = props => {
  const [easterEggCount, setEasterEggCount] = useState(0);
  const [isEasterEggEnabled, setIsEasterEggEnabled] = useState(false);
  const { globalScore } = props;
  const examples = [
    {
      path: 'example-1',
      description: 'Ejemplo actualizando react store puntaje desde pixijs',
    },
    { path: 'example-2', description: '' },
    { path: 'example-3', description: '' },
  ];

  useEffect(() => {
    if (easterEggCount === 5) {
      setIsEasterEggEnabled(true);
    }
  }, [easterEggCount]);

  const handleLogoClick = () => {
    setEasterEggCount(easterEggCount + 1);
  };

  return (
    <div className="flex flex-col items-center h-screen bg-gray-900 text-pacman-yellow">
      <img
        alt="apex logo"
        src={apexLogo}
        className="mt-4 w-72 cursor-help"
        onClick={handleLogoClick}
      />

      <p className="font-gameboy text-3xl mt-20">Reactjs + PixiJS</p>

      <div className="flex mt-20">
        <p className="font-gameboy text-xl">SELECT YOUR GAME</p>

        <p className="italic font-pixel text-lg">(example)</p>
      </div>

      <div className="border-l-8 border-t-8 border-r-8 px-8 py-4 mt-10 font-gameboy flex border-blue-bonnet">
        <strong>Your Global Score:</strong>
        <p>{globalScore}</p>
      </div>

      <div className="border-8 w-1/2 flex flex-col border-blue-bonnet">
        <div className="flex flex-col lg:flex-row">
          {examples.map((example, index) => (
            <div
              className="flex flex-col flex-1 justify-between items-center border-8 m-4 h-60 hover:border-4 hover:border-pacman-yellow"
              key={`game${index + 1}Score`}>
              <div className="flex flex-col p-4">
                <p className="p-1">{example.description}</p>

                <Link
                  className="bg-green-500 text-white p-1 my-4 rounded w-40 self-center font-gameboy hover:opacity-80 text-center mt-8"
                  to={example.path}>
                  Play
                </Link>
              </div>

              <div className="flex font-gameboy">
                <strong>Last Score:</strong>{' '}
                <p>{props[`lastGame${index + 1}Score`]}</p>
              </div>
            </div>
          ))}
        </div>
        {/* 
        <button className="bg-green-500 text-white p-1 my-4 rounded w-40 self-center font-gameboy">
          Play!
        </button> */}
      </div>
    </div>
  );
};

export default connect(selectors.propsSelector, null)(Home);
