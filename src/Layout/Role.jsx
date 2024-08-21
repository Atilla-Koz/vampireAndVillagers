import React, { useState, useEffect } from 'react';

export default function Role() {
  const [players, setPlayers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [inputType, setInputType] = useState('player');
  const [assignments, setAssignments] = useState([]);

  // Load data from localStorage on initial render
  useEffect(() => {
    const storedPlayers = JSON.parse(localStorage.getItem('players'));
    const storedRoles = JSON.parse(localStorage.getItem('roles'));
    const storedAssignments = JSON.parse(localStorage.getItem('assignments'));

    if (storedPlayers) setPlayers(storedPlayers);
    if (storedRoles) setRoles(storedRoles);
    if (storedAssignments) setAssignments(storedAssignments);
  }, []);

  // Save players, roles, and assignments to localStorage whenever they change
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
    <section className="h-screen bg-custom-bg bg-cover bg-center font-uncial flex flex-col items-center justify-center">
      <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg w-4/5 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Enter Players and Roles
        </h1>

        <div className="flex justify-center mb-8">
          <div className="flex items-center">
            <select
              className="mr-4 p-3 border border-gray-300 rounded-lg"
              value={inputType}
              onChange={(e) => setInputType(e.target.value)}
            >
              <option value="player">Player</option>
              <option value="role">Role</option>
            </select>

            <input
              className="p-3 border border-gray-300 rounded-lg w-64"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={`Enter new ${inputType}`}
            />

            <button
              className="ml-4 p-3 bg-black/50 text-white rounded-lg hover:bg-white/50"
              onClick={handleAdd}
            >
              Add
            </button>
          </div>
        </div>

        <div className="flex justify-between space-x-8 mb-8">
          <div className="w-1/2">
            <h2 className="text-xl font-bold mb-4">Players</h2>
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

          <div className="w-1/2">
            <h2 className="text-xl font-bold mb-4">Roles</h2>
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

        <div className="flex justify-center space-x-8">
          <button
            className="ml-4 p-3 bg-black/50 text-white rounded-lg hover:bg-white/50"
            onClick={handleRandomAssign}
          >
            Assign
          </button>

          <button
            className="ml-4 p-3 bg-black/50 text-white rounded-lg hover:bg-white/50"
            onClick={handleRandomAssign}
          >
            Reassign
          </button>
        </div>

        {assignments.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Assignments</h2>
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
