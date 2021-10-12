window.addEventListener('DOMContentLoaded', (event) => {
    let optHair = document.querySelector('#hair');
    let optGlasses = document.querySelector('#glasses');
    let optShirt = document.querySelector('#shirt');
    let optTrousers = document.querySelector('#trousers');

    optHair.onclick = function () {
        let avatarHair = document.querySelector('#avatar-hair');
        let span = optHair.querySelector("span");

        if (avatarHair.style.display !== "block") {
            avatarHair.style.display = "block";
            optHair.style.fontWeight = "bold";
            span.innerHTML = "usuń";
        } else {
            avatarHair.style.display = "none";
            optHair.style.fontWeight = "normal";
            span.innerHTML = "dodaj";
        }
    }
    optGlasses.onclick = function () {
        let avatarGlasses = document.querySelector('#avatar-glasses');
        let span = optGlasses.querySelector("span");

        if (avatarGlasses.style.display !== "block") {
            avatarGlasses.style.display = "block";
            optGlasses.style.fontWeight = "bold";
            span.innerHTML = "usuń";
        } else {
            avatarGlasses.style.display = "none";
            optGlasses.style.fontWeight = "normal";
            span.innerHTML = "dodaj";
        }
    }
    optShirt.onclick = function () {
        let avatarShirt = document.querySelector('#avatar-shirt');
        let span = optShirt.querySelector("span");

        if (avatarShirt.style.display !== "block") {
            avatarShirt.style.display = "block";
            optShirt.style.fontWeight = "bold";
            span.innerHTML = "usuń";
        } else {
            avatarShirt.style.display = "none";
            optShirt.style.fontWeight = "normal";
            span.innerHTML = "dodaj";
        }
    }
    optTrousers.onclick = function () {
        let avatarTrousers = document.querySelector('#avatar-trousers');
        let span = optTrousers.querySelector("span");

        if (avatarTrousers.style.display !== "block") {
            avatarTrousers.style.display = "block";
            optTrousers.style.fontWeight = "bold";
            span.innerHTML = "usuń";
        } else {
            avatarTrousers.style.display = "none";
            optTrousers.style.fontWeight = "normal";
            span.innerHTML = "dodaj";
        }
    }
});