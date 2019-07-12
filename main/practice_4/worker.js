"use strict";

import Person from "../../main/practice_4/person.js";

var Worker = class extends Person {
    constructor(name,age){
        super(name,age);
    }
    introduce(){
        return super.basic_introduce()+ " I am a Worker. I have a job.";
    }

};

module.exports = Worker;
