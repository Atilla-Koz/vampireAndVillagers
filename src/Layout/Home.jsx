import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Home() {
  return (
    <section className="h-screen bg-custom-bg bg-cover bg-center font-uncial">
      <div className="h-screen flex flex-col items-center justify-center gap-8">
        <h1 className="text-[red]/65 ">Vampire And Villagers</h1>
        <Link to="/role">
          {' '}
          <button className="p-[15px 40px 15px 40px] bg-white/50 ]">
            <h3 className="text-black/50">Start</h3>
          </button>
        </Link>
        <Link to="/how">
          {' '}
          <button className="p-[15px 40px 15px 40px] bg-white/50 ]">
            <h3 className="text-black/50">How to play</h3>
          </button>
        </Link>
        <h2 className="text-white/75 text-center wave-text">
          Enjoyable games, with love from Atilla Koz...{' '}
        </h2>
      </div>
    </section>
  );
}
