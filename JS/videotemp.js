import {OP} from "./data/data.js";
import {getId,setId,getEpID,setEpID} from "./animeInfo.js";
let AnimeId = getId() || 0;


let epHtml ="";
let epID = getEpID() || 0 ;
const videoPlayer = document.querySelector(".video-player-box");
const epLists = document.querySelector(".list-div-container");  


const profile = document.querySelectorAll(".Profile");
profile.forEach(value=> {
    value.addEventListener('click',()=>{
        setId(Number(value.dataset.anime));
        setEpID(0);
        window.location.reload();
        
    })
})


const Ref = OP[AnimeId].includes(OP[AnimeId][epID]);

if (Ref === false) {
    epID = 0 ;
    WholeSet (AnimeId);
}
else {
    WholeSet (AnimeId);
}

function WholeSet (AnimeId) {
    

    Player(OP[AnimeId][epID].link);

OP[AnimeId].forEach((value,i)=> {
    epHtml += `
    <div class="list" data-ep="${i}" >
    <div class="img-div">
    <img src="${OP[AnimeId][0].ImagePath}" alt="">
    </div>
    <div class="ep-title">
    <p>${OP[AnimeId][0].Name} Ep No.${i+1}</p>
    </div>
    <div class="add-button-div">
    <button class="Add-button" data-anImeId="${AnimeId}" data-ep="${i}">Add</button>
    </div>
    </div>
    `
   
  });
  epLists.innerHTML = epHtml; 


const listSelector = document.querySelectorAll(".list");
listSelector.forEach(value=> {
    value.addEventListener('click',()=>{
        setEpID(Number(value.dataset.ep));
        Player(OP[AnimeId][epID].link);
        window.location.reload();
    })
})

listSelector[epID].classList.add("Alu")

function Player(Source) {
  
    videoPlayer.innerHTML = `
    <video  id="my-video"
            class="video-js vjs-matrix video-player "
            controls
            autoplay
            preload="auto"
            data-setup="{}">
        <source src="${Source}" type="video/mp4">
        </video>
    `
}
 
    





videojs('#my-video', {
    controlBar: {
      skipButtons: {
        forward: 10,
        backward: 10,
      }
     },
    playbackRates: [0.5, 1, 1.5, 2], 
    enableSmoothSeeking: true,

  });




  document.querySelector(".button-div-download").innerHTML = `
   <a download href="${OP[AnimeId][epID].link}"> 
    <button class="Download-Button" >
    <img src="Download.svg" alt="">
    <p>Download</p>
</button>
</a>
  `


  document.querySelector(".Add-to-watchlist-button").setAttribute("data-animeid",`${AnimeId}`);
  document.querySelector("title").innerText = `${OP[AnimeId][0].Name} ${epID+1} | AniPub`;
  document.querySelector(".cover-pic").setAttribute('src',`${OP[AnimeId][0].Cover}`);
  document.querySelector(".cover-pic").setAttribute("alt",`${OP[AnimeId][0].Name} Cover Pic`);
  document.querySelector(".poster").setAttribute('src',`${OP[AnimeId][0].poster}`);
  document.querySelector(".poster").setAttribute('alt',`${OP[AnimeId][0].Name} Poster`);
  document.querySelector(".name").innerText = `${OP[AnimeId][0].Name}`;
  document.querySelector(".Synonyms").innerText = `${OP[AnimeId][0].Synonyms}`;
  document.querySelector(".Aired").innerText =  `${OP[AnimeId][0].Aired}`;
  document.querySelector(".Premiered").innerText =`${OP[AnimeId][0].Premiered}`;
  document.querySelector(".Duration").innerText = `${OP[AnimeId][0].Duration}`;
  document.querySelector(".Status").innerText =`${OP[AnimeId][0].Status}`;
  document.querySelector(".mALScore").innerText = `${OP[AnimeId][0].MALScore}`;
  document.querySelector(".Genres").innerText = `${OP[AnimeId][0].Genres}`;
  document.querySelector(".Studios").innerText = `${OP[AnimeId][0].Studios}`;
  document.querySelector(".Producers").innerText = `${OP[AnimeId][0].Producers}`;
  document.querySelector(".Description").innerText = `${OP[AnimeId][0].DescripTion}`;
  
}



document.querySelector(".Play-button").addEventListener(
    'click',()=> {
        document.querySelector("video").play();
    }
)