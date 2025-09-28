// Obtendo todas as boxes:
let box = [];
for(let i = 1;i<=9;i++){
    box.push(document.querySelector("#box"+i));
}
const conteiner = document.querySelector(".box");
const apos = document.querySelector(".apos");
const sombra = document.querySelector("#sombra");

// Adicionando evento da entranda e saída do mouse para cada box do grid
box.forEach((e)=>{
    e.addEventListener("mouseover", (event)=>{
        animacao(e, event);
    });
    e.addEventListener("mouseout", (event)=>{
        animacao(e, event)
    });
});


// Animação que faz a mudança de valor da animação;
function animacao(e, event){
    let rotateX = 0;
    let rotateY = 0;
    let graus = 0;

    // Verifica qual parte do grid o mouse passou
    switch(e){
        case box[0]:
            rotateX = "20deg";
            rotateY = "-10deg";
            graus = "-45deg";
        break
        case box[1]:
            rotateX = "40deg";
            rotateY = "0deg";
            graus = "0deg";
        break
        case box[2]:
            rotateX = "20deg";
            rotateY = "10deg";
            graus = "45deg";
        break
        case box[3]:
            rotateX = "0deg";
            rotateY = "-40deg";
            graus = "-90deg";
        break
        case box[4]:
            rotateX = "0deg";
            rotateY = "0deg";
            graus = "0deg";
        break
        case box[5]:
            rotateX = "0deg";
            rotateY = "40deg";
            graus = "90deg";
        break
        case box[6]:
            rotateX = "-20deg";
            rotateY = "-20deg";
            graus = "-135deg";
        break
        case box[7]:
            rotateX = "-40deg";
            rotateY = "-0deg";
            graus = "-180deg";
        break
        case box[8]:
            rotateX = "-20deg";
            rotateY = "20deg";
            graus = "135deg";
        break
    }

    // Verifica que evento ocorreu e altera a posição dos boxes:
    if(event.type == "mouseover"){
        conteiner.style.transform = `rotateX(${rotateX}) rotateY(${rotateY})`;
        apos.style.transform = `rotateX(${rotateX}) rotateY(${rotateY})`;
        document.documentElement.style.setProperty('--graus', `${graus}`);
        console.log(graus);
        sombra.style.transform = `rotateX(${rotateX}) rotateY(${rotateY})`;
    }
    if(event.type == "mouseout"){
        conteiner.style.transform = "rotateX(0deg)";
        apos.style.transform = "rotateX(0deg)";
        sombra.style.transform = "rotateX(0deg)";
    }
}