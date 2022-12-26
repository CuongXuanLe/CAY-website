<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schedule', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('phone');
            $table->date('birthday')->nullable();
            $table->string('email')->nullable();
            $table->longText('note')->nullable();
            $table->time('start');
            $table->time('end');
            $table->date('created_at');
            $table->boolean('approval')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('schedule');
    }
};
