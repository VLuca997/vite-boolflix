<script>
import axios from 'axios';

// my-component.js
export default {
    data() {
        return{
            searchText: "",
            movies:[],
        } 
    },
    methods:{
        search(){
            console.log(this.searchText);

            axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    api_key:'160ffaedc5a1cb0a374cb8b9c43df54a', // API KEY DI TheMovieDatabase
                    query: this.searchText,
                },
            })
            .then(res =>{
                this.movies = res.data.results
            })
        },
    },
}
</script>

<template>
    <div>
        <div class="container">

            <div class="input-group mb-3">

                <input v-model="searchText" type="text" class="form-control" placeholder="Cerca qui il Film o la Serie TV!" aria-label="Ricerca Film o Serie TV!" aria-describedby="button-addon2">

                <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="search()">Cerca..</button>

            </div>
            <div>
                <ul>
                    <li v-for="(movie,i) in movies" key="i">
                        <ol>
                            <li>{{ movie.title }}</li>
                            <li>{{ movie.original_title }}</li>
                            <li>{{ movie.original_language }}</li>
                            <li>{{ movie.vote_average }}</li>

                        </ol>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" >

</style>