// // Duplicate Encoder kyu6

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word){
    // -split the word into an array
    wordArr= word.split('')
    console.log(wordArr)
    //-create an empty object
    let obj={}
    //create an emptry array
    let arr =[]

    wordArr.forEach(function(item){
        obj[item]?obj[item]++:obj[item]=1
    })

    for(let i =0;i<wordArr.length;i++){
        if(obj[wordArr[i]]>1){
            arr.push(")")
        }else{
            arr.push("(")
        }
    }


    return arr



}

let result = duplicateEncode("recede")
console.log(result)