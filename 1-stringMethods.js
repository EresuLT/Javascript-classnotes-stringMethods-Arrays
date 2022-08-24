// ?======================================================
// ?                     STRING METOTLARI
// ! KAYNAK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// ?======================================================

console.log('******* STRING METHODS ********');

//! 1-)Klasik yöntemle string tanımlanırsa bu string bir primitive değişkendir.
const str1 ='Clarusway';
const str2 =' Hello'
const str3 ='World'

console.log(typeof str1);
const str4 = str1 + str2; //string concat
console.log(str4);

console.log( str4.concat(str3));

//! 2-)Non primitive String tanımlama
const str5 = new String('Non-Primitive String');
console.log(str5,typeof str5);

//* Normalde primitive veri tiplerinin property veya metodu olmaz.
//* Ancak,Javascript otomatik olarak primitive String'ler için object wrapper oluşturur.
//* Bu sayede, String nesnelerine ait olan fonksiyonlar veya özellikleri
//* primitive string ile kullanılabilir hale gelir.
//* Sonrasında oluşan bu object bellekten otomatik olarak kaldırılır.

//* ----------------------------------------------------------
//*  concat() - immutable  //bir veya birden fazla string birleştirmek için kullanıyoruz
//* ----------------------------------------------------------
const s1 = 'hello'
const s2 = ' world'
const s3 = s1.concat(s2);
console.log(s3);

console.log(s3.concat(' Clarusway', str2," Merhaba"))
console.log(s2,s3);

//* ----------------------------------------------------------
//* charAt() //...'nci değerini getirir
//* ----------------------------------------------------------
console.log(s3.charAt());  //! 0.indexte bulunan char'ı getirir
console.log(s3.charAt(4)) //! o
console.log(s3.charAt(s3.length-1)); //! d (son element)

//* ----------------------------------------------------------
//* includes()
//* ----------------------------------------------------------
const word = "To be or not to be, that is the question";
console.log(word.includes("to be")); //!true
console.log(word.includes("That")); //!false
console.log(word.includes('to be',13)); //!true (13.değerden itibaren kontrol eder, varsa true)
console.log(word.includes('to be',14)); //!false


//* ----------------------------------------------------------
//* indexOf() , lastIndexOf()  kaçtan itibaren karşılaştığı--- case sensitive(büyük küçük)
//* ----------------------------------------------------------
const tobeIndex = word.indexOf('or');
console.log(tobeIndex);
console.log(word.indexOf('be')); //! 3-baştan kontrol eder
console.log(word.lastIndexOf('be')); //!16-sondan kontrol eder
console.log(word.lastIndexOf('BE')); //! -1

//* ----------------------------------------------------------
//* startsWidth() , endsWith()  - case sensisitive
//* ----------------------------------------------------------
const word2 = 'Salına salına sinsice!';
console.log(word2.startsWith('sa')); //! false
console.log(word2.startsWith('sa',7)); //! true
console.log(word2.endsWith('!')); //! true

//* ----------------------------------------------------------
//*  replace(searchFor, replaceWith) -- immutable fonksiyon (öz değişmez kopyayı değiştiriyor)
//* ----------------------------------------------------------
let oku = "Oku Baban gibi, saf olma"
console.log(oku.replace('saf olma','akıllı ol'));
oku = oku.replace('saf olma','akilli ol');
console.log(oku);

//* Detaylı değiştirme alternatifleri için regex kullanabiliriz
console.log(oku.replace(/AKILLI/i, 'Zeki')); //! /i case sensitive yapar

//* ----------------------------------------------------------
//*  slice(beginIndex[, endIndex])
//*  substring(beginIndex[, endIndex])
//*  substr (depreceated)
//* ----------------------------------------------------------
const veysel = 'Uzun ince bir yoldayım yürüyorum gündüz gece..'
const sliced = veysel.slice(33);
console.log(sliced,typeof sliced); //gündüz gece string

console.log(veysel.slice(17,30)); //dayım yürüyor
console.log(veysel.slice(-10)); //düz gece..
console.log(veysel.slice(-23,-19)); //yürü

//! negatif indeks substring ile kullanılamaz
console.log(veysel.substring(17,30));

//* ----------------------------------------------------------
//* split([sep [, limit] ])
//* ----------------------------------------------------------
const tarkan = 'Gel gündüzle gece olalım';
const splited = tarkan.split(' '); //! Boşluklara göre ayırdı ve listeye(arraye) çevirdi.
console.log(splited,typeof splited);
const gece = splited [2]; //indisleme ile değer okunabilir
console.log(gece);

const chars = tarkan.split('');
console.log(chars); //* null karakterine göre harfleri ayırarak bir char dizisi oluşturdu.

const copyTarkan = tarkan.split();
console.log(copyTarkan); //*String'i array haline getirdi. Tek elemanlı bir dizi haline getirdi


//* ÖDEV
//* ----------------------------------------------------------
// https://www.youtube.com/watch?v=b7vfp5G4brE
// https://youtu.be/b7vfp5G4brE
// uzun linki okuyup kısa linki verecek program

//* ----------------------------------------------------------
//* trim(); Boşlukları kaldırmış olur
//* ----------------------------------------------------------
const ramazan = "   Hoş geldin  ya şehri Ramazan    ";

console.log(ramazan); 
console.log(ramazan.trim()); 
console.log(ramazan.length); //35
console.log(ramazan.trim().length); //28
