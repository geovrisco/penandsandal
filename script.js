
 let player={
     name:'player',
    healthPoint:1000,
    atk:10
 }

 let slime={
    name:'slime',
    healthPoint:1000,
    atk:11
}

let logNewMessage = document.createElement('p');
let logNewMessage1 = document.createElement('p');



function enemyAtk(){
    let randomMultiply = Math.floor(Math.random() * (15-8 )+8)
    
    let totalDamage = randomMultiply*slime.atk
    
    console.log('slime atk deal  : ',totalDamage,' damage')
    player.healthPoint=player.healthPoint-totalDamage
    if (player.healthPoint<=0){
        logNewMessage.innerHTML= 'you have slained by the slime!, what kind of hero are you?'
        document.getElementById('logs').appendChild(logNewMessage)
        return logNewMessage
    }else{
        logNewMessage.innerHTML= `${player.name} receive ${totalDamage} damage!`+'\n'+`${player.name} health is ${player.healthPoint} left!`
        document.getElementById('logs').appendChild(logNewMessage)
        return logNewMessage
    }
}


function playerAtk(){
    let randomMultiply = Math.floor(Math.random() * (15-8 )+8)
    
    let totalDamage = randomMultiply*player.atk
    console.log('player atk deal  : ',totalDamage,' damage', '<<<<<')
    slime.healthPoint=slime.healthPoint-totalDamage
    if (slime.healthPoint<=0){
        logNewMessage1.innerHTML= 'you have slain the slime,'

        document.getElementById('logs').appendChild(logNewMessage1)
        return logNewMessage1
    }else{
        logNewMessage1.innerHTML= `${slime.name} receive ${totalDamage} damage!`+'\n'+`${slime.name} health is ${slime.healthPoint} left!`
        document.getElementById('logs').appendChild(logNewMessage1)
        return logNewMessage1
    }
}

var btnPlayerAtk = document.getElementById('btnAttack')
var playerHp= document.getElementById('playerHP')
var enemyHP= document.getElementById('slimeHp')

var slimeStance=document.getElementById('stance')
var slimenormal='asset/greenSlime.gif'
var slimehurt='asset/slimeHIT.gif'

function hurtStance(){
    slimeStance.src=slimehurt
}
function normalStance(){
    slimeStance.src=slimenormal
}


var btnHeal=document.getElementById('btnHeal')
function enableBtn(){
    btnHeal.disabled=false
    btnPlayerAtk.disabled=false
}
var btnBGM=document.getElementById('musix')
var bgmMusix=document.getElementById('bgm')
btnBGM.onclick = ()=>{
    bgmMusix.play()
    bgmMusix.volume =0.4
    bgmMusix.loop=true
    player.playerAtk+=1
    alert('You are clicking the BGM Button?'+'\n'+'with this epic BGM, i Giorno will give you more chikara')
    alert('magically your base attack increased by one point not much but ok')
    btnBGM.disabled=true
    
}
var aud= document.getElementById('myAudio');
function playAudio(){
    aud.play();
    
}

var audvic = document.getElementById('vicory');
function winaudio(){
    audvic.play()
}
var audHeal= document.getElementById('healz');
function healaudio(){
    audHeal.play();
}

btnPlayerAtk.onclick = () =>{
    playerAtk()
    enemyAtk()
    enemyHP.innerHTML=slime.healthPoint
    playerHp.innerHTML=player.healthPoint
    hurtStance()
    playAudio()

    if (player.healthPoint<=0 && slime.healthPoint>0){
        alert('You are slained by slime? HOW CAN YOU FACE THE WORLD?'+'\n'+'You are an embarassment'+'click ok to go to title screen')
        alert('WOW! Just WOW! you really click the Ok button?'+'\n'+' your will is so weak, no wonder that reek slime can kill you')
        alert('friendly reminder:')
        alert('YOU WEAK')
        alert('この弱い男を翻訳しないでください')
        window.location='gameindex.html'
    } 
    if (player.healthPoint>0 && slime.healthPoint<=0){
        bgmMusix.pause()
        winaudio()
        alert(`you win against a slime! what so special about it?`+'\n'+'click ok to go to title screen')
        alert('enjoy this legendary BGM')
        window.location='gameindex.html'
    }

    btnHeal.disabled=true
    btnPlayerAtk.disabled=true
    setTimeout(normalStance,900)
    setTimeout(enableBtn,900)
    
c
    
}
slimeStance.onclick = ()=>{
    alert ('why would you molest me.. ba..ba..baka! >///<')
}

function kick(){
    logNewMessage1.innerHTML='Dont you dare do that again!'
    logNewMessage1.innerHTML='Dont you dare do that again!'
    
    window.location='gameindex.html'
}
function heal(){
    let healAmt=Math.round(player.healthPoint*0.4)
    player.healthPoint=player.healthPoint+healAmt
    logNewMessage1.innerHTML=`${player.name} cowardly use heal, +${healAmt} HP *sad* `
    if (player.healthPoint<=300 && slime.healthPoint>player.healthPoint){
    alert(`Did you read the instructions? at this point it's useless to heal, heal only recovuer 40% OF YOUR CURRENT HP!`)
    alert(`the heal amount is ${healAmt}`)
    }
    if (player.healthPoint>1000){
       
        alert(`taking advantage of this system aren't we?, stacking up health till the system explode?`)
        alert(`i dont think your family will be proud of your action -.- `); 
        alert(`unlike YOU. im a fair system so here ${healAmt} HP`)
        alert('*sigh*')
    }
    if (player.healthPoint>1500){
        logNewMessage1.innerHTML='Dont you dare do that again!'
        logNewMessage   .innerHTML='Dont you dare do that again!'
        btnHeal.disabled = true
        btnPlayerAtk.disabled = true
        btnBGM.disabled=true
        setTimeout(kick,5000)

        
    }
    return player.healthPoint
}
btnHeal.onclick = () =>{
    heal()
    healaudio()
    enemyAtk()
    playerHp.innerHTML=player.healthPoint
    if (player.healthPoint<=0 && slime.healthPoint>0){
        alert('You are slained by slime? HOW CAN YOU FACE THE WORLD?'+'\n'+'You are an embarassment')
        window.location='gameindex.html'
    } 
    if (player.healthPoint>0 && slime.healthPoint<=0){
        alert(`you win against a slime! what special about it?`)
        window.location='gameindex.html'
    }
    
    btnHeal.disabled=true
    btnPlayerAtk.disabled=true
    setTimeout(enableBtn,900)
    
}
