class User2 {
    public name: string;
    public address: { line1: string, line2: string, state: string };
    public fruitsEat: Array<string> = ["mango", "kivi"];
    public mytuple: [string, number, Object]
    private salaryRise: Array<number> = [150000, 1800000, 240000, 8000000]
    constructor() {
        this.name = 'manoj';
        this.address = {
            line1: 'Canada',
            line2: '5 the avenu',
            state: 'Vancauer'
        }
    }
}
