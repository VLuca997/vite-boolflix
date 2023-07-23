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
        <h2>Series:</h2>
        <ul>
            <li v-for="(SeriesTv,y) in store.series" key="y">
                <ol>
                    <li>{{ seriesTv.title }}</li>
                    <li>{{ seriesTv.original_title }}</li>
                    <li>{{ seriesTv.original_language }}</li>
                    <li>{{ seriesTv.vote_average }}</li>

                </ol>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>



</style>