<template>
  <article class="calculator">
    <input @change="handleChange($event)" v-bind:value="result" class="calculator__input-style">
    <section class="calculator__button-group">
      <div class="calculator__button-group__symbol">
        <button @click="handleClick(button)" class="calculator__symbol-button" v-for="button in calcButtons" :key="button">{{button}}</button>
      </div>
      <div class="calculator__button-group__number">
        <button @click="handleClick(button)" class="calculator__number-button" v-for="button in calcNumbers" :key="button">{{button}}</button>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: 'CalculatorPage',
  data() {
    return {
      result: '',
      operator: '',
      firstValue: '',
      secondValue: '',
      calcButtons: ['C', '+', '-', '*', '='],
      calcNumbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    }
  },
  methods: {
    handleClick(element) {
      let elementType = this.calcButtons.find((s) => s === element) ? 'symbol' : 'number';
      if (element === 'C') {
        this.result = '';
      }
      if (element === '=') {
        this.result = eval(this.secondValue + this.operator + this.firstValue);
        this.firstValue = eval(this.secondValue + this.operator + this.firstValue);
        this.secondValue = '';
        this.operator = '';
      }
      if (elementType === 'symbol' && element !== 'C' && element !== '=') {
        if (this.firstValue === '') {
          this.result = '';
        }
        this.operator = element;
        this.secondValue = this.firstValue;
        this.firstValue = '';
        this.result = this.secondValue + ' ' + this.operator + ' ';
      }
      if (elementType === 'number') {
        this.firstValue += element;
        this.result += element;
      }
    },
    handleChange(event) {
      this.result = eval(event.target.value);
    }
  }
}
</script>

<style>
  @import '../assets/styles/article.css';
</style>
