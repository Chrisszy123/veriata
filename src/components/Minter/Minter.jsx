import React, { useState, useEffect } from "react";
import "./new.css";
import { mint } from "../../utils/Interact";

function Minter() {
  const [counter, setCounter] = useState(1);
  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [seconds, setSecond] = useState("");

  const Subtract = () => {
    if (counter > 1) {
      setCounter(parseInt(counter) - 1);
    }
  };

  const Add = () => {
    if (counter < 3) {
      setCounter(parseInt(counter) + 1);
    }
  };
  const mint = async (mntQnt) => {
    const response = await mint(mntQnt);
  };

  useEffect(() => {
    // Set the date we're counting down to
    var countDownDate = new Date("Jan 1, 2024 4:00:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      // document.getElementById("demo").innerHTML =
      setDay(days);
      setHour(minutes);
      setMinute(days);
      setSecond(seconds);
      // setTime(
      //   days +
      //     "<brdays " +
      //     hours +
      //     "hours " +
      //     minutes +
      //     "minutes " +
      //     seconds +
      //     "seconds "
      // );

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
  }, []);

  return (
    <div className="minter_container">
      <h2 style={{ textAlign: "center", color: "#E7E6E8", fontSize: "35px" }}>
        Mint NFTs
      </h2>

      <div className="mint_section">
        <br />
        <div className="mint_value" style={{ color: "#E7E6E8" }}>
          <h3 style={{ color: "#E7E6E8", fontSize: "17px" }}>
            Mint 3 NFTs Per Wallet Max
          </h3>
          <h5 style={{ color: "#E7E6E8", fontSize: "14px" }}>
            {" "}
            NFT Price = 0.2 ETH + Gas Fee
          </h5>
        </div>
        <br />
        <div className="mint_box">
          <div className="mint" style={{ width: "40%" }}>
            <button
              onClick={() => Subtract()}
              style={{ border: "1px solid transparent", cursor: "pointer" }}
            >
              {" "}
              -{" "}
            </button>
            <span> {counter}</span>
            <button
              onClick={() => Add()}
              style={{ border: "1px solid transparent", cursor: "pointer" }}
            >
              {" "}
              +{" "}
            </button>
          </div>

          <button
            className="circle_button"
            style={{
              cursor: "pointer",
            }}
            onClick={() => setCounter(3)}
          >
            {" "}
            3{" "}
          </button>
        </div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <div
            className="cs-btn_group"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href="#" className="cs-btn cs-btn_filed cs-accent_btn" style={{width: "60%"}}>
              <span>Mint Now</span>
            </a>
          </div>

          <div
            style={{
              display: "flex",
              color: "#fff",
              fontSize: "2rem",
              gap: "1.7rem",
              marginTop: "2rem",
            }}
          >
            <div>
              {day} <br />{" "}
              <span
                style={{
                  fontSize: "1rem",
                }}
              >
                Days
              </span>
            </div>
            <div>
              {hour} <br />{" "}
              <span
                style={{
                  fontSize: "1rem",
                }}
              >
                Hours
              </span>
            </div>
            <div>
              {minute} <br />{" "}
              <span
                style={{
                  fontSize: "1rem",
                }}
              >
                Minutes
              </span>
            </div>
            <div>
              {seconds} <br />{" "}
              <span
                style={{
                  fontSize: "1rem",
                }}
              >
                Seconds
              </span>
            </div>
          </div>
        </div>
        <h5
          style={{
            textAlign: "center",
            fontSize: "12px",
            marginTop: "2rem"
          }}
        >
          Please use Chrome/Firefox with metamask extension for PC or metamask
          app for mobile
        </h5>
        <h3 className="contract">
          <a style={{
            textAlign: "center",
            fontSize: "14px",
            cursor: "pointer"
          }}>View Contract</a>
        </h3>
      </div>
    </div>
  );
}

export default Minter;
