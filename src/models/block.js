module.exports.Block = class Block {
        constructor(blockName, noOfFloor, blockId) {
                this._blockName = name;
                this.noOfFloor = noOfFloor;
                this.blockId = blockId;
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
};
