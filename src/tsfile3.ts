class school{
    nameofschool:string;
    constructor(schoolname:string){
        this.nameofschool = schoolname;
    }
    getschoolname():string{
        return "School name is " + this.nameofschool;
    }
}
export default school;