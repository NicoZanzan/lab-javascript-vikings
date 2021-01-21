// Soldier
class Soldier {
    constructor(health, strength) {
      this.health = health 
      this.strength = strength  
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
    this.health = this.health - damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
    super(health, strength)
    this.name = name
     
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
    if (this.health > damage) {
        this.health = this.health - damage
        return `${this.name} has received ${damage} points of damage`
    } else {
        this.health = this.health - damage
        return `${this.name} has died in act of combat`
    }
    }
    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier{
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        if (this.health > damage) {
            this.health = this.health - damage
            return `A Saxon has received ${damage} points of damage`
        } else {
            this.health = this.health - damage
            return `A Saxon has died in combat`
        }
    }

}

// War
class War {
    this.vikingArmy = []
    this.saxonArmy = []
    addViking(viking){
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let damageSax = randomSaxon.receiveDamage(randomViking.strength)
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon),1)
        } return damageSax
    }
    saxonAttack(){
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let damageVik = randomViking.receiveDamage(randomSaxon.strength)
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking),1)
        } return damageVik
    }
    showStatus(){

    }
}
