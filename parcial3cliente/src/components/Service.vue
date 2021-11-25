<template>
    <div class="container">
        
        <!-- <router-view/> -->
        <div class="card">
            <!-- <div class="card-header"></div> -->
            <div class="card-body" v-if="edit == false">
                <img :src="image" class="card-img-top">
                <h4 class="card-title">Titulo: {{name}}</h4>
                <div class="card-text">
                    <p>{{description}}</p>
                    
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <button v-if="getUserInfo.userTypeId != 1" class="btn btn-primary btn-sm" @click="crearCita()">CREAR CITA</button>
                        <button v-if="edit == false && getUserInfo.userTypeId == 1" class="btn btn-primary btn-sm" @click="edit = true">EDITAR</button>
                        <button v-if="edit == true && getUserInfo.userTypeId == 1" class="btn btn-primary btn-sm" @click="edit = true">CANCELAR EDICIÓN</button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    props:{
        id:String,
        image: String,
        name: String,
        description: String,
        cost: Number,
        requiredTime: Number,

    },
    computed:{
        ...mapGetters(['getUserInfo'])
    },
    data() {
        return {
            newService:{
                image: "",
                name: "",
                businessName: "",
                description:"",
                requiredTime:0,
                cost:0,
            },

            edit: false
        }
    },
    mounted() {
        this.image = this.$props.image
    },
    methods: {
        ...mapActions(['updateService', 'removeService', 'fetchServicio']),
        crearCita(){
            this.fetchServicio({serviceId: this.id})
            this.$router.push('/schedule')
        }

    },
    
}
</script>