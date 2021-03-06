import Action,{showAlert,go_To_Main,addUser,resource,url,logOut} from '../../actions'


export const updateUser=(name)=>{
	return{
		type:Action.Login,
		name
	}
}
export const logout=()=>(dispatch)=>{
	resource('PUT','logout')
	.then((r)=>{
		dispatch(logOut())
	})
	.catch((error)=>{
		dispatch(showAlert("There was an error logging out"))
	})
}

// Form can't be empty, if it's empty, alert. Else go to main page and update user.
export const _Login =(username,password)=> (dispatch) => {
	resource('POST','login',{username,password})
	.then((response)=>{
	dispatch(updateUser(response.username))
	dispatch(go_To_Main())
	}).catch((error)=>{
		dispatch(showAlert(`There was an error logging in as ${username}`))
	})
}
// Validate form can't be empty and on birth must larger than 18 and password should match confirmation.
export const updateText = (info) => (dispatch)=>{
	var empty=false
	Object.keys(info).forEach((key)=>{
		if(info.hasOwnProperty(key)){			
			if(info[key]===''){
				empty=true
			}
		}
	})
	if(empty){
		dispatch(showAlert("Form can't be empty"))
		return
	}
	var text=""
	var birth = new Date(info.birthday);
	var today = new Date();
	var age = today.getFullYear() - birth.getFullYear();
	var m = today.getMonth() - birth.getMonth();
	if(m < 0) age--;
	if(age < 18){
		text= "age should no less than 18!";
		dispatch(showAlert(text))
		return 
	}
    if (info.password != info.passConfirm) {
    	text="password and confirmation are not matched! ";
    	dispatch(showAlert(text))
    	return
    }   
    	dispatch(addUser(info))
    	dispatch(go_To_Main())
}