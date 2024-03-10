"use client";
import axios from "axios";
import Card from "../Card/Card";
import { useState } from "react";

const List = ({ data }) => {
  const [teams, setTeams] = useState();
  async function saveTeam(awayTeam, awayCity) {
    const body = {
      name: awayTeam,
      city: awayCity,
    };
    const res = await axios.post(`http://localhost:3000/api/save`, body);
    return res;
  }

  async function showTeam() {
    const res = await axios.get(`http://localhost:3000/api/save`);
    setTeams(res.data);
    return res.data;
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
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <button
          style={{
            background: "red",
            borderRadius: "4px",
            padding: "2px 6px",
            fontWeight: "600",
          }}
          onClick={() => {
            showTeam();
          }}
        >
          Mostrar
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {teams?.map((team) => (
            <span>
              {team.city} {team.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
