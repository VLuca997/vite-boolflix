<script >
//import component 
import HeaderComponent from './components/HeaderComponent.vue';
import MovieComponent from './components/MovieComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import { store } from './store';//IMPORTO STORE.JS CON "DESTRUCTURING"
import axios from 'axios';//AXIOS GLOBALE

// my-component.js
export default {
    data() {
        return {
            store

        }
    },//---------------------------------------------------------------
    components:{
        HeaderComponent, MovieComponent, FooterComponent
    },//---------------------------------------------------------------
    methods:{
        search(){
            console.log(this.store.searchText);//PASSIAMO PER STORE PER CERCARE SEARCHTEXT!

            axios.get('https://api.themoviedb.org/3/search/movie', {// CHIAMATA AXIOS
                params: {
                    api_key:'160ffaedc5a1cb0a374cb8b9c43df54a', // API KEY DI TheMovieDatabase
                    query: this.store.searchText,
                },
            })
            .then(res =>{
                console.log(res.data);
                this.store.movies = res.data.results
            })
        },
    },//---------------------------------------------------------------
}
</script>

<template>
    <HeaderComponent @performSearch = "search()"/>  <!--EVENTO SCATENATO DA HEADERCOMPONENT -->
    <MovieComponent/>
    <FooterComponent />
</template>

<style lang="scss">
@use "assets/scss/main.scss";
</style>
