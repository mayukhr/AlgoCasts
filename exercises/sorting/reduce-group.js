let users = [ 
  { name:"HLF", actor:"investor"}, 
  { name:"HLH", actor:"investor"}, 
  { name:"Muthoot", actor:"client"}, 
  { name:"Samunati", actor:"client1"} 
];

//groupBy

// OP 
// { investor: [ { name: “HLF” }, { name: “HLH” } ], 
//   client: [ { name: “Muthoot” }, { name: “Samunati” } ] 
// }


const res = users.reduce((acc, user) => {
    //   console.log(`acc===> ${acc}`, user.actor);
      if(acc[user.actor]) {
        acc[user.actor].push({name: user.name});
      } 
      else {
        acc[user.actor] = [];
        acc[user.actor].push({name: user.name});
      }
    return acc;
},{});

console.log(res)

