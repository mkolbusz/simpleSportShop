interface ClientInterface {
    firstname: string;
    lastname: string;
    address: string;
    postcode: string;
    city: string;
    email: string;
    phone: string;
}

export class Client implements ClientInterface {
    constructor(
        public firstname: string,
        public lastname: string,
        public address: string,
        public postcode: string,
        public city: string,
        public email: string,
        public phone: string
    ) {}

    static fromJsonObject(obj: any): Client {
        return new Client(obj.firstname, obj.lastname, obj.address, obj.postcode, obj.city, obj.email, obj.phone);
    }

}
