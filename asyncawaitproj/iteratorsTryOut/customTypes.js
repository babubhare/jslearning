var customType = function customType(name, age) {
    this.name = name;
    this.age = age;
    this.getName = function getName() { return this.name };
    this.getAge = function getAge() { return this.age };
};

var customTypeArray = function customTypeArray() {
    this.data = [new customType('name0', 0), new customType('name1', 1), new customType('name2', 2)];
};

customTypeArray.prototype[Symbol.iterator] = function () {
    var index = -1;
    var data = this.data;

    return {
        next: function () {
            return { value: data[++index], done: !(index in data) }
        }
    };
};

customTypeArray.prototype.iterator = function()
{
    return this.__proto__[Symbol.iterator]();
};

export { customType };
export { customTypeArray };

