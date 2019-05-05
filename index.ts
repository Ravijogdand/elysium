
class User {
    public name: string = 'ravi';
    public age: number = 28;
    public address: { line1: string, line2: string, pincode: number };
    public movies: Array<{ moviename: string, country: string }>;
    public fruit: Array<string> = ['mango', 'apple', 'kiwi'];
    public emailId: string;

    constructor() {
        this.address = { line1: 'snfhrt', line2: "dfsdfds", pincode: 15 };
        this.movies = [{ moviename: 'iron man', country:'hollywood'}] ;
        this.emailId ='jogdand.ravi@gmail.com';
    }

}

