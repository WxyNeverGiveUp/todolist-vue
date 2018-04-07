<template>
	<section class="real-app">
		<input 
			type="text"
			class="add-input"
			autofocus="autofocus"
			placeholder="接下来要做什么呢？"
			@keyup.enter="addTodo" 
		>
		<Item 
			:todo="todo"
			v-for="todo in filteredTodos"
			:key="todo.id"
			@del="deleteTodo"
		/>
		<Tabs 
			:filter="filter" 
			:todos="todos" 
			@toggle="toggleFilter"
			@clearAll="clearAllCompleted"
		/>
	</section>
</template>

<script>
	// 导入本地存储
	import Store from '../assets/scripts/store.js'
	// 引入 item组件
	import Item from '../todo/item.vue'
	// 引入 tabs组件
	import Tabs from '../todo/tabs.vue'

	let id = 0;
	export default {
		data () {
			return {
				todos: [],
				filter: 'all',
			}
		},
		methods: {
			addTodo: function(e){ // 添加一项
				if(e.target.value.trim() != ''){
					this.todos.unshift({
						id: id++,
						content: e.target.value.trim(),
						completed: false,
					})
				}
				e.target.value = '';
			},
			deleteTodo: function(id){ // 单项删除
				this.todos.splice(this.todos.findIndex((todo) => todo.id === id),1)
			},
			toggleFilter: function(state){ // 换筛选选项
				this.filter = state
			},
			clearAllCompleted: function(){ // 删除所有已完成
				this.todos = this.todos.filter((todo) => !todo.completed)
			}
		},
		computed: {
			filteredTodos: function(){
				if(this.filter === 'all'){
					return this.todos
				}
				const completed = this.filter === 'completed'
				return this.todos.filter((todo) => completed === todo.completed);
			}
		},
		components: {
			Item,
			Tabs
		}
	}
</script>

<style>
	.real-app{
		width: 600px;
		margin: 0 auto;
		box-shadow: 0 0 5px #666;
	}
	.add-input{
		position: relative;
		margin: 0;
		width: 100%;
		font-size: 24px;
		line-height: 1.4em;
		border: 0;
		outline: none;
		color: inherit;
		padding: 16px 48px;
		border: 1px solid #999;
		box-shadow: inset 0 -1px 5px 0 #000;
		box-sizing: border-box;
		font-smoothing: antialiased;
	}
</style>