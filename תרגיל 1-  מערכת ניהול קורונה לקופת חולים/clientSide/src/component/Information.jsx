import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
function Information() {
  const [memebersNotVaccine, setMemebersNotVaccine] = useState("");

  async function numNotVaccine() {
    let response3 = await fetch(`http://localhost:3001/api/numNotVaccine`, {
      method: "get",
    });
    let set3 = await response3.json();
    setMemebersNotVaccine(set3[0].not_vaccine);
  }
  useEffect(() => {
    numNotVaccine();
  }, []);

  return (
    <div className="memberDetailsForm">
      <span className="membersInfo">מספר הפציינטים שלא מחוסנים:</span>
      <br/>
      <span className="inTitleDetails">{memebersNotVaccine}</span>
    </div>
  );
}
export default Information;