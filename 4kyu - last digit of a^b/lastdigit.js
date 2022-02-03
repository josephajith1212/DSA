var lastDigit = function (str1, str2) {
    let series;
    switch (str1[str1.length - 1]) {
        case "9":
            return (str2 % 2 == 0) ? 1 : 9;
        case "8":
            series = [8, 4, 2, 6];
            return series[(str2%4)-1];
        case "7":
            series = [7, 9, 3, 1];
            return series[(str2%4)-1];
        case "6":
            return 6;
        case "5":
            return 5;
        case "4":
            return (str2 % 2 == 0) ? 6 : 4;
        case "3":
            series = [3, 9, 7, 1];
            return series[(str2%4)-1];
        case "2":
            series = [2, 4, 8, 6];
            return series[(str2%4)-1];
        case "1":
            return 1;
        default:
            return 0;
    }
};

console.log(lastDigit("117", "3"));
