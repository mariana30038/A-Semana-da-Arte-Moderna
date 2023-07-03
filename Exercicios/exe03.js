const a = false
const b = false
const c = true
const d = true

//1 a && b
//2 b && c
//3 a && d
//4 c %% d
//5 a & b && c

//6 a || b || 
//7 b || c
//8 a || b || c

// if (aqui vai a condição){
// console.log true

if(a && b) {
    console.log ("1",true)
}

if(b && c) {
    console.log ("2",true)
}

if(a && d) {
    console.log ("3",true)
}

if(c && d) {
    console.log ("4",true)
}


if(a && b && c) {
    console.log ("5",true)
}


if(a || b ) {
    console.log ("6",true)
}

if(b || c ) {
    console.log ("7",true)
}   

if(a || b || c) {
    console.log ("8",true)
}

