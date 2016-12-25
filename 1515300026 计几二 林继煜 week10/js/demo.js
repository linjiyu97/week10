// canvas 初始化

var canvas = document.getElementById("canvas")
canvas.width = 375
canvas.height = 667
var context = canvas.getContext("2d")
context.fillStyle = "#ebebeb"
context.fillRect(0, 0, canvas.width, canvas.height)
context.clearRect(0,0,canvas.width,canvas.height);
var pow=100
var x=0
if (confirm("微信开启，请问是机主本人操控吗？")){}
    else{
window.opener=null;
window.open('','_self');
window.close();
}
var answer;
answer = prompt("请输入密码：")
if (answer==110) {}
else
{
    window.opener=null;
    window.open('','_self');
    window.close();
}
drawBackGround(context)
mangdian(context)
power(context,pow+"%")


//drawHisChat(context,50, 100, 100, 40)
//drawMyChat(context, 250, 200, 100, 40)
//drawmymessage(context,"点击生成构造微信",100)
// Math.round(Math.random()*100)



function generate() {

    context.clearRect(0,0,377,669)
    drawBackGround(context)
    pow=pow-1
    power(context,pow+"%")
    mangdian(context)
    x=x+0.2
    jianshao(context,x)

    if(pow==10)
    {
        alert("剩余10%")
           
    }
    if(pow==5)
    {
        alert("剩余5%")
    }
    if(pow==2)
    {
        alert("剩余2%")
    }   
    if(pow<=0)
    {
        alert("没电，关机")
        window.opener=null;
        window.open('','_self');
        window.close();
    }     

    var hisName = document.getElementById('hisName')
    console.log(hisName.value)
    context.beginPath()
    context.font = 'lighter 18px STHeitiSC-Light'
    context.textAlign = 'center'
    context.textBaseline = 'top'
    context.fillStyle = '#ffffff'
    context.fillText(hisName.value, 187, 32)

    context.textAlign='left'
   /* var chk=document.getElementById('chk1')
     var select =document.getElementById('select1')
     var content=document.getElementById('cnt1')

     if(chk.checked){
     var index = select.selectedIndex
     if(index==0)
     drawmymessage(context,content.value,100)
     else
     drawhismessage(context,content.value,100)
     }*/

    var chk= new Array(7)
    var select = new Array(7)
    var content= new Array(7)
    var far=0;

    for (var i=1;i<11;i++)
    {

        chk[i]= document.getElementById('chk'+i)
        select[i] =document.getElementById('select'+i)
        content[i] = document.getElementById('cnt'+i)
        if(chk[i].checked){
            var index = select[i].selectedIndex
            far=far+50
            pow = pow - 1
            if(index == 0)
            {
                drawmymessage(context,content[i].value,60+far)
            }
            else
            {
                drawhismessage(context,content[i].value,60+far)
            }
        }

    }
}


function drawBackGround(cxt) {
    cxt.beginPath()
    var grd = cxt.createLinearGradient(0, 0, 0, 63)
    grd.addColorStop(0.0, '#221f25')
    grd.addColorStop(1.0, '#454545')
    cxt.fillStyle = grd
    cxt.fillRect(0, 0, 375, 63)
    var bar = new Image()
    bar.src = './image/bar3.png'
    bar.onload = function() {
        cxt.drawImage(bar, 5, 0)
    }
    var inputbar = new Image()
    inputbar.src = './image/inputbar.png'
    inputbar.onload = function() {
        cxt.drawImage(inputbar, 0, 619)
    }
    var back = new Image()
    back.src = './image/back.png'
    back.onload = function() {
        cxt.drawImage(back, 0, 16)
    }
    var person = new Image()
    person.src = './image/person.png'
    person.onload = function() {
        cxt.drawImage(person, 336, 16)
    }
    cxt.beginPath()
    cxt.font = 'lighter 16px Heiti SC'
    cxt.fillStyle = '#ffffff'
    cxt.fillText('微信',25,45)
}

function drawMyChat(cxt, x, y, w, h) {
    cxt.beginPath()
    var r=5;
    cxt.moveTo(x + r, y) // A
    cxt.lineTo(x + w - r, y) // B
    cxt.arc(x + w - r, y + r, r, 1.5 * Math.PI, 2 * Math.PI)
    cxt.lineTo(x + w, y + r + 12)
    cxt.lineTo(x + w + 6, y + r + 12 + 3)
    cxt.lineTo(x + w, y + r + 12 + 6)
    cxt.lineTo(x + w, y + h - r) // F
    cxt.arc(x + w - r, y + h - r, r, 0, 0.5 * Math.PI)
 //   cxt.lineTo(x + r, y + h) // D
    cxt.arc(x + r, y + h - r, r, 0.5 * Math.PI, Math.PI)
 //   cxt.lineTo(x, y + r); // G
    cxt.arc(x + r, y + r, r, Math.PI, 1.5 * Math.PI)
    cxt.lineWidth = 1
    cxt.strokeStyle = '#9edb5d'
    cxt.stroke()
    cxt.fillStyle = '#a4ea5c'
    cxt.fill()
}

function drawHisChat(cxt, x, y, w, h) {
    cxt.beginPath()
    var r=5
    cxt.moveTo(x + r, y) // A
    cxt.lineTo(x + w - r, y) // B
    cxt.arc(x + w - r, y + r, r, 1.5 * Math.PI, 2 * Math.PI)
    cxt.lineTo(x + w, y + h - r) // F
    cxt.arc(x + w - r, y + h - r, r, 0, 0.5 * Math.PI)
    cxt.lineTo(x + r, y + h) // D
    cxt.arc(x + r, y + h - r, r, 0.5 * Math.PI, Math.PI)
    cxt.lineTo(x, y + r + 12 + 6)
    cxt.lineTo(x - 6, y + r + 12 + 3)
    cxt.lineTo(x, y + r + 12)
    cxt.lineTo(x, y + r); // G
    cxt.arc(x + r, y + r, r, Math.PI, 1.5 * Math.PI)
    cxt.lineWidth = 1
    cxt.strokeStyle = '#fafafa'
    cxt.stroke()
    cxt.fillStyle = '#00FA9A'
    cxt.fill()

}

function drawmymessage(cxt,msg,y)
{
    var msgLength=cxt.measureText(msg).width
    drawMyChat(cxt,375-40-10-4-msgLength-24,y,20+msgLength,40)
    mytouxiang(cxt,375-40-10-4-msgLength-24+20+msgLength+10,y)
    cxt.beginPath()
    /*var myhead = new Image()
    myhead.src =document.getElementById('imghead1').src;
    myhead.onload*/
    cxt.font='16px STHeitiSC-Light'
    cxt.textBaseline='top'
    cxt.fillStyle='black'
    cxt.fillText(msg,375-40-10-4-msgLength-24+12,y+12)
}

function drawhismessage(cxt,msg,y)
{
    var msgLength=cxt.measureText(msg).width
    drawHisChat(cxt,40+10+4,y,msgLength+24,40)
    histouxiang(cxt,4,y)
    cxt.beginPath()
    cxt.font='16px STHeitiSC-Light'
    cxt.textBaseline='top'
    cxt.fillStyle='black'
    cxt.fillText(msg,40+10+4+12,y+12)
}

function mytouxiang(cxt,x,y)
{
    cxt.rect(x,y,40,40)
    cxt.strokeStyle="black"
    cxt.stroke()
    var tx = new Image()
    tx.src = './image/mt.png'
    tx.onload = function() {
        cxt.drawImage(tx, x,y)
    }
}

function histouxiang(cxt,x,y)
{
    cxt.rect(x,y,40,40)
    cxt.strokeStyle="black"
    cxt.stroke()
    var tx = new Image()
     tx.src = './image/ht.png'
     tx.onload = function() {
     cxt.drawImage(tx, x,y)
     }
}

function power(cxt,msg)
{
    var msgLength=cxt.measureText(msg).width
    cxt.font='14px STHeitiSC-Light'
    cxt.textBaseline='top'
    cxt.fillStyle='white'
    cxt.fillText(msg,337-msgLength,0)
    cxt.stroke()
}

function mangdian(cxt)
{
    cxt.beginPath()
    //context.rect(343,0,23,13)
    cxt.lineTo(343,3)
    cxt.lineTo(343+23,3)
    cxt.lineTo(343+23,6)
    cxt.lineTo(343+23+3,6)
    cxt.lineTo(343+23+3,9)
    cxt.lineTo(343+23,9)
    cxt.lineTo(343+23,12)
    cxt.lineTo(343,12)
    cxt.fillStyle="white"
    cxt.lineWidth=2
    cxt.strokeStyle="#939194"
    cxt.fill()
    cxt.stroke()

}

function jianshao(cxt,x)
{
    cxt.beginPath()
    cxt.rect(345,4,0+x,7)
    cxt.fillStyle="black"
    cxt.strokeStyle="black"
    cxt.lineWidth=1
    cxt.fill()
    cxt.stroke()
}