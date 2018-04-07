<template>
  <div v-if="book">
    <h1>{{book.title}}</h1>
    <h2>by {{book.author}}</h2>
    <p>Published in {{book.published}}</p>
    <p>{{book.pages}} pages</p>
    <button type="button" v-on:click="onClick">
      Add to Cart
    </button>
  </div>
  <div v-else>
    The requested book could not be found
  </div>
</template>

<script>
  import books from '../books';
  import cart from '../cart';

  export default {
    name: 'book',
    computed: {
      book() {
        const id = parseInt(this.$curi.response.params.id, 10);
        return books.find(b => b.id === id);
      }
    },
    methods: {
      onClick: function() {
        cart.add(this.book, 1);
        const pathname = this.$router.addons.pathname('Checkout');
        this.$router.history.push({ pathname });
      }
    }
  }
</script>
