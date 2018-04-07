<template>
  <div>
    <header>
      <nav-menu />
    </header>
    <main>
      <component :is="$curi.response.body" />
    </main>
  </div>
</template>

<script type="src/javascript">
  import NavMenu from './components/NavMenu';

  export default {
    name: 'app',
    components: {
      'nav-menu': NavMenu
    }
  };
</script>
