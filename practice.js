//////////////////// practice_10.1
var myCat = {
    name : 'Kem',
    age : 2,
    weight : 3,
    scratch : function() {
        console.log ('krtkrt', "I'm", this.age)
    },
    eat : function (boiledChicken) {
        this.weight = this.weight + boiledChicken.weight;
    },

};

var boiledChicken = {
    weight : 0.7,
};

console.log('Before eating I was', myCat.weight);

myCat.eat(boiledChicken);

console.log('Now my weight increases to', myCat.weight); 

//////////////////// practice_10.2
var quiBmi = {
    abbr : 'NTQ',
    isMembershipInactive : false,
    weight : 73,
    totalWeight : function(myDumbbellWeight) {
        this.weight = this.weight + myDumbbellWeight.heaviness;
    },
};

var un = {
    abbr : 'Un',
    isMembershipInactive : true,
    weight : 80,
    totalWeight : function(myDumbbellWeight) {
        this.weight = this.weight + myDumbbellWeight.heaviness;
    },
};

var myDumbbellWeight = {
    heaviness : 60,
    height : 5,
};

console.log('My weight before lift is', quiBmi.weight);

quiBmi.totalWeight(myDumbbellWeight);
console.log('My weight after lift is', quiBmi.weight);

//////////////////// practice_13.1
console.log('===== Bài 13 - for =====');

var familyMembers = [
    { name : 'quiBmi', age : 26,},
    { name : 'Un', age : 18 },
    { name : 'Kem', age : 2}
];

for( i = 0; i < 3; i++) {
    console.log('The age of', familyMembers[i].name, 'is',familyMembers[i].age)
};

//////////////////// 14.1
console.log('===== Bài 14 - for...of / for...in =====');

for(var member of familyMembers) {
    console.log('The age of', member.name, 'is',member.age)
};

for (var properties in quiBmi) {
    console.log('property', properties, 'has :',quiBmi[properties])
};

//////////////////// practice_15.1
var familyMembersInLaw = [
    { name : 'Bo', age: 3}
];

var allFamilyMembers = familyMembersInLaw.concat(familyMembers);
console.log(allFamilyMembers); // concat

// var c = 'test';
// var newFamilyMembers = familyMembers.push(c); 
// console.log(newFamilyMembers); // push

var pop = familyMembers.pop();
console.log(pop);
console.log(familyMembers);
// { name: 'Kem', age: 2 }
//console.log(familyMembers.pop()); // pop