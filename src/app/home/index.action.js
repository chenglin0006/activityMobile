export let userLogout = () => {
	return {
		type: 'USER_LOGOUT',
		playload: {
			url: '/logout.do',
			type: 'get',
			isAuth: true
		}
	}
}

export let userLogoutStatus = () => {
	return {
		type: 'USER_LOGOUT_STATUS'
	}
}

export let updatePassword = (argus) => {
	return {
		type: 'UPDATE_PASSWORD',
		playload: {
			url: '/user/updatePassword.do',
			type: 'post',
			isAuth: true,
			param: {
				...argus
			}
		}
	}
}

export let updatePasswordStatus = () => {
	return {
		type: 'UPDATE_PASSWORD_STATUS'
	}
}

//获取用户信息
export let getUserInfo = (argus) => {
    return {
        type: 'GET_USER_INFO',
        playload: {
            url: '/user/initAndGet',
            type: 'get',
            param: {
                ...argus
            }
        }
    }
}

export let updateGetUserInfoStatus = () => {
    return {
        type: 'UPDATE_GET_USER_INFO_STATUS'
    }
}

