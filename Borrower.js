var Borrower = /** @class */ (function () {
    function Borrower(name, id, dept) {
        this.Name = name;
        this.ID = id;
        this.Dept = dept;
        this.NoOfBooksOnHold = 0;
    }
    Borrower.prototype.RequestBook = function (pBookname) {
        return (pBookname);
    };
    Borrower.prototype.ReturnBokk = function (pBookname) {
        return (pBookname);
    };
    Borrower.prototype.ObtainBook = function (BooksonHoldCount) {
        console.log("updated Book Count" + BooksonHoldCount);
    };
    return Borrower;
}());
var borrower = new Borrower('Kavya', 101, "CSE");
borrower.RequestBook("CD");
borrower.ReturnBokk("CO");
