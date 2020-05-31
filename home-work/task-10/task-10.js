import users from '../users.js';

const getSortedUniqueSkills = users => {
  const sortSkills = users
    .reduce(function(acc, item) {
      acc.push(...item.skills);
      return acc;
    }, [])
    .sort()
    .filter((item, index, arr) => arr.indexOf(item) === index);
  return sortSkills;
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
