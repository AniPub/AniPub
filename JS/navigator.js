const Home = document.querySelector(".Home-button");
const PlaylistButton = document.querySelector(".PlayList-button");
const SecurityButton = document.querySelector(".Security-button");
const PrivacyButton = document.querySelector(".Privacy-button");
const AboutUsButton = document.querySelector(".About-us-Button");
const ProfileButton = document.querySelector(".Profile-Button");
const helpbutton = document.querySelector(".help-button");


Home.addEventListener('click',()=>{
    window.location.href="/Home";
})
PlaylistButton.addEventListener('click',()=>{
    window.location.href="/PlayList";
})
ProfileButton.addEventListener("click",()=>{
    window.location.href="/Profile";
})
AboutUsButton.addEventListener("click",()=>{
    window.location.href="/About-Us";
})
PrivacyButton.addEventListener("click",()=>{
    window.location.href="/Privacy-policy";
})
