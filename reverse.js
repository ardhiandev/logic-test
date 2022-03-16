var value="abcdefghi"

var splitVal= value.split("")
var splitVal2= value.split("")

var reverseVal=splitVal.reverse()
var resVal = reverseVal.join("")
console.log("auto reverse",resVal)

// manual way
if(splitVal.length%2===0){
    var count=splitVal.length/2
}else{
    var count=(splitVal.length-1)/2
}
var temp
var lenArr=splitVal2.length
for(let i=0; i<=count; i++){
    temp=splitVal2[i]
    splitVal2[i] = splitVal2[lenArr]
    splitVal2[lenArr] = temp
    lenArr--
}
console.log("reverse swap array",splitVal2.join(""))

// Output:
// ihgfedcba