const initialArticles = require('./data/articles.json')
const initialFollowers = require('./data/followers.json')
const images=require('./data/image.json')
const Alert=(state={
	nextfollowerId:4,
	nextCardId:11,
	userInfo:{
		myPic:'',
		myName:'',
		myHeadLine:'JS learner'
	},
	message:'',
	location:'LANDING',
	articles:initialArticles.articles,
	Cardfilter:'',
	followers:initialFollowers.followers
},action) =>{
	switch(action.type){
		case 'info':
		return{
			...state,
			message:action.message
		}
		case 'Go_To_Main':
		return{
			...state,
			message:'',
			location:'MAIN_PAGE'
		}
		case 'Go_To_Profile':
		return{
			...state,
			message:'',
			location:'PROFILE_PAGE'
		}
		case 'Go_To_Landing':
		return{
			...state,
			message:'',
			location:'LANDING'
		}
		case 'Add_My_User':
		return{
			...state,
			userInfo:{
				myPic:'https://s-media-cache-ak0.pinimg.com/564x/bc/a2/b9/bca2b9ca11810f19196d9323464d6b9d.jpg',
				myName:action.name,
				myHeadLine:state.userInfo.myHeadLine
			}
		}
		case 'Add_New_Article':
		return{
			...state,
			nextCardId:state.nextCardId+1,
			articles:[{
				_id:state.nextCardId,
				author:state.userInfo.myName,
				comments:[],
				date:action.Date,
				img:state.userInfo.myPic,
				text:action.content				
			},...state.articles]
				

		}
		case 'Update_Headline':
		return{
			...state,
			userInfo:{
				myPic:state.userInfo.myPic,
				myName:state.userInfo.myName,
				myHeadLine:action.text

			}
		}

		case 'Add_Follower':
		return{
			...state,
			nextfollowerId:state.nextfollowerId+1,
			followers:[...state.followers,
			{id:state.nextfollowerId,
			img:images.images[Math.floor(Math.random()*3)],
			name:action.text,
			headline:"new follower"
			}]
		}
		case 'Remove_Follower':
		return{
			...state,
			followers:state.followers.filter((item)=>item.id != action.id)
		}

		default:return state
	}

}
export default Alert