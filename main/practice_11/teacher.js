
"use strict";

import Person from "../../main/practice_11/person.js";

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
    isTeaching(student){
        for (var i=0;i<this.klasses.length;i++){
            if (student.klass === this.klasses[i]){
                return true;
            }
        }
        return false;

    }


};

module.exports = Teacher;


