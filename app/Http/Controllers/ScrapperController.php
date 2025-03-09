<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Goutte\Client;
use Illuminate\Support\Facades\Http;
class ScrapperController extends Controller
{
    private $result = [];

    public function indexz()
    {
        $client = new Client();
        $url = 'https://goldprice.org/buy-gold.html';

        $crawler = $client->request('GET', $url);

        $crawler->filter('#priceofgold')->each(function ($node) {
            $this->result[] = $node->text();
        });
        return $this->result;
        return view('scrapper', ['result' => $this->result]);
    }
    public function index()
    {
        try {
            $apiUrl = "https://data-asg.goldprice.org/dbXRates/MYR";
    
            // Fetch data from the external API
            $response = Http::withHeaders([
                'User-Agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
            ])->get($apiUrl);
    
            // Convert response to JSON array
            $data = $response->json();
    
            // Extract required values
            $items = $data['items'][0] ?? [];
    
            return view('scrapper', compact('data', 'items'));
    
        } catch (\Exception $e) {
            return view('scrapper')->with('error', 'Failed to fetch data: ' . $e->getMessage());
        }
    }
    
    
}