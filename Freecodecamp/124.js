class Book {
    constructor(author) {
      this._author = author;
    }
    // getter
    get writer() {
      return this._author;
    }
    // setter
    set writer(updatedAuthor) {
      this._author = updatedAuthor;
    }
  }

function makeClass(){
    class Thermostat{
        constructor(temp){
            this._temp = 5/9 * (temp -32)
        }
        get temperature(){
            return this.temp;
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass()
const thermos = new Thermostat(76); 
let temp = thermos.temperature;
thermos.temperature = temp = 26;
console.log(temp);