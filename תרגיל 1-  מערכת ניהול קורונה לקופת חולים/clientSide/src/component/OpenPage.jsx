import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
function OpenPage() {
    return (
        <div className="mainPage">
         {<Link to={`/AllMembers`} className="butTitle" >
          רשימת חברי קופת החולים
        </Link>}
        {<Link to={`/Information`} className="butTitle" >
          נתונים כלליים
        </Link>}
        </div>
      );
}
export default OpenPage;