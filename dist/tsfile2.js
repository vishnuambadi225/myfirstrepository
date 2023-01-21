"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsfile3_1 = __importDefault(require("./tsfile3"));
class student {
    constructor(fname, lname, school) {
        this.firstname = fname;
        this.lastname = lname;
        this.schoolname = school;
    }
    getfullname() {
        let schoolobj = new tsfile3_1.default(this.schoolname);
        let schoolname = schoolobj.getschoolname();
        return "My full name " + this.firstname + " " + this.lastname + " && " + schoolname;
    }
}
exports.default = student;
