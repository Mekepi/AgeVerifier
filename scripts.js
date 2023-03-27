function resultado() {
    ies = [document.querySelector('input[name="ano"]').value,
           document.querySelector('input[name="sex"]:checked').value];

    tempo = (new Date()).getFullYear();

    if (document.querySelector('img[alt="Sexo/Idade"]')) {
        document.querySelector('img[alt="Sexo/Idade"]').remove();
        document.querySelector("#resultado").style.textAlign = "inherit";
        document.querySelector("#resultado").innerText = "Preencha os dados para ver o resultado!";
    }

    if (ies[0]> tempo || (tempo - ies[0])>120) {alert("Um ano válido, por favor."); return};

    idade = tempo - ies[0];
    res = document.querySelector("#resultado");
    res.innerHTML = `Detectamos ${ies[1]} com ${idade} anos.`;
    res.style.textAlign = "center";
    
    img = document.createElement('img');
    img.alt = "Sexo/Idade"
    if (idade < 4) {
        img.src = `img/${ies[1]}_bebe.jpg`;
    } else if (idade < 11) {
        img.src = `img/${ies[1]}_crianca.jpg`;
    } else if (idade < 21) {
        img.src = `img/${ies[1]}_adolescente.jpg`;
    } else if (idade < 65) {
        img.src = `img/${ies[1]}_adulto.jpg`;
    } else {
        img.src = `img/${ies[1]}_idoso.jpg`;
    }

    document.querySelector("section").appendChild(img);
    return;
}