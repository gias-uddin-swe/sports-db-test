import React, { useState, useEffect } from "react";
import "./SinglePlayer.css";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
const SinglePlayer = ({ info, cart, setCart }) => {
  const [isBookmark, setIsBookmark] = useState(null);
  const [control, setControl] = useState(false);

  const {
    strPlayer,
    idPlayer,
    strNationality,
    strDescriptionEN,
    strGender,
    strThumb,
  } = info || {};

  useEffect(() => {
    console.log("hello");
    const getBookmark = localStorage.getItem("bookmark");
    const myBookmark = JSON.parse(getBookmark);
    const isExist = myBookmark?.find((p) => p?.idPlayer === idPlayer);
    if (isExist) {
      setIsBookmark(true);
    }
  }, [info, control]);

  const handleRemoveBookmarked = () => {
    setControl(!control);
    const getBookmark = localStorage.getItem("bookmark");
    const myBookmark = JSON.parse(getBookmark);
    const isExist = myBookmark?.filter((p) => p?.idPlayer !== idPlayer);
    localStorage.setItem("bookmark", JSON.stringify(isExist));
    setControl(!control);
  };
  const handleAddToCart = () => {
    var result = cart?.reduce(function (acc, obj) {
      const prev = parseFloat(acc);
      const present = parseFloat(obj?.idPlayer);
      return prev + present;
    }, 0);
    if (result > 102506757) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Cross your limit need to recharge",
        footer: '<a href="">Why do I have this issue?</a>',
      });
      return;
    }
    const isExist = cart?.find((p) => p.idPlayer === info?.idPlayer);
    if (cart?.length >= 5) {
      Swal.fire({
        icon: "error",
        title: "Oops... Full ",
        text: "Sorry you can not add more the 5 player",
      });
      return;
    }
    if (isExist) {
      toast("Sorry this player already Added!!");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Sorry this player already Added!!",
      });
      return;
    } else {
      const newPlayer = [...cart, info];
      setCart(newPlayer);
      console.log(newPlayer);
      Swal.fire("Good job!", "You clicked the button!", "success");
    }
  };

  console.log(control);
  const handleBookmark = () => {
    let bookmark = [];
    const info = {
      strPlayer,
      idPlayer,
      strNationality,
      strDescriptionEN,
      strGender,
      strThumb,
      bookmark: "true",
    };
    const getBookmark = localStorage.getItem("bookmark");
    const myBookmark = JSON.parse(getBookmark);
    if (myBookmark) {
      const isExistBookmarked = myBookmark?.find(
        (p) => p.idPlayer === idPlayer
      );
      setControl(!control);
      if (isExistBookmarked) {
        alert("this player alrady bookamrk");
      } else {
        bookmark.push(info);
        const newBookmark = [...myBookmark, info];

        localStorage.setItem("bookmark", JSON.stringify(newBookmark));
        setControl(!control);
        console.log(newBookmark);
      }
    } else {
      bookmark.push(info);
      const readyToBookmark = JSON.stringify(bookmark);
      localStorage.setItem("bookmark", readyToBookmark);
      setControl(!control);
    }
  };
  return (
    <div className="SinglePlayer" data-aos="zoom-in">
      <div className="card">
        <div className="player-img">
          <img className="player-photo" src={strThumb} alt="" />
        </div>
        <h3>{strPlayer}</h3>
        <p>
          {strDescriptionEN
            ? strDescriptionEN?.slice(0, 70)
            : " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta hic pariatur nesciunt, cumque tempore "}
        </p>
        <div className="buttons">
          <button className="player-btn">Details</button>

          <button onClick={handleAddToCart} className="player-btn">
            Add to Team
          </button>
          {isBookmark ? (
            <button
              onClick={handleRemoveBookmarked}
              className="bookmarked-btn bookmark-btn"
            >
              Bookmarked
            </button>
          ) : (
            <button onClick={handleBookmark} className="bookmark-btn">
              Bookmark
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SinglePlayer;
