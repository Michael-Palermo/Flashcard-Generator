function BasicCard(front, back) {
    this.front = front;
    this.back = back;
  }
  
  var pmCanada = new BasicCard(
      "Who is the Canadian Prime Minister?", "Justin Trudeau");
  
  module.exports = BasicCard;