function getCharactorCode(char){
 if(char.charCodeAt()>=48 && char.charCodeAt()<=57){
    console.log("Digit")
 }
 else if(char.charCodeAt()>=65 && char.charCodeAt()<=90){
    console.log("Uppercase")
 }
  else if(char.charCodeAt()>=97 && char.charCodeAt()<=122){
    console.log("Lowercase")
 }
 else{
    console.log("Special Character")
 }
}
getCharactorCode("6")