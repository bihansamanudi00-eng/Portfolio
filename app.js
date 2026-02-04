const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');
const video4 = document.getElementById('projectVideo4');
const hoverSign = document.querySelector('.hover-sign');

const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon')



const videoList =[video1, video2, video3, video4];
videoList.forEach (function(video){
    video.addEventListener("mouseover", function(){
        video.play();
        hoverSign.classList.add("active")
    })
    video.addEventListener('mouseout', function(){
        video.pause();
        hoverSign.classList.remove("active")
    })
})

menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
});

closeIcon.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
    
})

function sendContact() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("input-message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields!");
        return;
    }

    const contactData = {
        name: name,
        email: email,
        message: message,
        date: new Date().toLocaleString()
    };

    let contacts = JSON.parse(localStorage.getItem("contactMessages")) || [];
    contacts.push(contactData);

    localStorage.setItem("contactMessages", JSON.stringify(contacts));

    alert("Message saved successfully ✅");

    // Clear inputs
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("input-message").value = "";
}
