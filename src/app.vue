<template>
	<div id="app">
		<div id="cover"></div>
		<Header></Header>
		<Todo></Todo>
		<Footer></Footer>	
	</div>
</template>

<script type="text/javascript">
	// 引入header
	import Header from './todo/header.vue'
	// 引入footer
	import Footer from './todo/footer.jsx'
	// 引入todo组件
	import Todo from './todo/todo.vue'
	// 引入 item组件
	import Item from './todo/item.vue'

	export default{
		data () {
			return {
				text: 'abc22dsa',
			}
		},
		components: {
			Header,
			Footer,
			Todo,
			Item
		}
	}
</script>
	
<style scoped>
	#app{
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}
	#cover{
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background-color: #999;
		opacity: .8;
		z-index: -1;
	}
</style>