const cookie = {
  "name": "chocolate chip",
  isGlutenFree: false,
  "+Yummy": true,
  eatCookie: function(){
    console.log("I am eating "+ this.name);
  }
};

cookie.name = "Chip Chocolate";
cookie.isGlutenFree= true;

//console.log(cookie.eatCookie());
//console.log(cookie["+Yummy"]);
//console.log(cookie.name);

class Cookie{
  constructor(name,isGlutenFree){
    this.name = name;
    this.isGlutenFree =isGlutenFree;
  }

  eatCookie(){
    console.log("I am eating "+ this.name);
  }
}
const myCookie = new Cookie("Ice oat meal",false);
//console.log(myCookie["name"]);
console.log(myCookie.eatCookie());