import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h2>Terms and Conditions</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere,
        similique aspernatur libero ipsa inventore at, facilis consequuntur id
        sit consectetur eum impedit corrupti, maxime ut illum voluptatibus sequi
        neque laboriosam.
      </p>
      <p>
        Go Back to <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Terms;
