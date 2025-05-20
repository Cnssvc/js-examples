//  let sayi= Number(prompt("bir sayı giriniz "));
//  carpim=1;
//  for(i=1;i<=sayi; sayi++){
//     carpim=carpim*i;

//  }
//  alert("sonuç"+carpim); 
 // for(i=0;i<=10;i++){
//     for(j=0;j<=10;j++){
//         console.log(i+"x"+j+"="+i*j)
//     }
//     console.log("-------");
// } 
// console.log("merhaba"); çarpım tabolosuydu


// let sayi= Number(prompt("lütfen bir sayı giriniz"));
// let sonuç= true;
// for(i=2; i<Math.floor(sayi/2);i++){
//     if(sayi%i==0){
//         sonuç=false;
//         break;
//     }
// }if(sonuç){
//     alert(sayi+"asaldır");

// }else{
//     alert(sayi+"asal değidir");

// }

//armstrong sayıııı

// let sayi= prompt("sayı giriniz");
// let toplam=0;

// for(let i=0; i<sayi.length;i++){
//     let rakam= sayi.charAt(i);
//     toplam=rakam*rakam*rakam;
// }
// if(Number(sayi)==toplam){
//     alert("armstrong sayısıdır:")
// }else{
//     alert("armstong sayısı değildir");

// }

// function yazdir(isim,soyisim){
    
//     console.log(isim+" "+soyisim);

// }

// yazdir("enes","bayram");  ctrl + shift +k ile imcein olduğu stır komple silinir.

// function cube(sayi){
//     let sonuc= sayi*sayi*sayi;    math.floor sayının virgğlden donraki kısmını almaz
//     return sonuc;

// }
// function kareAl(sayi){           eğer bir sizide index değerini aşarsan arrayindexofboundexception haası alırsın ama js de bu sadece undefinedolarak hata veriyor
// alt+shift+f kodları düzenliyor
//     let sonuc=sayi*sayi;
//     console.log(sonuc);

// }
// let donenDeger=cube(2);
// kareAl(donenDeger);

// foreach kullanımı 
// let isimler=["enes","yakup","bilal ","kübra","ayşenur","adem"];
// isimler.forEach(function(isim){
//     console.log(isimler);
// })

// let urunler=[urun1,urun2,urun3,urun4,urun5];
// filtreliUrunler=[];
// let kullaniciUrunİsmi=prompt("bir ürün ismi giriniz")
// filtreliUrunleriDoldur(urunler);
// filtreliUrunleriYazdır(filtreliUrunler);
// function filtreliUrunleriDoldur(urun){

//     urunler.forEach(function(urun){
//         if(urun.isim.toUppperCase().includes(kullaniciUrunİsmi.toUpperCase(),0)){     56.video
//             filtreliUrunleriDoldur.push(urun);
//         }
//     });

// }
// function filtreliUrunleriYazdır(urunler){
//     urunler.forEach(function(urun){
//         console.log("----------------");
//         console.log("|"+urun.isim+"|"+urun.fiyat+"|"+urun.kategori);
//         console.log("-----------------")
//     })
// }
// let value;
// console.log(window);
// value =document.location.hostname;
// value = document.location.href;
// value = document.location.port;
// value=document.location.pathname;
// value=document.characterSet;
// value=document.title;
// value = Document.links.item(4).id;
// value = document.links.item(4).getAttribute("id");   satır içindeki id src gibi başlıkları seçer
// value = document.links.item(4).classList;  class listesini döner dizi olarak 
// console.log(value);

// const button= document.getElementById("todoAddButton");
// console.log(button);
// console.log(button.id);
// console.log(button.getAttribute("id"));
// console.log(button.className);
// console.log(button.getAttribute("class"));


// let buttonText=button.textContent;
// let buttonText2 =button.innerHTML;
// console.log(buttonText);
// console.log(buttonText2);

// const todoList =Array.from(document.getElementById.ClassName("list-group-item"));
// todoList.forEach(function(todo){
//     console.log(todo);
// })
// console.log(todoList);   class nameleri list-group-item olan etiketleri array e çevirip yazdırdık 

// const forms=document.getElementsByTagName("form");
// console.log(forms);

// queryselector - queryselector.all 
// const clearbutton = document.querySelector("#todoClearButton");
// console.log(clearbutton);
// console.log(document.getElementById("todoClearButton"));

// const todoList = document.querySelector(".list-group");
// console.log(todoList);

// consttodoList =document,querySelectorAll(".list-group-item");
// console.log(tooList);     queryselector kullanınca mesela seçiceğin id veya class ın tek bir tane olduğundan eminsen 
alert("bu siteye girmek tehlikeli ve yasaktır");