import {showAlert,go_To_Main,addUser} from '../../actions'

export const updateUser=(name)=>{
	return{
		type:'Login',
		name
	}
}
// Form can't be empty, if it's empty, alert. Else go to main page and update user.
export const _Login =(name,pass)=> (dispatch) => {
	if(name===''){
		dispatch(showAlert("name can't be empty!"))
		return 
		
	}
	if(pass ===''){
		dispatch(showAlert("password can't be empty"))
		return 
	}
	dispatch(updateUser(name))
	dispatch(go_To_Main())
	return 
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