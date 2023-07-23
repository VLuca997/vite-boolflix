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
    <div>
        <h2>Film:</h2>
        <ul>
            <li v-for="(movie,i) in store.movies" key="i">
                <ol>
                    <li class="cover">
                        <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}` || `https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="">
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

</template>
<style lang="scss" scoped>
    .flag{
        max-width: 30px;
        border: 1px solid black;
    }
    .cover{
        max-width: 100%;
    }


</style>