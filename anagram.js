function anagram(str1,str2){
    //store the occurence of each string in an object.
//what about edge cases?
//what about other characters like 'space,comma,hyphen,lowercase or uppercase'(didnt account for those)

    if(str1.length !== str2.length){
        return false
    }

    let strCounter1 = {};
    let strCounter2 = {};

    for(const char of str1){
        strCounter1[char] = strCounter1[char] ? strCounter1[char]++ : 1
    }
    console.log(strCounter1)
    for(const char of str2){
        strCounter2[char] = strCounter2[char] ? strCounter2[char]++ : 1
    }
    console.log(strCounter2)

    for(let keys in strCounter1){
        if(!(keys in strCounter2)){
            return false
        }

        if(strCounter1[keys] !== strCounter2[keys]){
            return false
        }
    }
return true
    //returns true if str1 and str2 contains the same number of characters
}
//true or false
const str1 = 'race'
const str2 = 'care'
console.log(anagram(str1,str2))