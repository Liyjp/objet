
"use strict";

import Person from "../../main/practice_7/person.js";

var Teacher = class extends Person {
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }
    introduce(){
        if (this.klass == null){
            return super.introduce()+ " I am a Teacher. I teach No Class.";
        }else {
            return super.introduce()+ " I am a Teacher. I teach Class " + this.klass+ ".";
        }

    }

    introduceWith(student){
        if (this.klass === student.klass){
            return super.introduce()+ " I am a Teacher. I teach "+ student.name+".";
        } else {
            return super.introduce()+ " I am a Teacher. I dont't teach "+ student.name+".";
        }
    }
};

module.exports = Teacher;





