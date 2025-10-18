import Realm from "realm";

export default class Pill extends Realm.Object<Pill> {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  quantity!: string;
  freq!: string;
  hour!: string;
  obs?: string;

  static schema = {
    name: "Pill",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      name: "string",
      quantity: "string",
      freq: "string",
      hour: "string",
      obs: "string?",
    },
  };
}
