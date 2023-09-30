import GlowSpot from "../UI/GlowSpot";
import Star from "../UI/Star";
export default function OverviewText({ h3value, colorH3, text, star }) {
  return (
    <div className="overviewTextWrapper">
      {star?.map((el) => {
        return el?.location === "text" ? (
          <Star image={el.star} {...el.position} key={el.id} />
        ) : null;
      })}
      <div>
        <div>
          <GlowSpot className={"glowContainer"} />

          <h3>
            {h3value}
            <span>{colorH3}</span>
          </h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
