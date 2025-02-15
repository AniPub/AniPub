
let ID = 0 || JSON.parse(localStorage.getItem("AnimeId"));
let epID = 0 || JSON.parse(localStorage.getItem("id"));

const Profile = document.querySelectorAll(".Profile");
Profile.forEach(value=>{
    value.addEventListener('click',()=>{
         ID = value.dataset.anime;
         epID = 0 ;
        localStorage.setItem("id",JSON.stringify(epID));
        localStorage.setItem("AnimeId",JSON.stringify(ID));
        setTimeout(() => {
            window.location.href="/VideoPlayer"
        }, 1000);
    })
})

export const getId = () => ID ;
export const setId = (newID) => {ID = newID;
    localStorage.setItem("AnimeId",JSON.stringify(ID));
};
export const getEpID = () => epID;

export const setEpID = (newEpId) => {
    epID = newEpId ;
    localStorage.setItem("id",JSON.stringify(epID));

}
