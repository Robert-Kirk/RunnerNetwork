export class User{
    constructor(
        public id:number,
        public name:string,
        public email:string,
        public password: string
    ){
        this.name = name;
        this.email = email;
        this.password = password;
    }

}
