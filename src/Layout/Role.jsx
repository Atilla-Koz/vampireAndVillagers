import { useState, useEffect } from 'react';
import arrow from '../assets/arrow.svg';
// import play from '../assets/play.svg';
// import elden from '../assets/elden.mp3';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Role() {
  const [players, setPlayers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [inputType, setInputType] = useState('player');
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const storedPlayers = JSON.parse(localStorage.getItem('players'));
    const storedRoles = JSON.parse(localStorage.getItem('roles'));
    const storedAssignments = JSON.parse(localStorage.getItem('assignments'));

    if (storedPlayers) setPlayers(storedPlayers);
    if (storedRoles) setRoles(storedRoles);
    if (storedAssignments) setAssignments(storedAssignments);
  }, []);

  useEffect(() => {
    localStorage.setItem('players', JSON.stringify(players));
    localStorage.setItem('roles', JSON.stringify(roles));
    localStorage.setItem('assignments', JSON.stringify(assignments));
  }, [players, roles, assignments]);

  const handleAdd = () => {
    if (inputType === 'player' && inputValue) {
      setPlayers([...players, inputValue]);
    } else if (inputType === 'role' && inputValue) {
      setRoles([...roles, inputValue]);
    }
    setInputValue('');
  };

  const handleRemovePlayer = (index) => {
    setPlayers(players.filter((_, i) => i !== index));
  };

  const handleRemoveRole = (index) => {
    setRoles(roles.filter((_, i) => i !== index));
  };

  const handleRandomAssign = () => {
    if (players.length !== roles.length) {
      alert('The number of players and roles must be the same!');
      return;
    }

    const shuffledRoles = [...roles].sort(() => 0.5 - Math.random());
    const pairedAssignments = players.map((player, index) => ({
      player,
      role: shuffledRoles[index],
    }));
    setAssignments(pairedAssignments);
  };

  return (
    <section className="min-h-screen bg-custom-bg bg-cover bg-center font-uncial flex flex-col items-center justify-center p-4">
      <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="flex flex-row justify-between">
          <Link to="/">
            <img className="w-4" src={arrow} />{' '}
          </Link>
          {/* <img className="w-4" src={play} />{' '} */}
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Enter Players and Roles
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
          <select
            className="p-3 border border-gray-300 rounded-lg w-full md:w-auto"
            value={inputType}
            onChange={(e) => setInputType(e.target.value)}
          >
            <option value="player">Player</option>
            <option value="role">Role</option>
          </select>

          <input
            className="p-3 border border-gray-300 rounded-lg w-full md:w-64"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={`Enter new ${inputType}`}
          />

          <button
            className="p-3 bg-black/50 text-white rounded-lg hover:bg-white/50 w-full md:w-auto"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-8 mb-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-lg md:text-xl font-bold mb-4">Players</h2>
            <ul className="bg-gray-100 p-4 rounded-lg shadow-inner">
              {players.map((player, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b border-gray-300 py-2"
                >
                  {player}
                  <button
                    className="text-black/50 ml-2"
                    onClick={() => handleRemovePlayer(index)}
                  >
                    &#x2716;
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-lg md:text-xl font-bold mb-4">Roles</h2>
            <ul className="bg-gray-100 p-4 rounded-lg shadow-inner">
              {roles.map((role, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b border-gray-300 py-2"
                >
                  {role}
                  <button
                    className="text-black/50 ml-2"
                    onClick={() => handleRemoveRole(index)}
                  >
                    &#x2716;
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <button
            className="p-3 bg-black/50 text-white rounded-lg hover:bg-white/50 w-full md:w-auto"
            onClick={handleRandomAssign}
          >
            Assign
          </button>

          <button
            className="p-3 bg-black/50 text-white rounded-lg hover:bg-white/50 w-full md:w-auto"
            onClick={handleRandomAssign}
          >
            Reassign
          </button>
        </div>

        {assignments.length > 0 && (
          <div className="mt-8">
            <h2 className="text-lg md:text-xl font-bold mb-4">Assignments</h2>
            <ul className="bg-gray-100 p-4 rounded-lg shadow-inner">
              {assignments.map((assignment, index) => (
                <li key={index} className="py-2">
                  {assignment.player} - {assignment.role}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
