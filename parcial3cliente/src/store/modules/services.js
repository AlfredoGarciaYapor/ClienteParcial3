import axios from 'axios'
const ENTERPOINT = 'http://localhost:3000'
const state = {
    services:[],
    servicio:{},
    //   bussinesId: null,
    //   bussinesName: "bussinesName",
    //   name: "name",
    //   description: "description",
    //   requiredTime: null,
    //   cost: null,
    //   image: "image"
    // },
    user:{userId: 1, userTypeId: 2, businessId: null, businessName: 'Proveedor1'},
    citas:[],
   
}
const getters = {
    getFullServiceList: state => {
        return state.services
    },
    // businessServiceList: (state) => (businessId) => {
    //     return state.services.find(service => service.businessId === businessId)
    // },
    serviceToShcedule: state => {
        return state.servicio
    },
    getUserInfo: (state) => {
        return state.user
    }

}


const mutations = {
    setServicio:(state, service) => state.servicio = service,

    setServices: (state, services) => state.services = services,

    newService:(state, service) => state.services.unshift(service),

    updService: (state, updatedService) => {
        const index = state.services.findIndex(service => service.id === updatedService.id);
        if ( index !== -1){
            state.services.splice(index, 1, updatedService);
        }
    },
    deleteService: (state, service) => state.services = state.services.filter(s => service.id !== s.id),
}


const actions = {
    async fetchServices({ commit }, userInfo) {
        // console.log('%c⧭', 'color: #ff06e2', userInfo);

        // console.log('%c%s', 'color: #0088cc', 'fetchServices');
        const response = await axios.post(ENTERPOINT+'/services/serviciesList', userInfo, {headers: {'Content-Type': 'application/json'}})
        .then((response) => {

            return response
        })
        .catch((err) => {

            console.log('%c⧭', 'color: #ffa640', err);
        })
        // console.log('%c⧭', 'color: #917399', response);
        commit('setServices', response.data);

        // console.log('%c⧭', 'color: #1d5673', state.services);
    },

    async addService({commit}, serviceInfo) {
        const response = await axios.post(ENTERPOINT+'/services/addService', serviceInfo, {headers: {'Content-Type': 'application/json'}})
        .then((response) => {

            return response
        })
        .catch((err) => {

            console.log('%c⧭', 'color: #ffa640', err);
        })

        commit('newService', response.data);
    },

    async updateService({commit}, serviceInfo){
        const response = await axios.post(ENTERPOINT+'/services/deleteService', serviceInfo, {headers: {'Content-Type': 'application/json'}})
        .then((response) => {

            return response
        })

        commit('updService', response.data);
    },

    async removeService({state, commit}, serviceInfo) {
        await axios.post(ENTERPOINT+'/services/updateService', serviceInfo, {headers: {'Content-Type': 'application/json'}})
        .then((response) => {

            return response
        })

        commit('deleteService', serviceInfo)
    },

    async fetchServicio({commit}, serviceId){
        const response = await axios.post(ENTERPOINT+'/services/getService', serviceId, {headers: {'Content-Type': 'application/json'}})
        
        console.log('%c⧭', 'color: #ffcc00', response.data[0]);
        commit('setServicio', response.data[0])
    }


}

export default {
    state, getters, actions, mutations
}
