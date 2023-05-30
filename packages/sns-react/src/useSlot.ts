import { Slot, SlotId } from "@idealjs/sns-core";
import { useEffect, useState } from "react";

import useSns from "./useSns";

const useSlot = (slotId: SlotId): Slot | null => {
  const sns = useSns();

  const [slot, setSlot] = useState<Slot | null>(null);

  useEffect(() => {
    const slot = new Slot(slotId);
    setSlot(slot);
    sns.setSlot(new Slot(slotId));

    return () => {
      setSlot(null);
      sns.removeSlot(slotId);
    };
  }, [setSlot, slotId, sns]);

  return slot;
};

export default useSlot;
