console.log('hello world!');
console.log('hello world!');
console.log('hello world!');
console.log('hello world!');
console.log('hello world!');
console.log('hello world!');

let arr =["a","b","c","d","e","f","g","h","i","j"]

for(let index =0;index<=10; index++){
    console.log(arr[index])
}


for(let a =1;a<=10;a++){
    let ans = a*2
    console.log("2","x","a","=",ans)
}

for(let i=0; i<3;i++){
    console.log("parent loop",i)

    break;

    for(let j = 0;j<4; j++){
        console.log ("child loop",j)
    }
}

//first time- parent loop

let videos =["video1","video2","video3","video4","video5"];

console.log(videos.length)//5

for (let i =0;i<videos.length; i++){
    console.log (videos[i])
}

let video1title ="video1"
let video1description ="video 1 descrition"
let video1image ="https://image.com"


let video1 ={
    title:"video",
    descrition:"video 1 description",
    image:"https://image.com"
}

const vidoes =[
    {
        title:"video1",
        description:"video 1 description",
        image:"https://image.com"
    },
    {
        title:"video2",
        description:"video 1 description",
        image:"https://image.com"
    }

]

for(let i =0; i< vidoes.length; i++){
        console.log(vidoes[i].description)
}

for (let i =0;i<2; i++){
    console.log (vidoes[1].title)
}




