import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
function MemberDetails() {
  const params=useParams();
  const [details, setDetails] = useState([]);
  const [detailsCovid, setDetailsCovid] = useState([]);
  const [detailsVaccine, setDetailsVaccine] = useState([]);
  const [numOfVaccine, setNumOfVaccine] = useState("");

  const [newFirstName, setnewFirstName] = useState('');
  const [newLastName, setnewLastName] = useState('');
  const [newCity, setnewCity] = useState('');
  const [newStreet, setnewStreet] = useState('');
  const [newNum, setnewNum] = useState('');
  const [newPhone, setnewPhone] = useState('');
  const [newPel, setnewPel] = useState('');
  const [newPosCovid, setnewPosCovid] = useState('');
  const [newEndCovid, setEndCovid] = useState('');

  const handleFirstName = (e) => {
    setnewFirstName(e.target.value);
};
const handleLastName = (e) => {
    setnewLastName(e.target.value);
};
const handleCityAddress = (e) => {
  setnewCity(e.target.value);
};
const handleStreetAddress = (e) => {
  setnewStreet(e.target.value);
};
const handleNumAddress = (e) => {
  setnewNum(e.target.value);
};
const handlePhone = (e) => {
  setnewPhone(e.target.value);
};
const handlePel = (e) => {
  setnewPel(e.target.value);
};
const handlePosCovid = (e) => {
  setnewPosCovid(e.target.value);
};
const handleEndCovid = (e) => {
  setEndCovid(e.target.value);
};

  async function memberDetails() {
    let response = await fetch(`http://localhost:3001/api/allMembers/${params.memberId}`, {
      method: "get",
    });
    let set = await response.json();
    setDetails(set[0]);
  }

  async function covidVaccineDetails() {
    let response = await fetch(`http://localhost:3001/api/covidDetails/${params.memberId}`, {
      method: "get",
    });
    let set = await response.json();
    setDetailsCovid(set[0]);

    let response2 = await fetch(`http://localhost:3001/api/vaccineDetails/${params.memberId}`, {
      method: "get",
    });
    let set2 = await response2.json();
    setDetailsVaccine(set2);
  }
  async function numVaccine() {
    let response3 = await fetch(`http://localhost:3001/api/numVaccine/${params.memberId}`, {
      method: "get",
    });
    let set3 = await response3.json();
    setNumOfVaccine(set3[0].count);
  }

  async function updating() {
    let response = await fetch(
      `http://localhost:3001/api/${params.memberId}/memberDetails/updating`,
      {
        method: "put",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          firstName: newFirstName,
          lastName: newLastName,
          city:newCity,
          street:newStreet,
          numAddress:newNum,
          phone: newPhone,
          pel:newPel,
        }),
      }
    );
  }
  async function updatingCovid() {
    let response = await fetch(
      `http://localhost:3001/api/${params.memberId}/memberDetails/updatingCovid`,
      {
        method: "put",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          posCovid:newPosCovid,
          endCovid:newEndCovid,
        }),
      }
    );
  }

  useEffect(() => {
    memberDetails();
    covidVaccineDetails();
    numVaccine();
  }, []);
    return (
        <div id="memberDetails">
          <form className="memberDetailsForm" >
            <span className="membersInfo">תעודת זהות </span>
            <br />
            <div className="inTitleDetails">{details.id}</div>
            <br/>
            
            <br/>
            <span className="membersInfo">שם פרטי</span>
            <span className="membersInfo">שם משפחה</span>
            <br />
            <input type="text"  className="inTitleDetails2" defaultValue={details.first_name} onChange={handleFirstName}/>
            <input type="text"  className="inTitleDetails2" defaultValue={details.last_name} onChange={handleLastName}/>
            <br/>
            <span className="membersInfo"> כתובת</span>
            <br />
            <span className="membersInfo" >עיר</span>
            <span className="membersInfo">רחוב</span>
            <span className="membersInfo">מס' בית</span>
            <br />
            <input type="text"  className="inTitleDetails2" defaultValue={details.city} onChange={handleCityAddress}/>
            <input type="text"  className="inTitleDetails2" defaultValue={details.street} onChange={handleStreetAddress}/>
            <input type="text"  className="inTitleDetails2" defaultValue={details.num_street} onChange={handleNumAddress}/>
            <br />
            <span className="membersInfo">תאריך לידה </span>
            <br />
            <div className="inTitleDetails">{details.birth_date}</div>
            <br />
            <span className="membersInfo"> טלפון </span>
            <span className="membersInfo"> טלפון נייד </span>
            <br />
            <input type="text"  className="inTitleDetails2"  defaultValue={details.phone} onChange={handlePhone}/>
            <input type="text"  className="inTitleDetails2" defaultValue={details.pel} onChange={handlePel}/>
            <br />
            <br />
             {<Link onClick={updating} className="addBut" >עדכון</Link>}
          </form>

          <form className="memberDetailsForm" >
            <span className="membersInfo">תאריכי מחלה: </span>
            <br/>
            <span className="membersInfo"> קבלת תוצאה חיובית</span>
            <span className="membersInfo">מועד החלמה </span>
            <br />
            <input type="text"  className="inTitleDetails2" defaultValue={detailsCovid.pos_covid}  onChange={handlePosCovid}/>
            <input type="text"  className="inTitleDetails2" defaultValue={detailsCovid.end_covid}  onChange={handleEndCovid}/>
            <br/>
            <br/>
            {<Link onClick={updatingCovid} className="addBut" >עדכון</Link>}
            <br/>
            <br/>
            <span className="membersInfo"> חיסונים</span>
            <table id="vaccineTable" >
              <tr>
                  <td className="membersInfo">מספר חיסון</td>
                  <td className="membersInfo">תאריך</td>
                  <td className="membersInfo">יצרן</td>
              </tr>
              {detailsVaccine.map((item) => (
                <tr>
                  <td className="inTitleDetails2" >{item.num_vaccine}</td>
                  <td className="membersInfo">{item.date}</td>
                  <td className="membersInfo">{item.name_manufacturer}</td>
              </tr>
              ))}
            </table>
            <br/>
            <div>
              {numOfVaccine<4?(
               <Link to={`/MemberDetails/${details.id}/addNewVaccine/${parseInt(numOfVaccine)+1}/${"update"}`} className="addBut" >להוספת חיסון</Link>)
               :(
                ""
               )}
            </div>
            <br/>
          </form>
          <img className="imgD" src={`http://localhost:3001/${details.id}.jpg`}></img>
          <br/>
          <br/>
          {<Link to={`/AllMembers`} className="addBut" >חזרה לעמוד פציינטים</Link>}
        </div>
      );
}
export default MemberDetails;