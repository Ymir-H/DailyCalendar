import express from "express"


const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const currentdate = new Date(); 

const data = { heading:"Well done is better than well said", content:"Benjamin Franklin", day:currentdate.getDate(), month:monthName[currentdate.getMonth()], year:currentdate.getFullYear(),
    dayOfWeek:weekday[currentdate.getDay()]};

const app = express();
const port = 3000;

app.use(express.static("public"))

app.get("/", (req, res)=>{
    res.render("index.ejs", data)
});

app.listen(port, (req, res) =>{
    console.log(`Server running on port ${port}!`)
});