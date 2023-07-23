<script>
import { store } from '../store';

// my-component.js
export default {
    data() {
        return{

            store
        } 
    },
    
}
</script>

<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark  bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand logo p-0" href="#">
                    <img class="img-fluid" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="">
                </a>

                <form @submit.prevent class="form-inline mx-auto w-75">
                    <input class="form-control" type="search" placeholder="Cerca" aria-label="Search"
                    v-model="store.searchText" @keydown.enter="$emit('performSearch')">

                   
                </form>

                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Account</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<style lang="scss" >
    .container-fluid{
        height: 50px;
    }
   .logo{
    width: 150px;
    
   }
</style>