var chars;
(function (chars) {
    chars[chars["Lumine"] = 34] = "Lumine";
    chars[chars["Amber"] = 18] = "Amber";
    chars[chars["Noelle"] = 89] = "Noelle";
})(chars || (chars = {}));
var myChar = chars.Noelle;
console.log(myChar);
