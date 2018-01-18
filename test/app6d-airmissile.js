import { ms } from "../src/ms";
import milstd from "../src/milstd";
ms.setStandard("APP6");

import icons from "../src/numbersidc/sidc/airmissile";
ms.addNumberIcons(icons);

describe("APP-6 D Air Missile", () => {
  const sidc = milstd["app6d"]["02"];

  describe("Main Icon", () => {
    for (let i = 0; i < sidc["main icon"].length; i++) {
      let icon =
        sidc["main icon"][i].code +
        " " +
        (sidc["main icon"][i]["entity subtype"] ||
          sidc["main icon"][i]["entity type"] ||
          sidc["main icon"][i]["entity"]);
      let valid = new ms.Symbol(
        "1003" + sidc.symbolset + "0000" + sidc["main icon"][i].code + "0000"
      ).isValid();

      if (
        valid &&
        [
          "From MIL-STD-2525.",
          "Simplification of MIL-STD-2525 icon TBD."
        ].indexOf(sidc["main icon"][i].remark) == -1
      ) {
        it(icon, () => {});
      } else {
        it.skip(icon, () => {});
      }
    }
  });

  describe("Modifier 1", () => {
    for (let i = 0; i < sidc["modifier 1"].length; i++) {
      let icon =
        sidc["modifier 1"][i].code + " " + sidc["modifier 1"][i].modifier;
      let valid;
      if (sidc["modifier 1"][i].code.length == 2) {
        valid = new ms.Symbol(
          "1003" +
            sidc.symbolset +
            "0000" +
            "000000" +
            sidc["modifier 1"][i].code +
            "00"
        ).isValid();
      } else {
        valid = true;
      }
      if (valid) {
        it(icon, () => {});
      } else {
        it.skip(icon, () => {});
      }
    }
  });

  describe("Modifier 2", () => {
    for (let i = 0; i < sidc["modifier 2"].length; i++) {
      let icon =
        sidc["modifier 2"][i].code + " " + sidc["modifier 2"][i].modifier;
      let valid;
      if (sidc["modifier 2"][i].code.length == 2) {
        valid = new ms.Symbol(
          "1003" +
            sidc.symbolset +
            "0000" +
            "000000" +
            "00" +
            sidc["modifier 2"][i].code
        ).isValid();
      } else {
        valid = true;
      }
      if (valid) {
        it(icon, () => {});
      } else {
        it.skip(icon, () => {});
      }
    }
  });
});
