var pers = new Person("Abdul", 300, 150);
var wrapper = document.getElementById("wrapper")

function createPers(pers, parent){
    var name = element("div", {classes: ["namePlace"]}), 
    health = element("div", {classes: ["health-bar"]}),
    stamina = element("div", {classes: ["stamina-bar"]}),
    image = element("div", {classes: ["img"]})
    var card = element("div",
     {
        classes: ["card-wrapper"]
    }, 
    [name, health, stamina, image]);

    parent.append(card)
}

createPers(pers, wrapper);
createPers(pers, wrapper);
createPers(pers, wrapper);