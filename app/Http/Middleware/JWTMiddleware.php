<?php

namespace App\Http\Middleware;

use Closure;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;
use Tymon\JWTAuth\Facades\JWTAuth;

class JWTMiddleware
{

    public function handle(Request $request, Closure $next)
    {
        if ($request->expectsJson()) {
            return $next($request);
        }

        return $next($request);
    }
}
