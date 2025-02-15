import {OP} from "./data/data.js";
let html = '';
let profile = document.querySelector(".Rec-div");


OP.forEach((value) => {
 html +=  `

 <div class="profile-div">
    <div class="profile" data-anime="${value[0].id}">
    <div class="image-div">
        <img class="poster" src="${value[0].ImagePath}" alt="">
    </div>
    <div class="Title-div">
        <p class="Title">${value[0].Name}</p>
    </div>
    <div class="ratings-div">
        <p></p>
    </div>
    
</div>
</div>
    `


});
profile.innerHTML = html;


