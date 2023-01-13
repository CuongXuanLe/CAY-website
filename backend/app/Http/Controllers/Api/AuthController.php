<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    public function register(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'name' => 'required|min:2|max:100',
            'password' => 'required|min:6|max:100',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validations fails',
                'errors' => $validator->errors()
            ], 422);
        }

        $admin = Admin::create([
            'name' => $request->name,
            'password' => Hash::make($request->password)
        ]);


        return response()->json([
            'message' => 'Registration successfull',
            'data' => $admin
        ], 200);
    }
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation fails',
                'errors' => $validator->errors()
            ], 422);
        }

        $admin = Admin::where('name', $request->name)->first();

        if ($admin) {

            if (Hash::check($request->password, $admin->password)) {

                $token = $admin->createToken('auth-token')->plainTextToken;

                return response()->json([
                    'message' => 'Login Successfull',
                    'token' => $token,
                    'data' => $admin
                ], 200);
            } else {
                return response()->json([
                    'message' => 'Incorrect credentials',
                ], 400);
            }
        } else {

            return response()->json([
                'message' => 'Incorrect credentials',
            ], 400);
        }
    }
}
