module.exports.Resident = class Resident {
        constructor(name, houseId, sex, old, career) {
                this._name = name;
                this.houseId = houseId;
                this._sex = sex;
                this.old = old;
                this._career = career;
        }

        set _name(value) {
                this.name = value.toLowerCase();
        }

        get _name() {
                return this.name
                        .split(" ")
                        .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
                        .join(" ");
        }

        set _sex(value) {
                this.sex = value.toLowerCase();
        }

        get _sex() {
                return this.sex;
        }

        get _old() {
                return this.old;
        }

        set _career(value) {
                this.career = value.toLowerCase();
        }

        get _career() {
                return this.career;
        }

        get _houseId() {
                return this.houseId;
        }
};
