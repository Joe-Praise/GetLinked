import RegisterBtn from "../UI/RegisterBtn";

export default function Judging({ star, h3value, colorH3, text, attributes }) {
  return (
    <div className="overviewTextWrapper ">
      <div>
        <div>
          <h3>
            {h3value}
            <span>{colorH3}</span>
          </h3>
          <p>{text}</p>
        </div>
      </div>
      <ul className="overviewTextLi listStyleNone">
        {attributes?.map((el) => {
          return (
            <li key={el.id}>
              <p>
                {el.title} : <span className="judgingSpan">{el.info}</span>
              </p>
            </li>
          );
        })}
      </ul>
      <div className="marginTop judgingBtn">
        <RegisterBtn value={"Read More"} className={"Register"} size={"8rem"} />
      </div>
    </div>
  );
}
