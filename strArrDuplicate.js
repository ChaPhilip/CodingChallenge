// https://www.codewars.com/kata/59f08f89a5e129c543000069/solutions

// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

// Good luck!

// If you like this Kata, please try:

function dup(s) {
	return s.map(w => {
		return w.split('').filter((c, i, arr) => {
			return c !== arr[i - 1];
		}).join('');
	});
};

// const dup = s => s.map(w => w.split('').filter((c, i, arr) => c !== arr[i - 1]).join(''));


function dup(array) {
    return array.map(word => word.split('').filter( (letter, index) => letter !== word[index + 1]).join(''))
    };