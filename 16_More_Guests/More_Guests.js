"use strict";
let Guest_List = ['Babar Azam', 'Muhammad Rizwan', 'Muhammad Amir'];
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr, ' + Guest_List[i] + ',\n\nIt is your pleasure to invite you in our party.\n\nThank You!\n\n')
// }
let absent_guest = 'Muhammad Rizwan';
let new_guest = 'Naseem Shah';
Guest_List[1] = new_guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr, ' + Guest_List[i] + ',\n\nIt is your pleasure to invite you in our party.\n\nThank You!\n\n');
}
console.log(`Mr, ${absent_guest} is not coming to the party.\n\n `);
console.log('Good News! We find big table so we are inviting 3 more guests.\n\n');
Guest_List.unshift('Shahid Afridi');
Guest_List.splice(2, 0, 'Iftikhar Ahmad');
Guest_List.push('Shaheen Shah Afridi');
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr, ' + Guest_List[i] + ',\n\nIt is your pleasure to invite you in our party.\n\nThank You!\n\n');
}
