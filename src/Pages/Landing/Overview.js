import React from "react";
import bigIdea from "../../images/The big idea.png";
import rules from "../../images/Rules and guidelines.png";
import judging from "../../images/Judging criteria.png";
import faq from "../../images/cwok_casual_21 1.png";
import coloredStar from "../../images/star pu.png";
import coloredStar2 from "../../images/sata gra.png";
import fadedstar from "../../images/faded star.png";
import whiteStar from "../../images/star.png";
import arrow from "../../images/arrow.png";
import ellipse from "../../images/Ellipse 2.png";
import q1 from "../../images/question1.png";
import q2 from "../../images/question2.png";
import Wrapper from "../../UI/Wrapper";
import { Reveal } from "../../utils/Reveal";
import OverviewImg from "../../Design/OverviewImg";
import OverviewText from "../../Design/Overview";
import Judging from "../../Design/Judging";
import FAQs from "../../Design/FAQs";
const Overview = () => {
  const info = [
    {
      id: 1,
      type: "normal",
      h3: "Introduction to getlinked",
      coloredH3: "tech Hackathon 1.0",
      text: "Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world,that's what we're all about!",
      image: bigIdea,
      orderImg: 1,
      orderText: 2,
      star: [
        {
          id: 1,
          star: coloredStar,
          location: "img",
          position: {
            top: "10%",
            left: "10%",
          },
          size: "2rem",
          glowClass: "glowContainer",
        },

        {
          id: 2,
          star: coloredStar2,
          location: "text",
          position: {
            top: "10%",
            right: "10%",
          },
          size: "2rem",
        },
        {
          id: 3,
          star: arrow,
          location: "img",
          position: {
            top: "89%",
            right: "5%",
          },
          size: "3.5rem",
          glowClass: "glowContainer",
        },
      ],
    },
    {
      id: 2,
      type: "normal",
      h3: "Rules and",
      coloredH3: "Guidelines",
      text: "Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!",
      image: rules,
      orderImg: 2,
      orderText: 1,
      star: [
        {
          id: 1,
          star: fadedstar,
          location: "text",
          position: {
            top: "-13%",
            left: "35%",
          },
          size: "2rem",
        },
        {
          id: 2,
          star: whiteStar,
          location: "text",
          position: {
            top: "100%",
            right: "0%",
          },
          size: "2rem",
        },
        {
          id: 3,
          star: ellipse,
          location: "img",
          size: "6rem",
          glowClass: "glowContainer",
          className: "rulesImg",
        },
      ],
    },
    {
      id: 3,
      type: "criteria",
      h3: "Judging Criteria",
      coloredH3: "Key attributes",
      attributes: [
        {
          id: "3a",
          title: "Innovation and Creativity",
          info: "Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.",
        },
        {
          id: "3b",
          title: "Functionality",
          info: "Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.",
        },
        {
          id: "3c",
          title: "Impact and Relevance",
          info: "Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.",
        },
        {
          id: "3d",
          title: "Technical Complexity",
          info: "Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.",
        },
        {
          id: "3e",
          title: "Adherence to Hackathon Rules",
          info: "Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.",
        },
      ],
      image: judging,
      multiple: true,
      btnValue: "Read More",
      orderImg: 1,
      orderText: 2,
      star: [
        {
          id: 1,
          star: coloredStar,
          location: "img",
          position: {
            top: "-17%",
            left: "23%",
          },
          size: "2rem",
        },
        {
          id: 2,
          star: fadedstar,
          location: "img",
          position: {
            top: "50%",
            right: "50%",
          },
          size: "2rem",
        },
        {
          id: 3,
          star: whiteStar,
          location: "img",
          position: {
            top: "100%",
            left: "95%",
          },
          size: "2rem",
        },
        {
          id: 4,
          star: ellipse,
          location: "img",
          size: "6rem",
          className: "judgingImg",
        },
      ],
    },
    {
      id: 4,
      type: "FQA",
      h3: "Frequently Ask",
      coloredH3: "Question",
      text: "We got answers to the questions that you might want to ask about getlinked Hackathon 1.0",
      accordion: [
        {
          id: "4a",
          question: "Can I work on a project I started before the hackathon?",
          info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid mollitia reprehenderit qui non exercitationem saepe distinctio necessitatibus voluptatibus vel, eveniet sapiente omnis alias eligendi est facere rem at quo ea magni laborum impedit voluptatem. Ipsum placeat asperiores voluptas neque hic?",
        },
        {
          id: "4b",
          question: "What happens if I need help during the hackathon?",
          info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid mollitia reprehenderit qui non exercitationem saepe distinctio necessitatibus voluptatibus vel, eveniet sapiente omnis alias eligendi est facere rem at quo ea magni laborum impedit voluptatem. Ipsum placeat asperiores voluptas neque hic?",
        },
        {
          id: "4c",
          question: "What happens if I don't have an idea for a project?",
          info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid mollitia reprehenderit qui non exercitationem saepe distinctio necessitatibus voluptatibus vel, eveniet sapiente omnis alias eligendi est facere rem at quo ea magni laborum impedit voluptatem. Ipsum placeat asperiores voluptas neque hic?",
        },
        {
          id: "4d",
          question: "Can I join a team or do I have to come with one?",
          info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid mollitia reprehenderit qui non exercitationem saepe distinctio necessitatibus voluptatibus vel, eveniet sapiente omnis alias eligendi est facere rem at quo ea magni laborum impedit voluptatem. Ipsum placeat asperiores voluptas neque hic?",
        },
        {
          id: "4e",
          question: "What happens after the hackathon ends",
          info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid mollitia reprehenderit qui non exercitationem saepe distinctio necessitatibus voluptatibus vel, eveniet sapiente omnis alias eligendi est facere rem at quo ea magni laborum impedit voluptatem. Ipsum placeat asperiores voluptas neque hic?",
        },
        {
          id: "4f",
          question: "Can I work on a project I started before the hackathon?",
          info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid mollitia reprehenderit qui non exercitationem saepe distinctio necessitatibus voluptatibus vel, eveniet sapiente omnis alias eligendi est facere rem at quo ea magni laborum impedit voluptatem. Ipsum placeat asperiores voluptas neque hic?",
        },
      ],
      image: faq,
      orderImg: 2,
      orderText: 1,
      star: [
        {
          id: 1,
          star: coloredStar,
          location: "text",
          position: {
            top: "0%",
            left: "-5%",
          },
          size: "2rem",
        },
        {
          id: 2,
          star: fadedstar,
          location: "img",
          position: {
            top: "50%",
            left: "10%",
          },
          size: "1.5rem",
        },
        {
          id: 3,
          star: coloredStar,
          location: "img",
          position: {
            top: "20%",
            left: "25%",
          },
          size: "1.5rem",
        },
        {
          id: 4,
          star: coloredStar,
          location: "img",
          position: {
            top: "0%",
            right: "50%",
          },
          size: "1.5rem",
        },
        {
          id: 5,
          star: whiteStar,
          location: "img",
          position: {
            top: "10%",
            left: "70%",
          },
          size: "1.5rem",
        },
        {
          id: 6,
          star: q1,
          location: "img",
          position: {
            top: "0%",
            left: "33%",
          },
          size: "3rem",
        },
        {
          id: 7,
          star: q2,
          location: "img",
          position: {
            top: "10%",
            left: "16%",
          },
          size: "2rem",
        },
        {
          id: 8,
          star: q2,
          location: "img",
          position: {
            top: "10%",
            left: "49%",
          },
          size: "2rem",
        },
      ],
    },
  ];

  return (
    <Wrapper id={"overview"}>
      {info?.map((el) => {
        return (
          <div
            style={{ borderBottom: "1px solid #ffffff23" }}
            className="overviewWrapper"
            key={el.id}
          >
            <div style={{ order: el.orderImg }} className="overviewImgWrapper">
              <Reveal>
                <OverviewImg image={el?.image} star={el?.star} />
              </Reveal>
            </div>
            <div style={{ order: el.orderText }} className="positionRelative">
              {el.type === "normal" ? (
                <OverviewText
                  h3value={el.h3}
                  colorH3={el.coloredH3}
                  text={el.text}
                  star={el.star}
                  key={el.id}
                />
              ) : el.type === "criteria" ? (
                <Judging
                  star={el.star}
                  key={el.id}
                  h3value={el.h3}
                  colorH3={el.coloredH3}
                  text={el.text}
                  attributes={el.attributes}
                />
              ) : (
                <FAQs
                  key={el.id}
                  h3value={el.h3}
                  text={el.text}
                  accordion={el.accordion}
                  star={el.star}
                />
              )}
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Overview;
