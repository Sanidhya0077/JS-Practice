const aerchain = ['Aditya', 'Hima', 'Dibyank', 'Sanidhya', 'Saurabh'];

aerchain.forEach(function (item, index, array) {
    console.log(item, index);
})

aerchain.push('Srinivas');
console.log(aerchain);

aerchain.pop();
console.log(aerchain);

aerchain.shift();
console.log(aerchain);

aerchain.unshift('Harsha');
console.log(aerchain);

let aerchain_2 = aerchain.slice();
console.log(aerchain_2);

let aerchain_left = aerchain.splice(2,1);
console.log(aerchain);
console.log(aerchain_left);