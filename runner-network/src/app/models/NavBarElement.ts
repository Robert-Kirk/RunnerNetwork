export class NavbarElement{

    constructor(
        public name:string, 
        public ref:string
        ){
            this.name = name;
            this.ref = ref;
        }

}

export const BASICNAVELEMENTS: NavbarElement[]= [
    new NavbarElement("home", "/"),
    new NavbarElement("about", "/about"),
    new NavbarElement("references", "/ref"),
    new NavbarElement("contact", "/contact")
  ]
