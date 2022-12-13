<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Home;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $home = Home::all();
        return response()->json([
            'status' => true,
            'message' => 'Get home duoc roi hehe',
            'data' => $home,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title1' => ['string'],
            'description1' => ['string'],
            'subtitle1' => ['string'],
            'background1' => ['string'],
            'description2' => ['string'],
            'background2' => ['string'],
            'imgAbout' => ['string'],
            'descriptionAbout' => ['string'] 
        ]);
        if ($validator->fails()) {
            return response()->json($validator->messages(), 400);
        } else {
            $data = [
                'title1' => $request->title1,
                'description1' => $request->description1,
                'subtitle1' => $request->subtitle1,
                'background1' => $request->background1,
                'description2' => $request->description2,
                'background2' => $request->background2,
                'imgAbout' => $request->imgAbout,
                'descriptionAbout' => $request->descriptionAbout  
            ];
            DB::beginTransaction(); 
            try {
                Home::create($data);
                DB::commit();
            } catch (\Exception $e) {
                DB::rollBack();
                p($e->getMessage());
            }
            return response()->json([
                'status' => true,
                'message' => 'Successed',
                'data' => [
                    'title1' => $request->title1,
                    'description1' => $request->description1,
                    'subtitle1' => $request->subtitle1,
                    'background1' => $request->background1,
                    'description2' => $request->description2,
                    'background2' => $request->background2,
                    'imgAbout' => $request->imgAbout,
                    'descriptionAbout' => $request->descriptionAbout              ]
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        {
            $home = Home::first();
            return response()->json($home);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $home = Home::first();
        $validator = $request->validate(
            [
                'title1' => ['string'],
                'description1' => ['string'],
                'subtitle1' => ['string'],
                'background1' => ['string'],
                'description2' => ['string'],
                'background2' => ['string'],
                'imgAbout' => ['string'],
                'descriptionAbout' => ['string'] 
            ]
        );


        if ($home) {
            $home->update($validator);
            $home->save();
            return response()->json([
                'status' => true,
                'message' => 'Home found.',
                'data' => $home,
            ]);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Home not found.',
                'data' => null,
            ], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $home = Home::findOrFail($id);
        $home->delete();
        $arr = [
            'status' => true,
            'message' => 'Deleted',
            'data' => []
        ];
        return response()->json($arr, 200);
    }
}
