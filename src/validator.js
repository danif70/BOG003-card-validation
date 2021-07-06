const validator = {
  isValid: (creditCardNumber) => {
    let convertir = creditCardNumber.split("").reverse();
    let par = 0;
    let impar = 0;
    for (let i = 0; i < convertir.length; i++) {
      if (i % 2 === 1) {
        if (convertir[i] * 2 > 9) {
          par += convertir[i] * 2 - 9;
        } else {
          par += convertir[i] * 2;
        }
      } else {
        impar += parseInt(convertir[i]);
      }
    }
    let sumatoria = par + impar;
  if (sumatoria % 10 == 0) {
      return true;
    } 
  else {
      return false;
    }
  },

  maskify: (creditCardNumber) => {
     let c = creditCardNumber.length;
     let mascara = "";
     for(let i = 0; i< c -4; i++)
     {
         mascara += "#";
     }
     let numeroenmascarado = mascara + creditCardNumber.substring(c - 4, c);
     return numeroenmascarado
 }
  
};
export default validator;
