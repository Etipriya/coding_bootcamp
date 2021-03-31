const stringToArray = (string) => {
  return string.split("");
};

const arrayToString = (array) => {
  return array.join("");
};

const dnaToRna = (dnaCharacter) => {
  if (dnaCharacter === "G") {
    return "C";
  } else if (dnaCharacter === "C") {
    return "G";
  } else if (dnaCharacter === "T") {
    return "A";
  } else if (dnaCharacter === "A") {
    return "U";
  } else {
    console.log("Invalid character", dnaCharacter);
    return "";
  }
};

const rnaTranscription = (dnaSequence) => {
  const dnaArray = stringToArray(dnaSequence);
  const rnaArray = dnaArray.map(dnaToRna);
  const result = arrayToString(rnaArray);

  return result;

  // const resultsArray = [];

  // for (let i = 0; i < dnaArray.length; i++) {
  //   const currentItem = dnaArray[i];

  //   if (currentItem === A) {
  //     resultsArray.push("C");
  //   }
  // }
};

module.exports = {
  rnaTranscription,
};
