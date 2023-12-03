import "./cart.css";
import data from "./../../static/bannerDataElektronik";
import { BsCartPlusFill } from "react-icons/bs";
import { useState, useEffect } from "react";
function Cart() {
  const [datum, SetDatum] = useState(data);
  const [title, SetTitle] = useState("");

  let sortedData = data.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    } else {
      return -1;
    }
  });
  useEffect(() => {
    if (title === "") {
      SetDatum(sortedData);
      console.log(title);
    } else {
      SetDatum(
        data.filter((data) =>
          data.title.toLowerCase().includes(title.toLowerCase())
        )
      );
    }
  }, [title]);

  return (
    <div className="Cart">
      <input
        className="search"
        type="text"
        placeholder="Search"
        onChange={(e) => {
          SetTitle(e.target.value);
        }}
      />
      <div className="carts">
        {datum.map((item, index) => (
          <div key={index} className="cartItem">
            <h3>{item.title}</h3>
            <img src={item.images[0]} alt="" />
            <i>
              {item.description.length > 45
                ? item.description.slice(0, 30) + "..."
                : item.description}
            </i>
            <div className="buy">
              <span>{item.price} $</span>
              <button>
                Add to cart <BsCartPlusFill />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
