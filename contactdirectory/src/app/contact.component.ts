import { Component } from "@angular/core";
@Component({
    selector: 'app-contact',
    templateUrl: './contact.compoenent.html'
})
export class ContatComponent {
    public isShown: boolean = false;
    public fruitList: Array<string>;
    public in = 0;
    public jobList: Array<{}>;

    constructor() {
        this.fruitList = ["manogo", "apple", "Kivi", "bluberry"];
        this.jobList = [
            { name: 'Reach1to1', year: 2012, exp: 1 },
            { name: 'searchmayric', year: 2014, exp: 1.8 },

        ]
    }
    btnClick() {
        this.isShown = !this.isShown;
        this.in = this.in + 1;
        console.log("i am called")
    }
    myfunc(index, data) {
        console.log(index, data)
    }
    myfunc2(index, data) {
        data.expyears = data.exp + 'years'
        console.log(index, data)
    }
    kuchBhi() {
        console.log('this');
    }
}            