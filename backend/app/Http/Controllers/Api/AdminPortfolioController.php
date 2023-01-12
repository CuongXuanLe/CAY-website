<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Portfolio;
use App\Models\Image;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class AdminPortfolioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $porfolio = Portfolio::all();
        return response()->json([
            'status' => true,
            'message' => 'get',
            'data' => $porfolio,
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
        // $validator = Validator::make($request->all(), [
        //     'name_album' => ['string'],
        //     'category' => ['string'],
        //     'thumbnails' => 'required',
        //     'image' => 'required',
        // ]);
        // if ($validator->fails()) {
        //     return response()->json($validator->messages(), 400);
        // } else {
        //     if ($request->hasFile("thumbnails")) {
        //         $file = $request->file("thumbnails");
        //         $imageName = time() . '.' . $file->getClientOriginalName();
        //         $file->move(\public_path("cover/"), $imageName);

        //         // Create a new Portfolio object and save it to the database
        //         $portfolio = new Portfolio([
        //             "name_album" => $request->name_album,
        //             "category" => $request->category,
        //             "thumbnails" => $request->imageName,
        //         ]);
        //         $portfolio->save();
        //     }

        //     if ($request->hasFile("image")) {
        //         $files = $request->file("image");
        //         $imageNames = [];
        //         foreach ($files as $file) {
        //             $imageName1 = time() . '.' . $file->getClientOriginalExtension();
        //             $request['portfolio_id'] = $portfolio->id;
        //             $file->move(\public_path("/images"), $imageName1);
        //             $imageNames[] = $imageName1;
        //         }
        //     }

        //     DB::beginTransaction();
        //     try {
        //         foreach ($imageNames as $imageName) {
        //             $data1 = [
        //                 "image" => $imageName,
        //                 "portfolio_id" => $portfolio->id,
        //             ];
        //             Image::create($data1);
        //         }
        //         DB::commit();
        //     } catch (\Exception $e) {
        //         DB::rollBack();
        //     }
        //     return response()->json([
        //         'status' => true,
        //         'message' => 'Successed',
        //         'data' => [
        //             "name_album" => $request->name_album,
        //             "category" => $request->category,
        //             "thumbnails" => $request->imageName,
        //             "image" => [$imageNames],
        //         ]
        //     ]);
        // }
        //     $validator = Validator::make($request->all(), [
        //         'name_album' => ['string'],
        //         'category' => ['string'],
        //         'thumbnails' => ['string'],
        //         'image' => ['string'],
        //         'portfolio_id' => 'nullable'
        //     ]);
        //     if ($validator->fails()) {
        //         return response()->json($validator->messages(), 400);
        //     } else {
        //         $data = [
        //             "name_album" => $request->name_album,
        //             "category" => $request->category,
        //             "thumbnails" => $request->thumbnails,
        //         ];
        //         $portfolio = Portfolio::create($data);
        //         $image =  Image::create([
        //             'image' => $request->image,
        //             "portfolio_id" => $portfolio->id,
        //         ]);
        //         DB::beginTransaction();
        //         try {
        //             DB::commit();
        //         } catch (\Exception $e) {
        //             DB::rollBack();
        //         }
        //         return response()->json([
        //             'status' => true,
        //             'message' => 'Successed',
        //             'data' => [
        //                 'name_album' => $request->name_album,
        //                 'category' => $request->category,
        //                 'thumbnails' => $request->thumbnails,
        //                 'image' => $request->image,
        //                 "portfolio_id" => $portfolio->id,
        //             ]
        //         ]);
        //     }
        // }
        $validator = Validator::make($request->all(), [
            'name_album' => ['string'],
            'category' => ['string'],
            'thumbnails' => 'required|max:1024',
            'image' => '',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->messages(), 400);
        } else {
            if ($request->hasFile("thumbnails")) {
                $file = $request->file("thumbnails");
                $imageName = time() . '.' . $file->getClientOriginalName();
                $file->move(\public_path("cover/"), $imageName);

                // Create a new Portfolio object and save it to the database
                $portfolio = new Portfolio([
                    "name_album" => $request->name_album,
                    "category" => $request->category,
                    "thumbnails" => $imageName,
                ]);
                $portfolio->save();
            }
            // $data = [
            //     "name_album" => $request->name_album,
            //     "category" => $request->category,
            //     "thumbnails" => $imageName,
            // ];
            // return response()->json([
            //     'status' => true,
            //     'message' => 'Successed',
            //     'data' => [
            //         "name_album" => $request->name_album,
            //         "category" => $request->category,
            //         // "thumbnails" => $imageName,
            //         // "image" => [$imageNames],
            //     ]
            // ]);

            if ($request->hasFile("image")) {
                $files = $request->file("image");
                $imageNames = [];
                foreach ($files as $file) {
                    $imageName1 = time() . '.' . $file->getClientOriginalExtension();
                    $request['portfolio_id'] = $portfolio->id;
                    $file->move(\public_path("/images"), $imageName1);
                    $imageNames[] = $imageName1;
                }
            }

            DB::beginTransaction();
            try {
                foreach ($imageNames as $imageName) {
                    $data1 = [
                        "image" => $imageName,
                        "portfolio_id" => $portfolio->id,
                    ];
                    Image::create($data1);
                }

                DB::commit();
            } catch (\Exception $e) {
                DB::rollBack();
            }
            // return response()->json([
            //     'status' => true,
            //     'message' => 'Successed',
            //     'data' => [
            //         "name_album" => $request->name_album,
            //         "category" => $request->category,
            //         "thumbnails" => $imageName,
            //         // "image" => $imageNames,
            //     ]
            // ]);
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
        $portfolio = Portfolio::findOrFail($id);
        return response()->json([
            'status' => true,
            'message' => 'get porfolio id',
            'data' => $portfolio,
        ]);
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
        // $portfolio = Portfolio::findOrFail($id);
        // $validator = Validator::make($request->all(), [
        //     'name_album' => ['string'],
        //     'category' => ['string'],
        //     'thumbnails' => 'required',
        //     'image' => 'required',
        // ]);
        // if ($validator->fails()) {
        //     return response()->json($validator->messages(), 400);
        // } else {
        //     if ($request->hasFile("thumbnails")) {
        //         $file = $request->file("thumbnails");
        //         $portfolio->thumbnails = time() . '.' . $file->getClientOriginalName();
        //         $file->move(\public_path("cover/"), $portfolio->thumbnails);
        //         $request['thumbnails'] = $portfolio->thumbnails;
        //     }
        //     $portfolio->update([
        //         'name_album' => $request->name_album,
        //         'category' => $request->category,
        //         'thumbnails' =>  $portfolio->thumbnails,
        //     ]);

        //     if ($request->hasFile("image")) {
        //         $files = $request->file("image");
        //         $imageNames = [];
        //         foreach ($files as $file) {
        //             $imageName1 = time() . '.' . $file->getClientOriginalExtension();
        //             $request['portfolio_id'] = $id;
        //             $file->move(\public_path("/images"), $imageName1);
        //             $imageNames[] = $imageName1;
        //         }
        //     }

        //     DB::beginTransaction();
        //     try {
        //         foreach ($imageNames as $imageName) {
        //             $data1 = [
        //                 "image" => $imageName,
        //                 "portfolio_id" => $portfolio->id,
        //             ];
        //             Image::create($data1);
        //         }
        //         DB::commit();
        //     } catch (\Exception $e) {
        //         DB::rollBack();
        //     }
        //     return response()->json([
        //         'status' => true,
        //         'message' => 'Successed',
        //         'data' => [
        //             "name_album" => $request->name_album,
        //             "category" => $request->category,
        //             "thumnails" => $request->thumbnails,
        //             "image"  => []
        //         ]
        //     ]);
        // }
        $portfolio = Portfolio::findOrFail($id);
        $validator = Validator::make($request->all(), [
            'name_album' => ['string'],
            'category' => ['string'],
            'thumbnails' => ['string'],
            'image' => ['string'],
            'portfolio_id' => 'nullable'
        ]);
        if ($validator->fails()) {
            return response()->json($validator->messages(), 400);
        } else {

            $portfolio->update([
                'name_album' => $request->name_album,
                'category' => $request->category,
                'thumbnails' => $request->thumbnails,
            ]);

            DB::beginTransaction();
            try {
                $data1 = [
                    "image" => $request->image,
                    "portfolio_id" => $portfolio->id,
                ];
                Image::create($data1);
                DB::commit();
            } catch (\Exception $e) {
                DB::rollBack();
            }
            return response()->json([
                'status' => true,
                'message' => 'Successed',
                'data' => [
                    "name_album" => $request->name_album,
                    "category" => $request->category,
                    "thumnails" => $request->thumbnails,
                    "image"  =>  $request->image,
                    "portfolio_id" => $portfolio->id,
                ]
            ]);
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
        $portfolio = Portfolio::findOrFail($id);

        if (File::exists("cover/" . $portfolio->thumbnails)) {
            File::delete("cover/" . $portfolio->thumbnails);
        }
        $images = Image::where("portfolio_id", $portfolio->id)->get();
        Image::whereIn('id', $images->pluck('id'))->delete();
        foreach ($images as $image) {
            if (File::exists("images/" . $image->image)) {
                File::delete("images/" . $image->image);
            }
        }
        $portfolio->delete();


        return response()->json([
            'status' => true,
            'message' => 'Successfully deleted portfolio and related images',
        ]);
    }
}
