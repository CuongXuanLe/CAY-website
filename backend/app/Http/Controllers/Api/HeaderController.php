<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Header;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class HeaderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $header = Header::all();
        return response()->json($header);
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
        $vadidator = Validator::make($request->all(), [
            'logo_img' => ['string'],
        ]);
        if ($vadidator->fails()) {
            return response()->json($vadidator->messages(), 400);
        } else {
            $data = [
                'logo_img' => $request->logo_img,
            ];
            DB::beginTransaction();
            try {
                Header::create($data);
                DB::commit();
            } catch (\Exception $e) {
                DB::rollBack();
                p($e->getMessage());
            }
            return response()->json([
                'status' => true,
                'message' => 'Successed',
                'data' => []
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
        $header = Header::all();
        return response()->json($header);
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
    public function update(Request $request)
    {
        $header = Header::first();
        $vadidator = $request->validate(
            [
                'logo_img' => ['string'],
            ]
        );

        if ($header) {
            $header->update($vadidator);

            return response()->json([
                'status' => true,
                'message' => 'Header found.',
                'data' => $header,
            ]);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Header not found.',
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
        //
    }
}
