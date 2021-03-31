const isEquilateral = (a, b, c) => {
  return a === b && b === c;
};

const isIsosceles = (a, b, c) => {
  return a === b || b === c || a === c;
};

const isTriangle = (a, b, c) => {
  if (a === 0 || b === 0 || c === 0) {
    return false;
  } else if (a + b > c && b + c > a && c + a > b) {
    return true;
  }
  return false;
};

const triangle = (a, b, c) => {
  if (isTriangle(a, b, c)) {
    if (isEquilateral(a, b, c)) {
      return "EQ";
    } else if (isIsosceles(a, b, c)) {
      return "ISO";
    } else {
      return "SCA";
    }
  } else {
    return "INVALID";
  }
};

module.exports = {
  isEquilateral,
  isIsosceles,
  isTriangle,
  triangle,
};
