"use strict";

import Person from "../../main/practice_8/person.js";

var Teacher = class extends Person {
    constructor(id,name,age,klass){
        super(id,name,age);
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
