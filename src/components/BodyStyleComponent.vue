<script>
import { store } from '../store';
import MovieComponent from './MovieComponent.vue';


// my-component.js
export default {
    data() {
        return{

            store
        } 
    },
    components:{
        MovieComponent
    },
    

}
</script>
<template>
    <div>
        <div class="container bg-danger">
            <div class="row carosello justify-content-center">
                <div class="col">
                    elemento1
                </div>
                <div class="col">element 1</div>
                <div class="col">element 1</div>
                <div class="col">element 1</div>
                <div class="col">element 1</div>
                <div class="col">element 1</div>


            </div>
           
        </div>
    </div>

</template>
<style lang="scss" scoped>
    .carosello{
  width: 100%;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(5, 1fr);
  gap: 1px 25px;
}

</style>