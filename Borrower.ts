class Borrower{
    constructor(name:string, id:number, dept:string){
        this.Name=name;
        this.ID=id;
        this.Dept=dept;
        this.NoOfBooksOnHold=0;
    }
    public Name:string;
    public ID:number;
    public Dept:string;
    public NoOfBooksOnHold:number;

    public RequestBook(pBookname:string):string
    {
        return(pBookname);
    }
    public ReturnBokk(pBookname:string):string
    {
        return(pBookname);
    }

    public ObtainBook(BooksonHoldCount:number){
        console.log("updated Book Count"+BooksonHoldCount);
    }
}
var borrower = new Borrower('Kavya',101,"CSE");
borrower.RequestBook("CD");
borrower.ReturnBokk("CO");