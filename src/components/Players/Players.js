import React, { useEffect, useState } from "react";
import "./Players.css";
import SinglePlayer from "./../SinglePlayer/SinglePlayer";

const Players = ({ cart, setCart }) => {
  const [player, setPlayer] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPlayer(data?.player);
      });
  }, [search]);

  return (
    <div>
      <input
        type="text"
        className="searchBox"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="search-button" type="button">
        Search
      </button>
      <h1>
        we have total <strong>{player?.length} </strong>players{" "}
      </h1>
      <div className="player-container">
        {player?.map((pd) => (
          <SinglePlayer
            key={pd?.idPlayer}
            info={pd}
            cart={cart}
            setCart={setCart}
          ></SinglePlayer>
        ))}
      </div>
    </div>
  );
};

export default Players;
