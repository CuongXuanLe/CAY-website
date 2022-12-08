<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Footer;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class FooterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $footer = Footer::all();
        return response()->json([
            'status' => true,
            'message' => 'Footer retrieved',
            'data' => $footer,
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
            'name' => ['string'],
            'address' => ['string'],
            'phone_number' => ['string'],
            'email' => ['email', 'string']
        ]);
        if ($validator->fails()) {
            return response()->json($validator->messages(), 400);
        } else {
            $data = [
                'name' => $request->name,
                'address' => $request->address,
                'phone_number' => $request->phone_number,
                'email' => $request->email
            ];
            DB::beginTransaction();
            try {
                Footer::create($data);
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
    public function show($id)
    {
        //
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
        // $input = $request->all();
        // $validator = Validator::make($input, [
        //     'name' => ['string'],
        //     'address' => ['string'],
        //     'phone_number' => ['string'],
        //     'email' => ['email', 'string']
        // ]);

        // if ($validator->fails()) {
        //     return response()->json(["message" => $validator->errors()->all()], 400);
        // }

        // $footer = Footer::find($id);
        // $footer->name = $input['name'];
        // $footer->address = $input['address'];
        // $footer->phone_number = $input['phone_number'];
        // $footer->email = $input['email'];
        // $footer->save();

        // return response()->json($footer);

        $validator = $request->validate(
            [
                'name' => ['string'],
                'address' => ['string'],
                'phone_number' => ['string'],
                'email' => ['email', 'string']
            ]
        );

        $footer = Footer::find($id);

        if ($footer) {
            $footer->update($validator);

            return response()->json([
                'status' => true,
                'message' => 'Footer found.',
                'data' => $footer,
            ]);
        } else {
            return response()->json([
                'status' => true,
                'message' => 'Footer not found.',
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
        $footer = Footer::findOrFail($id);
        $footer->delete();
        $arr = [
            'status' => true,
            'message' => 'Deleted',
            'data' => []
        ];
        return response()->json($arr, 200);
    }
}
