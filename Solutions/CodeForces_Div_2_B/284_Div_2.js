let n = 5;
let m = 3;
let words = [
  ["joll", "wuqrd"],
  ["euzf", "un"],
  ["hbnyiyc", "rsoqqveh"],
];
let lectures = ["hbnyiyc", "joll", "joll", "euzf", "joll"];
let output = "";

for (let i = 0; i < lectures.length; i++) {
  for (let j = 0; j < words.length; j++) {
    if (lectures[i] == words[j][0]) {
      if (words[j][0].length < words[j][1].length) {
        output = output+" " + words[j][0];
        break;
      } else {
        output = output + " " + words[j][1];
        break;
      }
    }
  }
}

console.log(output);
