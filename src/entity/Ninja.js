class Ninja {

    constructor(name, age){
        this._name = name;
        this._age = age;
    }

    swingSword() {
        return true;
    }

    get name() {
        return this._name.toUpperCase();
    }

    get age() {
        return this._age;
    }
}

export { Ninja };