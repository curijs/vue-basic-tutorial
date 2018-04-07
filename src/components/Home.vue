<template>
  <div>
    <ul>
      <li v-for="b in books" :key="b.id">
        <curi-link to="Book" :params="{ id: b.id }">
          {{b.title}} by {{b.author}}
        </curi-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import books from '../books';

  export default {
    name: 'home',
    data() {
      return { books };
    }
  }
</script>