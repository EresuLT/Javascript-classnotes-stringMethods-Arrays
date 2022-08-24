// ?=========================================================
// ?                DİZİLER (ARRAYS)
// ?=========================================================

console.log('***** ARRAYS ******');

//* Dizi Tanımlama
//* ---------------------------------------------------------

//! 1.Yöntem (Array Literal) - Tercih edilen yöntem
const isimler = ["ahmet",'mehmet','ismet','saffet'];
console.log(isimler);
console.log(isimler.length); //? 4


//! 2.Yöntem (Object Constructor)
const diller = new Array("Phyton","Java","C++","JS","Go");
console.log(diller);

const numbers = new Array(3,2,1);
console.log(numbers);

const sayilar = new Array(10);
console.log(sayilar);

//* Diziden Veri Okuma-Yazma
//* ---------------------------------------------------------

//!Okuma
const java = diller[1];
console.log(java);

//!Diziye Yazma
isimler[2] = 'Canan';
console.log(isimler);

//! Hata,const keyword'u ile tanımlanmış bir diziye tamamıyla bir atama yapılamaz.
// isimler = ["Can","Canan","Cavidan"]; //Uncaught TypeError: Assignment to constant variable.

const yaslar =[22,18,15]
const kisiler = ["Ahmet","Yilmaz", 2022, 2022-1970, true, 5.6, yaslar];
console.log(kisiler);

console.log(kisiler[6][1]); //içiçe çağırdık

kisiler[6][2]++ //yaşı 1 artırdık
console.log(kisiler);

const sonYas = kisiler[6][2]++; //önce ilk yaşı yazdı sonra artırdı
console.log(sonYas,kisiler);


// ?=========================================================
// ?        DİZİYİ DEĞİŞTİREN (MUTATOR) METOTLAR
// ?=========================================================


const cars = ["BMW","Porsche","Mercedes","Fiat"];

//* pop() son elemanı siler ve sildiği elemanı return eder
const deleted = cars.pop();
console.log(cars,'Silinen: ', deleted);

//*push() dizinin sonuna eleman ekler ve dizinin son eleman sayısını döndürür.
cars.push('Volvo');
console.log(cars);

//* unshift dizinin 0. indeksine eleman ekler ve dizinin son eleman sayısını döndürür
const boyut = cars.unshift('Audi');
console.log(boyut,cars);

//* dizinin 0. indeks elemanını siler ve silinen elemanı döndürür
const silinen = cars.shift();
console.log(silinen, cars);

//* dizinin tamamını ters sıraya çevirdi
console.log(cars.reverse());
console.log(cars);

//* sort() diziyi alfabetik olarak sıralar
console.log(cars.sort());

//*
const rakamlar = [3,5,1,10,55];
console.log(rakamlar.sort()); //! Alfabetik sıraladığı için doğru sonuç çıkmayabilir


//* sort metodu diziyi iterasyona uğratır ve parametre olarak aldığı arrow fonksiyonunu dizini her bir elemanına uygular bu sayede küçük sayılar ile büyük sayılar yer değiştirere sıralama işlemini gerçekleştirir
rakamlar.sort((a,b) => a-b);
console.log(rakamlar);



cars.splice(1,0,"Vosvos");
console.log(cars); //! 1.indise Vosvos ekledi(eleman sayısı bir artar)

cars.splice(2,1, "Anadol");
console.log(cars); //! 2.indisteki değeri Anadol olarak değiştirir(Eleman sayısı değişmez)