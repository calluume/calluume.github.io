

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