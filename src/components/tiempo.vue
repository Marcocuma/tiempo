<template lang="html">

  <div class="col-12 row">
    <div id="barraBusqueda" class="col-10 d-flex">
        <input type="text" class="w-100 m-4" required list="buscador" @click="buscarMunicipios" v-model="textoBuscador" placeholder="Introduce provincia">
        <datalist id="buscador">
          <option v-for="(provincia) in sugerencias" :key="provincia.CODPROV">
              {{ provincia.NOMBRE_PROVINCIA }}
          </option>
        </datalist>
    </div>
    <select v-model="codigoMunicipio" class="col-2">
      <option value="0" selected>-- Introduce el municio --</option>
      <option v-for="municipio in municipios" v-bind:value={municipio.}></option>
    </select>
  </div>

</template>

<script lang="js">
  const axios = require('axios')
  export default  {
    name: 'tiempo',
    props: [],
    data() {
      return {
        textoBuscador:'',
        provincias:[],
      }
    },
    mounted(){
      axios.get('https://www.el-tiempo.net/api/json/v1/provincias')
      .then(response =>{
        this.provincias = response.data
        console.log(this.sugerencias)
      })
    },
    methods: {
      cambiarArray:function(datos){
        this.provincia=datos
      }
    },
    computed: {
      sugerencias: function(){
       return this.provincias.slice().filter((provincia) => {
         return provincia.NOMBRE_PROVINCIA.toLowerCase().includes(this.textoBuscador.toLowerCase());
        });
      },
      municipios: function(){

      }
    }
}


</script>

<style scoped lang="css">
  .buscador {

  }
</style>
