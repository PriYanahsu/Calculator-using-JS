let btnAll= document.querySelectorAll(".button1");
let upperspace= document.querySelector(".upperspace");

let string = "";

btnAll.forEach(button => {
    button.addEventListener('click', (e) => {
        // console.log(e.target.innerText);
        if(e.target.innerText === "="){
            string = eval(string);
            upperspace.value = string;
        }
        else if (e.target.innerText === "reset"){
            string = "";
            upperspace.value = string;
        }
        else { 
            string += e.target.innerText;
            upperspace.value = string;
        }
    })
})


