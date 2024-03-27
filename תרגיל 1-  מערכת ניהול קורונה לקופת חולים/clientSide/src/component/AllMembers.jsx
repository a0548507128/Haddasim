import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
function AllMembers() {
    const [allMembers ,setAllMembers]=useState([]);
    let navigate = useNavigate();
    async function AllMembers() {
        let response = await fetch(`http://localhost:3001/api/allMembers`, { method: "get" });
        let set = await response.json();
        setAllMembers(set);
        
      }
      async function remove(e) {
        let response = await fetch(`http://localhost:3001/api/deleteMember/${e.target.value}`, { method: "delete" });
        let response2 = await fetch(`http://localhost:3001/api/deleteCovid/${e.target.value}`, { method: "delete" });
        let response3 = await fetch(`http://localhost:3001/api/deleteVaccine/${e.target.value}`, { method: "delete" });
        navigate("/AllMembers");
      }
      useEffect(() => {
        AllMembers();
      }, []);
      
    return (
      <div className="mainPage">
        <table className="memberDetailsForm">
          <tr>
                <td className="membersInfo">תעודת זהות</td>
                <td className="membersInfo">שם פרטי</td>
                <td className="membersInfo">שם משפחה</td>
                <td className="membersInfo">מחיקה </td>
          </tr>
             {allMembers.map((item) => (
              <tr>
              <Link to={`/MemberDetails/${item.id}`} key={item.id}>
                <td className="membersInfo">{item.id}</td>
                <td className="membersInfo">{item.first_name}</td>
                <td className="membersInfo">{item.last_name}</td>
              </Link>
              <td>{<button onClick={remove} value={item.id} className="membersInfo">מחיקה</button >}</td>
            </tr>
            ))}
        </table>
        <br/>
         {<Link to={`/NewMember`} className="addBut" >הוספת פציינט</Link>}
      </div>
    );

}
export default AllMembers;