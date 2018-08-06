<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Наши работяги вовсю работают над парсером критериев</h2>
    <ul>
      <li>
        <a
          href="https://vk.com/sspmpu"
          target="_blank"
        >
          Студсовет ПМ-ПУ
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Добро пожаловать на страницу сервиса ПГАС'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
