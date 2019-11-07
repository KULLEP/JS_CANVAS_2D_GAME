
var game_is_pause = false; // Пауза игры

 

// Некоторые переменные

var 
global_player_X = cvs.width / 2;
global_player_Y = 0;
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
    if(game_is_pause == false)
    {
        if(global_player_X < -50)
        {
            global_player_X = - 50;
        }
        else if(global_player_X > cvs.width * 1.5)
        {
            global_player_X = cvs.width * 1.5;
        }
        
        
        
        // BG GAME
        BackGround_fnc();
        
        // OBJECT GAME
        Object_fnc();
        
        // MONEY
        money_fnc_canvas();
        
         // KING
        spawner_monsters();
        /*
        if (max_monsters == 0)
        {
            console.log('all killed');
            spawner_monsters();
        }
        */
        // ESC
        document.querySelector('html').onkeyup = function(event)
        {
            if(event.keyCode == '27')
            {
                game_is_pause = true;
            }
        }
        
        
        if (keys['68']) player_speed_x += 1.5;     // D
        if (keys['65']) player_speed_x -= 1.5;     // A
        if (keys['69']) player_kick_fnc();       // E KICK
        if (keys['87'] && player_jump == true) { // W
            player_speed_y -= 30;
            player_jump = false;
        }
        
        // SKILLS IMAGE
        ctx.drawImage(skills[0].img_sk, 200, 5, 40, 40);  // 1
        ctx.drawImage(skills[1].img_sk, 260, 5, 40, 40);  // 2
        ctx.drawImage(skills[2].img_sk, 320, 5, 40, 40);  // 3
        ctx.drawImage(skills[3].img_sk, 380, 5, 40, 40);  // 4
        
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
        
        
        if (player_Y >= cvs.height - player.height/2 - map[0][1].img.height) {
            player_jump = true;
            player_Y = cvs.height - player.height/2 - map[0][1].img.height; // - fg.height;
            player_speed_y = 0;
        }
        
        if(player_X <= 100)
        {
            global_player_X -= 2;
            map[0][0].speed -= 1;
            map[0][1].speed -= 2;
            
            
                for(let i = 0; i < map[1].length; i++)
                {
                    map[1][i].x += speed;
                }
            
        }
        else if(player_X >= cvs.width - 100)
        {
            global_player_X += 2;
            map[0][0].speed += 1;
            map[0][1].speed += 2;
            
            for(let i = 0; i < map[1].length; i++)
                {
                    map[1][i].x -= speed;
                }
        }
        
        if (player_X < -10)
        {
            player_speed_x *= -1.05;
            player_X = -10;
        }
        else if(player_X > cvs.width - 20)
        {
            player_speed_x *= -1.05;
            player_X = cvs.width - 20;
        }
        
        // SPRITE PLAYER
        ctx.drawImage(player, player_X, player_Y, player.width, player.height);
        player_mana_heath(); // Обновление результата маны и хп
        
        
        requestAnimationFrame(draw);
    }
    else if (game_is_pause == true)
    {
        // ESC
        document.querySelector('html').onkeyup = function(event)
        {
            if(event.keyCode == '27')
            {
                game_is_pause = false;
            }
        }
        
        
        
        // BG PAUSE
        ctx.drawImage(bg_menu, 0, 0, cvs.width, cvs.height);
        
        // SCORE
        ctx.fillStyle = "#FF2D2D";
        ctx.font = 'bold 35px sans-serif';
        ctx.fillText('Game Pause', cvs.width / 2.2, 150);
        
        requestAnimationFrame(draw);
    }
    
}

draw();
















