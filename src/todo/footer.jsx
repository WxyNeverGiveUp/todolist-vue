import '../assets/styles/footer.css'

export default {
	data () {
		return {
			author: 'wuxy720'
		}
	},
	render(){
		return (
			<div id="footer">
				<span>Written By {this.author}</span>
			</div>
		)
	}
}