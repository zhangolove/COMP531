import "isomorphic-fetch"
import Promise from 'bluebird'

const Action={
	INFO:'info',
	Go_To_Main:'Go_To_Main',
	Go_To_Landing:'Go_To_Landing',
	Go_To_Profile:'Go_To_Profile',
	Add_My_User:'Add_My_User',
	Update_Headline:'Update_Headline',
	Add_Follower:'Add_Follower',
	Remove_Follower:'Remove_Follower',
	Alert_Headline:'Alert_Headline',
	Login:'Login',
	Add_New_Article:'Add_New_Article',
	Search_Articles:'Search_Articles',
	Success:'Success',
	ERROR:'ERROR',
	Load_Articles:'Load_Articles'
}
export default Action

export const showAlert=(text)=>{
	return{
		type:Action.INFO,
		message:text
	}
}

export const logOut = ()=>{
	return {
	type: Action.Go_To_Landing
}
}

export const go_To_Main = ()=>{
	return {
	type: Action.Go_To_Main
}
}

export const go_To_Profile = ()=>{
	return {
	type: Action.Go_To_Profile
}
}
export const addUser=(info)=>{
	return{
		type:Action.Add_My_User,
		info
	}
}
export const sucess=()=>{
	return{
		type:Action.Success
	}
}
export const error=()=>{
	return{
		type:Action.ERROR
	}
}

export const url = 'https://webdev-dummy.herokuapp.com'

export const resource = (method, endpoint, payload) => {
  const options =  {
    method,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  if (payload) options.body = JSON.stringify(payload)

  return fetch(`${url}/${endpoint}`, options)
    .then((r) => {
      if (r.status === 200) {
        return (r.headers.get('Content-Type').indexOf('json') > 0) ? r.json() : r.text()
      } else {
        // useful for debugging, but remove in production
        console.error(`${method} ${endpoint} ${r.statusText}`)
        throw new Error(r.statusText)
      }
    })
}





