"use strict";

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
        }

    }
    getDisplayName(){
        return "Class "+ this.number;
    }
    appendMember(student){
       student.klass = new Class(this.number);
    }
};

module.exports = Class;