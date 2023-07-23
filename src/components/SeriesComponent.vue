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

        getCountryflag2(flag){
            if (flag == 'it' ){
                return 'https://flagicons.lipis.dev/flags/4x3/it.svg'
            }
            else if (flag == 'ja'){
                return 'https://flagicons.lipis.dev/flags/4x3/jp.svg'
            }
            else if (flag == 'us' || 'en'){
                return 'https://flagicons.lipis.dev/flags/4x3/us.svg'
            }
            else if (flag == 'de'){
                return 'https://flagicons.lipis.dev/flags/4x3/de.svg'
            }
            else{
                
                return 'https://flagicons.lipis.dev/flags/4x3/un.svg'
            }
        }
    },
    
}
</script>
<template>
    <div>
        <h2 class="bg-danger">Series:</h2>
        <ul>
            <li v-for="(SeriesTv,i) in store.series" key="i">
                <ol>
                    <li class="cover"><img :src="`https://image.tmdb.org/t/p/w342${SeriesTv.poster_path}` || `https://image.tmdb.org/t/p/w500${SeriesTv.poster_path}` " alt=""></li>
                    <li>{{ SeriesTv.name }}</li>
                    <li>{{ SeriesTv.original_name }}</li>
                    <li class="flag"><img :src="getCountryflag2(SeriesTv.original_language)" :alt="SeriesTv.original_language"></li>  <!--V-BIND SU IMG/ALT-->
                    <li>{{ Math.ceil(SeriesTv.vote_average / 2) }}</li>
                    <div>
                        <span v-for="numero in Math.min(5, Math.ceil(SeriesTv.vote_average / 2))" :key="numero"><i class="fa-solid fa-star"></i></span>
                        <span v-for="numero in Math.min(5, 5 - Math.ceil(SeriesTv.vote_average / 2))" :key="numero"><i class="fa-regular fa-star"></i></span>
                    </div>
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