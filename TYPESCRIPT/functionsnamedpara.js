function exp(_a) {
    var base = _a.base, raise = _a.raise;
    return Math.pow(base, raise);
}
console.log(exp({ base: 9, raise: 10 }));
