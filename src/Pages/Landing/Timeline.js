import React from "react";
import Wrapper from "../../UI/Wrapper";
import Star from "../../UI/Star";
import coloredStar from "../../images/star pu.png";
import fadedstar from "../../images/faded star.png";
import whiteStar from "../../images/star.png";
import { Reveal } from "../../utils/Reveal";

const details = [
  {
    id: 1,
    h3: "Hackathon Announcement",
    text: "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
    date: "November 18, 2023",
    detailOrder: "order1",
    dateOrder: "order3",
    textAlign: "textAlignRight",
    stage: 1,
  },
  {
    id: 2,
    h3: "Teams Registration begins",
    text: "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
    date: "November 18, 2023",
    detailOrder: "order3",
    dateOrder: "order1",
    textAlign: "textAlignLeft",
    stage: 2,
  },
  {
    id: 3,
    h3: "Teams Registration ends",
    text: "Interested Participants are no longer Allowed to register",
    date: "November 18, 2023",
    detailOrder: "order1",
    dateOrder: "order3",
    textAlign: "textAlignRight",
    stage: 3,
  },
  {
    id: 4,
    h3: "Announcement of the accepted teams and ideas",
    text: "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
    date: "November 18, 2023",
    detailOrder: "order3",
    dateOrder: "order1",
    textAlign: "textAlignLeft",
    stage: 4,
  },
  {
    id: 5,
    h3: "Getlinked Hackathon 1.0 Offically Begins",
    text: "Accepted teams can now proceed to build their ground breaking skill driven solutions",
    date: "November 18, 2023",
    detailOrder: "order1",
    dateOrder: "order3",
    textAlign: "textAlignRight",
    stage: 5,
  },
  {
    id: 6,
    h3: "Demo Day",
    text: "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
    date: "November 18, 2023",
    detailOrder: "order3",
    dateOrder: "order1",
    textAlign: "textAlignLeft",
    stage: 6,
  },
];

const star = [
  {
    id: 1,
    star: coloredStar,
    location: "img",
    position: {
      top: "0%",
      left: "23%",
    },
    size: "1rem",
  },
  {
    id: 2,
    star: whiteStar,
    location: "img",
    position: {
      top: "50%",
      left: "80%",
    },
    size: "1rem",
  },
  {
    id: 3,
    star: fadedstar,
    location: "img",
    position: {
      top: "91%",
      left: "5%",
    },
    size: "1.5rem",
  },
];

const Timeline = () => {
  return (
    <Wrapper
      id={"timeline"}
      className="timelineMainWrapper sectionBorderBottom"
    >
      <div className="timelineHeader">
        <h3>Timeline</h3>
        <p>
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>
      <>
        {star.map((el) => {
          return (
            <Star image={el.star} {...el.position} size={el.size} key={el.id} />
          );
        })}
      </>
      <div>
        {details?.map((el) => {
          return (
            <Reveal key={el.id}>
              <TimelineTemplate {...el} />
            </Reveal>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Timeline;

const TimelineTemplate = ({
  detailOrder,
  dateOrder,
  h3,
  text,
  stage,
  date,
  textAlign,
}) => {
  return (
    <div className="timelineInfoWrapper">
      <div className={`timelineDetail ${detailOrder} ${textAlign}`}>
        <h3>{h3}</h3>
        <p>{text}</p>
      </div>
      <div className="timelineProgressLine order2">
        <h3>{stage}</h3>
      </div>
      <div className={`timelineDetail ${dateOrder}`}>
        <h4>{date}</h4>
      </div>
    </div>
  );
};
