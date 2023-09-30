import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import api from "../../utils/axiosCreate";
import Wrapper from "../../UI/Wrapper";
import graphicsGuy from "../../images/3d-graphic-designer-showing-thumbs-up-png 1.png";
import coloredStar2 from "../../images/sata gra.png";
import coloredStar from "../../images/star pu.png";
import fadedstar from "../../images/faded star.png";
import maleEmoji from "../../images/male emoji.png";
import femaleEmoji from "../../images/female emoji.png";
import RegisterBtn from "../../UI/RegisterBtn";
import dropDownIcon from "../../images/dropdown icon.png";
import Validation from "../../utils/validation";
import RegisterModal from "./RegisterModal";
import { GlideInRight } from "../../utils/Reveal";
import OverviewImg from "../../Design/OverviewImg";

const graphicGuyDetails = [
  {
    id: 1,
    image: graphicsGuy,
    glowClass: "glow",
    glowOpacity: "glowContainer",
    star: [
      {
        id: 1,
        star: coloredStar,
        location: "img",
        position: {
          top: "10%",
          left: "10%",
        },
        size: "1.3rem",
      },

      {
        id: 2,
        star: coloredStar2,
        location: "img",
        position: {
          top: "10%",
          right: "10%",
        },
        size: "1.2rem",
      },
      {
        id: 3,
        star: fadedstar,
        location: "img",
        position: {
          top: "89%",
          right: "5%",
        },
        size: "1.2rem",
      },
    ],
  },
];

const RegisterPage = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModalHandler = () => {
    setShowModal((prevState) => !prevState);
  };

  // backdrop component
  const Backdrop = () => {
    return <div className="backdrop" onClick={closeModalHandler}></div>;
  };
  return (
    <Wrapper>
      <GlideInRight>
        <div className="registerWapper">
          <div className="registerImageContainer">
            {graphicGuyDetails.map((el, i) => {
              return <OverviewImg image={el.image} star={el.star} key={i} />;
            })}
          </div>
          <RegisterForm onOpenModal={closeModalHandler} />
        </div>
      </GlideInRight>
      {showModal && (
        <React.Fragment>
          {ReactDOM.createPortal(
            <RegisterModal onCloseModal={closeModalHandler} />,
            document.getElementById("modal")
          )}
          {ReactDOM.createPortal(
            <Backdrop />,
            document.getElementById("overlay")
          )}
        </React.Fragment>
      )}
    </Wrapper>
  );
};

export default RegisterPage;

const RegisterForm = ({ onOpenModal }) => {
  const [category, setCategory] = useState([]);

  const [selectValue, setSelectvalue] = useState({
    category: 0,
    group_size: 0,
  });

  const [show, setShow] = useState({
    category: false,
    groupSize: false,
  });

  const [application, setApplication] = useState({
    email: "",
    phone_number: "",
    team_name: "",
    project_topic: "",
    privacy_policy_accepted: null,
  });

  const [errors, setErrors] = useState({});
  const [disableSubmitBtn, setDisableSubmitBtn] = useState(true);

  // handles getting custom dropdown values
  const dropDownHandler = (value) => {
    if (value.tag === "category") {
      setSelectvalue((prevState) => {
        return {
          ...prevState,
          category: value.value,
        };
      });

      setShow((prevState) => {
        return {
          ...prevState,
          category: false,
        };
      });
    } else if (value.tag === "groupSize") {
      setSelectvalue((prevState) => {
        return {
          ...prevState,
          group_size: value.value,
        };
      });
      setShow((prevState) => {
        return {
          ...prevState,
          groupSize: false,
        };
      });
    }
  };

  // handles display of custom dropdown
  const showMenuHandler = (val) => {
    if (val === "category") {
      setShow((prevState) => {
        return {
          ...prevState,
          category: true,
        };
      });
    } else if (val === "groupSize") {
      setShow((prevState) => {
        return {
          ...prevState,
          groupSize: true,
        };
      });
    }
  };

  // all input change handler
  const inputChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "privacy_policy_accepted") {
      setApplication({ ...application, [name]: e.target.checked });
      return setDisableSubmitBtn((prevState) => !prevState);
    }
    setApplication({ ...application, [name]: value.toLowerCase() });
  };

  // form validation handler
  const handleValidation = (e) => {
    e.preventDefault();
    const values = { ...application, ...selectValue };

    const isErrors = Validation(values);
    setErrors(isErrors);

    if (Object.keys(isErrors).length > 0) return;
    console.log(values);

    submitFormHandler(values);
  };

  // form submittion
  const submitFormHandler = async (values) => {
    try {
      const response = await api.post("/hackathon/registration", values);
      console.log(response.data);
      onOpenModal();

      // reset state
      setApplication({
        email: "",
        phone_number: "",
        team_name: "",
        project_topic: "",
        privacy_policy_accepted: "null",
      });

      setSelectvalue({
        category: 0,
        group_size: 0,
      });
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.header);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  // group size object
  const groupSize = [
    {
      id: 1,
      value: 1,
      func: dropDownHandler,
      tag: "groupSize",
    },
    {
      id: 2,
      value: 2,
      func: dropDownHandler,
      tag: "groupSize",
    },
    {
      id: 3,
      value: 3,
      func: dropDownHandler,
      tag: "groupSize",
    },
    {
      id: 4,
      value: 4,
      func: dropDownHandler,
      tag: "groupSize",
    },
    {
      id: 5,
      value: 5,
      func: dropDownHandler,
      tag: "groupSize",
    },
    {
      id: 6,
      value: 6,
      func: dropDownHandler,
      tag: "groupSize",
    },
    {
      id: 7,
      value: 7,
      func: dropDownHandler,
      tag: "groupSize",
    },
    {
      id: 8,
      value: 8,
      func: dropDownHandler,
      tag: "groupSize",
    },
    {
      id: 9,
      value: 9,
      func: dropDownHandler,
      tag: "groupSize",
    },
    {
      id: 10,
      value: 10,
      func: dropDownHandler,
      tag: "groupSize",
    },
    {
      id: 11,
      value: 11,
      func: dropDownHandler,
      tag: "groupSize",
    },
    {
      id: 12,
      value: 12,
      func: dropDownHandler,
      tag: "groupSize",
    },
    {
      id: 13,
      value: 13,
      func: dropDownHandler,
      tag: "groupSize",
    },
    {
      id: 14,
      value: 14,
      func: dropDownHandler,
      tag: "groupSize",
    },
    {
      id: 15,
      value: 15,
      func: dropDownHandler,
      tag: "groupSize",
    },
    {
      id: 16,
      value: 16,
      func: dropDownHandler,
      tag: "groupSize",
    },
    {
      id: 17,
      value: 17,
      func: dropDownHandler,
      tag: "groupSize",
    },
    {
      id: 18,
      value: 18,
      func: dropDownHandler,
      tag: "groupSize",
    },
    {
      id: 19,
      value: 19,
      func: dropDownHandler,
      tag: "groupSize",
    },
    {
      id: 20,
      value: 20,
      func: dropDownHandler,
      tag: "groupSize",
    },
  ];

  // transform categories queried
  const transformCategory = (data) => {
    const category = data;
    category.forEach((el, i) => {
      el.func = dropDownHandler;
      el.tag = "category";
      el.value = i + 1;
    });
    return category;
  };

  // fetch categories from db
  useEffect(() => {
    const getAllCustomers = async () => {
      try {
        const response = await api.get(`/hackathon/categories-list`);
        const transformedData = transformCategory(response.data);
        setCategory(transformedData);
        console.log(transformedData);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.header);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    getAllCustomers();
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className="registerFormOutterSection"
      onClick={() => {
        if (!show.category && !show.groupSize) return;

        setShow({
          category: false,
          groupSize: false,
        });
      }}
    >
      <div className="registerDetails">
        <h3 className="h3MobileHide">Register</h3>
        <div className="pathwayContainer">
          <p>Be part of this movement! </p>
          <p className="pathWay">
            <span>
              <img src={femaleEmoji} alt="walking female emoji" />
              <img src={maleEmoji} alt="walking male emoji" />
            </span>
            ..............................
          </p>
        </div>
        <h3 className="createAcc">CREATE YOUR ACCOUNT</h3>
        <form noValidate onSubmit={handleValidation}>
          <div className="formGroup">
            <label htmlFor="teamsName">Team's Name</label>
            <input
              type="text"
              className="registerInput"
              id="teamsName"
              value={application.team_name}
              placeholder="Enter the name of your group"
              name="team_name"
              onChange={inputChangeHandler}
            />
            {errors.team_name && (
              <p style={{ color: "red" }}>{errors.team_name}</p>
            )}
          </div>

          <div className="formGroup">
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              className="registerInput"
              id="phone"
              placeholder="Enter your phone number"
              name="phone_number"
              value={application.phone_number}
              onChange={inputChangeHandler}
            />
            {errors.phone_number && (
              <p style={{ color: "red" }}>{errors.phone_number}</p>
            )}
          </div>
          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="registerInput"
              id="email"
              placeholder="Enter your email address"
              value={application.email}
              name="email"
              onChange={inputChangeHandler}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>
          <div className="formGroup">
            <label htmlFor="project_topic">Project Topic</label>
            <input
              type="text"
              className="registerInput"
              id="projectTopic"
              placeholder="What is your group project topic"
              name="project_topic"
              value={application.project_topic}
              onChange={inputChangeHandler}
            />
            {errors.project_topic && (
              <p style={{ color: "red" }}>{errors.project_topic}</p>
            )}
          </div>

          <div className="formGroup">
            <span>Category</span>
            <p
              className="customDropDown"
              onClick={() => showMenuHandler("category")}
            >
              {selectValue?.category === ""
                ? "Select your category"
                : category[selectValue.category - 1]?.name}{" "}
              <span className="dropicon">
                <img src={dropDownIcon} alt="down facing arrow icon" />
              </span>
            </p>
            {errors.category && (
              <p style={{ color: "red" }}>{errors.category}</p>
            )}
            {show.category && <DropDown values={category} />}
          </div>

          <div className="formGroup">
            <span>Group Size</span>
            <p
              className="customDropDown"
              onClick={() => showMenuHandler("groupSize")}
            >
              <span>
                {selectValue.group_size === ""
                  ? "Select"
                  : selectValue.group_size}{" "}
              </span>
              <span className="dropicon">
                <img src={dropDownIcon} alt="down facing arrow icon" />
              </span>
            </p>
            {errors.group_size && (
              <p style={{ color: "red" }}>{errors.email}</p>
            )}
            {show?.groupSize && <DropDown values={groupSize} />}
          </div>

          <span className="span2">
            Please review your registration details before submitting
          </span>

          <div className="span2 agreeToTerms">
            <input
              type="checkbox"
              name="privacy_policy_accepted"
              id="check"
              onChange={inputChangeHandler}
            />
            <label htmlFor="check">
              I agreed with the event terms and conditions and privacy policy
            </label>
          </div>
          <RegisterBtn
            value={"Register Now"}
            className={"Register registerFormMobile span2"}
            disable={disableSubmitBtn}
          />
          <div className="btnContainer"></div>
        </form>
      </div>
    </div>
  );
};

const DropDown = ({ values }) => {
  return (
    <ul className="dropdown">
      {values?.map((el, i) => {
        return (
          <li onClick={() => el?.func(el)} key={i}>
            {el.tag === "category" ? el?.name : el?.value}
          </li>
        );
      })}
    </ul>
  );
};
