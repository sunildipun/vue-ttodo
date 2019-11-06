<template>
  <div class="index container">
    <div class="card" v-for="todo in todos" :key="todo.id">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteTodo(todo)">delete</i>
        <h2 class="indigo-text">
          {{todo.title}}
        </h2>
        <ul class="todo">
          <li v-for="(task, index) in todo.tasks" :key="index">
            <span class="chip">
              {{task}}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init'
export default {
  name: 'Index',
  data () {
    return {
     todos: []
    }
  },
  methods: {
      deleteTodo(todoArr) {
        this.todos = this.todos.filter(todo => {
          return todo.id != todoArr.id;
        })
      }
  },
  created() {
    // Fetech data
    // db.collection('todo')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .index{
    display: grid;
    grid-template-columns:  1fr 1fr 1fr;
    grid-gap: 30px;
    margin-top: 60px; 

    h2 {
      font-size:1.8em;
      text-align: center;
      margin-top: 0;
    }

  }

  .index .todo {
      margin: 30px auto;
  }

  .index .todo li {
        display: inline-block;
  }

  .index .delete {
    position: absolute;
    top: 4px;
    right: 4px;
    cursor: pointer;
    color: #aaa;
    font-size: 1.4em; 
  }
</style>
