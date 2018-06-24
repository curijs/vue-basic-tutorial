<template>
  <div v-if="books.length">
    <h1>Checkout</h1>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.title">
          <td>{{book.title}}</td>
          <td>{{book.quantity}}</td>
        </tr>
      </tbody>
    </table>
    <button type="button" v-on:click="onClick">
      Buy
    </button>
  </div>
  <div v-else-if="$curi.response.location.hash === 'thanks'">
    Thanks for your purchase!
  </div>
  <div v-else>
    The cart is currently empty
  </div>
</template>

<script>
  import cart from '../cart';

  export default {
    name: 'checkout',
    data() {
      return {
        books: cart.items()
      };
    },
    methods: {
      onClick: function() {
        this.books = cart.reset();
        this.$router.navigate({
          to: "Checkout",
          hash: "thanks",
          method: "REPLACE"
        });
      }
    }
  }
</script>