var A = /** @class */ (function () {
    function A(val) {
        this.var1 = val;
    }
    A.prototype.tereop = function () {
        var res = this.var1 > 0 ? "Psitive Number" : "Negatuve number";
        console.log(res);
    };
    return A;
}());
var obj = new A(6);
obj.tereop();
