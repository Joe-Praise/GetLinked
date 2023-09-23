import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Accordion = ({ info, question }) => {
  const [reveal, setReveal] = useState(true);

  return (
    <li onClick={() => setReveal((prevState) => !prevState)}>
      <div className="accordionBtn borderBottom">
        <p>{question}</p>
        <div>
          {reveal && (
            <span>
              <AiOutlinePlus />
            </span>
          )}
          {!reveal && (
            <span>
              <AiOutlineMinus />
            </span>
          )}
        </div>
      </div>
      {!reveal && <p className="borderBottom">{info}</p>}
    </li>
  );
};

export default Accordion;
