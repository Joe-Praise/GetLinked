export default function Validation(values) {
  const errors = {};
  const isEmail = (str) => {
    // eslint-disable-next-line
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      str
    );
  };

  if (values.team_name === "") {
    errors.team_name = "Team name is Required!";
  }

  if (values.category === 0) {
    errors.category = "Category is Required!";
  }

  if (values.group_size === 0) {
    errors.group_size = "Group must have atleast a participant.";
  }

  if (isEmail(values.email) === false) {
    errors.email = "Valid email is required!";
  } else if (values.email === "") {
    errors.email = "Email is required!";
  }

  if (
    values.phone_number.trim().length <= 3 ||
    values.phone_number.trim().length > 11
  ) {
    errors.phone_number = "Min of 3 and max of 11 characters!";
  }

  if (values.project_topic === "") {
    errors.project_topic = "Project topic is required!";
  }

  if (values.privacy_policy_accepted === !true) {
    errors.privacy_policy_accepted = "Terms and conditions is required";
  }

  if (values.first_name === "") {
    errors.first_name = "First name is required!";
  }

  if (values.message === "") {
    errors.message = "Message is required!";
  }

  return errors;
}
