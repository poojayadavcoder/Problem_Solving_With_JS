
function getTotalTax(income){
    let tax=0
   if(income<=250000){
      console.log("0")
   }
   else if(income>250000&&income<=500000){
     tax=((income-250000)*0.05)
     console.log(tax)
   }
   else if(income>500000&&income<=1000000){
     tax=(250000*0.05)+(income-500000)*0.2
     console.log(tax)
   }
   else{
    tax=(250000)*0.05+(500000)*0.2+(income-1000000)*0.3
    console.log(tax)
   }
}
getTotalTax(752000)