//Girdileri Alma
let vize1, vize2, final, ortlama;

vize1 = Number(prompt("vize1 giriniz : "));

vize2 = Number( prompt("vize2 giriniz : "));

final = Number(prompt("final giriniz : "));

//Hesaplama
ortlama = ((vize1*30)/100) + ((vize2*30)/100)  + ((final*40)/100);

//Koşullar
if(ortlama >= 60){
     alert("Geçtiniz ortalamanız : "+ortlama);
}
else{
     alert("Kaldınız ortalamanız : "+ortlama);
}