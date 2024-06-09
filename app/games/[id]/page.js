import axios from 'axios';

const Game = async ({ params }) => {
  const { id } = params;
  const res = await axios.get(`http://localhost:1337/api/games/${id}`);
  const game = res.data.data.attributes;

  return (
    <div className="container">
      <h1 className="mb-4">{game.Title}</h1>
      <div className="card">
        <div className="card-body">
          <p className="card-text"><strong>Genre:</strong> {game.Genre}</p>
          <p className="card-text"><strong>Platform:</strong> {game.Platforms}</p>
          <p className="card-text"><strong>Release Date:</strong> {game.ReleaseDate}</p>
          <p className="card-text"><strong>Rating:</strong> {game.Rating}</p>
          <p className="card-text">{game.Description}</p>
        </div>
      </div>
    </div>
  );
};

export async function generateStaticParams() {
  const res = await axios.get('http://localhost:1337/api/games');
  const games = res.data.data;

  return games.map((game) => ({
    id: game.id.toString(),
  }));
}

export default Game;
