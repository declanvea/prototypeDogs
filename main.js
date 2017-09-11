//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog ({name, status, color, hungry, owner}) {
  this.name = name;
  this.status = status;
  this.color = color;
  this.hungry = hungry;
  this.owner = owner;
}

// Instances of Dog
// Needed: sadie, moonshine, atticus
let sadie = new Dog({
  name: 'sadie',
  status: 'normal',
  color: 'black',
  hungry: false,
  owner: 'mason'
});

let moonshine = new Dog({
  name: 'moonshine',
  hungry: true,
  owner: undefined
});

let atticus = new Dog({
  owner: undefined
});

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human ({cool}) {
  this.cool = cool;
}

Human.prototype.pet = function(dog){
  dog.status = 'happy';
}
Human.prototype.feed = function(dog){
  dog.hungry = false;
}

// Instances of Human
// Needed: mason, julia
let mason = new Human({
  cool: false
});
let julia = new Human({
  cool: true
});
