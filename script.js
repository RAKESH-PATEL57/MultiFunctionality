
let userInput = document.getElementById("date");
let calculate = document.querySelector('#calculate');
let result = document.querySelector('#result');


let date = document.querySelector('#date');

date.onclick = () =>{
   calculate.style.cursor = 'pointer';
   calculate.style.pointerEvents = 'auto';
}

userInput.max = new Date().toISOString().split("T")[0];  //  present date tak khaali user ke choose karbaar ke debaa

calculate.onclick = () => {

    const userInputValue =  userInput.value;
    let birthDate = new Date(userInputValue);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();


    let d3, m3, y3;

    y3 = y2 - y1;

    if(m2 >= m1)
    {
        m3 = m2 - m1;
    }

    else
    {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if(d2 >= d1)
    {
        d3 = d2 - d1;
    }

    else
    {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if(m3 < 0)
    {
        m3 = 11;
        y3--;
    }

    console.log(y3);
    
    if(userInputValue == '')
    {
        result.innerHTML = `Please enter your date of birth first`
    }
    else
    {
        result.innerHTML = `You Are <span>${y3}</span> Year, <span>${m3}</span> months, and <span>${d3}</span> days old`
    }

}

function getDaysInMonth(year, month)
{
   
    return new Date(year, month, 0).getDate();   // it will return exact number of day like 30 din ra aaye ki 31 din ra aaye j
}


// gsap animation

// first-bg animation

var tl = gsap.timeline({scrollTrigger:{
    trigger:".agecalculator",
    start:"0% 90%",
    end:"50% 50%",
    scrub:true,
    // markers:true
}})

tl.from(".first-bg",{
    scrollTrigger:{
        trigger:".first-bg",
        start:"110% 90%",
        end:"0% 50%",
        scrub:true,
        // markers:true
    }
});

tl.to(".first-bg",{
    top:"100%",
    left:"2%",
    right:"50%",
    scale:2,
    opacity:0
})

// second-bg-animation

tl.from(".second-bg",{
    scale:0,
    opacity:0,
    scrollTrigger:{
        trigger:".second-bg",
        scrub:true,
        // markers:true,
        start:"top 150%"
    }
})
