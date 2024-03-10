"use client";
import axios from "axios";
import Card from "../Card/Card";

const List = ({ data }) => {
  async function saveTeam(awayTeam, awayCity) {
    const body = {
      name: awayTeam,
      city: awayCity,
    };
    const res = await axios.post(`http://localhost:3000/api/save`, body);
    return res;
  }

  return (
    <div>
      <div className="flex items-center justify-center">
        <span
          style={{
            display: "flex",
            width: "10px",
            borderRadius: "10px",
            border: "7px solid red",
            marginRight: "8px",
          }}
        ></span>{" "}
        AO VIVO
      </div>
      {data.scoreboard.games.map((game) => (
        <>
          <Card
            awayTeam={game.awayTeam.teamName + " " + game.awayTeam.teamCity}
            homeTeam={game.homeTeam.teamName + " " + game.homeTeam.teamCity}
          />
          <button
            style={{
              background: "blue",
              borderRadius: "4px",
              padding: "2px 6px",
            }}
            onClick={() => {
              saveTeam(game.awayTeam.teamName, game.awayTeam.teamCity);
            }}
          >
            Save
          </button>
        </>
      ))}
    </div>
  );
};

export default List;
