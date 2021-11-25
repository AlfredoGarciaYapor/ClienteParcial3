<template>
  <div class="home">
    <div id="nav">
        <router-link to="/servicios">Servicios</router-link> | 
        <router-link to="/agenda">Agenda Negocio</router-link>
    </div>
    <div class="container">
      <div class="card">
        <div class="card-body">

          <form @submit="createService" @reset="resetForm">

            <div class="row">
              <div class="col-sm-4">
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="inputName" v-model="newService.name" placeholder="name@example.com">
                  <label for="inputName">Nombre del Servicio</label>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="form-floating mb-3">
                  <input type="number" class="form-control" id="inputCost" v-model.number="newService.cost" placeholder="$0000.00">
                  <label for="inputCost">Costo</label>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="form-floating mb-3">
                  <input type="number" class="form-control" id="inputTime" v-model.number="newService.requiredTime" placeholder="3">
                  <label for="inputTime">Días laborales requeridos</label>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-4 offset-2">
                <div class="form-floating mb-3">
                  <textarea class="form-control" size="lg" id="inputDescription" v-model="newService.description" placeholder="Sin Descripción"></textarea>
                  <label for="inputDescription">Descripción del Servicio</label>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="inputImage" v-model="newService.image" placeholder="3">
                  <label for="inputImage">Url de la imagen</label>
                </div>
              </div>
            </div>

            <div class="row justify-content-center">
              <div class="col-sm-1 mr-1">
                <button type="submit" class="btn btn-primary">Agregar</button>
              </div>
              <div class="col-sm-1">
                <button type="reset" class="btn btn-danger">Cancelar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
      </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import {mapGetters, mapActions} from 'vuex'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)


export default {
  name: 'createService',
  components:{
    
  },
  computed:{
    ...mapGetters(['getUserInfo'])
  },
  data() {
    return {
      newService:{
        userId:null,
        userTypeId: null,
        name:"",
        description:"",
        requiredTime:null,
        cost:null,
        image:"",
        businessName:"",
        businessId:null
      },
    }
  },
  mounted() {
    this.setBussinesInfo();
    // console.log('%c⧭', 'color: #408059', this.getUserInfo)
  },
  methods: {
    ...mapActions(['addService']),
    setBussinesInfo(){
      this.newService.businessName = this.getUserInfo.businessName
      this.newService.businessId = this.getUserInfo.businessId
      this.newService.userId = this.getUserInfo.userId
      this.newService.userTypeId = this.getUserInfo.userTypeId


      // console.log('%c⧭', 'color: #99adcc', this.newService)
    },
    async createService(){

      console.log('%c⧭', 'color: #f279ca', this.newService)
      await this.addService(this.newService)
      this.resetForm();
    },
    resetForm(){
      this.newService.name = ""
      this.newService.description = ""
      this.newService.requiredTime = null
      this.newService.cost = null
      this.newService.image = ""
    }
  },
}
</script>
