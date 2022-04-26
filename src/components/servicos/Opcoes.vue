<template>
    <div>
        <h5>Componente Opções</h5>
        <p>Poderiamos recuperar as opções do serviço id {{id}}</p>
    </div>
</template>

<script>
export default {
   name: 'OpcoesPage', 
   props: ['id'],
   created() {
        //this.getDadosApi(`http://localhost:3000/servicos/${this.id}`)
    }
}
</script>