function qiymetHesabla(qiymet: number, endirim: number = 0, say?: number) {
    const miqdar = say?? 1
    return (qiymet-endirim) *miqdar
    
};
console.log(qiymetHesabla(100));
console.log(qiymetHesabla(100, 10));
console.log(qiymetHesabla(100,10,3));


