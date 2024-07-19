
//1-ci sual
// 1-den 10-a qeder ededlerin cemini(hasilini tapin)

// let cem=0
// for(let a=1; a<=10; a++)
// {

//  cem=cem+a
//  //  cem+=a
//  console.log(a);

// }
// console.log(cem);




//2-ci sual
// 1-den 100-e qeder cut ededleri/ onlarin cemini/hasilini tapin
// let cem=0
// let hasil=1
// for(a=2; a<=100; a+=2)

//    {
//     cem=cem+a
//     hasil=hasil*a
//     console.log(a);

//    }
//    console.log(cem);
//    console.log(hasil);


// 3-cu sual
// 3 reqemli ededlerin ededi ortasini tapin

// let edediOrta = 0
// let cem = 0
// let say = 0
// for (a = 100; a < 1000; a++) {
//     say++
//     cem += a
//     edediOrta = cem / say

// }
// console.log(edediOrta);


//4-cu sual
//3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədləri tapın

// for(a=100; a<1000; a++){
// if(a%7==0 && a%8==0)
//     {
//         console.log(a);
//     }

// }

// 5-ci sual
//  3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədlərin cəmini tapın
// let cem=0
// for(a=100; a<1000; a++){
// if(a%7==0 && a%8==0)
//     {
//         cem+=a

//     }

// }
// console.log(cem); 


//6-ci sual
//3 rəqəmli ədədlərdən 7 və 8-ə bölünən ilk ədədi tapın

// for(a=100; a<1000; a++){
// if(a%7==0 && a%8==0)
//     {
//      console.log(a);
//      break;

//     }

// }


//7-ci sual
//3 rəqəmli ədədlərdən 7 və 8-ə bölünən son ədədi tapın.
// for(a=100; a<=1000; a++){
// if(a%7==0 && a%8==0) {}
// }

// console.log(a);

//8-ci sual
//1-dən 100-ə qədər sadə və mürəkkəb ədədləri tapın

// for (a = 1; a <= 100; a++) {
//     if (a % 2 == 0 || a % 3 == 0 || a % 5 == 0 || a % 7 == 0) {

//         if (a == 2 || a == 3 || a == 5 || a == 7) {
//             console.log("sade " + a); continue;

//         }
//         console.log("murekkeb "    + a);
//     }
//     else { console.log("sade "  + a); }


// }


//9-cu sual
//Verilmiş 3 ədəddən ən böyük və ən kiçiyini tapın
// let a= 15
// let b= 10
// let c= 8
// if(a>b && a>c){
//     console.log(a + " max");

// }


// else (c<b && c<a)
// {
//     console.log(c + " min");
// }

//10-cu sual
//İstifadəçi tərəfindən daxil edilən ədədin cüt olub-olmadığını yoxlayın.(Məsələn istifadəçi 12 daxil etdiyi zaman ekrana cütdür, 15 daxil etdiyi zaman təkdir çıxarsın


// let a = Number(prompt("reqem daxil edin"))

// if(a%2==1){

//     alert("tekdir")

// }else{
//     alert("cutdur")
// }



//11-ci sual
// İstifadəçidən iki rəqəm və bir riyazi əməl daxil etməsini təmin edin və həmin ədədlər üzərində daxil olunmuş riyazi əməli tətbiq edib nəticəni ekrana çıxarın.

// let reqem1 =+ prompt ("1ci ededi daxil edin")
// let caduEmel = (prompt("Riyazi emel daxil edin"))
// let reqem2 =+ prompt ("2ci ededi daxil edin")
// let netice= 0 ;


// switch (caduEmel) {
//     case "+":
//         netice = reqem1 + reqem2
//         console.log(alert(netice));
//         break;
//     case "-" :
//         netice = reqem1 - reqem2
//         console.log(alert(netice));
//         break;

//     case "*" : 
      
//         netice = reqem1 * reqem2
//         console.log(alert(netice));
//         break;
//     case "/" : 
//         netice = reqem1 / reqem2
//         console.log(alert(netice));
//         break;
// }



//12-ci sual
//Daxil edilmis reqemin boluneni olan butun 3 reqemli ededleri cixarin
// let a=+ prompt("Reqem daxil edin")
// for(b=100; b<1000; b++){
// if( b%a==0)
// console.log(b);
// }



//13-cu sual
//Daxil edilmiş ədədin bütün mümkün tam bölənlərini tapın.

// let a = 56

// for(b=1; b<=56; b++){

//     if(a%b==0)
//         console.log(b);
//     }




//14-cu sual
//12 ədədi hansı 2 ədədin cəmi ola bilər? ( Bütün kombinasiyaları tapın)

// let c = 12;

// for (let a = 1; a <= c / 2; a++) {
//     let b = c - a;
//     console.log(a , b );
    
// }


//15-ci sual
//İki dəyişənin dəyərlərininin yerini dəyişən proqram tərtib edin. (Məsələn x=5, y=6, =&gt; x=6, y=5)
//  let a=5
//  let b=6
//  let c=0

// c=a
// a=b
// b=c

// a= a+b
// b= a-b
// a= a-b

//  console.log( "a: " + a);
//  console.log("b: " + b);




//16-ci sual
//Verilmiş ədədin tam ədəd olub olmadığını yoxlayan proqram yazın.
//  let a=+prompt("Eded daxil edin");

// if(a%1==0){
//     console.log("tam");
// }




//17-ci sual
// number dəyişənində iki rəqəmli ədəd saxlanılır bu ədədn  beşinci dərəcə qüvvətə qaldırılmış vəziyyətini (tapın); - 3-ə bölünmədən qalan qalığını tapın


// let a = 23

// a=a**5
// console.log(a);

// console.log(a%3);


//18-ci sual
//Daxil edilen temperatura esasen havanin isti, cox isti, soyuq, cox soyuq oldugunu gosterin.
//0 &gt; �� cox soyuq
//0-15 derece �� soyu
//15-30 derece �� isti
//30&lt; �� cox isti
//Əgər heç biri deyilse alerte versin ki temperatur yanlışdır.

// let temp =+ prompt()
// switch (true) {
//     case 0>temp : 
//         console.log("cox soyuq");  
//         break;
//     case 0<temp && temp<15 : 
//     console.log("soyuq");
//     break;

//     case 15<temp && temp<30 :
//         console.log("isti");
//     break;

//     case temp>30 :
//     console.log("cox isti");
//     break;

//     default : 
//         break;
// }


//19-cu sual
//Daxil edilen rəqəmə görə həftənin günlərini çıxardan program yazın (switch ile yazın.) Meselen: 1 =&gt; bazarertesi, 3=&gt; cersenbe (heftenin 7 gunu ucun)

// let gun = Number(prompt("Heftenin gunleri"));

// switch  (gun) {
//     case 1:
//         console.log(alert("Bazaretesi"));
//         break;
//     case 2:
//         console.log(alert("Cersenbe axsami"));
//         break;

//     case 3:
//         console.log(alert("Cersenbe"));
//         break;

//     case 4:
//         console.log(alert("Cume axsami"));
//         break;

//     case 5:
//         console.log(alert("Cume"));
//         break;

//     case 6:
//         console.log(alert("Senbe"));
//         break;

//     case 7:
//         console.log(alert("Bazar"));
//         break;



//     default:
//         console.log(alert("Heftenin gunlerini qeyd edin!"));
//         break;
// }



//20-ci sual
// Daxil edilen ayların sıra nömresinə əsasən hansı fəsil olduğunu tapın. Meselen : 5 (may ayı 5-cidir) output: Yaz fesli alertə çıxarın.

// let fesil = prompt("Fesiller 1-12");

// if (fesil==12 || fesil==1 || fesil==2){

//     console.log(alert("Qish"));
       
// }else if(fesil==3 || fesil==4 || fesil==5){

//     console.log(alert("Yaz"));

// }else if(fesil==6 || fesil==7 || fesil==8){

//     console.log(alert("Yay"));

// }else if(fesil==9 || fesil==10 || fesil==11){

//     console.log(alert("Payiz"));

// }else 
// {console.log(alert("Fesil secmek ucun bir reqem daxil edin!"));

// }
