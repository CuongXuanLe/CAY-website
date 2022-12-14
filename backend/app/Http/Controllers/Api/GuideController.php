<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Guide;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class GuideController extends Controller
{

    public function index(Request $request)
    {
        $guide = Guide::all();
        return response()->json([
            'status' => true,
            'message' => 'Guide retrieved',
            'data' => $guide,
        ]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'rent_cost'=>['string'],
            'deposit_cost'=>['string'],
            'deposit_information'=>['string'],
            'qr_image'=>['string'],
            'link_fb'=>['string'],
            'img_studio'=>['string']
        ]);
        if ($validator->fails()) {
            return response()->json($validator->messages(), 400);
        } else {
            $data = [
                'rent_cost' => $request->rent_cost,
                'deposit_cost' => $request->deposit_cost,
                'deposit_information' => $request->deposit_information,
                'qr_image' => $request->qr_image,
                'link_fb' => $request->link_fb,
                'img_studio' => $request->img_studio
            ];
            DB::beginTransaction();
            try {
                Guide::create($data);
                DB::commit();
            } catch (\Exception $e) {
                DB::rollBack();
                p($e->getMessage());
            }
            return response()->json([
                'status' => true,
                'message' => 'Successed',
                'data' => [
                    'rent_cost' => $request->rent_cost,
                    'deposit_cost' => $request->deposit_cost,
                    'deposit_information' => $request->deposit_information,
                    'qr_image' => $request->qr_image,
                    'link_fb' => $request->link_fb,
                    'img_studio' => $request->img_studio
                ]
            ]);
        }
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request , $id)
    {
        // $guide = Guide::first();
        // $guide->rent_cost = $request['rent_cost'];
        // $guide->deposit_cost = $request['deposit_cost'];
        // $guide->deposit_information = $request['deposit_information'];
        // $guide->qr_image = $request['qr_image'];
        // $guide->link_fb = $request['link_fb'];
        // $guide->img_studio = $request['img_studio'];
        // $guide->save();
        // return redirect()->route('/')->with('alert-success','Success');

        $validator = $request->validate(
            [
                'rent_cost'=>['string'],
                'deposit_cost'=>['string'],
                'deposit_information'=>['string'],
                'qr_image'=>['string'],
                'link_fb'=>['string'],
                'img_studio'=>['string'],
            ]
        );
        $guide = Guide::find($id);

        if ($guide) {
            $guide->update($validator);

            return response()->json([
                'status' => true,
                'message' => 'Guide found.',
                'data' => $guide,
            ]);
        } else {
            return response()->json([
                'status' => true,
                'message' => 'Guide not found.',
                'data' => null,
            ], 404);
        }
    }


    // public function destroy($id)
    // {
    //     $Guide = Guide::findOrFail($id);
    //     $Guide->delete();
    //     return response()->json([
    //         'status' => true,
    //         'message' => 'Deleted',
    //         'data' => [],
    //     ]);
    // }
}
