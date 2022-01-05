

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return rect.top + window.scrollY
}

function toggleElement(id, vis) {
    element = document.getElementById(id);
    console.log(element)
    if (element.style.display == "none") {
        element.style.display = vis;
    } else {
        element.style.display = "none";
    }
}

function slideToggle(id, disableScroll) {
    element = document.getElementById(id);
    if (element.style.display == "none") {
        if (disableScroll) {
            document.body.style.overflow = "hidden";
        }
        element.classList.remove("slideOut");
        element.classList.add("slideIn");
        element.style.display = "block";

        setTimeout(function(){  element.classList.remove("slideIn") }, 1000);

    } else {
        if (disableScroll) {
            document.body.style.overflow = "auto";
        }
        element.classList.add("slideOut");
        setTimeout(function(){  element.style.display = "none"; }, 900);
    }
}

window.onscroll = function() {
    if (doTransition) {
        const speed = 150;
        const delay = 0;

        scrolled = (window.scrollY-delay)/speed;

        if (scrolled <= 1 && scrolled >= 0) {
            const [bgR, bgG, bgB, acR, acG, acB] = [((scR-bgSR)*scrolled)+bgSR, ((scG-bgSG)*scrolled)+bgSG, ((scB-bgSB)*scrolled)+bgSB, ((bgSR-acSR)*scrolled)+acSR, ((bgSG-acSG)*scrolled)+acSG, ((bgSB-acSB)*scrolled)+acSB].map(Math.round);
            
            document.documentElement.style.setProperty('--main-bg', `rgb(${bgR}, ${bgG}, ${bgB})`);
            document.documentElement.style.setProperty('--main-accent', `rgb(${acR}, ${acG}, ${acB})`);
        } else if (scrolled >= 1){
            document.documentElement.style.setProperty('--main-bg', `rgb(${scR}, ${scG}, ${scB})`);
            document.documentElement.style.setProperty('--main-accent', `rgb(${bgSR}, ${bgSG}, ${bgSB})`);
        } else {
            document.documentElement.style.setProperty('--main-bg', `rgb(${bgSR}, ${bgSG}, ${bgSB})`);
            document.documentElement.style.setProperty('--main-accent', `rgb(${acSR}, ${acSG}, ${acSB})`);
        }
    }
}