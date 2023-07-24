<script>
import { store } from '../store';

// my-component.js
export default {
    data() {
        return{

            store
        } 
    },
    methods:{
        getCountryflag(flag){
            if (flag == 'it' ){
                return 'https://flagicons.lipis.dev/flags/4x3/it.svg'
            }
            else if (flag == 'ja'){
                return 'https://flagicons.lipis.dev/flags/4x3/jp.svg'
            }
            else if (flag == 'us'){
                return 'https://flagicons.lipis.dev/flags/4x3/us.svg'
            }
            else if (flag == 'de'){
                return 'https://flagicons.lipis.dev/flags/4x3/de.svg'
            }
            else{
                
                return 'https://flagicons.lipis.dev/flags/4x3/un.svg'
            }
        }
    }
    
}
</script>
<template>
    <div class="my-container">
        <h2 class=" bg-danger">Film:</h2>
        <div class="row">
            <ul class="col carosello">
                <li class="" v-for="(movie,i) in store.movies" key="i">
                    <ol class="">
                        <li class="cover">
                            <img :src="`https://image.tmdb.org/t/p/w185${movie.poster_path}` || `https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="">
                        </li>
                        <li>{{ movie.title }}</li>
                        <li>{{ movie.original_title }}</li>
                        <li class="flag"><img :src="getCountryflag(movie.original_language)" alt="movie.original_language"></li>  <!--V-BIND SU IMG-->
                        <span v-for="numero in Math.min(5, Math.ceil(movie.vote_average / 2))" :key="numero"><i class="fa-solid fa-star"></i></span>
                        <span v-for="numero in Math.min(5, 5 - Math.ceil(movie.vote_average / 2))" :key="numero"><i class="fa-regular fa-star"></i></span>

                    </ol>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="bg-danger">Series:</h2>
            <div class="row">
                <ul class="col carosello ">
                    <li v-for="(SeriesTv,i) in store.series" key="i">
                        <ol>
                            <li class="cover"><img :src="`https://image.tmdb.org/t/p/w185${SeriesTv.poster_path}` || `https://image.tmdb.org/t/p/w500${SeriesTv.poster_path}` " alt=""></li>
                            <li>{{ SeriesTv.name }}</li>
                            <li>{{ SeriesTv.original_name }}</li>
                            <li class="flag"><img :src="getCountryflag(SeriesTv.original_language)" :alt="SeriesTv.original_language"></li>  <!--V-BIND SU IMG/ALT-->
                            <li>{{ Math.ceil(SeriesTv.vote_average / 2) }}</li>
                            <div>
                                <span v-for="numero in Math.min(5, Math.ceil(SeriesTv.vote_average / 2))" :key="numero"><i class="fa-solid fa-star"></i></span>
                                <span v-for="numero in Math.min(5, 5 - Math.ceil(SeriesTv.vote_average / 2))" :key="numero"><i class="fa-regular fa-star"></i></span>
                            </div>
                        </ol>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>
<style lang="scss" >
    .my-container{
    max-width: 100vw;
    margin: 0 auto;
}
    .flag{
        max-width: 30px;
        border: 1px solid black;
    }
    
    .carosello{
        max-width: 70%;
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: repeat(5, 1fr);
        gap: 1px 25px;
    }
    ul li{
    list-style: none;
    
    }
</style>