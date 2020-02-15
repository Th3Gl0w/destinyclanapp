import React from "react";
import { NavLink } from "react-router-dom";

function Member(props) {
  const { name, id } = props;
  return (
    <div>
      <NavLink to={`clan/member/${id}`}>{name}</NavLink>
    </div>
  );
}

export default Member;
