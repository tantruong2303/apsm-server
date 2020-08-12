module.exports.Floor = class Floor {
        constructor(floorName, noOfHouse) {
                this._floorName = floorName;
                this.noOfHouse = noOfHouse;
        }

        set _floorName(value) {
                this.floorName = value.toLowerCase();
        }

        get _floorName() {
                return this.floorName;
        }

        get _noOfHouse() {
                return this.noOfHouse;
        }
};
