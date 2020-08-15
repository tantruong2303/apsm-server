const { times } = require("lodash");
const Joi = require("@hapi/joi");

module.exports.Resident = class Resident {
  constructor(name, houseId, sex, old, career) {
    this._name = name;
    this.houseId = houseId;
    this._sex = sex;
    this._old = old; //21.3 -123 -321 -43
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

  //true = male , false = female
  set _sex(value) {
    this.sex = value ? "male" : "female";
  }

  get _sex() {
    return this.sex ? "male" : "female";
  }

  set _old(value) {
    this.old = Math.round(value);
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

  static validateResident(param) {
    const schema = Joi.object({
      name: Joi.string()
        .regex(/^[a-zA-Z0-9]/)
        .required(),
      houseId: Joi.number().integer().required(),
      sex: Joi.boolean().required(),
      old: Joi.number().integer().min(1).max(150).required(),
      career: Joi.string().required(),
    });
    return schema.validate(param);
  }
};
