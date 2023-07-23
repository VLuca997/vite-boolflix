import { reactive } from 'vue';

export const store = reactive({
        //valori condivisi globalmente
        searchText: '',
        movies: [],
        series: []
});
