"use strict";

var Class = class  {
    constructor(number){
        this.number = number;
    }
    getDisplayName(){
        return "Class "+ this.number;
    }
};

module.exports = Class;