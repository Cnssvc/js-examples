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
// console.log(tooList);     queryselector kullanınca mesela seçiceğin id veya class ın tek bir tane olduğundan eminsen kullanırsın ,queryselectorAll ı da eğer clastan birkaç tane varsa ve hepsini getirmek istiyorsan 

// const todoList = document.querySelectorAll("li:fisrt-child");ilk çocuk 
// const todoList = document.querySelectorAll("li:last-child");son çocuk
// const todoList = document.querySelectorAll("li:nth-child(1)");isteiğin sıradaki çocuk

// const todoList = document.querySelectorAll("li:fisrt-child(odd)"); satır numarası tek li etiketlerini getirir
// const todoList = document.querySelectorAll("li:fisrt-child(even)"); satır numarası çift etiketleri getirir

// const todoList = Array.from(document.querySelectorAll("li:nth-child(even)"));
// todoList.forEach(function(todo){
//     todo.style.backgroundColor="lightgray";

// })
// console.log(todoList)

// const clearButton=document.querySelector("#todoCLearButton");
// clearButton.style.backgroundColor="red";
// clearButton.style.fontWeight="bold";
// clearButton.style.paddingTop="px";

// parent-child  
// vale=todo;
// let ul = todo.parentElement;
// let cardBody=ul.parentElement;   
// value=todo.nextElementSiblings;   last child son çocuk demek proviousElementSiblings -> önceki kardeşe gitmek 

// dinamik olarak element oluşturmak
// const cardBody =document.querySelectorAll("card-bady")[1];
// console.log(cardBody);

// const link=document.createElement("a");
// link.id="goblogWebSite";
// link.className="btn btn-dark btn-sm mt-3";
// linkhref="http://enesbayram.net";
// link.innerHTML="kişisel web siteme git";

// cardBody.appendChild(link);
// console.log(link);

//örnek
// const todo=document.createElement("li");
// const todoLink=document.createElement("a");
// const i= document.createElement("i");

// todo.classListName="list-group-item d-flex fustify-content-between";
// todo.innerHTML="todo 5";

// todoLink.href="#";
// todo.classListName="delete-item";

// i.classname="farfa-remove";

// todoLink=appendChild(i);
// todo=appendChild(todoLink);
// todolist.appendChild(todo); 

//element silmek
// const todolist=document.querySelector("list-group");
// const todos=document.querySelectorAll(".list-groupp-item");
// const todo1=document.querySelector("ilist-group-item");

// todos[0].remove();
// todos[todos.lenght-1].remove();
// todo1.remove();
// todolist.removeChild(todolist.lastElementChild);
// todoList.removeChild(todos[0]);

//elementleri yer değiştirmek 
// const cardBody=document.querySelectorAll(".card-body")[1];

// const newTitle=document.createElement("h2");
// newTitle.className="card-title";
// newTitle.textContent="todo listesi";

// cardBody.replaceChild(newTitle ,cardBody.childNodes[1]);  yeniden adlandırırken parametre yerine önce oluşturğumuzu etiketi sonra da değiştirmek istediğimiz etiketi node tipine çevirip yazıyoruz

// event 
// const clearButton=document.querySelector("#tooClearButton");
// clearButton.addEventListener("click",changetitle); change title da parantez aç kapa yapmıyoruz yaparsak eğer tıklanmadan bu olay tetiklenir ve ekranda değişiklik yapar.

// function changetitle(){
//     document.querySelectorAll('.card-title')[1].textContent="todo başlığın değişti";

// }
// clearButton.addEventListener("click",changetitle);
// function changetitle(e){
//     console.log(e.type);   dönen event objesinin tipini
//     console.log(e.target);  dönen event objesinin etkilediği elementi getirir

// }

//maouse eventları
// document.addEventListener("DOMContentLoaded",run); sayfa yüklendiğinde demek dom content loaded
// function run(){
// console.log("sayfa yüklendi");
// }
// window.addEventListener("loaded",run);
// function run(){
//     console.log ("sayfa yüklendi");
// }