var Vehicle = function Vehicle()
{
    return {
        name: 'Vehicle',
        getName: function getName() {
            return this.name;
        }
    };
}

var vehicle = new Vehicle();
var vehicle2 = new Vehicle();
var vehicle3 = new Vehicle();
