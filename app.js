"use strict";

// This function creates an array of individual words from the raw input text
function getWordArray(userText) {
// take the text input as a string
// make lowercase
userText = userText.toLowerCase();
// remove punctuation
var punctuationless = userText.replace(/[.,\/#!?$%\^&\*;:"@<>|{}=\-_`~()]/g,"");
var finalString = punctuationless.replace(/\s{2,}/g," ");
// push each separate string to an array and split it where there are spaces
var wordArray = finalString.split(" ");
// return the array
return wordArray;
}

// This function gets the total word count
function getWordCount(userText) {
// return the number of values in the array
	return getWordArray(userText).length;
}

// Unique word count function
function getUniqueWordArray(userText) {
// define an empty new array to hold the unique words
	var uniqueWordArray = [];
// use the array from the function above
	var wordArray = getWordArray(userText);
// loop through the array
	for (var i = 0; i < wordArray.length; i++) {
//if the current word is not already in the uniqueWordArray...
		if (uniqueWordArray.indexOf(wordArray[i]) === -1) {
// ...then we will add it to it
            uniqueWordArray.push(wordArray[i]);
		}
	}
// return the array of unique words
	return uniqueWordArray;
}

// This function returns the length of the unique word count array (unique word count)
function getUniqueWordCount(userText) {
	var output = getUniqueWordArray(userText);
	return output.length;	
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

// Function to handle Form Submit
function handleFormSubmit() {
	$('#js-input-text').submit(function(event) {
// prevent default event of page reload/page redirect when submit is clicked
	event.preventDefault();
// remove hidden class from results section
	$('dl').removeClass("hidden");
// take user input and assign it a JS variable name
	var userText = $(event.currentTarget).find('textarea[name="user-text"]').val();
// call the functions we need with the JS variable name as a parameter:
// place the result of word count function into the first dd
	$('#js-word-count-result').text(getWordCount(userText));
// place the result of unique word count function into the second dd
	$('#js-unique-word-count-result').text(getUniqueWordCount(userText));
// place the result of the average word length function into the third dd
	$('#js-average-word-length-result').text(getAverageWordLength(userText));
	});
}

// Triggers go here
$(function() {
	handleFormSubmit();
});