<template>
    <h5>Detalhes Leads</h5>
    <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">ID</label>
        <div class="col-sm-10">
            <input type="text" readonly class="form-control-plaintext" :value="dados.id">
        </div>
    </div>

    <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Nome</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" :value="dados.nome">
        </div>
    </div>

    <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Telefone</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" :value="dados.telefone">
        </div>
    </div>

    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button type="button" class="btn btn-primary" @click="$router.push({ name: 'leads' })">Voltar</button>
        <button type="button" class="btn btn-success">Atualizar</button>
    </div>
</template>

<script>
import ApiMixin from '@/mixins/ApiMixin'

export default {
    name: 'LeadPage',
    mixins: [ApiMixin],
    created() {
        this.getDadosApi(`http://localhost:3000/leads/${this.$route.params.id}`)
    }
}

</script>
