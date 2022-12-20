<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Portfolio;
use App\Models\Image;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class AdminPortfolioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $portfolio = Portfolio::all();
        return response()->json([
            'status' => true,
            'message' => 'Get portfolio',
            'data' => $portfolio,
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

        if ($request->hasFile("thumbnails")) {
            $file = $request->file("thumbnails");
            $imageName = time() . '_' . $file->getClientOriginalName();
            $file->move(\public_path("cover/"), $imageName);

            $portfolio = new Portfolio([
                "name_album" => $request->name_album,
                "category" => $request->category,
                "thumbnails" => $imageName,
            ]);
            $portfolio->save();
        }


        if ($request->hasFile("images")) {
            $files = $request->file("images");
            foreach ($files as $file) {
                $imageName = time() . '_' . $file->getClientOriginalName();
                $request['portfolio_id'] = $portfolio->id;
                $request['list_image'] = $imageName;
                $file->move(\public_path("images/"), $imageName);
                Image::create($request->all());
            }
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
        $portfolios = Portfolio::findOrFail($id);
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
        $portfolio = Portfolio::findOrFail($id);
        if ($request->hasFile("cover")) {
            if (File::exists("cover/" . $portfolio->cover)) {
                File::delete("cover/" . $portfolio->cover);
            }
            $file = $request->file("cover");
            $portfolio->cover = time() . "_" . $file->getClientOriginalName();
            $file->move(\public_path("/cover"), $portfolio->cover);
            $request['cover'] = $portfolio->cover;
        }

        $portfolio->update([
            "name_album" => $request->name_album,
            "category" => $request->category,
            "thumbnails" => $portfolio->thumbnails,
        ]);

        if ($request->hasFile("images")) {
            $files = $request->file("images");
            foreach ($files as $file) {
                $imageName = time() . '_' . $file->getClientOriginalName();
                $request["portfolio_id"] = $id;
                $request["list_image"] = $imageName;
                $file->move(\public_path("images"), $imageName);
                Image::create($request->all());
            }
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
