# react-redux-cnode 
> 这是一个基于react全家桶的cnode社区webapp，主要包括react、redux、react-redux、react-router、webpack、flex。  

> 个人博客：[我爱吃包子的博客](http://wangcheng007.github.io/)  

> 项目github地址：[react-redux-cnode](https://github.com/wangcheng007/react_redux_cnode)

> 如果对你有帮助的话，希望得到你的star。

## demo  
#### [在线预览](http://39.108.127.98:8888)
## 下载
		git clone https://github.com/wangcheng007/react_redux_cnode.git
		cd react_redux_cnode/
		npm install(安装依赖模块)

	
## 运行
		npm run start (开发版本访问：http://localhost:3000/)
		npm run build (打包发布)
## 功能
1.登录退出  
2.分类查看  
3.首页滚动到底部加载更多  
4.帖子详情页  
5.评论帖子  
6.发布帖子  
7.查看个人信息、查看其他用户主页  
8.我的消息  

## 目录结构  

	|-- config								  	//路由、 redux store文件夹 
	|		|--routerConfig.js				  	//路由
	|		|--storeConfig.js				  	//redux store  
	|--src									  	//源码目录
	|		|--action						  	//action 文件夹
	|		|		|--chooseHeader.js		  	//选择分类
	|		|		|--getListDataAction.js		//获取首页列表数据
	|		|		|--getTopicDetailAction.js	//获取帖子详情数据
	|		|		|--login.js					//登录
	|		|		|--signout.js				//退出
	|		|--component						//木偶组件文件夹
	|		|		|--App						
	|		|		|--Article					//帖子详情页 帖子
	|		|		|--ChooseContentList		//首页列表
	|		|		|--FooterNav				//尾部
	|		|		|--Header					//详情页等头部
	|		|		|--HeaderNav				//选择分类展示头部
	|		|		|--Loading					//正在加载
	|		|		|--Loadmore					//加载更多
	|		|		|--TabIcon					//图标字体
	|		|--container						//智能组件
	|		|		|--ChooseContentList		//首页列表
	|		|		|--HeaderList				//分类展示头部
	|		|		|--Message					//消息列表
	|		|		|--Published				//发布帖子
	|		|		|--Signout					//退出登录
	|		|		|--TopicDetail				//帖子详情
	|		|		|--UseInfo					//未登录状态
	|		|		|--UserView					//个人信息
	|		|--data								//获取数据
	|		|		|--createTopic				//新建帖子
	|		|		|--dianzan					//点赞评论
	|		|		|--list						//首页列表
	|		|		|--login					//登录
	|		|		|--message					//消息数据
	|		|		|--reply					//评论数据
	|		|		|--topicdetail				//帖子详情
	|		|		|--userview					//个人中心
	|		|		|--get.js					//get请求
	|		|		|--post.js					//post请求
	|		|--iconfont							//图标字体
	|		|--reducer							//reducers
	|		|		|--index.js					//整合
	|		|		|--listData.js				//首页列表
	|		|		|--login.js					//登录
	|		|		|--showContentOfHeader.js	//选择分类
	|		|		|--topicDetail.js			//详情页
	|		|--index.html						
	|		|--index.js							//入口文件
	|		|--Tool.js 							//共用方法


### 总结
* ui是借鉴的[狼族小狈的cnode社区ui](https://github.com/lzxb/react-cnode)，非常感谢。
* 自己做开发前没有认真想过目录结构，导致结构混乱，然后推到重来了一遍。
* 异步请求数据问题，原来是按照官方文档，通过两种action来请求。后发现这种是在是太烦，在网上搜索发现现在的方法。
* 项目部署问题，可以参考我稍后时间更的博客，[博客地址](https://wangcheng007.github.io/)

### 项目截图  
##### 首页
![首页](http://on3r0omz6.bkt.clouddn.com/shouye.png)  
##### 详情页
![详情页](http://on3r0omz6.bkt.clouddn.com/xiangqingye_1.png) 
##### 评论列表
![评论列表](http://on3r0omz6.bkt.clouddn.com/xiangiqngye_2.png)  
##### 未登录
![未登录](http://on3r0omz6.bkt.clouddn.com/unlogined.png)  
##### 登录
![登录](http://on3r0omz6.bkt.clouddn.com/login.png)  
##### 消息列表
![消息列表](http://on3r0omz6.bkt.clouddn.com/message.png)  
##### 发布
![发布](http://on3r0omz6.bkt.clouddn.com/published.png)  
##### 个人信息
![个人信息](http://on3r0omz6.bkt.clouddn.com/userview.png)