var chars;
(function (chars) {
    chars[chars["Lumine"] = 7] = "Lumine";
    chars[chars["Amber"] = 8] = "Amber";
    chars[chars["Noelle"] = 9] = "Noelle";
})(chars || (chars = {}));
var myChar = chars.Noelle;
console.log(myChar);
