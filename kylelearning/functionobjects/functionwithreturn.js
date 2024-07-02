var Vehicle = function Vehicle()
{
    return {
        name: 'Vehicle',
        getName: function getName() {
            return name;
        }
    };
}

var vehicle = new Vehicle();
var vehicle2 = new Vehicle();
