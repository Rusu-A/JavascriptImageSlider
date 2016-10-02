
document.getElementById('simplebox').onclick = function display(){
var x = document.getElementById('simplebox').style.height;
  if (x != '20px'){
document.getElementById('simplebox').style.height = '20px';
document.getElementById('simplebox').style.overflow = 'hidden';
document.getElementById('arrow').innerHTML="&#8595;";
}
else
{
document.getElementById('simplebox').style.height = '200px';
document.getElementById('simplebox').style.overflow = 'hidden';
document.getElementById('arrow').innerHTML="&#8593;";
};
};
