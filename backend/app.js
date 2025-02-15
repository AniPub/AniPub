const express = require("express");
const app = express();
const morgan = require("morgan");
const ejs = require("ejs");
const path = require("path");
const mongoose = require("mongoose");
const Data = require("./models/model");
const newList = require("./models/list");
const { error } = require("console");
const OP = require("./Data/data");

let accountId = "";

const DataBaseId = 'mongodb+srv://NodeDB:asdf1234@cluster0.cbnst.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const port = 3000;

mongoose.connect(DataBaseId)
.then(()=>{
    console.log(`Data Base Connected Successfully`);
    app.listen(port,"localhost",(error)=>{
        if (error) {
            console.log(error);
        }
        console.log(`Server Listening on Localhost:${port}`);
    });
})
.catch(error=>{
    console.log(error);
})



app.use(express.static(path.join(__dirname,"../style")));

app.use(express.static(path.join(__dirname,"../profilePic")));
app.use(express.static(path.join(__dirname,"../ratings")));
app.use(express.static(path.join(__dirname,"../Video")));
app.use(express.static(path.join(__dirname,"../Cover")));
app.use(express.static(path.join(__dirname,"../icon")));
app.use(express.static(path.join(__dirname,"../image")));
app.use(express.static(path.join(__dirname,"../JS")));
app.use(express.static(path.join(__dirname,"../Logo")));
app.use(express.static(path.join(__dirname,"../Poster Pic")));
app.use(express.static(path.join(__dirname,"../Styles")));

app.use(express.urlencoded({extended:true}));

app.use(morgan("dev")); 
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"../views-ejs"));

app.post("/Sign-up",(req,res)=>{
   
   const UserData = new Data(req.body);
     UserData.save()
    .then(()=>{
        console.log("Registration Successfull");
        setTimeout(() => {
            res.redirect("/Login")
        }, 3000);
    })
    .catch(error=>{
        console.log(error);
    })
})
app.post("/Login",(req,res)=>{
    const Email = req.body.Email;
    const Password = req.body.Password;

    
    Data.find()
    .then(info=>{
    const DataArray = info;

    /*    
    DataArray.forEach(value=>{
        if (Email === value.Email && Password === value.Password) {
            const AccountId = value.id;
            console.log(`Your Profile Id = ${AccountId}`);
            
        }
    })
    */

for (let i = 0; i < DataArray.length; i++) {
       if(Email === DataArray[i].Email && Password === DataArray[i].Password) 
        {
            const AccountId = DataArray[i].id;
            accountId = AccountId ;
            console.log(`Your Profile Id = ${AccountId}`);
            
            setTimeout(()=>{
                res.redirect("/home");
            },3000)
            break;
        }
        else {
            console.log(`No Account Found`);
        }
        
    }
});
})


app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/Home",(req,res)=>{
    res.render("Home");
    
})
app.get("/Login",(req,res)=>{
    res.render("Login");
})
app.get("/Sign-Up",(req,res)=>{
    res.render("Sign-Up");
})
app.get("/Profile",(req,res)=>{
    res.render("Profile",{SectionName:"User Profile"});
})
app.get("/VideoPlayer",(req,res)=>{
    res.render("VideoPlayer");
})
app.get(`/AniPlayer/:AniId/:AniEP`,(req,res)=>{
    const Array = req.url;
    const newArray = Array.split("/")
    const AniId = Number(newArray[2]);
    const AniEP = Number(newArray[3]);
    res.render("AniPlayer",{AniDB : OP,AniId,AniEP})
});

app.get("/PlayList",(req,res)=>{
    newList.find()
    .then(info=> {
        res.render("PlayList",{SectionName:"PlayList Section",List: info,AniDB:OP});
    })
    
})

app.get('/PlayList/Update/:AniID/:AniEP',(req,res)=>{
    const Array = req.url;
    const newArray = Array.split("/");
    const AniID = newArray[3];
    const AniEP = newArray[4];
    const upList = new newList({
        AniID : AniID,
        AniEP : AniEP,
        Date: Date(),
    });
    upList.save()
    .then(info=> {
        res.redirect("/PlayList")
    })

})




app.get('/PlayList/Delete/:DeleteID',(req,res)=>{
    newList.findByIdAndDelete(req.params.DeleteID)
    .then (info=> {
        res.redirect("/PlayList")
    })
    .catch(error=>{
        console.log(error)
    })
})
app.get("/About-Us",(req,res)=>{
    res.render("About-Us",{SectionName:"About Us Section"});
})

app.get("/Privacy-Policy",(req,res)=>{
    res.render("Privacy-Policy",{SectionName:"Privacy Policy Section"});
});




