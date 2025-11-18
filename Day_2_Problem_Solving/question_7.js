
function getTrigangleType(a,b,c){
 if(((Math.pow(a,2)+Math.pow(b,2))===Math.pow(c,2)) ||
   ((Math.pow(b,2)+Math.pow(c,2))===Math.pow(a,2)) ||
   ((Math.pow(a,2)+Math.pow(c,2))===Math.pow(b,2))
){
    console.log("Right-angled")
 }
 else if((a==b)&&(b==c)&&(c==a)){
    console.log("Equilateral")
 }
 else if((a==b)||(b==c)||(c==a)){
    console.log("Isosceles")
 }
 else{
    console.log("Scalene")
 }
}

getTrigangleType(5,3,4)