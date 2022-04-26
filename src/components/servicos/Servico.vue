<template>
    <div class="card">
        <div class="card-header bg-primary text-white">{{dados.servico}}</div>
        <div class="card-body">
            <p class="card-text">{{dados.descricao}}</p>
        </div>
    </div>
</template>

<script>
import ApiMixin from '@/mixins/ApiMixin'

export default {
    name: 'ServicoPage',
    mixins: [ApiMixin],
    props: ['id'],
    created() {
        this.getDadosApi(`http://localhost:3000/servicos/${this.id}`)
    },/*
    watch: {
        $route(to) { // Conveção: to = novoValor, from = ValorAntigo
            if(to.params.id != undefined) this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`)
        }
    }*/
    beforeRouteUpdate(to, from, next) {
        // to = $route para onde estamos indo
        // from = $route de onde estamos vindo
        // next = faz com que o fluxo de navegação siga em frente

        if(to.params.id != undefined) this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`)
        next()
    }
}

</script>
