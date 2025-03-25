// Girdileri alma
let yas = Number(prompt("yaşınızı giriniz : "));  
let para = Number(prompt("paranızı giriniz : "));

//Kontrol kısmı
if(yas>=18 && para>=3000){
     console.log("sınava girebilirsiniz");
}
else if(para<=3000 && yas>=18){
     console.log("paranız yetersizdir. :(");
}
else if(yas<=18 && para>=3000){
     console.log("yaşınız 18'den küçüktür :(");
}
else{
     console.log("yaşınız ve paranız yetersiz :(");
}