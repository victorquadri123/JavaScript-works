// dog ={
//     breed: "pitbull",
//     color: "black",


//    sound(){
//     console.log("bark")
//    }

// };

// dog.sound();

// class animal{
//     constructor(name){
//         this.name= name
//     }

//     speak(){
//         console.log(this.name, "makes a noise")
//     }
// }

// class dog extends animal{
//     speak() {
//         console.log(this.name, "barks")
//     }
// }

// let d = new dog("pitbull")
// d.speak();


//class work

class direct{
    constructor(director){
        this.director = director

       
    }
}   

class courses extends direct{
    english(gst){
        this.gst = gst
        console.log("The name of the English Teacher is " , this.gst , " and the name of the director is " ,this.director)
    }
}


class  fac extends direct{
    math(mth){
        this.mth = mth
        console.log("The name of the Math Teacher is " , this.mth , " and the name of the director is " ,this.director);
    }
} 

// let a = new direct("MR VICTOR");

let b = new courses("MR VICTOR");
b.english("MR QUADRI");
let c = new fac("MR VICTOR");
c.math("MR AYOMIDE");