//Creating an array and pushing values
const cats = ['Milo', 'Otis', 'Garfield']

function firstTest() {
    const cats = [];
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
    
  };
firstTest();

//Adding a cat name at the end of the array
function destructivelyAppendCat(name){
    cats.push('Ralph');
}
destructivelyAppendCat();

 //Adding a cat name at the beginning of the array

function firstTest() {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
    
  };
firstTest();

function destructivelyPrependCat(name){
    cats.unshift('Bob');
}
destructivelyPrependCat();

//removing last cat from array
function firstTest() {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
    
  };

function  destructivelyRemoveLastCat(){
    cats.pop();
}
destructivelyRemoveLastCat();

//removing first cat from array
function firstTest() {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
    
  };

function  destructivelyRemoveFirstCat(){
    cats.shift();
}
destructivelyRemoveFirstCat();

//copying cats array and adding a cat at the end
function firstTest() {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
    
  };
  firstTest();

function   appendCat(name){
    const allCats = [...cats, 'Broom'];
    return allCats;
}
appendCat();
 
//copying cats array and adding a cat at the beginning
function firstTest() {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
    
  };
  firstTest();

function   prependCat(name){
    const allCats = ['Arnold', ...cats];
    return allCats;
}
prependCat();

//Removing the last cat and returning a new array
function firstTest() {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
    
  };
  firstTest();
function removeLastCat(){
    const newcats = [...cats.slice(0,2)];
    return newcats;
}
removeLastCat();
 
//removing the first cat and returning a new array
function firstTest() {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
    
  };
  firstTest();
function removeFirstCat(){
    const oldcats = [...cats.slice(1)];
    return oldcats;
}
removeFirstCat();