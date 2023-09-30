import GlowSpot from "../UI/GlowSpot";
import Star from "../UI/Star";
export default function OverviewImg({ image, star, glowClass, glowOpacity }) {
  return (
    <>
      {star?.map((el) => {
        return el?.location === "img" ? (
          <Star
            image={el.star}
            {...el.position}
            size={el.size}
            className={el.className || ""}
            key={el.id}
          />
        ) : null;
      })}
      <GlowSpot className={`${glowClass}`} glowOpacity={glowOpacity} />

      <img src={image} alt="random overview illustration" className="index2" />
    </>
  );
}
