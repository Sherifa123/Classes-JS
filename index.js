const _logic = Symbol();
const _status = new WeakMap();

class dishes {
  //using constructor
  constructor(food) {
    this.food = food;

    //privatising using symbol
    this[_logic] = "GOOD/BAD";

    //privatising using weakmap
    _status.set(this, "settled"); //for setting as private

    this.ratings = "Very Tasty";
  }

  // defining method
  //instance function
  welcome() {
    console.log(`Hello ${this.food}`);
  }

  //static property & method
  static say(food) {
    console.log(`Are You Satisfies with our meal ?`);
  }
  get status() {
    return _status.get(this); //getting weakmap property
  }

  // getter
  get dishName() {
    return this.food;
  }

  // setter
  set dishName(x) {
    this.food = x;
  }
}

let dishes1 = new dishes("Atho");
let dishes2 = new dishes("Tandori");
let dishes3 = new dishes("Pasta");
let dishes4 = new dishes("Burger");

class Menu extends dishes {
  constructor(food) {
    super(food);
    this.ratings = "Menu";
  }
  welcome() {
    console.log(`Welocme to our restrauant ${this.food}.`);
    console.log("ratings: " + this.ratings);
  }
}
//using getter and setter
console.log(dishes4.dishName);
dishes1.dishName = "Briyani";
console.log(dishes1.food);

// accessing property & method
console.log(dishes3.food);
dishes1.welcome();

//accessing static property & method using class
console.log(dishes.dishes4);
dishes.say();

// accessing static property & method
console.log(dishes3.status);
console.log(dishes2.logic);

//accessing private property using symbol & weakmap
console.log(dishes1.food);
console.log(dishes2.food);
console.log(dishes4.status);

let menu1 = new Menu(", Visit Again");
menu1.welcome();
