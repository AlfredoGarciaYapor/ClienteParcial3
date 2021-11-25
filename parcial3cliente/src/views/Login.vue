<template>
    <div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-7">
                    <div class="card">
                        <div class="card-body">
                            <form @submit="login">
                                <div class="row justify-content-center">
                                    <div class="col-sm-4"><div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Usuario</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1" v-model="userInfo.userName" >
                                    
                                    </div>
                                </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-sm-4">
                                        <div class="mb-3">
                                            <label for="exampleInputPassword1" class="form-label">Password</label>
                                            <input type="password" class="form-control" v-model="userInfo.password" id="exampleInputPassword1">
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="row justify-content-center">
                                    <div class="col-sm-4">
                                        <div class="mb-3 form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                        </div>

                                    </div>
                                </div> -->
                                
                                <button type="submit" class="btn btn-primary">Log in</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {mapActions, mapGetters} from 'vuex'
export default {
    name: 'Login',
    data() {
        return {
            userInfo:{
                userName:"",
                password:""
            }
        }
    },
    computed:{
        ...mapGetters(['getUserInfo'])
    },
    methods: {
        ...mapActions(['fetchUser', 'loginToken']),
        login(){
            this.fetchUser(this.userInfo)
            let user = this.getUserInfo
            console.log('%c⧭', 'color: #00ff88', this.getUserInfo)
            if(this.userInfo.userName == user.userName && this.userInfo.password == user.password){
                this.$router.push('/servicios')
            }
        },
        getToken(){
            let token = axios.get('http://localhost.3000/Login/getToken');
            this.loginToken(token.jwt);
        }
    },

}
</script>