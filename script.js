deixar meta = Número(armazenamento local.obterItem("objetivo")) || 0;
deixar atual = Número(armazenamento local.obterItem("atual")) || 0;

const metaEntrada = documento.obterElementoPorId("entrada de meta");
const entrada de bebida = documento.obterElementoPorId("entrada de bebida");

const extensão atual = documento.obterElementoPorId("atual");
const alcance da meta = documento.obterElementoPorId("objetivo");

const progressoPreenchimento = documento.obterElementoPorId("preenchimento de progresso");
const por cento = documento.obterElementoPorId("porcentagem");

função atualizar(){

    extensão atual.textoConteúdo=atual;

    alcance da meta.textoConteúdo=meta;

    deixar p=0;

    se(meta>0){

        p=(atual/meta)*100;

    }

    progressoPreenchimento.estilo.largura=Matemática.min(p,100)+"%";

    por cento.textoConteúdo=Matemática.chão(p)+"%";

    armazenamento local.definirItem("objetivo",meta);

    armazenamento local.definirItem("atual",atual);

}

documento.obterElementoPorId("salvarObjetivo").clicar em=()=>{

    deixar valor=Número(metaEntrada.valor);

    se(valor>0){

        meta=valor;

        metaEntrada.valor="";

        atualizar();

    }

}

documento.obterElementoPorId("adicionarBebida").clicar em=()=>{

    deixar valor=Número(entrada de bebida.valor);

    se(valor>0){

        atual+=valor;

        entrada de bebida.valor="";

        atualizar();

    }

}

documento.obterElementoPorId("reiniciar").clicar em=()=>{

    atual=0;

    atualizar();

}

metaEntrada.addEventListener("pressionamento de tecla",e=>{

    se(e.chave==="Entrar"){

        documento.obterElementoPorId("salvarObjetivo").clique();

    }

});

entrada de bebida.addEventListener("pressionamento de tecla",e=>{

    se(e.chave==="Entrar"){

        documento.obterElementoPorId("adicionarBebida").clique();

    }

});

atualizar();
