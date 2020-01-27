<template lang="html">

  <div class="col-12 row">
    <div id="barraBusqueda" class="col-12 d-flex">
        <input type="text" class="w-100 m-4" required list="buscador" v-model="textoBuscador" placeholder="Introduce provincia">
        {{this.provincias}}
        <datalist id="buscador">
          <option v-for="(index,provincia) in sugerencias" :key="index">
              {{ provincia.NOMBRE_PROVINCIA }}
          </option>
        </datalist>
    </div>
  </div>

</template>

<script lang="js">
  export default  {
    name: 'tiempo',
    props: [],
    mounted () {
      this.axios.get('https://www.el-tiempo.net/api/json/v1/municipios').then(respuesta => this.provincias=respuesta)
    },
    data () {
      return {
        textoBuscador:'',
        provincias:[],
      }
    },
    methods: {

    },
    computed: {
      sugerencias: function(){
       return this.provincias.slice().filter(function(provincia){
         return provincia.toLowerCase().includes(this.textoBuscador.toLowerCase());
        }).slice(0,5);
      }
      
    }
}


</script>

<style scoped lang="css">
  .buscador {

  }
</style>
