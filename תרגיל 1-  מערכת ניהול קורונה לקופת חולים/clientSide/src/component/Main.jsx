import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
function Main() {
 
  return (
    <div>
      <nav>
        <br />
        {<Link to={`/`} id="navBut" >
          לדף הראשי
        </Link>}
        <br />
      </nav>
    </div>
  );
}
export default Main;
