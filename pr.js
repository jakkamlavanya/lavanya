<html>
    <body>
        <script>
       // let numbers = [1,2,3,4,5];
//numbers.forEach((ele,i) => {
  
let numbers = [1,2,3,4,5];
let new_array=numbers.forEach((ele,i)=>{
    return ele*2;
});
let filtered=numbers.filter((ele,i) => {
    return ele % 2 !==0;
});
let map=numbers.map((ele,i) => {
    return ele *2;
});
console.log(filtered);
console.log(new_array);
console.log(map);

</script>
</body>
</html>