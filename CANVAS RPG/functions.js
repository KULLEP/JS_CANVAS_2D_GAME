
function player_is_dead()
{
    hp_player = 0;
    //  console.log('is dead');
    keys = 0; // Перезапись переменной с клавишами для отключения нажатий
}


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// i < monsters_spawn
function spawner_monsters()
{               
    for(var i = 0; i < 0; i++){
        
        /* enemy_obj, speed, damage, image, health */
        enemy(monsters[i], 3, 40, bird, 100);
        // HP
        ctx.fillStyle = "#000000";
        ctx.fillRect(enemy_obj.x - image.width + 5, enemy_obj.y - image.height + 5, 100, 8);// x, y, width, height
        ctx.fillStyle = "#FF0A2F";
        ctx.fillRect(enemy_obj.x - image.width + 5, enemy_obj.y - image.height + 5, monsters[i].health, 8);// x, y, width, height
        if(monsters[i].health <= 0)
        {
            var random_spawn_x = Math.random().toFixed();
            var x_monster = 0;
            max_monsters -= 1;
            
            if(random_spawn_x == 1) 
            {
                x_monster = cvs.width + 10;
            }
            else if(random_spawn_x == 1) 
            {
                x_monster = -10;
            }
            
            // Великолепное удаление монстра
            monsters[i] = {
                x : x_monster,
                y : 300,
                health :100,
            };  
            score += 1;
            money += +getRandomArbitary(1, 6).toFixed();
        }
    }
}



function player_mana_heath()
{
    // HP
    ctx.fillStyle = "#000000";
    ctx.fillRect(20, 10, 150, 15);// x, y, width, height
    ctx.fillStyle = "#FF0A2F";
    ctx.fillRect(20, 10, hp_player, 15);// x, y, width, height
    
    // MP
    ctx.fillStyle = "#000000";
    ctx.fillRect(20, 30, 150, 15);// x, y, width, height
    ctx.fillStyle = "#3923FF";
    ctx.fillRect(20, 30, mp_player, 15);// x, y, width, height
    
    // SCORE
    ctx.fillStyle = "#BF28FF";
    ctx.font = 'bold 50px sans-serif';
    ctx.fillText(score, cvs.width - 100, 50);
    
    
    // MANA
    if (mp_player > 0 && mp_player <= 150)
    {
        mp_player += 0.03;
    }
    
    // HP
    if (hp_player >= 1 && hp_player <= 150)
    {
        hp_player += 0.01;
    }
    else if (hp_player <= 0)
    {
        player_is_dead(); // Функция смерти игрока
    }
    
}


function enemy(enemy_obj, speed, damage, image, health)
{
    this.enemy_obj = enemy_obj;
    this.speed = speed;
    this.damage = damage;
    this.image = image;
    this.health = health;
    
    ctx.drawImage(image,enemy_obj.x,enemy_obj.y);
    
    
    
    collision_obj_x = Math.abs(enemy_obj.x - player_X);
    collision_obj_y = Math.abs(enemy_obj.y - player_Y);
    
    delta_obj_x = (Math.sign(enemy_obj.x - player_X));
    delta_obj_y = (Math.sign(enemy_obj.y - player_Y + 6));
    
    
    enemy_obj.x = enemy_obj.x - (delta_obj_x * speed);
    
    if(enemy_obj.y == 459)
    {
        enemy_obj.y = 460
    }
    else  enemy_obj.y = enemy_obj.y - (delta_obj_y * speed);
    
    
    if( collision_obj_x <= image.width / 2 && collision_obj_y <= image.width / 2){
        hp_player -= damage;
        player_speed_x = player_speed_x - (delta_obj_x * speed * 6);
        player_speed_y = player_speed_y - (delta_obj_y * speed * 6);
    }
}



function camera_move()
{
    if(player_X <= 0)
    {
        //   console.log('x <');
    }
    else if(player_X >= cvs.width)
    {
        //   console.log('x >');
    }
    else  if(player_Y <= 0)
    {
        //  console.log('y ^');
    }
    else  if(player_Y >= cvs.height)
    {
        //   console.log('y');
    }
}




function player_kick_fnc()
{
    
    
    if(player_is_kick == false)
    {
        
        for(var i = 0; i < monsters.length; i++){
            
            if(Math.sign(monsters[i].x - player_X) == 1 && player_X + player.width - monsters[i].x >= -50){
                {
                    monsters[i].x = monsters[i].x - (-(Math.sign(monsters[i].x - player_X)) * 100);
                    monsters[i].health -= player_dmg;
                    player_is_kick = true;
                }
                player_is_kick = false;
            }
            else if(Math.sign(monsters[i].x - player_X) == -1 && player_X + player.width - monsters[i].x <= 100){
                {
                    monsters[i].x = monsters[i].x - (-(Math.sign(monsters[i].x - player_X)) * 100);
                    monsters[i].health -= player_dmg;
                    player_is_kick = true;
                }
                player_is_kick = false;
            }
        }
    }  
}



function getRandomArbitary(min, max)
{
    return Math.random() * (max - min) + min;
}

function money_fnc_canvas()
{
    // MONEY TEXT
    ctx.fillStyle = "#D8D511";
    ctx.font = 'normal 40px sans-serif';
    ctx.fillText(money, cvs.width / 2, 50); // text, x , y
}




function skill_time(pos_x, pos_y, width, height, arr_skill)
{
    this.pos_x = pos_x;
    this.pos_y = pos_y;
    this.width = width;
    this.height = height;
    this.arr_skill = arr_skill;
    
    
    
    if(mp_player >= skills[arr_skill].sk_mana && skills[arr_skill].skill_active == true)
    {
        
        skills[arr_skill].time_sk_live = skills[arr_skill].time_sk;
        mp_player -= skills[arr_skill].sk_mana;
        skills[arr_skill].skill_active = false; // SKILL
        
        
        function_skills(arr_skill); // FUNCTION SKILL
        interval_skill = setInterval(function(){
            if(skills[arr_skill].time_sk_live > 0) // SKILL
            {
                skills[arr_skill].time_sk_live -= 1; // SKILL
                function drawtime(){
                    // TIME TEXT
                    ctx.fillStyle = "#00000088";
                    ctx.fillRect(pos_x, pos_y, width, height);// x, y, width, height
                    ctx.fillStyle = "#D8D8D8";
                    ctx.font = 'bold 15px sans-serif';
                    ctx.fillText(skills[arr_skill].time_sk_live, pos_x + 14, pos_y + 26); // text, x , y
                    requestAnimationFrame(drawtime);
                }
                drawtime();
            }
            else if (skills[arr_skill].time_sk_live <= 0) // SKILL
            { 
                
                skills[arr_skill].skill_active = true; // SKILL
                function drawImgSkill(){
                    ctx.drawImage(skills[arr_skill].img_sk, pos_x, pos_y, 40, 40);
                    requestAnimationFrame(drawImgSkill);
                }
                drawImgSkill();
                
                clearInterval(interval_skill);
            }
            
        },1000);
    }
    else if (mp_player < skills[arr_skill].sk_mana)
    {
        console.log('no mana'); 
    }
    else if (skills[arr_skill].skill_active == false) // SKILL
    {
        console.log('KD - ' + skills[arr_skill].time_sk_live); 
    }
}























































