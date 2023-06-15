import React, { useState } from "react";
import "./Form.css"

function Form() {


  const [cardHolderName, setcardHolderName] = useState("");
  const [cardNumber, setcardNumber] = useState("");
  const [expDate, setexpDate] = useState("");
  const [cvc, setcvc] = useState("");
  const [error, seterror] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cardHolderName.length === 0 || cardNumber.length === 0 || expDate.length === 0 || cvc.length === 0)
      seterror(true)
    if (cardHolderName === "toLowerCase()"){
      cardHolderName.toUpperCase();
    }
  }


  return (
    <>
      <div className="images">
        <img className="side" src="images/side.png" alt="" />
        <img className="front" src="images/creditFront.png" alt="" />
        <img className="back" src="images/creditback.png" alt="" />
        <img className="round1" src="images/round1.png" alt="" />
        <img className="round2" src="images/round2.png" alt="" />
        <p className="cvcno">{cvc}</p>
        <p className="name">{cardHolderName} </p>
        <p className="cardNO">{cardNumber}</p>
        <p className="year">{expDate}</p>
      </div>



      <form onSubmit={handleSubmit}>
        <div>
          <label>CARDHOLDER NAME</label>
          <input
            placeholder="e.g. Jane Appleseed"
            value={cardHolderName}
            type="text"
            autoFocus
            style={{ textTransform: "uppercase", textAlign: "center"  }}
            onChange={(e) => setcardHolderName(e.target.value)}
          />
          {error && cardHolderName.length <= 0 ?
            <p>CardHolder Name Required!</p> : ""}
        </div>
        <br />
        <div>
          <label>CARD NUMBER</label>
          <input
            value={cardNumber}
            placeholder="e.g. 1234 5678 9123 0000"
            autoFocus
            style={{ textAlign: "center" }}
            maxLength={16}
            onChange={(e) => setcardNumber(e.target.value)}
          />
          {error && cardNumber <= 0 ?
            <p>Card Number Required!</p> : ""}
        </div>
        <br />
        <div className="exp">
          <label>EXP DATE ( MM/YY )</label>
          <input
            placeholder="MM/YY"
            autoFocus
            maxLength={5}
            style={{ textAlign: "center" }}
            onChange={(e) => setexpDate(e.target.value)}
          /> &nbsp;&nbsp;
          {error && expDate <= 0 ?
            <p>Expiry Date (MM/YY) Required</p> : ""}
        </div>
        <br />
        <div>
          <label>CVC</label>
          <input
            value={cvc}
            autoFocus
            placeholder="e.g. 123"
            maxLength={3}
            style={{ textAlign: "center", width: "30%", display: "inline" }}
            onChange={(e) => setcvc(e.target.value)}
          />
          {error && cvc <= 0 ?
            <p>CVC Required</p> : ""}
        </div>
        <br />
        <div>
          <button>Confirm</button>
        </div>
      </form>
    </>
  );
}

export default Form;
