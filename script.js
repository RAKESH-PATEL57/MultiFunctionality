

let userInput = document.getElementById("date");
let calculate = document.querySelector('#calculate');
let result = document.querySelector('#result');

userInput.max = new Date().toISOString().split("T")[0];  //  present date tak khaali user ke choose karbaar ke debaa

calculate.onclick = () => {
    let birthDate = new Date(userInput.value);

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

    result.innerHTML = `You Are <span>${y3}</span> Year, <span>${m3}</span> months, and <span>${d3}</span> days old`

}

function getDaysInMonth(year, month)
{
    return new Date(year, month, 0).getDate();   // it will return exact number of day like 30 din ra aaye ki 31 din ra aaye j
}













// var a;

// let calculator = document.querySelector('calculate');

// function ageCalculator()
// {
//     document.getElementById("age").style.display="block";
//     document.getElementById("btn").style.display="flex";
// }

// const dateInput = document.querySelector("#date");


// const pElement = document.querySelector("p");

// dateInput.addEventListener("change", () => {
//     const birthDate = new Date(dateInput.value);
    
//     const currentDate = new Date();
//     const newDate = new Date(currentDate - birthDate);

//     const years = newDate.getFullYear() - 1970;
//     const months = newDate.getMonth();
//     const days = newDate.getDate() -1;

//     pElement.innerText = `You're ${years} years ${months} monts ${days} days old.`;
// });



