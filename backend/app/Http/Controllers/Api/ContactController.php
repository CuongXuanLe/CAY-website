<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contact = Contact::all();
        return response()->json([
            'status' => true,
            'message' => 'Get contact duoc roi hehe',
            'data' => $contact,
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
            'phone_number' => ['string'],
            'email' => ['string'],
            'facebook' => ['string'],
            'instagram' => ['string'],
            'address' => ['string'],
        ]);
        if ($validator->fails()) {
            return response()->json($validator->messages(), 400);
        } else {
            $data = [
                'phone_number' => $request->phone_number,  
                'email' => $request->email,  
                'facebook' => $request->facebook,  
                'instagram' => $request->instagram,  
                'address' => $request->address,  
            ];
            DB::beginTransaction(); 
            try {
                Contact::create($data);
                DB::commit();
            } catch (\Exception $e) {
                DB::rollBack();
                p($e->getMessage());
            }
            return response()->json([
                'status' => true,
                'message' => 'Successed',
                'data' => [
                    'phone_number' => $request->phone_number,  
                    'email' => $request->email,  
                    'facebook' => $request->facebook,  
                    'instagram' => $request->instagram,  
                    'address' => $request->address,      
                ]
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
            $contact = Contact::first();
            return response()->json($contact);
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
        $contact = Contact::first();
        $validator = $request->validate(
            [
                'phone_number' => ['string'],
                'email' => ['string'],
                'facebook' => ['string'],
                'instagram' => ['string'],
                'address' => ['string'],
            ]
        );


        if ($contact) {
            $contact->update($validator);
            $contact->save();
            return response()->json([
                'status' => true,
                'message' => 'Contact found.',
                'data' => $contact,
            ]);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Contact not found.',
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
        $contact = Contact::findOrFail($id);
        $contact->delete();
        $arr = [
            'status' => true,
            'message' => 'Deleted',
            'data' => []
        ];
        return response()->json($arr, 200);
    }
}
