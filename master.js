
let path = document.querySelectorAll("#logo path");

console.log(path);

for(var i in path) {
console.log(path[i].getTotalLength());

}