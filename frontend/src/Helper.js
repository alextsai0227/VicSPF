export const saveToken = (loginUser) => {
    window.localStorage.setItem('token',loginUser['token'])
};