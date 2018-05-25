const users = [{
  id: 1,
  name: 'James',
  schoolId: 123
}, {
  id: 2,
  name: 'Jack',
  schoolId: 456
}];

const grades = [{
  id: 1,
  schoolId: 123,
  grade: 96
}, {
  id: 1,
  schoolId: 123,
  grade: 90
}, {
  id: 2,
  schoolId: 456,
  grade: 80
}];

const getUser = (id) => {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.id === id);
    if (user) {
      resolve(user);
    } else {
      reject(`Unable to find user with id of ${id}`);
    }
  });
};

const getGrades = (school) => {
  return new Promise((resolve, reject) => {
    resolve(grades.filter((grade) => grade.schoolId === school));
  });
};

const getStatus = (userId) => {
  let user;
  return getUser(userId).then((tempUser) => {
    user = tempUser;
    return getGrades(user.schoolId)
  }).then((grades) => {
    let average = 0;

    if (grades.length > 0) {
      average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length;
    }

    return `${user.name} has a ${average}% in the class.`
  });
};

//async await

const getStatusAlt = async (userId) => {
  const user = await getUser(userId);
  const grades = await getGrades(user.schoolId);

  let average = 0;

  if (grades.length > 0) {
    average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length;
  }

  return `${user.name} has a ${average}% in the class.`
};

getStatusAlt(1).then((name) => {
  console.log(name);
}).catch((e) => console.log(e));

// getStatus(1).then((user) => {
//   console.log(user);
// }).catch((e) => console.log(e));
//
// getStatus(2).then((user) => {
//   console.log(user);
// }).catch((e) => console.log(e));
//
// getStatus(3).then((user) => {
//   console.log(user);
// }).catch((e) => console.log(e));
