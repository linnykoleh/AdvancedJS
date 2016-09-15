import {Employee} from "./Employee";

let _employees = [];

export class Employees{

    static add(employee){
        if(!employee instanceof Employee){
            throw employee + "is not Employee!";
        }else {
            _employees.push(employee);
        }
    }

    static list(){
        return [..._employees];
    }
}