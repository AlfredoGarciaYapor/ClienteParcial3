<template>
    <div>
        <h1>Servicios</h1>
        <div class="row  align-middle">
            <div class="col-sm-4 mt-3" v-for="(service, key) in serviceList" :key="key">
                <Service :image="service.image" :title="service.name" :description="service.description" :name="service.name" :id="service._id"/>
            </div>
            <div class="col-sm-2 justify-content-center align-self-center">
                <button class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Agregar un servicio nuevo" @click="crearServicio()">+</button>
            </div>
        </div>
        
    </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex'
import Service from '../components/Service.vue'
export default {
    name: 'Services',
    components: {
        Service
    },
    computed: {
        ...mapState(['services', 'user']),
        ...mapGetters(['getFullServiceList', 'businessServiceList', 'getUserInfo'])
    },
    data() {
        return {
            serviceList:[],
            userInfo:{
                userId: 1,
                userTypeId: 1,
                businessId: 1
            }
        }
    },
    // created() {
    //     this.fetchServices(this.userInfo);
    // },
    mounted() {
       
        console.log('%c⧭', 'color: #aa00ff',  this.getUserInfo.userId)
        this.userInfo.userId = this.getUserInfo.userId;
        this.userInfo.userTypeId = this.getUserInfo.userTypeId;
        this.userInfo.businessId = this.getUserInfo.businessId;
        console.log('%c⧭', 'color: #00bf00', this.userInfo)
        
        this.loadServices()
        // console.log('%c⧭', 'color: #e50000', this.serviceList)
        
    },
    methods: {
        ...mapActions(['fetchServices']),

        async loadServices(){
            await this.fetchServices(this.userInfo)
            this.serviceList = await this.getFullServiceList

            console.log('%c⧭', 'color: #411313', this.serviceList);
        },
        crearServicio(){
            this.$router.push('/createService')
        }
    },
}
</script>