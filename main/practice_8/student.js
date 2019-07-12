"use strict";

import Person from "../../main/practice_8/person.js";

var Student = class extends Person {
    constructor(id,name,age,klass){
        super(id,name,age);
        this.klass = klass;
    }
    introduce(){
        if (this.klass.leader === Student()){
            return super.introduce()+ " I am a Student. I am Leader of Class " + this.klass+ ".";
        } else {
            return super.introduce()+ " I am a Student. I am at Class " + this.klass+ ".";
        }

    }

};

module.exports = Student;





