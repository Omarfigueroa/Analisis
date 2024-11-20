<?php

namespace App\Http\Controllers;
use App\Models\Dashboard;
use App\Http\Requests\StoreDashboardRequest;
use App\Http\Requests\UpdateDashboardRequest;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{

    public function index()
    {
        return Inertia::render('Dashboard/dashboard',[
            'user'=> Auth::user()
        ]);
    }


}
