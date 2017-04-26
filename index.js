const app = "I don't do much."

function bumpCounter() {
  var counter = 0;
  function addBump() {
    return counter += 1;
  }
  function getBumps() {
    return counter;
  }
  // console.log(addBump() );
  // console.log(getBumps() );
  return { //returning an object, {}, that contains the closures (or inner functions) above
    addBump, //not executing this function, just returning it
    getBumps //not executing this function, just returning it
  };
}

function createAnimal(animalType) { //this returns the function weapon below
  return function weapon(deadlyDevice) {
    return {
      animalType,
      deadlyDevice
    }
  }
}
//console.log(createAnimal.animalType = 'shark', createAnimal.deadlyDevice = 'Laserbeam' );


var sharkCreator = createAnimal('Shark')
//this calls the function createAnimal and passes 'Shark' in as the animalType argument

var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
//this calls the variable sharkCreator above, which returns a function, weapon, and I'm passing 'Laserbeam' in as the weapon's deadlyDevice argument

var sharkWithFrickinCannon = sharkCreator('Cannon')
