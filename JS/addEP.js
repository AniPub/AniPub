import {GetId,upID} from "./data/list.js";

const addButtons = document.querySelectorAll(".Add-button");
addButtons.forEach(value=>{
    value.addEventListener('click',()=> {
        const epID = Number(value.dataset.ep);
        const AnimeID = Number(value.dataset.animeid);
        if (GetId().some(value=> value.id=== AnimeID)=== false || GetId().some(value=> value.id=== AnimeID)=== true && GetId().some(value=> value.ep === epID)=== false) {
            upID(AnimeID,Date(),epID);            
        }
        else {
            alert("Bruh");
            console.warn("Already Exist Bruh");
        }

    })
})