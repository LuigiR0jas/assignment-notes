console.log('epa');
var i, b, p;

i = document.getElementById("pepe");
b = document.getElementById('scan');
p = /^[a-zA-Z_]\{[0-3]?\}$/;

console.log(i);

function scanf(){
  console.log("Test: ", p.test(i.value));
  console.log("Exec: ", p.exec(i.value));
}

b.onclick = scanf;
