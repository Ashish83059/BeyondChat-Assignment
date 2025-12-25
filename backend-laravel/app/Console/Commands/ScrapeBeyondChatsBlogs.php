<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use App\Models\Article;

class ScrapeBeyondChatsBlogs extends Command
{
    protected $signature = 'scrape:beyondchats';
    protected $description = 'Scrape latest blogs from BeyondChats';

    public function handle()
    {
        $response = Http::withoutVerifying()
            ->timeout(30)
            ->get('https://beyondchats.com/blogs/');

        preg_match_all('/<h3.*?>(.*?)<\/h3>/s', $response->body(), $matches);

        Article::truncate(); // clear old data

        foreach (array_slice($matches[1], 0, 5) as $title) {
            Article::create([
                'title' => strip_tags($title),
                'content' => 'Scraped from BeyondChats',
                'url' => 'https://beyondchats.com/blogs/'
            ]);
        }

        $this->info('Scraping done');
    }
}
