function exp({base, raise}: {base: number, raise: number}) {
    return base ** raise;
}
console.log(exp({base: 9, raise: 10}));