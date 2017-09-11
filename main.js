//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (options) {
  this.name = options.name;
  this.color = options.color;
  this.hungry = options.hungry;
  this.fed = options.fed;
  this.owner = options.owner;
  this.status = options.status;
}

// Instances of Dog
// Needed: sadie, moonshine, atticus
const sadie = new Dog({
  name: 'sadie',
  color: 'black',
  hungry: 'not hungry',
  owner: 'mason',
  status: 'normal',
  // need to insert method named pet to change sadie's status to happy
  function(){
    console.log('');
  }
});
console.log(sadie);

const moonshine = new Dog({
  pet: 'moonshine',
  fed: true,
  hungry: 'not hungry'
});
console.log(moonshine);



//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (options) {
  this.name = options.name;
  this.cool = options.cool;
}

// Instances of Human
// Needed: mason, julia
const julia = new Human ({
  name: 'julia',
  cool: 'cool'
});
const mason = new Human ({
  name: 'mason',
  cool: 'not cool'
});
