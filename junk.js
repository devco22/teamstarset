let obj = {
  name: "Bob",
  age: 30
};

let map = new Map(Object.entries(obj));

alert( map.get('name') ); // Bob
