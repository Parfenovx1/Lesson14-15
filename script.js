var pers = new Person("Abdul", 100, 100);
var wrapper = document.getElementById("wrapper")

function createPers(pers, parent){
    var healthInner = element("div",
     {classes:["health-inner", "inner"],
     style: {
         width: "100%"
     }
    }),
    staminaInner = element("div",
     {classes:["stamina-inner", "inner"],
     style: {
        width: "100%"
    }
    })
    var name = element("div", {classes: ["namePlace"]}), 
    health = element("div", {classes: ["health-bar"]}, [healthInner]),
    stamina = element("div", {classes: ["stamina-bar"]}, [staminaInner]),
    image = element("div", {classes: ["img"]})
    var card = element("div",
     {
        classes: ["card-wrapper"],
    }, 
    [name, health, stamina, image]);

    health.addEventListener("click", function(){
        pers.health = pers.health - pers.maxHealth * 0.1;
        var result = (pers.health / pers.maxHealth) * 100;
        healthInner.style.width = result + "%"
        if(pers.health == 0){
            var element = document.getElementById("wrapper")
            element.parentNode.removeChild(element)
        }
    });

    stamina.addEventListener("click", function(){
        pers.stamina = pers.stamina - pers.maxStamina * 0.1;
        var result = (pers.stamina / pers.maxStamina) * 100;
        staminaInner.style.width = result + "%"
        if(pers.stamina == 0){
            var element = document.getElementsByClassName("card-wrapper")
            var style = element[0].style;
            style.backgroundColor = "gray"
        }
    });

    parent.append(card)
}


createPers(pers, wrapper);



