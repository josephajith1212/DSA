function solution(input, markers) {
    result = [];
    let regex = new RegExp("["+markers.join("")+"]","gmi");
    input.split("\n").map(each => {
      let index = each.search(regex);
      if (index > 0 && markers.includes(each[index])){
        result.push(each.substring(0,index).trim())
      }else{
        result.push(each.trim());
      }
    });
    return result.join("\n");
  };
  
solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]);