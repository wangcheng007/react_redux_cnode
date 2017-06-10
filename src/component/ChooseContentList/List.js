import React from "react";
import ListItem from "./ListItem";
import Loading from "../common/Loading";
import iScroll from "iscroll/build/iscroll-probe";

class List extends React.Component {
	constructor(props) {
		super(props);
		this.getUrl = this.getUrl.bind(this);
		this.state = {
			nowTab: this.props.tab,
			//data: this.props.data,
			pullUpStatus: 0
		}
		this.page = 1;
		this.itemChanged = false;
		this.isTouching = false;

		this.onScroll = this.onScroll.bind(this);
		this.onScrollEnd = this.onScrollEnd.bind(this);
		this.onTouchStart = this.onTouchStart.bind(this);
		this.onTouchEnd = this.onTouchEnd.bind(this);
	}

	onTouchStart(ev) {
		this.isTouching = true;
	}

	onTouchEnd(ev) {
		this.isTouching = false;
	}

	onPullUp() {
		//手势
		if (this.isTouching) {
			if (this.iScrollInstance.y <= this.iScrollInstance.maxScrollY + 60) {
				this.state.pullUpStatus != 1 && this.setState({
					pullUpStatus: 1
				});
			} else {
				this.state.pullUpStatus != 0 && this.setState({
					pullUpStatus: 0
				});
			}
		}
	}

	onScroll() {
		// 下拉区域
		if (this.iScrollInstance.y <= this.iScrollInstance.maxScrollY + 5) {
			this.onPullUp();
		}
	}

	onScrollEnd() {
		// 滑动结束后，停在加载区域
		if (this.iScrollInstance.y <= this.iScrollInstance.maxScrollY) {
			if (this.state.pullUpStatus == 1) { // 发起了加载，那么更新状态
				this.setState({
					pullUpStatus: 2
				});
				const URL = this.getUrl(this.props.tab, this.props.page + 1, this.props.limit);
				this.props.handle(URL, this.props.page + 1);
			}
		}
	}

	componentWillMount() {
		if (this.props.loadID == null) {
			this.props.handle("https://cnodejs.org/api/v1/topics?tab=all&page=1&limit=10", 1);
		}
	}

	componentDidMount() {}

	shouldComponentUpdate(nextProps, nextState) {
		// 列表发生了变化, 那么应该在componentDidUpdate时调用iscroll进行refresh
		this.itemsChanged = nextProps.data !== this.props.data;
		return true;
	}

	componentWillUpdate() {
		this.state.nowTab = this.props.tab; 
		// if (this.props.loadMsg) {               }
		return true;
	}

	componentDidUpdate() {
		console.log(this.props.loadMsg);
		if (this.iScrollInstance != null && this.props.loadMsg && this.state.pullUpStatus == 2) {
			console.log(1);
			this.iScrollInstance.refresh();
			window.scrollTo(0, this.iScrollInstance.y);   
		}

		if (this.props.loadMsg) {
			const options = {
				preventDefault: false,
				probeType: 3,
				mouseWheel: true,
				scrollY: true,
				bounce: true,
				scrollbars: true
			}

			this.iScrollInstance = new iScroll('#infoListScroll', options);
			this.iScrollInstance.on('scroll', this.onScroll);
			this.iScrollInstance.on('scrollEnd', this.onScrollEnd);
		}

		if (this.state.nowTab != this.props.tab) {
			const URL = this.getUrl(this.props.tab, 1, this.props.limit);
			this.props.handle(URL, 1);
		}
	}

	getUrl(tab, page, limit) {
		let url = "https://cnodejs.org/api/v1/topics?tab=";
		switch (tab) {
			case "SHOW_ALL":
				url += "all";
				break;
			case "SHOW_GOOD":
				url += "good";
				break;
			case "SHOW_SHARE":
				url += "share";
				break;
			case "SHOW_ASK":
				url += "ask";
				break;
			case "SHOW_JOB":
				url += "job";
				break;
			default:
				break;
		}
		url += "&page=" + page + "&limit=" + limit;
		return url;
	}
	render() {
		let message = null;
		if (this.props.isFetching && !this.props.loadMsg) {
			message = <Loading />
		}

		if (!this.props.isFetching && this.props.loadMsg) {
			message = (
				<div id="infoListScroll" onTouchStart={this.onTouchStart} onTouchEnd={this.onTouchEnd} style={{height:'1000px'}}>
					<ul className="listNav" >
						{this.props.data.map((item, index) =>{
							return <ListItem key={index} {...item}></ListItem>
						})}
						<Loading/>
					</ul>
			</div>);
		}
		return message;
	}
}

export default List;