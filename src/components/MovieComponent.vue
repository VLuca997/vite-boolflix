
  
<script>
import { store } from '../store';

export default {
  data() {
    return {
      isLeftDisabled: true,
      isRightDisabled: false,
      translateValue: 0,
      itemIndexActive: 0,
      store,
    };
  },
  computed: {
    slides() {
      return this.store.movies;
    },
  },
  methods: {
    updateArrows() {
      const wrapperWidth = this.$refs.wrapper.offsetWidth;
      const carouselWidth = this.$refs.carousel.offsetWidth;
      this.isLeftDisabled = this.translateValue >= 0;
      this.isRightDisabled = this.translateValue <= -(carouselWidth - wrapperWidth);
    },
    slideLeft() {
      if (!this.isLeftDisabled) {
        this.itemIndexActive--;
        this.updateTranslateValue();
      }
    },
    slideRight() {
      if (!this.isRightDisabled) {
        this.itemIndexActive++;
        this.updateTranslateValue();
      }
    },
    updateTranslateValue() {
      const itemWidth = this.$refs.carousel.children[0].offsetWidth;
      this.translateValue = -this.itemIndexActive * itemWidth;
    },
    changeImage(index) {
      this.itemIndexActive = index;
      this.updateTranslateValue();
    },
    getCountryflag(flag) {
      // Resto del tuo codice
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.updateArrows();
      window.addEventListener('resize', this.updateArrows);
    });
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateArrows);
  },
};
</script>
  <template>
    <div class="container-fluid">
      <h2 class="bg-danger">Film:</h2>
  
      <div class="carousel-container">
      <div class="carousel-wrapper" :style="{ transform: `translateX(${translateValue}px)` }"  ref="wrapper">
        <ul class="assarollo" ref="carousel">
          <li v-for="(movie, i) in slides" :key="i">
              <ol>
                <li class="cover">
                  <img
                    :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}` || `https://image.tmdb.org/t/p/w500${movie.poster_path}`"
                    alt=""
                  />
                </li>
                <li>{{ movie.title }}</li>
                <li>{{ movie.original_title }}</li>
                <li class="flag">
                  <img :src="getCountryflag(movie.original_language)" :alt="movie.original_language" />
                </li>
                <span v-for="numero in Math.min(5, Math.ceil(movie.vote_average / 2))" :key="numero">
                  <i class="fa-solid fa-star"></i>
                </span>
                <span v-for="numero in Math.min(5, 5 - Math.ceil(movie.vote_average / 2))" :key="numero">
                  <i class="fa-regular fa-star"></i>
                </span>
              </ol>
            </li>
          </ul>
        </div>
        <div class="arrow left-arrow bg-light" @click="slideLeft" :class="{ 'disabled': isLeftDisabled }"><i class="fa-solid fa-arrow-left fa-xl"></i></div>
        <div class="arrow right-arrow bg-light" @click="slideRight" :class="{ 'disabled': isRightDisabled }"><i class="fa-solid fa-arrow-right fa-xl"></i></div>
      </div>
    </div>
  </template>
  <style lang="scss" scoped>
  .flag {
    max-width: 30px;
    border: 1px solid black;
  }
  .carousel-container {
    position: relative;
    overflow: hidden;
  }
  .carousel-wrapper {
    display: flex;
    transition: transform 0.3s ease;
  }
  .assarollo {
    white-space: nowrap; /* Impedisce il wrapping degli elementi */
    display: flex;
  }
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 24px;
    color: #fff;
    cursor: pointer;
  }
  .left-arrow {
    left: 0;
  }
  .right-arrow {
    right: 0;
  }
  </style>
  