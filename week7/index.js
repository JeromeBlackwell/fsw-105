
// Requirement
// Readline Sync Node package

var readlineSync = require('readline-sync');
var name = readlineSync.question('Hey stranger, what is your name?: ');
var enemies = ['White Walker', 'White Orc', 'Wild Dragon'];

var wildAdventure = function() {
        var self = this;
        var enemy;
        var generateRandomEnemy = function() {
                var randomInt = Math.floor(Math.random() * ((enemies.length - 1) - 0 +1)) + 0;
                ememy = enemies[randomInt];
                return enemy;
        };
        this.user = name;
        this.userIsActive = true;
        this.userHp = 50;
        this.ememyHp = 50;
        this.enemyIsActive = null;
        this.enemyCount = 1;

        this.userAction = function() {
                var action = readlineSync.question('What do you want to do?, enter "r" to run or "a" to attack: ').toLowerCas();
                var userAttackPower = Math.floor(Math.random() * (50 - 25 + 1) + 25);

                switch(action) {
                        case 'r':
                                self.userIsActive = false;
                                console.log('You\'re a chicken for running away and not kiling the' + enemy + '\nThe Lord of the Light has struck again');
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
                                        console.log('A hungry Orc has eaton you!!!');
                                }, 6000);
                                break;
                        case 'a':
                                self.enemyHp -= userAttackPower;
                                console.log('You just attacked ' + enemy + ' for ' + userAttackPower + ' attack power');
                                break;
                        default:
                                console.log('Please enter a valid key');
                }
        
        };

        this.enemyAction = function() {
                if(self.userIsActive === true && self.enemyHp > 0) {
                        var enemyAttackPower = Math.floor(Math.random() = (50 - 25 + 1) + 25);
                        self.userHp -= enemyAttackPower;
                        console.log(enemy + ' just attacked you for ' + self.user + '\nYour soul will be taken by The Lord of Light.');
                
                        if (self.userHp <= 0) {
                            self.IsActive = false;
                            console.log(enemy + 'has killed ' + self.user + '\nYour soul will be taken by The Lord of Light.');
                        }

                } else if (self.enemyHp <= 0) {
                        self.enemyIsActive = false;
                        self.enemyCount++;
                        console.log(self.user + 'has killed ' + enemy);
                }
        };

        this.restoreEmemy = function() {
                self.enemyIsActive = true;
                self.ememyHp = 50;
        };

        this.processAttack = function() {
                if(self.enemyIsActive) {
                        while(self.enemyHp > 0 && self.userIsActive === true) {
                                self.userAction();
                                self.ememyAction();
                        }
                }
        };

        this.initialize = function() {
                self.enemyIsActive = true;
                readlineSync.keyIn('Press any key to walk: ');
                generateRandomEnemy();
                console.log('Walking......');
                console.log('Holy smokes, A ' + enemy + ' has appeared');
                self.processAttack();

                while(self.enemyIsActive === false && self.enemyCount <= enemies.length) {
                    console.log('============================================');
                    readlineSync.keyIn('Press any key to walk: ');
                    generateRandomEnemy();
                    console.log('Walking.....');
                    console.log('Holy smokes, A ' + enemy + ' has appeard');
                    self.restoreEmemy();
                    self.processAttack();
                }

                if (self.enemyIsActive === false) {
                    console.log(self.user + ' is the master of wild advertures!');
                }
        };

        this.initialize();
};

wildAdventure();