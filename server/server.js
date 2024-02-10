const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const multer = require('multer')
const upload = multer({ dest: 'uploads/' });

const app = express();
app.use(cors());
app.use(express.json());




const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:'test' //اسم قاعدة البيانات لدي 
    

})
app.get('/',(req,res) =>{
    const sql = "SELECT * FROM info";
    db.query(sql, (err,result) =>{
        if (err) return res.json({Message:"Error inside server"});
        return res.json(result);
        
    })
})
app.post('/info', (req, res) => {
    const sql = "INSERT INTO info(`languge`, `gender`,`age`,`country`) VALUES(?, ?, ?, ?)";

    const values = [
        req.body.languge,
        req.body.gender,
        req.body.age,
        req.body.country
       
    ];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error inside server:", err);
            return res.json({ Message: "Error inside server" });
        }
        return res.json(result);
    });
});
// app.post('/user', (req, res) => {
//     const sql = "INSERT INTO user(`name`, `age`,`country`,`email`,`message`) VALUES(?, ?, ?, ?,?)";

//     const values = [
//         req.body.name,
//         req.body.age,
//         req.body.country,
//         req.body.email,
//         req.body.message
//     ];

//     db.query(sql, values, (err, result) => {
//         if (err) {
//             console.error("Error inside server:", err);
//             return res.json({ Message: "Error inside server" });
//         }
//         return res.json(result);
//     });
// });

 
app.post('/api/upload-audio', upload.single('audio'), (req, res) => {
  
  const audioFile = req.file;
  const title = req.body.title;
  const description = req.body.description;
  const userId = req.body.userId;


 

  res.status(200).send('Audio uploaded successfully');
});




app.listen(8001,()=>{
    console.log('Server is running on port 8001');
})