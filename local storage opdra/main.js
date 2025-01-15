const users = [
    {
        name : 'bob',
        age: 21, 
        country: 'Netherlands'
    },
    {
        name: 'mohammed',
        age: 22, 
        country: 'marokko'
    }
];


//  for(let i = 0; i < users.length; i++){
//     const user = users[i]
// if(user.name === 'bob'){
//     user.age = 25; 
// }

//     if(user.age > 20){
//         alert("je bent oud")
//         console.log(`naam: ${user.name} age: ${user.age} country: ${user.country}`);
//     }

//  }


//  let totalVisited = localStorage.getItem('totalVisited');

//  if(totalVisited){
//     totalVisited = 0; 
//  }

//  totalVisited++;



//  localStorage.setItem('totalVisited', totalVisited);        

// const usersJson = JSON.stringify(users);
// console.log(usersJson);

// localStorage.setItem('users', usersJson)
let AllusersJson = localStorage.getItem('users');
let Allusers = []; 


if(!AllusersJson){
    Allusers = JSON.parse(AllusersJson);
}

console.log(Allusers);
