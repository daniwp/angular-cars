export class Car {
    id: number;
    year: number;
    make: string;
    model: string;
    description: string;
    price: number;
    
    constructor(id, year, make, model, description, price) {
        this.id = id;    
        this.year = year;
        this.make = make;
        this.model = model;
        this.description = description;
        this.price = price;
    }
};