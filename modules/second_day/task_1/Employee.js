import {Person} from "./Person";

export class Employee extends Person{
    constructor(name,salary,position){
        super(name);
        this.salary = salary;
        this.position = position;
    }

    add(employee){
         if(employee instanceof Employee){
              hiddenEmployeesList.push(employee);
        }
    }

    getInfo(){
        return super.getInfo() + `Employee{ $(this.name), $(this.salary), $(this.position)}`;
    }
}