function zeroPad(num) {
    var zero = 2 - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
}

window.onload = function() {
    frMonths = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
    enMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    if (document.getElementById('last-updated')) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let repos = JSON.parse(this.responseText);
            repos.forEach((repo)=>{
                if (repo.name == "stebey.github.io") {
                    date = new Date(repo.pushed_at)
                    if (window.location.pathname.includes('fr')) {
                        month = frMonths[date.getMonth()]
                        at = 'à'
                    } else {
                        month = enMonths[date.getMonth()]
                        at = 'at'
                    }
                    document.getElementById('last-updated').innerHTML += ` <i>${date.getDate()} ${month}, ${date.getFullYear()} ${at} ${zeroPad(date.getHours())}:${zeroPad(date.getMinutes())}</i>`
                }
            });
        }
        };
        xhttp.open("GET", "https://api.github.com/users/calluume/repos", true);
        xhttp.send();
    }
};

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