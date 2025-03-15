<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/metrics', function () {
    $dummyMetrics = <<<EOT
# HELP http_requests_total The total number of HTTP requests.
# TYPE http_requests_total counter
http_requests_total{method="GET",endpoint="/api/test"} 100
http_requests_total{method="POST",endpoint="/api/test"} 50

# HELP http_request_duration_seconds Duration of HTTP requests in seconds.
# TYPE http_request_duration_seconds histogram
http_request_duration_seconds_bucket{le="0.1"} 5
http_request_duration_seconds_bucket{le="0.5"} 20
http_request_duration_seconds_bucket{le="1"} 35
http_request_duration_seconds_bucket{le="+Inf"} 50
http_request_duration_seconds_sum 5.5
http_request_duration_seconds_count 50
EOT;

    return response($dummyMetrics, 200, [
        'Content-Type' => 'text/plain; version=0.0.4',
    ]);
});
