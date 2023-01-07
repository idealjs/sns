import EventEmitter from "events";

import type { SlotId } from "./type.js";

class Slot extends EventEmitter {
  public id: SlotId;
  constructor(id: SlotId) {
    super();
    this.id = id;
  }
}

export default Slot;
