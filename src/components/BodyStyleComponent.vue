<script>
import { store } from '../store';
import MovieComponent from './MovieComponent.vue';


// my-component.js
export default {
    data() {
        return{

            store
        } 
    },
    components:{
        MovieComponent
    },
    computed: {
        // Calcoliamo quale immagine immettere basandoci sull'indice
        currentImage(){
            return this.slides[this.itemIndexActive];
        },
    },
    methods: {
        //funzione scollUp
        scrollUp(){
            if(this.itemIndexActive > 0){ // controlliamo se l'indice dell'elemento attivo è > di 0
                this.itemIndexActive--; // se lo è decrementa l'indice attivo di 1 per dare l'active ad un altra immagine
            }
            else{ // se l'indice attivo è gia 0, per la creazione di un effetto loop, l'indice viene decrementato e assegnat all'ultimo elemento dell'array
                this.itemIndexActive = this.slides.length - 1;
            }
            this.thumbIndexActive = this.itemIndexActive; // assegniamo l'indice attivo al thumb con lo stesso indice, in modo da rendere l'elemento marcato, come se fosse selezionato, anche perche lo è xD
        },
        scrollDown(){
            if(this.itemIndexActive < this.slides.length - 1){ // controllo se l'indice dell'elemento attivo è minore delal unghezza di " slides - 1"
                this.itemIndexActive++;// se si incrementa di 1 per passare all'element osuccessivo
            }
            else{ // Altrimenti se l'indice attivo è uguale alla lunghezza dell'array - 1, assegniamo 0 per tornarer al primo indice e creare un loop.
                this.itemIndexActive = 0;
            }
            this.thumbIndexActive = this.itemIndexActive;// assegno l'indice fornito come argomento dell'indice dell'elemento attivo
        },
        
        changeImage(index) {
            this.itemIndexActive = index; // assegno l'indice fornito come argomento all'indice dell'elemento attivo
            this.thumbIndexActive = index; // assegno l'indice fornito come argomento all'indice dell'elemento attivo per i thumb
        },
    },
    
}
</script>
<template>
    <div>
        <div class="container bg-danger">
            <div class="row carosello justify-content-center">
                <div class="col">
                    elemento1
                </div>
                <div class="col">element 1</div>
                <div class="col">element 1</div>
                <div class="col">element 1</div>
                <div class="col">element 1</div>
                <div class="col">element 1</div>


            </div>
           
        </div>
    </div>

</template>
<style lang="scss" scoped>
    .carosello{
  width: 100%;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(5, 1fr);
  gap: 1px 25px;
}

</style>