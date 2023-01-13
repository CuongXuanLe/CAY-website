<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Schedule;
// App\Http\Controllers\DateTime()
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

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
        $schedule->title = $request->input('title');
        $schedule->phone = $request->input('phone');
        $schedule->birthday = $request->input('birthday');
        $schedule->email = $request->input('email');
        $schedule->created_at = $request->input('created_at');
        $schedule->note = $request->input('note');
        $schedule->start = $schedule->getFormattedCreatedAtAttribute()." ".$request->input('start');
        $schedule->end = Carbon::createFromFormat('d-m-Y H:i', $schedule->getFormattedCreatedAtAttribute()." ".$request->input('end'));
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
        $schedule = Schedule::find($id);
        $schedule->title = $request->title;
        $schedule->phone = $request->phone;
        $schedule->birthday = $request->birthday;
        $schedule->email = $request->email;
        $schedule->note = $request->note;
        $schedule->start = $request->created_at." ".$request->start;
        $schedule->end = $request->created_at." ".$request->end;
        $schedule->created_at = $request->created_at;
        $schedule->approval = $request->has('approval') ? $request->approval : false;
        $schedule->save();
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
