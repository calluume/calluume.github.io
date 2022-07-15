window.onload = function() {
    const showing = "translateY(-50%) rotate(-180deg)";
    const hiding = "translateY(-50%) rotate(0deg)";

    $('#project1body').on('show.bs.collapse', function () {
        document.getElementById('project1btn').style.transform = showing;
    })
    $('#project1body').on('hide.bs.collapse', function () {
        document.getElementById('project1btn').style.transform = hiding;
    })
    $('#project2body').on('show.bs.collapse', function () {
        document.getElementById('project2btn').style.transform = showing;
    })
    $('#project2body').on('hide.bs.collapse', function () {
        document.getElementById('project2btn').style.transform = hiding;
    })
    $('#project3body').on('show.bs.collapse', function () {
        document.getElementById('project3btn').style.transform = showing;
    })
    $('#project3body').on('hide.bs.collapse', function () {
        document.getElementById('project3btn').style.transform = hiding;
    })
    $('#project4body').on('show.bs.collapse', function () {
        document.getElementById('project4btn').style.transform = showing;
    })
    $('#project4body').on('hide.bs.collapse', function () {
        document.getElementById('project4btn').style.transform = hiding;
    })
}