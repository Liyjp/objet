"use strict";

import Teacher from "../../main/practice_11/teacher.js";
var Class = class  {
    constructor(number){
        this.number = number;
    }
    leader;
    assignLeader(student){
        if (student.klass !== this.number){
            return "It is not one of us.";
        }else {
            this.leader = student;
            this.isIn();
        }

    }
    getDisplayName(){
        return "Class "+ this.number;
    }
    appendMember(student){
        student.klass = new Class(this.number);
        this.isIn()
    }

    isIn(student){
        var teacher  = new Teacher();
        if (teacher.isTeaching() === true){
            if (student.klass.leader === student) {
                return "I am Tom. I know "+ student.name+ " become Leader of Class "+student.klass+".";
            }
            return "I am Tom. I know " + student.name+" has joined Class "+ student.klass+"."
        }
    }
};

module.exports = Class;

