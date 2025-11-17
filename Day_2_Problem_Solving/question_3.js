//  * 0–100 units → ₹5 per unit
//   * 101–200 units → ₹7 per unit
//   * 201–300 units → ₹10 per unit
//   * Above 300 units → ₹12 per unit


function getCalculateBill(units){
    let total=0
    if(units<=100){
       return total=units*5
    }
    else if(units<=200){
     return total=(100*5)+(units-100)*7
    }
    else if(units<=300){
     return total=(100*5)+(100*7)+ (units-200)*10
    }
    else{
        return total=(100*5)+(100*7)+(100*10)+ (units-300)*12
    }
}

console.log(getCalculateBill(280))