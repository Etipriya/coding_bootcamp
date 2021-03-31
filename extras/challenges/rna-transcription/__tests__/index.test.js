const { expect } = require("@jest/globals");
const { rnaTranscription } = require("..");

describe("rnaTranscription", () => {
  it("should convert ACGTGGTCTTAA to UGCACCAGAAUU", () => {
    expect(rnaTranscription("ACGTGGTCTTAA")).toEqual("UGCACCAGAAUU");
  });
});
