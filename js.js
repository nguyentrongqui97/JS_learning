var quiBmi = {
        abbr : 'NTQ',
        isMembershipInactive : false,
        weight : 73,
        totalWeight : function(myDumbbellWeight) {
        this.weight = this.weight + myDumbbellWeight.heaviness;
    }
};

var unBmi = {
        abbr : 'Un',
        isMembershipInactive : true,
        weight : 80,
        totalWeight : function(myDumbbellWeight) {
        this.weight = this.weight + myDumbbellWeight.heaviness;
    },
};

var myDumbbellWeight = {
    heaviness : 20
}

// for( i = 70; i < 81; i++) {
//     console.log('the weight is', memberInTotal[i])
// };

console.log('===== Bài 14 - for...of');

var familyMembers = [
    { name : 'quiBmi', age : 26 },
    { name : 'Un', age : 18 },
    { name : 'Kem', age : 2}
];

for(var member of familyMembers) {
    console.log(member)
};

console.log('=====');

for (var properties in unBmi) {
    console.log(properties)
};

