const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      console.log("upload-single");
        cb(null, './images')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage: storage });  
const service = require('./db/service');
const router = express.Router();
app.post("/api/uploadImage/InsertToFolder", upload.single('file'), (req, res)=>{
  console.log("aaa");
  req.statusCode='ok';
});

app.use( express.static('.//images'));

app.post("/api/:userId/NewCreation",(req, res) => {
  console.log(req.params.userId, "sdfghjk")
  console.log(req.body, "body");
  service.addNewCreation(req,result=>{
    res.send({id:result.insertId});
  });
});

app.get("/api/allMembers", (req, res) => {//מביא את כל הלקוחות
  service.getAllMembers(result=>{
      res.send(result);
  });
});

app.get("/api/allMembers/:memberId", (req, res) => {//מציג לקוח אחד
  service.getMemberDetails(req, result=>{
    res.send(result);
  });
});

app.post("/api/:memberId/newMember", (req, res)=>{//הוספת לקוח חדש
  service.newMember(req,result=>{
    res.send(result);
  });
 });

app.delete("/api/deleteMember/:memberId", (req,res)=>{//מחיקת לקוח
  service.deleteMember(req,result=>{
    res.send(result);
  })
});

app.put("/api/:memberId/memberDetails/updating", (req, res)=>{//מעדכן פרטי משתמש
  service.updatingDetails(req,result=>{
    res.send(result);
    
  })
});

app.get("/api/covidDetails/:memberId", (req, res) => {//מביא פרטי קורונה של לקוח אחד
  service.getCovidDetails(req, result=>{
    res.send(result);
  });
});

app.post("/api/addDateCovid/:memberId", (req, res)=>{//הוספת פרטי מחלת קורונה 
  service.addCovidDetails(req,result=>{
    res.send(result);
  });
 });

app.delete("/api/deleteCovid/:memberId", (req,res)=>{//מחיקת פרטי קורונה
  service.deleteCovid(req,result=>{
    res.send(result);
  });
});

app.put("/api/:memberId/memberDetails/updatingCovid", (req, res)=>{//מעדכן פרטי קורונה
  service.updatingCovid(req,result=>{
    res.send(result);
  });
});

 app.get("/api/vaccineDetails/:memberId", (req, res) => {//מביא פרטי חיסונים של לקוח אחד
  service.getVaccine(req, result=>{
    res.send(result);
  });
});

app.post("/api/:memberId/newVaccine/:vaccineNum", (req, res)=>{//הוספת חיסון חדש
  service.newVaccine(req,result=>{
    res.send(result);
  });
});

 app.delete("/api/deleteVaccine/:memberId", (req,res)=>{//מחיקת פרטי חיסונים
  service.deleteVaccine(req,result=>{
    res.send(result);
  })
});

app.get("/api/Manufacturers", (req, res) => {//מביא את כל יצרני החיסונים
  service.getAllManufacturers(result=>{
      res.send(result);
  });
});

app.get("/api/numVaccine/:memberId", (req, res) => {//מביא את מספר החיסונים של פציינט מסוים
  service.getNumOfVacine(req,result=>{
      res.send(result);
  });
});

app.get("/api/numNotVaccine", (req,res) => {//מביא כמה פציינטים לא מחוסנים בכלל
  service.getNumNotVacine(result=>{
      res.send(result);
  });
});
 //----------------------------------------------------------------------------------------

const post = process.env.POST || 3001;
app.listen(post, () => {
  console.log(`listening on port ${post}...`);
});
