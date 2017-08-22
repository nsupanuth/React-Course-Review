
const loginAuthen = (res) => {

    // console.log(res.id)
    // console.log(res.name)    
    
    return {
        type : 'USER_LOGIN',
        payload : {
            facebookID : res.id,
            name : res.name
        }
    }
}

const logoutAuthen = () => {
    return {
        type : 'USER_LOGOUT'
    }
}

export { loginAuthen,logoutAuthen }