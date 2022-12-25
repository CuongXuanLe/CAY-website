<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Schedule;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class ScheduleController extends Controller
{

    public function index()
    {
        $schedule = Schedule::all();
        return response()->json([
            'status' => true,
            'message' => 'Guide List items retrieved',
            'data' => $schedule,
        ]);
    }

    public function store(Request $request)
    {
        $schedule = new Schedule();
        $schedule->name = $request->input('name');
        $schedule->phone = $request->input('phone');
        $schedule->birthday = $request->input('birthday');
        $schedule->email = $request->input('email');
        $schedule->note = $request->input('note');
        $schedule->start = $request->input('start');
        $schedule->end = $request->input('end');
        $schedule->created_at = $request->input('created_at');
        $schedule->approval = $request->has('approval') ? $request->input('approval') : false;
        $schedule->save();
    }

    public function show($id)
    {
        $schedule = Schedule::where('id', $id)->first();
        return response()->json($schedule);
    }

    public function update(Request $request , $id)
    {
        // $validator = $request->validate(
        //     [
        //         'item'=>['string'],
        //     ]
        // );
        $schedule = Schedule::find($id);
        $schedule->name = $request->name;
        $schedule->phone = $request->phone;
        $schedule->birthday = $request->birthday;
        $schedule->email = $request->email;
        $schedule->note = $request->note;
        $schedule->start = $request->start;
        $schedule->end = $request->end;
        $schedule->created_at = $request->created_at;
        $schedule->approval = $request->has('approval') ? $request->approval : false;
        $schedule->save();

        // if ($schedule) {
        //     $schedule->update($validator);

        //     return response()->json([
        //         'status' => true,
        //         'message' => 'item found.',
        //         'data' => $schedule,
        //     ]);
        // } else {
        //     return response()->json([
        //         'status' => true,
        //         'message' => 'item not found.',
        //         'data' => null,
        //     ], 404);
        // }
    }


    public function destroy($id)
    {
        $schedule = Schedule::findOrFail($id);
        $schedule->delete();
        return response()->json([
            'status' => true,
            'message' => 'Deleted',
            'data' => [],
        ]);
    }
}
