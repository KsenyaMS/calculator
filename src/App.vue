<template>
  <div>
    <header class="header">
      <h2>Calculator!</h2>
    </header>
    <main>
        <CalculatorPage/>
    </main>
    <footer class="footer">
      Тестовое приложение 2023
    </footer>
  </div>
</template>

<script>
import CalculatorPage from './components/CalculatorPage.vue'

export default {
  name: 'App',
  components: {
    CalculatorPage
  }
}
</script>

<style>
  @import './assets/styles/App.css';
  @import './assets/styles/header.css';
  @import './assets/styles/footer.css';
</style>
