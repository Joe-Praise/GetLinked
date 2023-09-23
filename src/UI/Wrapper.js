import React from "react";

const Wrapper = ({ className, children, id }) => {
  return (
    <section className={`${className} wrapper`} id={id}>
      {children}
    </section>
  );
};

export default Wrapper;
