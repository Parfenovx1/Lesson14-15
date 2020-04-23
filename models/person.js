var Person = (function(){
    function Person(name, health, stamina) {
        this.name = name;
        this.maxHealth = this.health = health;
        this.maxStamina = this.stamina = stamina;
    }

    return Person;
})();