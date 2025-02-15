import {GetId} from "./data/list.js";
import {OP} from "./data/data.js"

let profileHtml = "";
const List = GetId();

const mainbody = document.querySelector(".main-body");

console.log(List.lenght);
if (List.length === 0) {
    mainbody.innerHTML = `
    <p class="Warning">Please add Atleast One List before seeing a new one!</p>
    `;
}
else {

List.forEach((value,i) => {
    profileHtml += `
     <div class="Profile-div" data-anime="${value.id}" data-ep="${value.ep}">
                 <div class="Poster-div">
                     <img class="Poster" src="${OP[value.id][0].ImagePath}" alt="">
                 </div>
                 <div class="Info-div">
                    <p class="name">Name: <span>${OP[value.id][0].Name}</span></p>
                     <p>Adding Time:<span class="Added-Time">${value.Date}</span></p>
                     <div class="ratings-div">
                         <p>MAL Score:<span class="mALScore">${OP[value.id][0].MALScore}</span></p>
                         <img src="rating-${OP[value.id][0].RatingsNum}.png" alt="">
                     </div>
                     
                     <p>Studios: <span class="Studios">${OP[value.id][0].Studios}</span></p>
                     <p>Genres:<span class="Genres">${OP[value.id][0].Genres}</span></p>
                     <div class="epconfig">
                      <p>Starting Ep: <span>${value.ep+1}</span></p>  
                      <p>Total Ep:<span class="totalEp">${OP[value.id].length}</span></p>
                     </div>
                    
                     <div class="remove-button-div">
                         <button class="remove-button" data-delete="${i}">Remove From List</button>
                     </div>
                 </div>
             </div>
 
     `
 });
 
 mainbody.innerHTML = profileHtml;
}

