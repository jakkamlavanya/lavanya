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

//Anonymous functions, also known as closures 
const sum=(a,b)=>a+b;
()=>{ //arrow function anonymous function

}
let data=sum(1,3);
alert(data);



function greet(){

}
greet();
const person={
name:"sai",
greet: function(){
    console.log('welcome ${this.name}');
};
};
person.greet();
console.log()


let colors=[pink,red,green,blue];
colors.forEach((ele,i)=>{
    console.log(i)
});
console.log(colors)

// map method

colors.forEach((element,index)=>{
    console.log(element)
})
let new_x=numbers.forEach((ele,i)=>{
    return ele*2;
})
let new_y=numbers.filter((ele,i)=>{
    return ele%2==0;
})
let new_z=numbers.map((ele,i)=>{
    return ele*2;
})
console.log(new_x)
console.log(new_y)
console.log(new_z)