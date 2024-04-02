
let Guest_List : string[] = ['Babar Azam' , 'Muhammad Rizwan' , 'Muhammad Amir'];

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr, ' + Guest_List[i] + ',\n\nIt is your pleasure to invite you in our party.\n\nThank You!\n\n')

}

let absent_guest : string = 'Muhammad Rizwan';

let new_guest : string = 'Naseem Shah';

Guest_List[1] = new_guest;

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr, ' + Guest_List[i] + ',\n\nIt is your pleasure to invite you in our party.\n\nThank You!\n\n')

}

console.log(`Mr, ${absent_guest} is not coming to the party. `);