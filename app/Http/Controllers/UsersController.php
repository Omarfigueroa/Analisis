<?php

namespace App\Http\Controllers;

use App\Models\Users;
use App\Http\Requests\StoreUsersRequest;
use App\Http\Requests\UpdateUsersRequest;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UsersController extends Controller
{

    public function index()
    {
        return Inertia::render('Users/user',[
            'user'=> Auth::user()
        ]);
    }

    public function create()
    {
        //
    }


    public function store(StoreUsersRequest $request)
    {
        //
    }


    public function show(Users $users)
    {
        //
    }


    public function edit(Users $users)
    {
        //
    }
    public function update(UpdateUsersRequest $request, Users $users)
    {
        //
    }
    public function destroy(Users $users)
    {
        //
    }
}
