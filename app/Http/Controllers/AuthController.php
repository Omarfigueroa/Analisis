<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{

    public function index()
    {
        if (Auth::check()) {
            return redirect()->route('dashboard');
        }
        return Inertia::render('Auth/Login');
    }

    public function login(Request $request)
    {
        $validated = $request->validate([
            'username' => 'required',
            'password' => 'required|string',
        ]);

        $user = User::where('username', $validated['username'])->first();
        $credentials = $request->only('username', 'password');

        if (!$user) {
            return response()->json(['message' => 'Usuario no encontrado'], 404);
        }

        if ($user->status == 0) {
            return response()->json(['message' => 'El usuario está inactivo'], 403);
        }

        if (!$token = JWTAuth::attempt($credentials)) {
            return response()->json(['message' => 'Credenciales inválidas'], 401);
        }

        return response()->json([
            'token' => $token,
        ]);
    }
    public function logout(Request $request){
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return Redirect::route('login');
    }
}
