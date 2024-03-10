"use client";

const Card = ({ awayTeam, homeTeam }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <span>
        {awayTeam || "undefined"} X {homeTeam || "undefined"}
      </span>
    </div>
  );
};

export default Card;
