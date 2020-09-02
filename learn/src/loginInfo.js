export default {
    isLogin: false,
    login () {
        this.isLogin = true
    },
    logOut () {
        this.isLogin = false
    }
}