class Vehicle {
    constructor()
    {
        this.name = 'VehicleName';
        this.age = 18;
        this.getName = function getName(){return this.name};
    }
}

var v1 = new Vehicle();
var v2 = new Vehicle();

console.log("testing");