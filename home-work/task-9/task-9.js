import users from '../users.js';

const getNamesSortedByFriendsCount = users => {
  const namesFriends = [...users]
    .sort(
      (prevUser, nextUser) => prevUser.friends.length - nextUser.friends.length,
    )
    .map(user => user.name);
  return namesFriends;
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
