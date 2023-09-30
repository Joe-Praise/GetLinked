import Star from "../UI/Star";
import Accordion from "./Accordion";

export default function FAQs({ h3value, colorH3, text, accordion, star }) {
  return (
    <div className="overviewTextWrapper " id="faqs">
      {star?.map((el) => {
        return el?.location === "text" ? (
          <Star image={el.star} {...el.position} key={el.id} />
        ) : null;
      })}
      <div className="fqaHeader">
        <div>
          <h3>
            {h3value}
            <span>{colorH3}</span>
          </h3>
          <p>{text}</p>
        </div>
      </div>
      <div>
        <ul className="accordion listStyleNone">
          {accordion.map((el) => {
            return (
              <Accordion info={el.info} question={el.question} key={el.id} />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
