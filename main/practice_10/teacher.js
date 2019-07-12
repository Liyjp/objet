
"use strict";

import Person from "../../main/practice_10/person.js";

var Teacher = class extends Person {
    constructor(id,name,age,klasses){
        super(id,name,age);
        this.klasses = klasses;
    }
    introduce(){
        if (this.klasses == null){
            return super.introduce()+ " I am a Teacher. I teach No Class.";
        }else {
            return super.introduce()+ " I am a Teacher. I teach Class " + this.klasses[0]+ ", "+this.klasses[1]+".";
        }

    }

};

module.exports = Teacher;

