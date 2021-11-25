<template>
    <div>
        
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'Agenda',
    computed:{
        ...mapGetters(['getCitas'])
    }
}
</script>