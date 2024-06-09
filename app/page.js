"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Home = () => {
  const [games, setGames] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:1337/api/games');
      const fetchedGames = res.data.data.map(game => ({
        id: game.id,
        ...game.attributes
      }));
      setGames(fetchedGames);
    };
    fetchData();
  }, []);

  const filteredGames = games.filter((game) =>
    game.Title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="mb-4">Game Reviews</h1>
      <input
        type="text"
        placeholder="Search games..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="form-control mb-3"
      />
      <div className="row">
        {filteredGames.map((game) => (
          <div key={game.id} className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{game.Title}</h5>
                <p className="card-text"><strong>Genre:</strong> {game.Genre}</p>
                <p className="card-text"><strong>Platform:</strong> {game.Platforms}</p>
                <p className="card-text"><strong>Rating:</strong> {game.Rating}</p>
                <Link href={`/games/${game.id}`} className="btn btn-primary">Read Review</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
