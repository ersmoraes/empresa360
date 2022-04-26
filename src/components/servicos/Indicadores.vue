<template>
    <div>
        <h5>Componente indicadores</h5>
        <p>Poderiamos recuperar os indicadores do serviço id {{id}}</p>
    </div>
</template>

<script>
export default {
   name: 'IndicadoresPage', 
   props: ['id'],
   created() {
        //this.getDadosApi(`http://localhost:3000/servicos/${this.id}`)
    }
}
</script>