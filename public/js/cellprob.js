// Cell Datastructure
// Generates probabilities for different outcomes
cellds = function() {
    
    this.good = getRndInteger(0,20)*5; // The good outcome
    this.neutral = getRndInteger(this.good / 5, 20)*5; // The neutral outcome
}

cellds.prototype.roll = function() {
    roll = getRndInteger(0, 100);

    if (roll <= this.good) {
        return 0;
    } else if (roll <= this.neutral) {
        return 1;
    } else {
        return 2;
    }
}

cellds.prototype.toString = function() {
    return this.good+"✅ " + (this.neutral - this.good) + "➖ " + (100 - this.neutral) + "❌"   
}


// credit: W3 schools - https://www.w3schools.com/js/js_random.asp
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }