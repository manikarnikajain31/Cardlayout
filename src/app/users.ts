export class Users {
    name: string | undefined;
    email: string | undefined;
    phone: string | undefined;

    constructor(name: string | undefined, email: string | undefined, phone: string | undefined){
        this.name=name;
        this.email=email;
        this.phone=phone;
    }
}
