/*
* @Author: Marte
* @Date:   2018-03-02 09:48:19
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-16 01:06:57
*/

var censoredWords = ["sad","bad","mad"];
var customCensoredWords = [];
function censor(inStr){
    for(idx in censoredWords){
        inStr = inStr.replace(customCensoredWords[idx],"****");
    }
    return inStr;
}
function addCensoredWord(word){
    customCensoredWords.push(word);
}
function getCensoredWords(){
    return censoredWords.concat(customCensoredWords);
}
exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;