/*
https://www.hackerrank.com/challenges/sparse-arrays/problem
*/
function matchingStrings(strings, queries) {
    const output = [];
    queries.map(each => {
        output.push(0)
        checkExists(strings, each)
    })
    function checkExists(strings, queries){
        var position = strings.indexOf(queries);
        if (position === -1) return;
        addToOutput();
        //used slice instead of splice as splice modifies original array
        return checkExists(strings.slice(position+1), queries);
    }
    function addToOutput(){
        if (output.length) output[output.length-1] += 1;
        else output.push(1);
        addToExsisting = true;
    }
    return output;
}

matchingStrings(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc'])
