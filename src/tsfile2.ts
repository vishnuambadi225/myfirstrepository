import school from "./tsfile3";
class student{
    firstname:string;
    lastname:string;
    schoolname:string;
    constructor(fname:string,lname:string,school:string){
        this.firstname = fname;
        this.lastname = lname;
        this.schoolname = school;
    }
    getfullname():string{
        let schoolobj = new school(this.schoolname);
        let schoolname = schoolobj.getschoolname();
        return "My full name " + this.firstname + " " + this.lastname + " && " + schoolname;
    }
}
export default student;