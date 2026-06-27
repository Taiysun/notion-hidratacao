# notion-hidratacao
O único widget que eu achei de beber água não me agradava, então sim, eu corri pra IA porque não sou programador e fiz esse widget básico.

*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    background:transparent;
    color:#111;
    display:flex;
    justify-content:center;
    align-items:center;
}

.container{
    width:360px;
    padding:20px;
}

h1{
    font-size:42px;
    font-weight:700;
    text-align:center;
    margin-bottom:25px;
}

.linha{
    display:flex;
    align-items:center;
    justify-content:center;
    gap:8px;
    margin-bottom:18px;
    font-size:24px;
    font-weight:700;
}

input{
    width:110px;
    height:40px;
    border:2px solid #222;
    border-radius:10px;
    text-align:center;
    font-size:20px;
    outline:none;
}

#consumo{
    width:140px;
}

button{
    border:none;
    background:transparent;
    cursor:pointer;
    font-size:34px;
    font-weight:bold;
    color:#111;
}

button:hover{
    opacity:.7;
}

#contador{
    margin:30px 0;
    text-align:center;
    font-size:56px;
    font-weight:700;
}

#reiniciar{
    display:block;
    margin:auto;
    font-size:24px;
    font-weight:700;
}
