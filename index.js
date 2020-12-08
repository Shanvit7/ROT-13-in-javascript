/* ROT-13    [Encryption and Decryption]     !{Not Space,Special letter and Number sensitive }*/

// Key : 13

// To check if entered string is uppercase
let isUpperCase=str=>{
  return str === str.toUpperCase();
}

// encrypt function
let encrypt = (text)=>{
  let encryptedText ='';
  // looping each letter and shifting ahead to 13 positions from current
  for(let str = 0;str < text.length;str++){
    if(isUpperCase(text[str])){
      encryptedText+= String.fromCharCode((text.charCodeAt(str)+13-65)%26+65);
    }else{//for lower case
    encryptedText+= String.fromCharCode((text.charCodeAt(str)+13-97)%26+97) }

  }
  return encryptedText;
}
// encrypt :
code = prompt('Enter the text: ');
result=encrypt(code);
console.log(`Encrypted Text : ${result}`);

// decrypt function
let decrypt = (text)=>{
  let decryptedText='';
  // looping encrypted text and shifting back to 13 positions from current
  for(let str=0;str<text.length;str++){
  if(isUpperCase(text[str])){
    decryptedText+= String.fromCharCode((text.charCodeAt(str)-65-13+26)%26+65);
  }else{// for lowercase
    decryptedText+=String.fromCharCode((text.charCodeAt(str)-97-13+26)%26+97)
  }
  }
  return decryptedText;
}
//decrypt :
result2=decrypt(result);
console.log(`Decrypted Text : ${result2}`);


