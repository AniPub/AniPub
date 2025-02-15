import {getDetailes,setDetailes} from "./data/userCredentials.js";


const Name = document.querySelector(".full-name");
const Email = document.querySelector(".username");
const Password = document.querySelector(".pass");
const confirmedPass = document.querySelector(".c-pass");

const registerbutton = document.querySelector(".registar-up-button")

console.warn(`This is in the production Phase!
We dont Store any of your Data ..
As this is a prototype you can also contribute
`);


registerbutton.addEventListener('click',()=> {
  const name = Name.value ;
  const email = Email.value ;
  const pass = Password.value ;
  const cpass =  confirmedPass.value ;

  if (pass === cpass) {
    if (name !== "") {
      if (email !=="") {
      setDetailes(
          {
      Name:name,
      Email:email,
      Password:pass,
      FavGenre:"Isekai,Fantasy,Action",
      "Joined-Date": Date(),
          }
        ) ; 
        
        console.log(getDetailes());
      }
      else {
        console.log("Please Provide an email");
      }
    }
    else {
      console.log("please enter a name");
    }
  }
  else {
    console.log("Please enter same passwords");
  }
 
})
