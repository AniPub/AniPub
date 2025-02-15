import {OP} from "./data/data.js";
let profileHtml = "";

OP.forEach(value=> {
    profileHtml += `
    <div class="Profile-div">
    <div class="Profile" data-anime="${value[0].id}">
    <div class="Image-div">
        <img class="poster" src="${value[0].poster}" alt="${value[0].Name} Poster">
    </div>
    <div class="Title-div"><p class="Title">${value[0].Name}</p></div>
    <div class="ratings-div">
        <p class="mal-score">${value[0].MALScore}</p>
        <img src="rating-${value[0].RatingsNum}.png" alt="">
    </div>
    <div class="des-div">
        <p class="des">
        ${value[0].DescripTion}
        </p>
    </div>
</div>
</div>
`
})
const recommendation = document.querySelector(".recommendation-div");
recommendation.innerHTML = profileHtml;
