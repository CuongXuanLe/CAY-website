<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Guide_list;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class GuideListController extends Controller
{

    public function index()
    {
        $guide_list = Guide_list::all();
        return response()->json([
            'status' => true,
            'message' => 'Guide List items retrieved',
            'data' => $guide_list,
        ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'item'=>['string'],
        ]);
        if ($validator->fails()) {
            return response()->json($validator->messages(), 400);
        } else {
            $data = [
                'item' => $request->item,
            ];
            DB::beginTransaction();
            try {
                Guide_list::create($data);
                DB::commit();
            } catch (\Exception $e) {
                DB::rollBack();
                p($e->getMessage());
            }
            return response()->json([
                'status' => true,
                'message' => 'Successed',
                'data' => [
                    'item' => $request->item,
                ]
            ]);
        }
    }

    public function show($id)
    {
        $guide_list = Guide_list::where('id', $id)->first();
        return response()->json($guide_list);
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
                'item'=>['string'],
            ]
        );
        $guide_list = Guide_list::find($id);

        if ($guide_list) {
            $guide_list->update($validator);

            return response()->json([
                'status' => true,
                'message' => 'item found.',
                'data' => $guide_list,
            ]);
        } else {
            return response()->json([
                'status' => true,
                'message' => 'item not found.',
                'data' => null,
            ], 404);
        }
    }


    public function destroy($id)
    {
        $guide_list = Guide_list::findOrFail($id);
        $guide_list->delete();
        return response()->json([
            'status' => true,
            'message' => 'Deleted',
            'data' => [],
        ]);
    }
}
