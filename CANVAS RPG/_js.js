var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");


// Загрузка картинок

var player = new Image();
var king = new Image();
var cricle = new Image();
var bg = new Image();

player.src = "images/king/KINGISSE.png";
cricle.src = "images/cricle.png";
king.src = "images/bird.png";
bg.src = "images/bg.jpg";


// Некоторые переменные

var 
player_X = cvs.width / 2,
player_Y = cvs.height / 2,
player_jump = false,
player_speed_x = 0,
player_speed_y = 0,
player_is_kick = false,
player_dmg = 50,
score = 0,
money = 0,

gravity = 2,

score = 0,
speed = 2 // max speed


hp_player = 150, // HP
mp_player = 150; // MP



// События на клавишы
keys = [];

// key events
document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});



// Монстры координаты
// [0,1,2]
var monsters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Не больше 10 монстров на карте


monsters.forEach(function(item, i, arr) {
    monsters[i] = {
        x : Math.random(cvs.width)*1000,
        y : 300,
        health :100,
    };
});



monsters_spawn = Math.floor(getRandomArbitary(2, monsters.length));
//console.log(monsters_spawn);
var max_monsters = monsters_spawn;





// Рисовать

function draw(){
    
    
    
    
    // camera_move();
    
    
    // BG
    ctx.drawImage(bg, 0, 0, cvs.width, cvs.height);
    
    // MONEY
    money_fnc_canvas();
    
    // KING
    spawner_monsters();
    
    if (max_monsters == 0)
    {
        console.log('all killed');
        spawner_monsters();
    }
    
    
    
    // PLAYER START
    
    // W
    if (keys['87'] && player_jump == true) {
        player_speed_y -= 30;
        player_jump = false;
    }
    
    // D
    if (keys['68']) {
        player_speed_x += 2;
    }
    
    // A
    if (keys['65']) {
        player_speed_x -= 2;  
    }
    
    
    
    // E KICK
    if (keys['69']) {
        player_kick_fnc();
    }
    
    
    // SKILLS IMAGE
    // 1
    ctx.drawImage(skills[0].img_sk, 200, 5, 40, 40);
    // 2
    ctx.drawImage(skills[1].img_sk, 260, 5, 40, 40);
    // 3
    ctx.drawImage(skills[2].img_sk, 320, 5, 40, 40);
    // 4
    ctx.drawImage(skills[3].img_sk, 380, 5, 40, 40);
    
    // SKILLS CLICK
    // pos_x, pos_y, width, height, arr_skill
 

    
    // 1 
    if (keys['49']) {
        skill_time(200, 5, 40, 40, 0);
    }
    
    // 2 
    if (keys['50']) {
        skill_time(260, 5, 40, 40, 1);
    }
    
    // 3 
    if (keys['51']) {
        skill_time(320, 5, 40, 40, 2);
    }
    
    // 4 
    if (keys['52']) {
        skill_time(380, 5, 40, 40, 3);
    }
    
    
    player_speed_y += gravity;
    player_Y += player_speed_y;
    player_X += player_speed_x;
    player_speed_x *= 0.9;
    player_speed_y *= 0.9;
    
    
    if (player_Y >= cvs.height - player.height) {
        player_jump = true;
        player_Y = cvs.height - player.height; // - fg.height;
        player_speed_y = 0;
    }
    
    
    
    
    
    
    // SPRITE PLAYER
    ctx.drawImage(player, player_X, player_Y, player.width, player.height);
    
    
    
    player_mana_heath(); // Обновление результата маны и хп
    
    
    requestAnimationFrame(draw);
}

draw();
















