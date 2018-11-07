class BoardMember {
  constructor(name, homeState, training) {
  this.name = name;
  this.homeState = homeState;
  this.training = training;
}

  veto() {
    console.log(`Hello, my name is ${this.name}`);
  }
}