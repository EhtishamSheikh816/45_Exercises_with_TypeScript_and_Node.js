"use strict";
let Guest_List = ['Babar Azam', 'Muhammad Rizwan', 'Muhammad Amir'];
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr, ' + Guest_List[i] + ',\n\nIt is your pleasure to invite you in our party.\n\nThank You!\n\n')
// }
let absent_guest = 'Muhammad Rizwan';
let new_guest = 'Naseem Shah';
Guest_List[1] = new_guest;
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr, ' + Guest_List[i] + ',\n\nIt is your pleasure to invite you in our party.\n\nThank You!\n\n')
// }
console.log(`Mr, ${absent_guest} is not coming to the party.\n\n `);
console.log('Good News! We find big table so we are inviting 3 more guests.\n\n');
// array me 3 guest add kiye hain.
Guest_List.unshift('Shahid Afridi');
Guest_List.splice(2, 0, 'Iftikhar Ahmad');
Guest_List.push('Shaheen Shah Afridi');
// Yahan per men 6 guest ke array ko print kraya he.
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr, ' + Guest_List[i] + ',\n\nIt is your pleasure to invite you in our party.\n\nThank You!\n\n');
}
// Sorry Message to guest for not inviting.
console.log('\nSorry we can not arrange big table, only Two people will be invited\n');
// Yahan Per mene Guest remove kiye hain.
while (Guest_List.length > 2) {
    let remove_guest = Guest_List.pop();
    console.log(`Sorry Mr. ${remove_guest}, you are not invited for Dinner.`);
}
// Hamare bache howe 2 Invited Guest.
for (let i = 0; i < Guest_List.length; i++) {
    console.log('\nDear Mr, ' + Guest_List[i] + ',\n\nYou are still Invited.\n\nThank You!\n\n');
}
// Mene sare guest array se romove kar diye.
Guest_List.splice(0, 2);
console.log(Guest_List);
