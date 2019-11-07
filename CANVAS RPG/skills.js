
var skills = [0, 1, 2, 3, 4];
var skill_1 = new Image();
skill_1.src = "images/jojo_skill.jpg";

var skill_1_img = new Image();
skill_1_img.src = "images/arrow.png";

var skill_2_img = new Image();
skill_2_img.src = "images/spear.png";

var skill_1_x = -100;
var skill_1_y = -700;




skills[0] = {
    skill_active : true,
    time_sk : 3,
    time_sk_live : 0,
    img_sk : skill_1,
    sk_dmg : 10,
    sk_mana : 10,
};


skills[1] = {
    skill_active : true,
    time_sk : 4,
    time_sk_live : 0,
    img_sk : skill_1,
    sk_dmg : 10,
    sk_mana : 10,
};


skills[2] = {
    skill_active : true,
    time_sk : 12,
    time_sk_live : 0,
    img_sk : skill_1,
    sk_dmg : 10,
    sk_mana : 10,
};


skills[3] = {
    skill_active : true,
    time_sk : 9,
    time_sk_live : 0,
    img_sk : skill_1,
    sk_dmg : 10,
    sk_mana : 10,
};



function function_skills(arr_skill)
{
    this.arr_skill = arr_skill;
    
    if(arr_skill == 0)
    {
        setTimeout(skill_1_fnc, 500, arr_skill);
    }
    else if(arr_skill == 1)
    {
        setTimeout(skill_2_fnc, 100);
    }
}


function skill_1_fnc()
{
    this.arr_skill = arr_skill;
    
    let yy = getRandomArbitary(50, 60);
    let xx = getRandomArbitary(50, 60);
    
    if(skills[0].skill_active == true)
    {
        skill_1_x = -100;
        skill_1_y = -700;
    }
    
    if(skills[0].skill_active == false)
    {
        console.log(skill_1_y);
        for(let x = -1000; x < cvs.width * 1.5; x+=50)
        {
            for(let y=0; y < cvs.height; y+=50)
            {
                if(skill_1_y + y <= cvs.height - player.height/2 - map[0][1].img.height){
                    ctx.drawImage(skill_1_img, skill_1_x + x, skill_1_y + y, skill_1_img.width / 6, skill_1_img.height / 6);
                    
                    
                    for(let i=0; i <= 4; i++)
                    {
                        monsters[i].health -=0.01;
                    }
                    
                }
                
            }
        }
        skill_1_x += 20;
        skill_1_y += 15;
        requestAnimationFrame(skill_1_fnc);    
    }
}





function skill_2_fnc()
{
    
    const spear_x = player_X;
    // var fly_spear_x = 0;
    console.log(spear_x);
    
    if(skills[1].skill_active == false)
    {
        
        ctx.drawImage(skill_2_img, player_X, spear_x, skill_2_img.width / 6, skill_2_img.height / 6);
        //  fly_spear_x += 5;
        //  console.log(fly_spear_x);
        
        requestAnimationFrame(skill_2_fnc); 
    }
}


