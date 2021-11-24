<template>
  <div class="container">
    <form action="onSubmit">
      <div class="row mt-2 mb-5">
        <div class="col-md-4 offset-4">
          <h2>{{schedule.businessName}}</h2>
          <!-- {{getFullServiceList}} -->
        </div>
      </div>

      <div class="row mb-3">
        <label class="col-sm-2 col-form-label" for="floatingName"><strong>Nombre del servicio:</strong></label>
        <div class="col-md-4">
          <div class="form mb-3">
            <!-- <input type="text" class="form-control-plaintext " id="floatingName" v-model="schedule.name" disabled > -->
            <select id="floatingName" class="form-select" v-model="schedule._id" aria-label="Default select example" @change="selectService(schedule._id)">
              <option selected :value="null">Select option</option>
              <option v-for="(servicio, index, key) in getFullServiceList" :value="servicio._id" :key="key">{{servicio.name}}</option>
            </select>
          </div>
        </div>

        <label class="col-sm-2 col-form-label" for="floatingName"><strong>Costo del servicio:</strong></label>
        <div class="col-md-2">
          <div class="input-group mb-3">
            <label>$ {{schedule.cost}}</label>
          </div>
        </div>
      </div>

      <div class="row">
        <label class="col-sm-2 col-form-label" for="floatingDescription"><strong>Descripción del servicio</strong></label>
        <div class="col-md-4">
          <div class="form-floating">
            <p class="" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px">{{schedule.description}}</p>
          </div>
        </div>

        <label class="col-sm-2 col-form-label" for="floatingName"><strong>Fecha a agendar:</strong></label>
        <div class="col-md-2">
          <div class="form mb-3">
            <b-form-datepicker today-button reset-button close-button v-model="schedule.date" class="mb-2" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"></b-form-datepicker>
          </div>
        </div>
      </div>
      
      <div class="row">
        <div class="col-sm-4 offset-sm-4 mt-5">
          <input class="btn btn-primary" type="submit" value="AGENDAR CITA">
        </div>
      </div>

    </form>

    
    
    <!-- {{schedule}} -->
  </div>
</template>

<script>
import Vue from 'vue';
import {mapGetters, mapActions} from 'vuex'
import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);
export default {
  data() {
    return {
      servicio:{
        _id: "",
        name: "",
        description: "",
        requiredTime: null,
        cost: null,
        image: "",
        __v: null,
        businessName: "",
        businessId: null
      },
      schedule:{
        _id: null,
        name: "",
        description: "",
        requiredTime: null,
        cost: null,
        image: "",
        __v: null,
        businessName: "",
        businessId: null,
        date:""
      },

      userInfo:{
        userId: 1,
        userTypeId: 2,
        businessId: null
      }
}
  },
  computed:{
    ...mapGetters(['serviceToShcedule', 'getFullServiceList'])
  },
  mounted() {
    this.loadService();
  },
  methods: {
    ...mapActions(['fetchServices', 'fetchServicio']),
    async loadService(){
      await this.fetchServices(this.userInfo)
      

      let serviceId = this.getFullServiceList[0]._id
      console.log('%c⧭', 'color: #006dcc', this.getFullServiceList[0]._id, 'this.getFullServiceList[0]._id')

      if(this.serviceToShcedule == undefined){
        await this.fetchServicio({serviceId: serviceId})
        this.servicio = this.serviceToShcedule
        console.log('%c⧭', 'color: #bfffc8', this.serviceToShcedule)
        console.log('%c⧭', 'color: #1d3f73', this.servicio)

        this.schedule = this.serviceToShcedule
      }else{
        this.schedule = this.serviceToShcedule
      }

      
      // console.log('%c⧭', 'color: #007300',  this.servicesList)
    },
    selectService(serviceId){
      console.log('%c⧭', 'color: #731d6d', serviceId)

      this.fetchServicio({serviceId: serviceId});
      this.loadService()
      // console.log('%c⧭', 'color: #997326',  this.fetchServicio({serviceId: serviceId}))
      // console.log('%c⧭', 'color: #735656', this.getFullServiceList)
      // this.schedule = this.getFullServiceList.find(service, service._id === serviceId)
      // console.log('%c⧭', 'color: #e57373', this.serviceToShcedule[0])
    },
    onsubmit(){
      
      console.log('%c⧭', 'color: #807160', this.schedule)
    }
  },
}
</script>
