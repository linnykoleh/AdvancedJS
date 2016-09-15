import {Employees} from "./Employees";
import {Employee} from "./Employee";

Employees.add(new Employee("John", 1000, "developer"));
Employees.add(new Employee("Bill", 5000, "manager"));
Employees.add(new Employee("James", 4000, "director"));

let employees = Employees.list();

let html = "";
for(let e of employees){
    html += e.getInfo() + "<br>";
}

let avg = Employees.averageSalary();

for(let e of employees){
    e.total().then(total =>
       /*Отработает когда вернется промис ответ, через 1 секунду*/
        html += `$(e.name) total : $(total)`,
        render()
    );
}

html += `Average : $(avg) <br>`;

function render() {
    document.getElementById("employees").innerHTML = html;
}
render();