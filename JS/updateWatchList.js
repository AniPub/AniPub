import {GetId,upID} from "./data/list.js";

const buttonEvent = document.querySelector(".Add-to-watchlist-button");
buttonEvent.addEventListener("click",()=> {
    const aniMeID = Number(buttonEvent.dataset.animeid);
    if ( GetId().some(value=> value.id === aniMeID) === false) {
          upID(aniMeID,Date(),0);
    }
    else {
        alert("Already in the List")
    }  
});
