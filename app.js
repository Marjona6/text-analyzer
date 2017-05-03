"use strict";

// var wordArray = [];

// This function creates an array of individual words from the raw input text
function getWordArray(userText) {
// take the text input as a string
// remove punctuation
userText = userText.toLowerCase(); // can I do this this way? trying to make it all lowercase
userText.replace(/['!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~']/g,""‌​);
// push each separate string to an array
// split it where there are spaces
var wordArray = userText.split(" ");
// return the number of values in the array
return wordArray;
}

// This function gets the total word count
function getWordCount(userText) {
	return getWordArray(userText).length;
}

// Unique word count function
// NOTE: This function needs to be corrected to remove case; current version will see Get and get as different words
// ^ resolved? see function getWordArray above
function getUniqueWordArray(userText) {
// define an empty new array to hold the unique words
	var uniqueWordArray = [];
// use the array from the function above
	var wordArray = getWordArray(userText);
// put the first word of the old array into the first position of the new array
	uniqueWordArray.push(wordArray[0]);
// compare oldArray[i] to oldArray[i+1]; if they are different, then push the value of oldArray[i+1] into the new array
// continue until the old array has been completely gone through
	for (var i = 0; i < wordArray.length; i++) {
		if (wordArray[i] !== wordArray[i+1]) {
			uniqueWordArray.push(wordArray[i+1]);
		}
	}
// return the array of unique words
	return uniqueWordArray;
}

// This function returns the length of the unique word count array (unique word count)
function getUniqueWordCount(userText) {
	return getUniqueWordArray.length;
}

// Average word length (in characters) function
function getAverageWordLength(userText) {
// use the array of total words
	var wordArray = getWordArray(userText);
	var total = 0;
// for each element in the array, add the length of that word to a total (declared as 0 to start)
	for (var i = 0; i < wordArray.length; i++) {
		total += wordArray[i].length;
	}
// when that is finished, divide the total by the length of the wordArray
	var averageWordLength = total / wordArray.length;
	return averageWordLength;
}