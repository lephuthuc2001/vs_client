import React from "react";
import { Link } from "react-router-dom";
function Logo({ isEnabled }) {
  const logo = <img className="max-w-fit w-14" src="./vitaminseaIcon.svg" />;

  if (isEnabled) {
    return (
      <Link to="/" className="btn btn-active btn-link p-0">
        {logo}
      </Link>
    );
  }
  return logo;
}

export default Logo;
