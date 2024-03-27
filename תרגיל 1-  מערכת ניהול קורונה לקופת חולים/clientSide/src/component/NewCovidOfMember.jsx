import React, { useState, useEffect } from "react";
import { Link,useParams, useNavigate } from "react-router-dom";
function NewCovidOfMember() {

    const [posCovid, setPosCovid] = useState(null);
    const [endCovid, setEndCovid] = useState(null);
    
    const params=useParams();
    let navigate=useNavigate();

    const handlePosCovid = (e) => {
        setPosCovid(e.target.value);
    };
    const handleEndCovid = (e) => {
        setEndCovid(e.target.value);
    };

    async function AddCovidVaccine(e) {
        e.preventDefault();
        let response = await fetch(
          `http://localhost:3001/api/addDateCovid/${params.memberId}`,
          {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
                id: params.memberId,
                posCovid: posCovid,
                endCovid: endCovid,
            }),
          }
        );
        console.log(posCovid)
        navigate(`/${params.memberId}/NewVaccine/1`);
      }

return(
    <form className="newForm"  onSubmit={AddCovidVaccine}>
        <span className="membersInfo"> ת"ז: {params.memberId}</span>
        <br/>
        <span className="membersInfo">תאריכי מחלה:</span>
        <br/>
        <span className="membersInfo"> קבלת תוצאה חיובית</span>
        <span className="membersInfo">מועד החלמה </span>
        <br />
        <input type="text"  className="inTitleDetails2"  onChange={handlePosCovid}/>
        <input type="text"  className="inTitleDetails2"  onChange={handleEndCovid}/>
        <br/>
        <input type="submit" value="שמירה והמשך" className="butTitle" id="addBut"/>
    </form>
);
}
export default NewCovidOfMember;