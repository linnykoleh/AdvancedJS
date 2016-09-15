import {Person} from "./Person";

export class Employee extends Person{
    constructor(name,salary,position){
        super(name);
        this.salary = salary;
        this.position = position;
    }

    /* javascript Promise == java Future*/

    bonus() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(Math.round(Math.random() * 1000)), 1000)
        });
    }

    total (){
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(this.bonus().then(bonus => resolve(bonus + this.salary))), 1000)
        });
    }

    getInfo(){
        return super.getInfo() + `Employee{ $(this.name), $(this.salary), $(this.position)}`;
    }
}