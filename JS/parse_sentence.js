/*
Write a program that parses a sentence and replaces each word with the following: 
1) The first letter of the word
2) The number of distinct characters between first and last character
3) The last letter of the word. 
For example, Smooth would become S3h. 
Words are separated by spaces or non-alphabetic characters and these separators should be maintained in their original form and location in the answer. 
A few of the things we will be looking at is accuracy, efficiency, solution completeness. 
*/

function wordParser(inputText) {
  let words = inputText.split(' ')
  let response = ''  
  let regex = /\W/g;
  
  words.forEach(word => {
    response = response + ' '
    const arrLetters = word.split(regex) // Get array of letters from the word
    const arrCharacters = word.match(regex) // Get array of non-alphabetic characters from the word
    
    let lengthLetters = 0
    let lengthCharacters = 0
    
    if (arrLetters)
      lengthLetters = arrLetters.length
      
    if (arrCharacters)
      lengthCharacters = arrCharacters.length
    
    let i = 0
    arrLetters.forEach(letter => {      
      if(letter !== '')
        response = response + processWord(letter)

      if (i < lengthCharacters){
        response = response + arrCharacters[i]
        i++
      }
    })
  })
  
  return response;  
}

function processWord(word){
  let firstCharacter = word.substr(0,1) // Get the first letter of the original word splitted
  let lastCharacter = word.split("")[word.length - 1] // Get the last letter of the original word splitted
  let totalLetters = new Set(word.slice(1).slice(0,-1)).size // Get the number of letters without repeating inside the word
  
  if (totalLetters > 0)
    return(firstCharacter + totalLetters + lastCharacter)
  else
    return(firstCharacter + lastCharacter)
}

var output = wordParser ("Creativity is thinking-up new things. Innovation is doing new things!");
// var output = wordParser("-thinking-up-up- !things! is");
// var output = wordParser("++**-----thinking-up-up-");
// var output = wordParser("Creativity thinking");
console.log(output);
// expected: C6y is t4g-up n1w t4s. I6n is d3g n1w t4s!