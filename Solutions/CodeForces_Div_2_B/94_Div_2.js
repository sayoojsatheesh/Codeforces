let students = 6;
let laces = 3;
let orderOfStudents = [
  [1, 2],
  [2, 3],
  [3, 4],
];
let totalGroups = 0;
while (true) {
  // create a temp object //
  let order = {};
  let flag = false;

  for (let i = 0; i < orderOfStudents.length; i++) {
    if (!order[orderOfStudents[i][0]]) {
      order[orderOfStudents[i][0]] = { count: 1, index: i };
    } else {
      order[orderOfStudents[i][0]].count++;
    }

    if (!order[orderOfStudents[i][1]]) {
      order[orderOfStudents[i][1]] = { count: 1, index: i };
    } else {
      order[orderOfStudents[i][1]].count++;
    }
  }

  for (let key in order) {
    if (key !== -1) {
      if (order[key].count === 1) {
        orderOfStudents[order[key].index][0] = -1;
        orderOfStudents[order[key].index][1] = -1;
        flag = true;
      }
    }
  }

  if (flag) {
    totalGroups++;
  } else {
    console.log(totalGroups);
    return;
  }
}
