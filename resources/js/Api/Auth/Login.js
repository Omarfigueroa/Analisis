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
            .post('/login', {
                username: username.value,
                password: password.value,
            }, {
                headers: {
                    'Accept': 'application/json',
                },
            })
            .then((response) => {
                const token = response.data.token;
                localStorage.setItem('jwt_token', token);
                window.location.href='dashboard'

            })
            .catch((err) => {
                if (err.response) {
                    const status = err.response.status;
                    const message = err.response.data.message;

                    if (status === 404) {
                        errorMessage.value = message;
                    }
                    if (status === 403) {
                        errorMessage.value = message;
                    }
                    if (status === 401) {
                        errorMessage.value = message;
                    }
                } else {
                    errorMessage.value = 'Ocurrió un error inesperado.';
                }
            });
    };

    return { username, password, showPassword, togglePassword, Login, errorMessage };
}
