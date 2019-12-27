export class User {
    constructor( _id = '', ci = '', name = '', lastname = '', mail = '', password = '', role = '', state = true) {
        this._id = _id;
        this.ci = ci;
        this.name = name;
        this.lastname = lastname;
        this.mail = mail;
        this.password = password;
        this.role = role;
        this.state = state;
    }
    _id: string;
    ci: string;
    name: string;
    lastname: string;
    mail: string;
    password: string;
    role: string;
    state: boolean;
}
