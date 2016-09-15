/**
 * Created by dp-ptcstd-10 on 9/15/2016.
 */
arr = [1,2,3 ];

arr.filter();


person ={
    age:25
}

function printer(){
    for(p in this){
        console.log(p + " = " + this[p])
    }
}
printer.call(person);