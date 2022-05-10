/*
https://www.hackerrank.com/challenges/three-month-preparation-kit-time-conversion/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
*/

function timeConversion(s) {
    var temp = s.split(":")
    if (temp[2][2]==="P"){
        if (+temp[0]<12) return `${+temp[0]+12}:${temp[1]}:${temp[2].slice(0,2)}`
    }else {
        if (temp[0]==="12") return `00:${temp[1]}:${temp[2].slice(0,2)}`
    }
    return s.slice(0,-2)
}

console.log(timeConversion("12:01:00PM"))
console.log(timeConversion("12:00:45AM"))
