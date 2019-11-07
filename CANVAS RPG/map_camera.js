
var sky = new Image();
sky.src = "images/cricle.png";
var cloud = new Image();
cloud.src = "images/cricle.png";
var grass = new Image();
grass.src = "images/king/KINGISSE.png";
var ground = new Image();
ground.src = "images/fg.png";
var tree = new Image();
tree.src = "images/king/KINGISSE.png";
var stone = new Image();
stone.src = "images/cricle.png";
var backGround = new Image();
// Загрузка картинок

var player = new Image();
var king = new Image();
var cricle = new Image();
var bg = new Image();
var bg_menu = new Image();
var bird = new Image();

player.src = "images/king/KINGISSE.png";
cricle.src = "images/cricle.png";
king.src = "images/bird.png";
bird.src = "images/bird.png";
bg.src = "images/bg.jpg";
bg_menu.src = "images/bg_menu.gif"; 


backGround.src = "images/bg.png";
var fg = new Image();
fg.src = "images/fg.png";

var sky_block = new Image();
sky_block.src = "images/cricle.png";
var platform_long = new Image();
platform_long.src = "images/platform-long.png";


var map = [ 
    [0, 1, 2],  // 0 BACKGROUND || BackGround, ground, sky
    [0, 1, 2],  // 1 OBJECT || Sky_block Cloud, tree, 
    [0, 1, 2],  // 2 GRASS Трава / фон
    [0, 1, 2],  // 3 GROUND Земля / фон
    //  [0, 1, 2],  // 4 TREE дерево / фон
    //   [0, 1, 2],  // 5 STONE камень / объект
    //   [0, 1, 2],  // 6 SKY Небо / фон
];
map[0][0] = {img : backGround, x : -500, y : 0, speed : 0};
map[0][1] = {img : fg, x : -500, y : 412, speed : 0};
map[0][2] = {img : backGround, x : 0, y : 0};

map[1][0] = {img : platform_long, x : 700, y : 200, speed : 1.5, width : 50, height : 30};
map[1][1] = {img : platform_long, x : 900, y : 250, speed : 1.5, width : 50, height : 30};
map[1][2] = {img : platform_long, x : 1100, y : 300, speed : 1.5, width : 50, height : 30};
map[1][3] = {img : platform_long, x : 500, y : 300, speed : 1.5, width : 50, height : 30};

map[2][0] = {img : cloud, x : 220, y : 250};
map[2][1] = {img : cloud, x : 220, y : 250};
map[2][2] = {img : cloud, x : 220, y : 250};

map[3][0] = {img : cloud, x : 1, y : 250};
map[3][1] = {img : cloud, x : 1, y : 250};
map[3][2] = {img : cloud, x : 1, y : 250};

/*
    map[2] = {img : grass, x : 330, y : 250};
    map[3] = {img : ground, x : 440, y : 250};
    map[4] = {img : tree, x : 550, y : 250};
    map[5] = {img : stone, x : 660, y : 250};
    map[6] = {img : sky, x : 770, y : 250};
*/


function BackGround_fnc()
{
    if(global_player_X >= -40 && global_player_X <= cvs.width * 1.4)
    {
        for(let t = -1000; t <= cvs.width * 2; t += 180)
        {
            ctx.drawImage(map[0][0].img, t - map[0][0].speed, 0); // BackGround
        }
        
        for(let t = -1000; t <= cvs.width * 2; t += 180)
        {
            ctx.drawImage(map[0][1].img, t - map[0][1].speed, map[0][1].y); // Ground 
        }
    }
    else
    {
        for(let t = -1000; t <= cvs.width * 2; t += 180)
        {
            ctx.drawImage(map[0][0].img, t , 0); // BackGround
        }
        
        for(let t = -1000; t <= cvs.width * 2; t += 180)
        {
            ctx.drawImage(map[0][1].img, t , map[0][1].y); // Ground 
        }
    }
    
}


function Object_fnc()
{
    
    
    for(let i = 0; i <= 3; i++)
    {
        ctx.drawImage(map[1][i].img, map[1][i].x, map[1][i].y, map[1][i].width, map[1][i].height); // BackGround
        
        if(player_Y >= map[1][i].y - map[1][i].height - player.height/3 && player_Y <= map[1][i].y - map[1][i].height && player_X + player.width - player.width/2>= map[1][i].x - map[1][i].width + player.width + 1 && player_X + player.width/3 <= map[1][i].x + map[1][i].width)
        {
            player_Y = map[1][i].y - map[1][i].height - player.height/3;
            player_jump = true;
            player_speed_y = 0;
        }  
    }
}





















