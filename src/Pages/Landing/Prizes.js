import React from "react";
import { OverviewImg } from "./Overview";
import Wrapper from "../../UI/Wrapper";
import cup from "../../images/cup.png";
import goldMedal from "../../images/gold_medal 1.png";
import silverMedal from "../../images/silver_medal 1.png";
import bronzeMedal from "../../images/bronze_medal 1.png";
import Star from "../../UI/Star";
import fadedstar from "../../images/faded star.png";
import whiteStar from "../../images/star.png";
import coloredStar2 from "../../images/sata gra.png";
import { GlideInLeft, GlideInRight } from "../../utils/Reveal";

const star = [
  {
    id: 1,
    star: coloredStar2,
    position: {
      top: "-15%",
      left: "20%",
    },
    size: "1rem",
  },

  {
    id: 2,
    star: coloredStar2,
    position: {
      top: "-16%",
      right: "20%",
    },
    size: "1.5rem",
  },
  {
    id: 3,
    star: whiteStar,
    position: {
      top: "92%",
      left: "18%",
    },
    size: "1rem",
  },
  {
    id: 4,
    star: whiteStar,
    position: {
      top: "74%",
      left: "35%",
    },
    size: "2rem",
  },
  {
    id: 5,
    star: whiteStar,
    position: {
      top: "10%",
      right: "45%",
    },
    size: "2rem",
  },
  {
    id: 6,
    star: whiteStar,
    position: {
      top: "30%",
      right: "0%",
    },
    size: "1.5rem",
  },
  {
    id: 7,
    star: fadedstar,
    position: {
      top: "92%",
      right: "16%",
    },
    size: "1.5rem",
  },
];

const prizeDetails = [
  {
    id: 2,
    rank: "2",
    slug: "nd",
    prize: 30000,
    text: "Runner",
    image: silverMedal,
  },
  {
    id: 1,
    rank: "1",
    slug: "st",
    prize: 40000,
    text: "Runner",
    image: goldMedal,
  },
  {
    id: 3,
    rank: "3",
    slug: "rd",
    prize: 15000,
    text: "Runner",
    image: bronzeMedal,
  },
];

const Prizes = () => {
  return (
    <Wrapper className="prizeWrapper sectionBorderBottom">
      <div className="prizeHeader">
        <h3 className="prizeH3Header">
          Prizes and
          <span className="prizeSpanHeader">Rewards</span>
        </h3>
        <p>
          Highlight of the prizes or rewards for winners and for participants.
        </p>
      </div>

      <div className="prizesDetails positionRelative">
        <GlideInLeft>
          <div className="positionRelative overviewImgWrapper prizeLeftImg">
            <OverviewImg image={cup} glowOpacity="glowPrize" />
          </div>
        </GlideInLeft>
        {star.map((el) => {
          return (
            <Star
              image={el.star}
              {...el.position}
              size={el.size}
              key={el.id}
              className="transformTranslateStar"
            />
          );
        })}
        <GlideInRight>
          <div className="prizeRightContainer">
            {prizeDetails.map((el) => {
              return <PrizeTemplate {...el} key={el.id} />;
            })}
          </div>
        </GlideInRight>
      </div>
    </Wrapper>
  );
};

export default Prizes;

const PrizeTemplate = ({ rank, slug, text, prize, image }) => {
  return (
    <div className="prizeItem">
      <img src={image} alt="pictorial representation of the position" />
      <div className="prizeWriteUp">
        <h3>
          {rank}
          <span>{slug}</span>
        </h3>
        <p>{text}</p>
        <h3 className="prizeAmount">₦{`${prize.toLocaleString()}`}</h3>
      </div>
    </div>
  );
};
