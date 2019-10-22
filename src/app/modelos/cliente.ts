export class Cliente{
    constructor(
        private id : number,
        private name : string,
        private username : string,
        private email: string,
        private adress: Adress,
        private geo : Geo,
        private phone : number,
        private website : string,
        private company : Company
    ){
        
    }
}

export class Adress {
    constructor(
        private street : string,
        private suite : string,
        private city : string,
        private zipcode : string
    ){}
}

export class Geo {
    constructor(
        private lat : string,
        private ing : string,
    ){}
}

export class Company {
    constructor(
        private name : string,
        private catchPhrase : string,
        private bs : string
    ){}
}