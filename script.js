const next = document.querySelector('#button');

next.addEventListener('click',nextFact);

const img = document.querySelector('#img');
const title = document.querySelector('.info h2');
const text = document.querySelector('.info p');


const titles = ["Orion Nebula", "Andromeda Galaxy", "Light Pollution", "Moon", "Perseids"];
const texts = ["The Orion Nebula is one of the most scrutinized and photographed objects in the night sky and is among the most intensely studied celestial features. The nebula has revealed much about the process of how stars and planetary systems are formed from collapsing clouds of gas and dust. Astronomers have directly observed protoplanetary disks and brown dwarfs within the nebula, intense and turbulent motions of the gas, and the photo-ionizing effects of massive nearby stars in the nebula.",
"Andomeda is a barred spiral galaxy approximately 2.5 million light-years (770 kiloparsecs) from Earth and the nearest large galaxy to the Milky Way. The galaxy's name stems from the area of Earth's sky in which it appears, the constellation of Andromeda, which itself is named after the Ethiopian (or Phoenician) princess who was the wife of Perseus in Greek mythology.",
"Light pollution is the presence of unwanted, inappropriate, or excessive artificial lighting. In a descriptive sense light pollution refers to any poorly implemented lighting, during the day or night, and can be found as an issue throughout the levels of our societies. Impacting all the way from the individual level, such as from an unwanted blinking light on a consumer product, to a community level, like a new urban development impacting existing communities from poorly planned street lights. ",
"The Moon is Earth's only natural satellite. At about one-quarter the diameter of Earth, it is the largest natural satellite in the Solar System relative to the size of its planet, the fifth largest satellite in the Solar System overall, and is larger than any known dwarf planet. Orbiting Earth at an average distance of 384,400 km, or about 30 times Earth's diameter, its gravitational influence slightly lengthens Earth's day and is the main driver of Earth's tides.",
"The Perseids are a prolific meteor shower associated with the comet Swift–Tuttle. The meteors are called the Perseids because the point from which they appear to hail (called the radiant) lies in the constellation Perseus."];

let count = 2;

function nextFact(){
    img.setAttribute("src", `./img/img${count}.png`);
    
    title.textContent=`${titles[count-1]}`;
    text.textContent=`${texts[count-1]}`;
    
    count++;
    if(count==6) count=1;
}

setInterval(myTimer, 1000);
function myTimer() {
  const hour = new Date();
  const date = new Date();
  document.getElementById("today").textContent = `today is: ${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()} ${hour.toLocaleTimeString()}`;
}

function timeForEvent(y, m, d, h, min, s){
    let now = new Date();
    const dateOfEvent = new Date(y,m,d,h,min,s);
    let leftTime = dateOfEvent.getTime() - now.getTime();

if(leftTime > 0){
    let secs = leftTime / 1000;   
    let mins = secs / 60;               
    let hrs = mins / 60;              
    let ds = hrs / 24;             
    
    let seconds = Math.floor(secs  % 60);    
    let minutes = Math.floor(mins % 60);
    let hours = Math.floor(hrs % 24);
    let days = Math.floor(ds);
    return `${days} days, ${hours} h, ${minutes} min, ${seconds} s`;
}
else{
    return "0";
}
}


setInterval(myTimer2, 1000);
function myTimer2() {
    let time = timeForEvent(2021,11,13,0,0,0);
  document.getElementById("date1").textContent = `${time}`;
}

setInterval(myTimer3, 1000);
function myTimer3() {
    let time = timeForEvent(2021,11,18,0,0,0);
  document.getElementById("date2").textContent = `${time}`;
}

setInterval(myTimer4, 1000);
function myTimer4() {
    let time = timeForEvent(2021,11,21,0,0,0);
  document.getElementById("date3").textContent = `${time}`;
}

setInterval(myTimer5, 1000);
function myTimer5() {
    let time = timeForEvent(2021,11,22,0,0,0);
  document.getElementById("date4").textContent = `${time}`;
}

setInterval(myTimer6, 1000);
function myTimer6() {
    let time = timeForEvent(2021,11,29,0,0,0);
  document.getElementById("date5").textContent = `${time}`;
}

const planets = ["Mercury","Venus","Mars","Jupiter","Saturn","Uranus","Neptune"]

const check = document.getElementById("check");
check.addEventListener('click',checkPlanets);
const lis = document.querySelectorAll("#list li");

function checkPlanets(){
    const selectDate = document.getElementById("date").value;
    const newDate = new Date(selectDate);
    const month = newDate.getMonth();
    const day = newDate.getDate();    

    switch(month){
        case 0:{
            for(let i=0;i<7;i++){
                lis[i].style.textDecoration = 'underline';
                if(day<=15) lis[0].style.textDecoration = 'none';
            }   
        }
        break;

        case 1:{
            for(let i=0;i<7;i++){
                lis[i].style.textDecoration = 'underline';
                if(day<=15){
                    lis[0].style.textDecoration = 'none';
                    lis[3].style.textDecoration = 'none';
                    lis[4].style.textDecoration = 'none';
                }
                    if(day>=15){
                    lis[1].style.textDecoration = 'none';
                    lis[6].style.textDecoration = 'none';
                }
            }
        }
        break;

        case 2:{
            for(let i=0;i<7;i++){
                lis[i].style.textDecoration = 'underline';
            }
            lis[1].style.textDecoration = 'none';
            lis[6].style.textDecoration = 'none';   
        }
        break;

        case 3:{
            for(let i=0;i<7;i++){
                lis[i].style.textDecoration = 'underline';
            }   
            lis[0].style.textDecoration = 'none';
            lis[1].style.textDecoration = 'none';
            lis[2].style.textDecoration = 'none';
            lis[6].style.textDecoration = 'none'; 
        }
        break;

        case 4:{
            for(let i=0;i<7;i++){
                lis[i].style.textDecoration = 'underline';
                if(day>=7) lis[0].style.textDecoration = 'none';
            }   
        }
        break;

        case 5:{
            for(let i=0;i<7;i++){
                lis[i].style.textDecoration = 'underline';
                if(day>7) lis[0].style.textDecoration = 'none';
            }   
        }
        break;

        case 6:{
            for(let i=0;i<7;i++){
                lis[i].style.textDecoration = 'underline';
                if(day<15) lis[0].style.textDecoration = 'none';
            }   
        }
        break;

        case 7:{
            for(let i=0;i<7;i++){
                lis[i].style.textDecoration = 'underline';
                if(day<15) lis[0].style.textDecoration = 'none';
            }   
        }
        break;

        case 8:{
            for(let i=0;i<7;i++){
                lis[i].style.textDecoration = 'underline';
            }
            lis[2].style.textDecoration = 'none'; 
        }
        break;

        case 9:{
            for(let i=0;i<7;i++){
                lis[i].style.textDecoration = 'underline';
            }
            lis[2].style.textDecoration = 'none';    
        }
        break;

        case 10:{
            for(let i=0;i<7;i++){
                lis[i].style.textDecoration = 'underline';
                if(day<15) lis[2].style.textDecoration = 'none';
            }   
        }
        break;

        case 11:{
            for(let i=0;i<7;i++){
                lis[i].style.textDecoration = 'underline';
            }
            lis[1].style.textDecoration = 'none';     
        }
        break;
        default: alert("error"); 
        

    }
}
    

const form=document.querySelector(".form");
const curiosity=document.createElement('p');
curiosity.style.fontSize="1rem";
form.appendChild(curiosity);

lis[0].addEventListener('click',()=>{
    curiosity.textContent="Mercury has no moons or rings.";
})

lis[1].addEventListener('click',()=>{
    curiosity.textContent="A day on Venus is longer than a year";
})

lis[2].addEventListener('click',()=>{
    curiosity.textContent="Mars has north and south poles like earth. The polar ice caps are covered in a layer of frozen carbon dioxide (dry ice).";
})

lis[3].addEventListener('click',()=>{
    curiosity.textContent="Jupiter Is The Fastest Spinning Planet In The Solar System.";
})

lis[4].addEventListener('click',()=>{
    curiosity.textContent="Saturn is the flattest planet.";
})

lis[5].addEventListener('click',()=>{
    curiosity.textContent="Uranus is the coldest planet in the Solar System.";
})

lis[6].addEventListener('click',()=>{
    curiosity.textContent="Neptune has 6 faint rings.";
})