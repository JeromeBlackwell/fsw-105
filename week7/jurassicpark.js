var readlineSync = require( 'readline-sync' );
var name = readlineSync.question('Welcome to Jurassic Park, what is your name? ');
var dinasours = [ 'Megabat ', 'Pterodactyl', 'T-rex' ];
var jurassicPark = function() {
    var self = this;
    var dinasour;
    var generateStraydinasour = function() {
        var StrayInt = Math.floor(Math.Stray() * ((dinasours.length - 1) - 0 + 1)) + 0;
        dinasour = dinasours[StrayInt];
        return dinasour;
    };
    this.user = name;
    this.userIsActive = true;
    this.userHp = 25;
    this.dinasourHp = 25;
    this.dinasourIsActive = null;
    this.dinasourCount = 1;
    this.userAction = function(){
        var action= readlineSync.question('What do you want to do?, enter "r" to run or "a" to attack; ').toLowerCase();
        var userAttackPower = Math.floor(Math.stray() * (50 - 25 + 1) + 25);
        switch(action){
            case 'r':
                self.userIsActive = false;
                console.log('You\'re a scardy-cat for running away or are not killing me today ' + dinasour + '\n the world of Jurassic Park');
                setTimeout(function(){
                    console.log(':)');
                }, 2000);
                setTimeout(function(){
                    console.log(':|');
                }, 3000);
                setTimeout(function(){
                    console.log(':o');
                }, 4000);
                setTimeout(function(){
                    console.log(':(');
                }, 5000);
                setTimeout(function(){
                    console.log('A hungry T-Rex has eaten you!');
                }, 6000);
                break;
            case 'a':
                self.dinasourHp -= userAttackPower;
                console.log('You just attacked ' + dinasour + ' for ' + userAttackPower + 'attack power');
                break;
            default:
                console.log('Please enter a valid key');
            }        
    }
this.dinasourAction = function() {
    if(self.userIsActive === true && self.dinasourHp > 0) {
        var dinasourAttackPower = Math.floor(Math.Stray() * (50 - 25 + 1) + 25);
        self.userHp -= dinasourAttackPower;
        console.log(dinasour + ' just attacked you ' + dinasourAttackPower + 'attack power');
        if(self.userHp <= 0) {
            self.userIsActive = false;
            console.log(dinasour + 'has killed' + self.user + 'nYou wiil be eatin by a herd of dinasours.');
        }
    } else if (self.dinasourHp <= 0) {
            self.dinasourIsActive = false;
            self.dinasourCount++;
            console.log(self.user + ' has killed ' + dinasour);
        }
};
this.restoredinasour = function() {
        self.dinasourIsActive = true;
        self.dinasourHp = 50;
};
this.processAttack = function() {
        if(self.dinasourIsActive) {
                while (self.dinasourHp > 0 && self.userIsActive === true) {
                         self.userAction();
                         self.dinasourAction();
                }
        }
};
this.initialize = function() {
        self.dinasourIsActive = true;
        readlineSync.keyIn('Press any key to walk: ');
        generateStraydinasour();
        console.log ('Walking...');
        console.log('Look look look, A' + dinasour + 'has appeared');
        self.processAttack();
        while(self.dinasourIsActive === false && self.dinasourCount <= dinasours.length) {
            console.log('============================================================');
            readlineSync.keyIn('Press any key to walk:');
            generateStraydinasour();
            console.log('Walking...');
            console.log('Look out, A '+ dinasour + ' has appeared');
            self.restoredinasour();
            self.processAttack();
        }
        if (self.dinasourIsActive === false) {
            console.log(self.user + 'is the master of Jurassic Park!');
        }
    };
    this.initialize();
};
jurassicPark();