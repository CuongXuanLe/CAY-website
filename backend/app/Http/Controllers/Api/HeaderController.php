<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Header;
use Illuminate\Support\Facades\File;
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
        return response()->json([
            'status' => true,
            'message' => 'Get footer duoc roi hehe',
            'data' => $header,
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
        $images = new Header();
        $request->validate([
            'logo_img' => 'required|max:1024',
            'logo_name' => 'required'
        ]);

        $filename = "";
        if ($request->hasFile('logo_img')) {
            $filename = $request->file('logo_img')->store('posts', 'public');
        } else {
            $filename = Null;
        }

        $images->logo_img = $filename;
        $images->logo_name = $request->logo_name;
        $result = $images->save();

        if ($result) {
            return response()->json([
                'success' => true
            ]);
        } else {
            return response()->json([
                'success' => false
            ]);
        }

        // $vadidator = Validator::make($request->all(), [
        //     'logo_img' => ['string'],
        // ]);
        // if ($vadidator->fails()) {
        //     return response()->json($vadidator->messages(), 400);
        // } else {
        //     $data = [
        //         'logo_img' => $request->logo_img,
        //     ];
        //     DB::beginTransaction();
        //     try {
        //         Header::create($data);
        //         DB::commit();
        //     } catch (\Exception $e) {
        //         DB::rollBack();
        //         p($e->getMessage());
        //     }
        //     return response()->json([
        //         'status' => true,
        //         'message' => 'Successed',
        //         'data' => []
        //     ]);
        // }
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
        $images = Header::findOrFail($id);
        return response()->json($images);
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
        $images = Header::findOrFail($id);

        $destination = public_path("storage\\" . $images->logo_img);
        $filename = "";
        if ($request->hasFile('new_image')) {
            if (File::exists($destination)) {
                File::delete($destination);
            }

            $filename = $request->file('new_image')->store('posts', 'public');
        } else {
            $filename = $request->logo_img;
        }

        $images->logo_name = $request->logo_name;
        $images->logo_img = $filename;
        $result = $images->save();
        if ($result) {
            return response()->json(['success' => true]);
        } else {
            return response()->json(['success' => false]);
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
