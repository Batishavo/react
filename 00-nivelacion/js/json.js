/*JSON JS=>Javascript 
0=>object 
N=>Notation*/
var Pelota={
    color: "roja",
    tam: 3,
    rebota:false,
    setBotar: function(){
        this.rebota=true;
    },
};
console.log(Pelota);
const {name, edad, email} ={
    name: "Yirsis",
    edad:20,
    email:"mail@mail.com",
}
document.write("<p>"+name+"</p>");
document.write("<p>"+edad+"</p>");
document.write("<p>"+email+"</p>");
