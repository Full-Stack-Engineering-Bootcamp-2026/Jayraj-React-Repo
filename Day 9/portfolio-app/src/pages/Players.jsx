import { useState } from "react";

function Players() {
  const players = [
    { id: 1, name: "LeBron James", team: "Lakers" },
    { id: 2, name: "Stephen Curry", team: "Warriors" },
    { id: 3, name: "Kevin Durant", team: "Suns" },
    { id: 4, name: "Kyrie Irving", team: "Mavericks" },
    { id: 5, name: "Giannis", team: "Bucks" }
  ];

  const [visibleCount, setVisibleCount] = useState(3);

  const showMore = () => {
    setVisibleCount(players.length);
  };

  const showLess = () => {
    setVisibleCount(3);
  };

  return (
    <div>
      <h1>Top Players</h1>

      {players.slice(0, visibleCount).map((player) => (
        <div key={player.id} className="card">
          <h3>{player.name}</h3>
          <p>Team: {player.team}</p>
        </div>
      ))}

      {visibleCount < players.length ? (
        <button onClick={showMore}>Show More</button>
      ) : (
        <button onClick={showLess}>Show Less</button>
      )}
    </div>
  );
}

export default Players;