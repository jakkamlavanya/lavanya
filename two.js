let person={
    name:"lavanya",
    mark:200,
    name:"sai",
};
console.log(person)
person.mark=300
person["name"]="vijaya"
console.log(person)
console.log(Object.keys(person))
console.log(Object.entries(person))
let colors=["red","green"]
colors[1]="yellow"
console.log(colors);
colors.push("pink");
console.log(colors);
colors.pop()
console.log(colors);
colors.shift()
console.log(colors);
colors.unshift("purple")
console.log(colors);
console.log(colors.length);

function greet(params){
console.log('function greet')
} 
function add(p0,p2){
    return p0+p2;
}
greet();
a=add(7,7)
console.log(a)
let input = prompt("enter input");
input = parseInt(input)
alert(typeof input)

