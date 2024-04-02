let personname: string = '';

personname = prompt('What is Your Name?') || '';

if (personname !== null && personname == '') {
    alert('You have to fill your Name!')
}
else {
    alert('Hello  , would you like to learn some Python today?')
}