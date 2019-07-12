"use strict";

import Person from "../../main/practice_6/person.js";

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

};

module.exports = Teacher;





