function disolve_up(element, time, callback) {
    setTimeout(() => {
        element.style = "opacity:0;transform:translateY(-" + element.offsetHeight + "px)";
        callback();
    }, time * 1000);
}
var steps_limit = 6;
var translate_count = 0, contador = 1;
function slider_knowledges() {
    container = document.getElementById("slider_knowledges");
    translate_count += parseInt(container.getElementsByClassName("knowledge_card")[0].scrollWidth);
    container.style.transform = "translate(-" + translate_count + "px)";
    container.style.transition = "transform .8s";
    contador++;
    if (contador == steps_limit) {
        setTimeout(function () {
            container.style.transform = "translate(0px)";
            container.style.transition = "transform .5s";
            contador = 1;
            translate_count = 0;
        }, 1500)
    }
    console.log("Hecho")
}