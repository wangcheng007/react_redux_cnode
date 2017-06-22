import React from "react";
import { Link } from 'react-router';
import Loadmore from "../../../component/Loadmore/index.jsx";
import Loading from "../../../component/Loading/index.jsx";
import TabIcon from '../../../component/TabIcon/index.jsx';
import { getListData } from '../../../data/List/list.js';
import { Tool } from '../../../Tool.js';
import './List.css';

class List extends React.Component {
	constructor(props) {
		super(props);
		this.getTabName = this.getTabName.bind(this);
		this.loadMore = this.loadMore.bind(this);

		this.state = {
			nowTab: this.props.tab
		}
	}

	componentDidMount(){
		if(!this.props.loadMsg){
			var result = getListData('all', this.props.limit , this.props.page);
			result.then((res) => {
				return res.json();
			}).then((json) => {
				this.props.getListData(json.data, true);
			});
		}
	}

	componentDidUpdate() {
		if (this.state.nowTab != this.props.tab) {
			const tabName = this.getTabName(this.props.tab);
			var result = getListData(tabName, this.props.limit, 1);
			result.then((res) => {
				return res.json();
			}).then((json) => {
				this.props.initData(json.data, true, false, 1);
				this.setState({
					nowTab: this.props.tab
				});
			});
		}else if(this.props.loadMore === true){
			var result = getListData(this.getTabName(this.state.nowTab), this.props.limit, this.props.page);

			result.then((res) => {
				return res.json();
			}).then((json) => {
				this.props.getListData(this.props.data.concat(json.data),true, false);
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
			case "SHOW_DEV":
				tabName = "dev";
				break;
			default:
				break;
		}
		return tabName;
	}

	loadMore(){
		this.props.loadMoreData(this.props.page+1, true);
	}

	render() {
		let message = null;
		if (!this.props.loadMsg) {
			message = <Loading />
		}else{
			message = (
				<div>
					<ul className="listNav" >
						{this.props.data.map((item, index) =>{
							return (
								<li key={index}>
									<Link to={`/topic/${item.id}`} >
										<div className="unitHeader">
											<TabIcon {...item}></TabIcon>
											<h3 className="tittle">{item.title}</h3>
										</div>
										<div className="unitBody">
											<img className="headerIMG" src={item.author.avatar_url}/>
											<div className="bodyInfo">
												<div className="personInfo">
													<span>{item.author.loginname}</span>
													<span>{item.reply_count}/{item.visit_count}</span>
												</div>
												<div className="timeInfo">
													<span>{Tool.formatDate(item.create_at)}</span>
													<span>{Tool.formatDate(item.last_reply_at)}</span>
												</div>
											</div>
										</div>
									</Link>
								</li>
							);
						})}
						<Loadmore loadMore={this.props.loadMore} handleFn={this.loadMore}/>
						<div style={{height: "60px", width:"100%", display:"block"}}></div>
					</ul>
			</div>);
		}

		return message;
	}
}

export default List;