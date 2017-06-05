import React from 'react';
import HeaderNav from "../HeaderNav/index.jsx";
import ChooseContentList from "../../container/ChooseContentList/index.jsx";

class App extends React.Component {
	render() {
		return (
			<div>
				<HeaderNav></HeaderNav>
				<ChooseContentList></ChooseContentList>
			</div>
		);
	}
}

export default App;