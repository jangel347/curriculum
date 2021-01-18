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
var count_slides = 1;
function slide_vertical(direction) {
    var element = document.getElementsByClassName("slider")[0];
    if (count_slides >= 1 && count_slides <= element.getElementsByClassName("study_card").length) {
        translate_count = (direction) ? translate_count - element.getElementsByClassName("study_card")[0].offsetHeight : translate_count + element.getElementsByClassName("study_card")[0].offsetHeight;
        count_slides = (direction) ? count_slides + 1 : count_slides - 1;
        element.style.transform = "translatey(" + translate_count + "px)";
        state_buttons(element.getElementsByClassName("study_card").length);
    }
}
function state_buttons(max) {
    switch (count_slides) {
        case max:
            var btn_down = document.getElementsByClassName("button_down")[0];
            btn_down.style = "opacity:0";
            setTimeout(() => {
                btn_down.style = "display:none;";
            }, 500);
            break;
        case 1:
            var btn_up = document.getElementsByClassName("button_up")[0];
            btn_up.style = "opacity:0";
            setTimeout(() => {
                btn_up.style = "display:none;";
            }, 500);
            break
        default:
            var btn_up = document.getElementsByClassName("button_up")[0];
            var btn_down = document.getElementsByClassName("button_down")[0];
            btn_up.style = "display:block;opacity:1";
            btn_down.style = "display:block;opacity:1";
            break;
    }
    show_study(count_slides);
}

function show_study(indice) {
    var element = document.getElementsByClassName("slider")[0];
    var list_cards = element.getElementsByClassName("study_card");
    for (let i = 0; i < list_cards.length; i++) {
        if (i == indice - 1) {
            list_cards[i].classList.add("show");
        } else {
            list_cards[i].classList.remove("show");
        }
    }
}