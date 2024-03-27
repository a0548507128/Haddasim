import React, { useState, useEffect } from "react";
import { Link,useParams, useNavigate } from "react-router-dom";
function NewVaccine() {
    const [date, setDate] = useState('');
    const [manufacturer, setManufacturer] = useState([]);
    const [idManufacturer, setIdManufacturer] = useState('');
    
    const params=useParams();
    let navigate=useNavigate();
    let NumVaccine=parseInt(params.vaccineNum);
    
    const handleDate = (e) => {
        setDate(e.target.value);
    };
    const handleManufacturer = (e) => {
        setIdManufacturer(e.target.value);
    };

    async function getManufacturers() {
        let response = await fetch(`http://localhost:3001/api/Manufacturers`, { method: "get" });
        let set = await response.json();
        setManufacturer(set);
      }
      useEffect(() => {
        getManufacturers();
      }, []);

      async function AddCovidVaccine(e) {
        e.preventDefault();
        let response = await fetch(
            `http://localhost:3001/api/${params.memberId}/newVaccine/${NumVaccine}`,
            {
              method: "post",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({
                id: params.memberId,
                date: date,
                idManufacturer:idManufacturer,
                vaccineNum:params.vaccineNum,
              }),
            }
          );
          if(params.ifUpdate=="update"){
            navigate( `/MemberDetails/${params.memberId}`)
          }
          else if(NumVaccine<4){
            navigate(`/${params.memberId}/NewVaccine/${NumVaccine+1}`);
          }
          else{
            navigate(`/AllMembers`);
          }
      }

      return(
        <form className="newForm" onSubmit={AddCovidVaccine}>
            <span className="membersInfo"> חיסונים</span>
            <table id="vaccineTable" >
                <tr>
                    <td className="membersInfo">מספר חיסון</td>
                    <td className="membersInfo"> תאריך</td>
                    <td className="membersInfo">יצרן </td>
                </tr>
                <tr>
                    <td> חיסון {params.vaccineNum}</td>
                    <td><input type="text"  className="inTitleDetails2" onChange={handleDate}/> </td>
                    <td>
                        <select onClick={handleManufacturer}>
                          {manufacturer.map((item,i) => ( <option key={i} value={item.id}>{item.name_manufacturer}</option>))}
                        </select>  
                    </td>
                </tr>
                
            </table>
            <input type="submit" value="הוספה" className="butTitle" id="addBut"/>
        </form>
    );
}
export default NewVaccine;