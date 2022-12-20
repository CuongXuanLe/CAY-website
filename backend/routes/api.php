<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Spatie\FlareClient\Api;
use App\Http\Controllers\Api\FooterController;
use App\Http\Controllers\Api\HeaderController;
use App\Http\Controllers\Api\AdminController;
use App\Http\Controllers\Api\HomeController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\GuideController;
use App\Http\Controllers\Api\GuideListController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\AdminPortfolioController;
use App\Models\Admin;
use App\Models\Footer;
use App\Models\Home;
use App\Models\Portfolio;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::get('/test', function () {
    p("Working");
});


//------------------------------CRUD Footer-----------------------------------
Route::get('/show-footer', [FooterController::class, 'show']);
Route::post('/post-footer', [FooterController::class, 'store']); // Tạo 1 lần
Route::patch('/patch-footer/{id}', [FooterController::class, 'update']);


//------------------------------CRUD Header-----------------------------------
Route::get('/get-header', [HeaderController::class, 'index']);
Route::post('/post-header', [HeaderController::class, 'store']); // Tạo 1 lần
Route::patch('/edit-header/{id}', [HeaderController::class, 'edit']);
Route::post('/update-header/{id}', [HeaderController::class, 'update']);

//------------------------------CRUD Admin-----------------------------------
Route::get('/get-admin', [AdminController::class, 'index']);
Route::post('/change-password/{id}', [AdminController::class, 'update']);
Route::post('/auth/register', [AuthController::class, 'register']);
Route::post('/auth/login', [AuthController::class, 'login']);

//------------------------------CRUD Home-----------------------------------
Route::get('/get-home', [HomeController::class, 'index']);
Route::post('/post-home', [HomeController::class, 'store']);
Route::delete('/delete-home/{id}', [HomeController::class, 'destroy']);
Route::patch('/patch-home/{id}', [HomeController::class, 'update']);


//------------------------------CRUD Contact-----------------------------------
Route::get('/get-contact', [ContactController::class, 'index']);
Route::post('/post-contact', [ContactController::class, 'store']);
Route::delete('/delete-contact/{id}', [ContactController::class, 'destroy']);
Route::patch('/patch-contact/{id}', [ContactController::class, 'update']);

//-----------------------------Guide page-------------------------------------
Route::get('/get-guide', [GuideController::class, 'index']);
Route::post('/post-guide', [GuideController::class, 'store']);
Route::patch('/patch-guide/{id}', [GuideController::class, 'update']);

//-----------------------------List of guide page------------------------------
Route::get('/get-items', [GuideListController::class, 'index']);
Route::get('/get-items/{id}', [GuideListController::class, 'show']);
Route::post('/post-items', [GuideListController::class, 'store']);
Route::patch('/patch-items/{id}', [GuideListController::class, 'update']);
Route::delete('/delete-items/{id}', [GuideListController::class, 'destroy']);

//-----------------------------Admin Portfolio------------------------------
Route::get('/portfolio', [AdminPortfolioController::class, 'index']);
Route::post('/add-portfolio', [AdminPortfolioController::class, 'store']);
Route::get('/portfolio-images/{id}', [AdminPortfolioController::class, 'images']);
