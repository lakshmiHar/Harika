const list1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan'];
const list2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav'];

const uniqueUsersInList1 = new Set(list1);
list2.forEach(user => uniqueUsersInList1.delete(user));


const uniqueUsersInList2 = new Set(list2);
list1.forEach(user => uniqueUsersInList2.delete(user));


const commonUsers = new Set(list1.filter(user => list2.includes(user)));


const uniqueUsersInList1Array = Array.from(uniqueUsersInList1);
const uniqueUsersInList2Array = Array.from(uniqueUsersInList2);
const commonUsersArray = Array.from(commonUsers);

console.log('Unique users in List1 but not in List2:', uniqueUsersInList1Array);
console.log('Unique users in List2 but not in List1:', uniqueUsersInList2Array);
console.log('Users present in both List1 and List2:', commonUsersArray);
