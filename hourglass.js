var data=[
    [1,2,3,4,5],
    [6,3,7,8,3],
    [3,6,8,3,4],
    [2,5,8,4,3],
    [2,5,6,3,2]
]
var max=[]
for(let i=0; i<data.length-2; i++){
    for(let j=0; j<data.length-2; j++){
        max.push(data[i][j]+data[i][j+1]+data[i][j+2]+
            data[i+1][j+1]+
            data[i+2][j]+data[i+2][j+1]+data[i+2][j+2])
    }
    console.log(max)
    max=[]
}
