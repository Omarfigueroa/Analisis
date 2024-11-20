import { ref } from 'vue';
import axios from 'axios';
import { router } from '@inertiajs/vue3';

export function Login() {
    const username = ref('');
    const password = ref('');
    const showPassword = ref(false);
    const errorMessage = ref('');
    const togglePassword = () => {
        showPassword.value = !showPassword.value;
    };
    const Login = () => {
        errorMessage.value = '';

        axios
            .post('login', {
                username: username.value,
                password: password.value,
            })
            .then((response) => {
                console.log(response);
                // router.get('dashboard');
            })
            .catch((err) => {
                console.log(err.status);
                if(err.status === 404){
                    errorMessage.value=err.response.data.message;
                }
                if(err.status === 403){
                    errorMessage.value=err.response.data.message;
                }
                if(err.status === 401){
                    errorMessage.value=err.response.data.message;
                }
            });
    };

    return { username, password, showPassword, togglePassword, Login, errorMessage };
}
export function logout() {
    localStorage.removeItem('auth_token');
    window.location.href = '/logout';
}
