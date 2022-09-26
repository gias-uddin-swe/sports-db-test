import React, { useState } from "react";
import Nav from "../Nav/Nav";
import Players from "../Players/Players";
import "./Home.css";
import Swal from "sweetalert2";

const Home = () => {
  const [cart, setCart] = useState([]);
  // const [total, setTotal] = useState(0);

  const handleDelete = (id) => {
    console.log(id);
    const newCart = cart.filter((p) => p.idPlayer !== id);
    setCart(newCart);
  };

  // cart?.reduce(function (accumulator, currentValue) {
  //   const prev = parseFloat(accumulator);
  //   const present = parseFloat(currentValue?.idTeam);

  //   console.log(prev, present);
  // }, 0);

  return (
    <div>
      <Nav></Nav>
      <div className="main-container">
        <div className="left-side">
          <Players cart={cart} setCart={setCart}></Players>
        </div>
        <div className="right-side">
          <div className="cart">
            <h4>total {cart?.length} player Added</h4>

            <div>
              {cart?.map((pd, index) => (
                <div className="cart-details-container">
                  <p>{index + 1}</p>
                  <h6> {pd?.strPlayer}</h6>
                  <button
                    onClick={(e) => handleDelete(pd?.idPlayer)}
                    className="delete-btn"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
