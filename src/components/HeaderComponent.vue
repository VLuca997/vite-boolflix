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
        <div class="container">

            <div class="input-group mb-3">

                <input v-model="store.searchText" type="text" class="form-control" placeholder="Cerca qui il Film o la Serie TV!" aria-label="Ricerca Film o Serie TV!" aria-describedby="button-addon2">
                    <!-- BUTTON SCATENA EVENTI -->
                <button class="btn btn-outline-secondary" 
                type="button" 
                id="button-addon2" 
                @click="$emit('performSearch')"><!-- COMUNICHIAMO DA FIGLIO A PADRE E SCATENIAMO L'AEVENTO PERFORMSEARCH -->
                    Cerca..
                </button>

            </div>
        </div>
    </div>
</template>

<style lang="scss" >

</style>