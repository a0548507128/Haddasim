import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
function NewMember() {

    let navigate=useNavigate();
    const [image, setImage] = useState({});
    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [cityAddress, setCityAddress] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [numAddress, setNumAddress] = useState('');
    const [date, setDate] = useState('');
    const [phone, setPhone] = useState('');
    const [pel, setPel] = useState('');
    
    const handleID = (e) => {
        setId(e.target.value);
    };
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    };
    const handleLastName = (e) => {
        setLastName(e.target.value);
    };
    const handleCityAddress = (e) => {
        setCityAddress(e.target.value);
    };
    const handleStreetAddress = (e) => {
        setStreetAddress(e.target.value);
    };
    const handleNumAddress = (e) => {
        setNumAddress(e.target.value);
    };
    const handleDate = (e) => {
      setDate(e.target.value);
  };
    const handlePhone = (e) => {
        setPhone(e.target.value);
    };
    const handlePel = (e) => {
        setPel(e.target.value);
    };
    const handlePicture = (e) => {
        const img = {
          preview: URL.createObjectURL(e.target.files[0]),
          data: e.target.files[0],
        };
        setImage(img);
    };
      async function savePicture(id) {
          let formData = new FormData();
          formData.append("file", image.data, `${id}.jpg`);
          let response2 = await fetch(
            "http://localhost:3001/api/uploadImage/InsertToFolder",
            {
              method: "post",
              body: formData,
            }
          );
      }
      async function AddMember(e) {
        e.preventDefault();
        let response1 = await fetch(
          `http://localhost:3001/api/${id}/newMember`,
          {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
                id:id,
                firstName: firstName,
                lastName: lastName,
                cityAddress: cityAddress,
                streetAddress: streetAddress,
                numAddress: numAddress,
                date:date,
                phone:phone,
                pel:pel,
            }),
          }
        );
        if(!image.data||!id||!date){
          alert("לא מילאת את כל הפרטים");
        }
        else{
          savePicture(id);
          navigate(`/NewCovidOfMember/${id}`);
        }
      }

    return (
    <form className="newForm" onSubmit={AddMember}>
      <span className="membersInfo">תעודת זהות </span>
      <br />
      <input type="text"  className="inTitleDetails" onChange={handleID}/>
      <br/>
      <span className="membersInfo">שם פרטי</span>
      <span className="membersInfo">שם משפחה</span>
      <br />
      <input type="text"  className="inTitleDetails2" onChange={handleFirstName}/>
      <input type="text"  className="inTitleDetails2" onChange={handleLastName}/>
      <br/>
      <span className="membersInfo"> כתובת</span>
      <br />
      <span className="membersInfo" >עיר</span>
      <span className="membersInfo">רחוב</span>
      <span className="membersInfo">מס' בית</span>
      <br />
      <input type="text"  className="inTitleDetails2" onChange={handleCityAddress}/>
      <input type="text"  className="inTitleDetails2" onChange={handleStreetAddress}/>
      <input type="text"  className="inTitleDetails2" onChange={handleNumAddress}/>
      <br />
      <span className="membersInfo">תאריך לידה </span>
      <br />
      <input type="text"  className="inTitleDetails" onChange={handleDate}/>
      <br />
      <span className="membersInfo"> טלפון </span>
      <span className="membersInfo"> טלפון נייד </span>
      <br />
      <input type="text"  className="inTitleDetails2"  onChange={handlePhone}/>
      <input type="text"  className="inTitleDetails2"  onChange={handlePel}/>
      <br />
      <span className="membersInfo">צרף תמונה</span>
      <input type="file"  name="file"  onChange={handlePicture} className="inTitleDetails"/>
      <br/>
      <input type="submit" value="לשמירה והמשך" className="inTitleDetails" />
    </form>
    );

}
export default NewMember;