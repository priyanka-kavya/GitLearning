class A{
    constructor(val:number){
        this.var1=val;
    }
    public var1:number;
    
    public tereop(){
        var res:string = this.var1 > 0 ?"Psitive Number" : "Negatuve number";
        console.log(res);
    }
}
var obj:A = new A(6);
obj.tereop();
