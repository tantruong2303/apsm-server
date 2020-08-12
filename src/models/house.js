module.exports.House = class House {
        constructor(houseName, price, area, details) {
                this_houseName = houseName;
                this.price = price;
                this.area = area;
                this_details = details;
        }

        set _houseName(value) {
                this.houseName = value.toLowerCase();
        }

        get _houseName() {
                return this.houseName;
        }

        get _price() {
                return this.price;
        }

        get _area() {
                return this.area;
        }

        set _details(value) {
                this.details = value.toLowerCase();
        }

        get _details() {
                return this.details;
        }
};
