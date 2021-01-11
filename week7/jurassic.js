var readlineSync = require( 'readline-sync' );
var name = readlineSync.question('Welcome to the Wild Adventures, what is your name? ');
var enemies = [ 'White Walker ', 'White Orc', 'Wild Dragon' ];
var wildAdventures = function() {
    var self = this;
    var enemy;
    var generateRandomEnemy = function() {
        var randomInt = Math.floor(Math.random() * ((enemies.length - 1) - 0 + 1)) + 0;
        enemy = enemies[randomInt];
        return enemy;
    };
    this.user = name;
    this.userIsActive = true;
    this.userHp = 25;
    this.enemyHp = 25;
    this.enemyIsActive = null;
    this.enemyCount = 1;
    this.userAction = function(){
    }
};