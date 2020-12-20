Vue.component('Coucou', {
    template:`<h1> {{text}}</h1>`,
    data(){
        return {
            text:'Salut ma caille'
        }
    }
})

new Vue({
    el: '#root',
  })