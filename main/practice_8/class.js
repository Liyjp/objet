"use strict";

var Class = class  {
    constructor(number){
        this.number = number;
    }
    leader;
    assignLeader(student){
        this.leader = student;
    }
    getDisplayName(){
        return "Class "+ this.number;
    }
};

module.exports = Class;