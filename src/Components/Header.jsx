import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Header() {
  return (
    <section className="flex flex-row justify-between gap-8 bg-white/50 p-4">
      <div>
        <button>
          <h4>V&V</h4>
        </button>
      </div>
      <div className="flex gap-8">
        <button>
          <Link to="/">
            <h4>Home</h4>
          </Link>
        </button>
        <button>
          <Link to="/role">
            <h4>Role</h4>
          </Link>
        </button>
        <button>
          <Link to="/ai">
            <h4>AI</h4>
          </Link>
        </button>
      </div>
    </section>
  );
}
