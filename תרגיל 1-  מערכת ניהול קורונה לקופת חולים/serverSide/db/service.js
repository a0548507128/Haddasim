
const db = require('./db');



async function getAllMembers(callback) {
  let sqlCommande = 'SELECT * FROM members';
  db.query(sqlCommande, callback);
}

async function getMemberDetails(req, callback) {
    let sqlCommande = `SELECT * FROM members WHERE id=${req.params.memberId}`;
    db.query(sqlCommande, callback);
}

async function newMember(req,callback){
  let sqlCommande = `INSERT INTO members (id, first_name, last_name, city, street, num_street, birth_date, phone, pel) VALUES ('${req.body.id}', '${req.body.firstName}' ,'${req.body.lastName}','${req.body.cityAddress}', '${req.body.streetAddress}', '${req.body.numAddress}' , '${req.body.date}', '${req.body.phone}', '${req.body.pel}')`;
  db.query(sqlCommande, callback);
}

async function deleteMember(req,callback){
  let sqlCommande = `DELETE FROM members WHERE id=${req.params.memberId}`;
  db.query(sqlCommande, callback);
}

async function updatingDetails(req,callback){
  let sqlCommande = `UPDATE members SET first_name='${req.body.firstName}', last_name='${req.body.lastName}', city='${req.body.city}',street='${req.body.street}',num_street='${req.body.numAddress}',phone='${req.body.phone}', pel='${req.body.pel}' WHERE id=${req.params.memberId}`;
  db.query(sqlCommande, callback);
}

async function getCovidDetails(req, callback) {
  let sqlCommande = `SELECT * FROM sick_covid WHERE id=${req.params.memberId}`;
  db.query(sqlCommande, callback);
}

async function addCovidDetails(req,callback){
  if(req.body.posCovid==null && req.body.endCovid==null){
    let sqlCommande = `INSERT INTO sick_covid (id, pos_covid, end_covid) VALUES ('${req.body.id}', ${req.body.posCovid}, ${req.body.endCovid})`;
    db.query(sqlCommande, callback);
  }
  else{
    let sqlCommande = `INSERT INTO sick_covid (id, pos_covid, end_covid) VALUES ('${req.body.id}', '${req.body.posCovid}', '${req.body.endCovid}')`;
    db.query(sqlCommande, callback);
  }
}

async function deleteCovid(req,callback){
  let sqlCommande = `DELETE FROM sick_covid WHERE id=${req.params.memberId}`;
  db.query(sqlCommande, callback);
}

async function updatingCovid(req,callback){
  let sqlCommande = `UPDATE sick_covid SET pos_covid='${req.body.posCovid}', end_covid='${req.body.endCovid}' WHERE id=${req.params.memberId}`;
  db.query(sqlCommande, callback);
}

async function getVaccine(req, callback) {
  let sqlCommande = `SELECT id_member, date, num_vaccine, name_manufacturer FROM vaccine v JOIN vaccine_manufacturers m ON v.manufacturer = m.id WHERE v.id_member=${req.params.memberId}`;
  db.query(sqlCommande, callback);
}

async function newVaccine(req,callback){
  let sqlCommande = `INSERT INTO vaccine (id_member, date, manufacturer, num_vaccine) VALUES ('${req.body.id}', '${req.body.date}' ,'${req.body.idManufacturer}' ,'${req.body.vaccineNum}')`;
  db.query(sqlCommande, callback);
}

async function deleteVaccine(req,callback){
  let sqlCommande = `DELETE FROM vaccine WHERE id_member=${req.params.memberId}`;
  db.query(sqlCommande, callback);
}

async function getAllManufacturers(callback) {
  let sqlCommande = 'SELECT * FROM vaccine_manufacturers';
  db.query(sqlCommande, callback);
}

async function getNumOfVacine(req,callback) {
  let sqlCommande = `SELECT count(*) AS count FROM vaccine WHERE id_member=${req.params.memberId}`;
  db.query(sqlCommande, callback);
}

async function getNumNotVacine(callback) {
  let sqlCommande = `SELECT count(*) AS not_vaccine FROM members WHERE id NOT IN (SELECT id_member FROM vaccine)`;
  db.query(sqlCommande, callback);
}
//------------------------------------------------------------------------------------------


module.exports = {
    getAllMembers,
    getMemberDetails,
    newMember,
    deleteMember,
    updatingDetails,
    getCovidDetails,
    addCovidDetails,
    deleteCovid,
    updatingCovid,
    getVaccine,
    newVaccine,
    deleteVaccine,
    getAllManufacturers,
    getNumOfVacine,
    getNumNotVacine,
}