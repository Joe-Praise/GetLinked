import React from "react";
import successfulMan from "../../images/successful-man-3025713-2526911 1.png";
import successfulDone from "../../images/successfully-done-5108472-4288033 1.png";
import wink from "../../images/wink.png";
import Wrapper from "../../UI/Wrapper";

const RegisterModal = ({ onCloseModal }) => {
  return (
    <Wrapper className={"modalWrapper"}>
      <div className="modalBorderWrapper">
        <div className=" regsiterImgContainer">
          <img
            src={successfulDone}
            alt="png of a vector"
            className="privacyImgVector"
          />

          <img
            src={successfulMan}
            alt="png of a catoon character on an open lock"
            className="privacyImgPadlock"
          />
        </div>
        <div className="congratsTextContainer">
          <h1>
            <span>Congratulations</span> you have successfully Registered!
          </h1>
          <p>yes, it is easy and you did it!</p>
          <p>
            check your mail box for next step{" "}
            <img src={wink} alt="a wink emoji" />
          </p>
          <button onClick={onCloseModal} className="Register">
            Back
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default RegisterModal;
