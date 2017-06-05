import React from "react";
import './style.css';

class Loadmore extends React.Component {
	constructor(props){
		super(props);
	}

	handle(){
		this.props.handleFn();
	}

	componentDidMount(){

		const wapper = this.refs.wapper;
		const handleFn = this.props.handleFn;
		let timeoutID;
		function callback() {
			const top = wapper.getBoundingClientRect().top;
			const windowHeight = window.screen.height;

			if(top && top < windowHeight - 80){
				handleFn();
			}
		}

		window.addEventListener('scroll', function(){
			if(this.props.loadMore){
				return
			}

			if(timeoutID){
				clearTimeout(timeoutID);
			}

			timeoutID = setTimeout(callback, 50)
		}.bind(this), false);
	}

	render() {
		return (
			<div className="loading" ref="wapper">
			{
				this.props.loadMore ?
					(
						<div>
							<i className="iconfont icon-loading"></i>
							正在加载...
						</div>
					)
					:
					(
						<div onClick={this.handle.bind(this)}>
							<i className="iconfont icon-loading"></i>
							上拉加载...
						</div>
					)
			}
			</div>
		);
	}
}

export default Loadmore;