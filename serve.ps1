<#
  Rahul Dhamecha - Local Development Server
  Pure PowerShell / .NET - No Node.js required!
  Serves your static React portfolio on http://localhost:3000
#>

param(
    [int]$Port = 3000
)

$url = "http://localhost:$Port/"
$folder = $PSScriptRoot

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($url)

try {
    $listener.Start()
} catch {
    $Port = 8080
    $url = "http://localhost:$Port/"
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add($url)
    $listener.Start()
}

Write-Host "==========================================================" -ForegroundColor Green
Write-Host "  Rahul Dhamecha - React Portfolio Local Server           " -ForegroundColor Cyan
Write-Host "  URL: $url" -ForegroundColor Yellow
Write-Host "  Serving from: $folder" -ForegroundColor Gray
Write-Host "  Press Ctrl+C in this terminal to stop the server.       " -ForegroundColor Gray
Write-Host "==========================================================" -ForegroundColor Green

# Open browser
Start-Process $url

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $relPath = [System.Uri]::UnescapeDataString($request.Url.LocalPath.TrimStart('/'))
        if ([string]::IsNullOrWhiteSpace($relPath)) {
            $relPath = "index.html"
        }

        $localFilePath = Join-Path $folder $relPath

        if (Test-Path $localFilePath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($localFilePath)
            $ext = [System.IO.Path]::GetExtension($localFilePath).ToLower()

            $contentType = switch ($ext) {
                ".html" { "text/html; charset=utf-8" }
                ".css"  { "text/css; charset=utf-8" }
                ".js"   { "application/javascript; charset=utf-8" }
                ".ts"   { "application/typescript; charset=utf-8" }
                ".tsx"  { "text/plain; charset=utf-8" }
                ".svg"  { "image/svg+xml" }
                ".png"  { "image/png" }
                ".jpg"  { "image/jpeg" }
                ".jpeg" { "image/jpeg" }
                ".pdf"  { "application/pdf" }
                ".json" { "application/json; charset=utf-8" }
                Default { "application/octet-stream" }
            }

            # Enable CORS headers for local testing
            $response.AddHeader("Access-Control-Allow-Origin", "*")
            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.OutputStream.Write($msg, 0, $msg.Length)
        }
        $response.Close()
    } catch {
        # Catch client disconnects or aborts
    }
}

