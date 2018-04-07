<template>
  <div v-if="books.length">
    <h1>Checkout</h1>
    <table>
      <thead>
        <th>Title</th>
        <th>Quantity</th>
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
        const pathname = this.$router.addons.pathname('Checkout');
        this.$router.history.replace({ pathname, hash: 'thanks' });
      }
    }
  }
</script>