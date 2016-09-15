/**
 * Created by dp-ptcstd-10 on 9/15/2016.
 */
export class Person{  /*export - можно экспортировать наружу*/

    constructor(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    set name(newName){
        if(newName.length < 3){
            throw "Incorrect name";
        }else{
            this._name = newName;
        }
    }

    getInfo(){
        return `Person{$(this.name)}`;
    }

}