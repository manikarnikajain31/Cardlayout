export class Users {
    name: string | undefined;
    email: string | undefined;
    phone: string | undefined;
    profile: string | undefined;

    constructor(name: string | undefined, email: string | undefined, phone: string | undefined, profile:string){
        this.name=name;
        this.email=email;
        this.phone=phone;
        this.profile=profile;
    }
}
