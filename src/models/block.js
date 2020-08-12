module.exports.Block = class Block {
        constructor(blockName, noOfFloor) {
                this._blockName = blockName;
                this.noOfFloor = noOfFloor;
                this.listFloor = [];
        }

        set _listFloor(value) {
                this.listFloor.push(value);
        }

        set _blockName(value) {
                this.blockName = value.toLowerCase();
        }

        get _blockName() {
                return this.blockName;
        }

        get _noOfFloor() {
                return this.noOfFloor;
        }

        get _listFloor() {
                return this.listFloor;
        }
};
