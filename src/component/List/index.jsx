import React from "react";
import ListItem from "../ListItem/index.jsx";
import Loadmore from "../Loadmore/index.jsx";
import Loading from "../Loading/index.jsx";
import iScroll from "iscroll/build/iscroll-probe";
import { getListData } from '../../data/List/list.js';

class List extends React.Component {
	constructor(props) {
		super(props);
		this.getTabName = this.getTabName.bind(this);
		this.loadMore = this.loadMore.bind(this);

		this.state = {
			nowTab: this.props.tab,
			data: [],
			loadMsg: false,
			page: 1,
			limit: 10,
			loadMore: false
		}
	}

	componentDidMount(){
		var result = getListData('all', this.state.limit , this.state.page);

		result.then((res) => {
			return res.json();
		}).then((json) => {
			this.setState({
				data: json.data,
				loadMsg: true
			});
		});
	}

	componentDidUpdate() {
		if (this.state.nowTab != this.props.tab) {
			// if(this.state.loadMsg === true){
			// 		this.setState({
			// 		loadMsg: false,
			// 		page: 1,
			// 		loadMore: false
			// 	});
			// }
			const tabName = this.getTabName(this.props.tab);
			var result = getListData(tabName, this.state.limit, 1);
			result.then((res) => {
				return res.json();
			}).then((json) => {
				this.setState({
					data: json.data,
					nowTab: this.props.tab,
					loadMsg: true,
					loadMore: false,
					page: 1,
				});
			});
		}else if(this.state.loadMore === true){
			var result = getListData(this.getTabName(this.state.nowTab), this.state.limit, this.state.page);

			result.then((res) => {
				return res.json();
			}).then((json) => {
				this.setState({
					data: this.state.data.concat(json.data),
					loadMsg: true,
					loadMore: false
				});
			});
		}
	}

	getTabName(tab) {
		let tabName = "";
		switch (tab) {
			case "SHOW_ALL":
				tabName = "all";
				break;
			case "SHOW_GOOD":
				tabName = "good";
				break;
			case "SHOW_SHARE":
				tabName = "share";
				break;
			case "SHOW_ASK":
				tabName = "ask";
				break;
			case "SHOW_JOB":
				tabName = "job";
				break;
			default:
				break;
		}
		return tabName;
	}

	loadMore(){
		this.setState({
			page: this.state.page +1,
			loadMore: true
		});
	}

	render() {
		let message = null;
		if (!this.state.loadMsg) {
			message = <Loading />
		}else{
			message = (
				<div>
					<ul className="listNav" >
						{this.state.data.map((item, index) =>{
							return <ListItem key={index} {...item}></ListItem>
						})}
						<Loadmore loadMore={this.state.loadMore} handleFn={this.loadMore}/>
						<div style={{height: "60px", width:"100%", display:"block"}}></div>
					</ul>
			</div>);
		}

		return message;
	}
}

export default List;