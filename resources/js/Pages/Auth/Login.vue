<template>
    <div class="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div class="card shadow" style="width: 28rem;">
            <div class="card-body text-center">
                <img src="@/assets/img/xtraentrega.png" alt="XtraEntrega Logo" class="img-center"/>
                <h5 class="text-center" style="font-size: 35px">Expediente Electrónico</h5>
                <h1 class="text-center" style="margin-bottom: 35px">CONTROL Y COMERCIO VALEM SAPI DE CV</h1>
                <div v-if="errorMessage" class="alert alert-danger">
                    {{ errorMessage }}
                </div>

                <form @submit.prevent="Login">
                    <div class="mb-3">
                        <input
                            type="text"
                            class="form-control custom-input "
                            placeholder="Usuario"
                            v-model="username"
                            required
                        />
                    </div>
                    <div class="mb-3">
                        <div class="input-group">
                            <input
                                :type="showPassword ? 'text' : 'password'"
                                class="form-control custom-input "
                                placeholder="Contraseña"
                                v-model="password"
                                required
                            />
                            <button
                                type="button"
                                class="btn button-primary-bg"
                                @click="togglePassword"
                            >
                                <i :class="showPassword ? 'bi bi-eye' : 'bi bi-eye-slash'"></i>
                            </button>
                        </div>
                    </div>
                    <button type="submit" class="btn button-primary-bg w-100 my-4 text-white">
                        Iniciar Sesión
                    </button>
                </form>
                <a href="#" class="small text-muted">¿Olvidó su contraseña?</a>
            </div>

            <div class="card-footer text-center">
                <small class="text-muted">
                    Copyrights All Rights Reserved <br />
                    CONTROL Y COMERCIO VALEM SAPI DE CV © 2024
                </small>
            </div>
        </div>
    </div>
</template>
<script>
import { Login } from '@/Api/Auth/Login.js';
export default {
    setup() {

        return Login();
    },
};
</script>

