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
        <h2>Film:</h2>
        <ul>
            <li v-for="(movie,i) in store.movies" key="i">
                <ol>
                    <li>{{ movie.title }}</li>
                    <li>{{ movie.original_title }}</li>
                    <li>{{ movie.original_language }}</li>
                    <li>{{ movie.vote_average }}</li>

                </ol>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>



</style>