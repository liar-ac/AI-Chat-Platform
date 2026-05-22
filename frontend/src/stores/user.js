    import {defineStore} from "pinia";
    import {ref} from "vue";

    export const useUserStore=defineStore('user',()=>{
        const id=ref()
        const username=ref('')
        const photo=ref('')
        const profile=ref('')
        const accessToken=ref('')
        const hasPulledUserInfo = ref(false)
        function isLogin(){
            return !!accessToken.value     //如果是空   必须要带value!
        }
        function setAccessToken(token){
            accessToken.value=token
        }
        function setUserInfo(data){
            id.value=data.user_id
            username.value=data.username
            photo.value=data.photo
            profile.value=data.profile
            hasPulledUserInfo.value=true
        }
        function logout(){
            id.value=0
            username.value=''
            photo.value=''
            profile.value=''
            accessToken.value=''
            hasPulledUserInfo.value=false
        }
        function setHasPulledUserInfo(newStatus) {
            hasPulledUserInfo.value = newStatus
        }
        return{
            id,
            username,
            photo,
            profile,
            accessToken,
            isLogin,
            setUserInfo,
            setAccessToken,
            logout,
            hasPulledUserInfo,
            setHasPulledUserInfo,
        }
    })
