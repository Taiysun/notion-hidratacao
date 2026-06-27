const metaInput = document.getElementById("meta");
const consumoInput = document.getElementById("consumo");

const salvarMeta = document.getElementById("salvarMeta");
const adicionar = document.getElementById("adicionar");
const reiniciar = document.getElementById("reiniciar");

const contador = document.getElementById("contador");

let meta = Number(localStorage.getItem("meta")) || 0;
let consumo = Number(localStorage.getItem("consumo")) || 0;

metaInput.value = meta > 0 ? meta : "";

atualizar();

function atualizar(){

    contador.textContent = `${consumo}/${meta}ml`;

    localStorage.setItem("meta", meta);
    localStorage.setItem("consumo", consumo);

}

function definirMeta(){

    const valor = Number(metaInput.value);

    if(valor <= 0 || isNaN(valor)) return;

    meta = valor;

    atualizar();

}

function adicionarConsumo(){

    const valor = Number(consumoInput.value);

    if(valor <= 0 || isNaN(valor)) return;

    consumo += valor;

    consumoInput.value = "";

    atualizar();

}

salvarMeta.addEventListener("click", definirMeta);

adicionar.addEventListener("click", adicionarConsumo);

reiniciar.addEventListener("click", ()=>{

    consumo = 0;

    atualizar();

});

metaInput.addEventListener("keydown",(e)=>{

    if(e.key==="Enter") definirMeta();

});

consumoInput.addEventListener("keydown",(e)=>{

    if(e.key==="Enter") adicionarConsumo();

});

metaInput.addEventListener("input",()=>{

    metaInput.value = metaInput.value.replace(/\D/g,"");

});

consumoInput.addEventListener("input",()=>{

    consumoInput.value = consumoInput.value.replace(/\D/g,"");

});
