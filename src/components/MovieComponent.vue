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
                    <li>{{ movie.title }}</li>
                    <li>{{ movie.original_title }}</li>
                    <li><img :src="getCountryflag(movie.original_language)" alt="movie.original_language"></li>  <!--V-BIND SU IMG-->
                    <li>{{ movie.vote_average }}</li>

                </ol>
            </li>
        </ul>
    </div>

</template>
<style lang="scss" scoped>
    img{
        max-width: 30px;
        border: 1px solid black;
    }


</style>