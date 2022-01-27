
// code for checking if the word is a palindrome

function Palindrome(word) {
    word = word.replace(/\W/g, '').toLowerCase();
    return (word == word.split('').reverse().join(''));
  }
  
  console.log(Palindrome("racecar"));              
 



