<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gold & Silver Prices Test123</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        table { width: 50%; border-collapse: collapse; margin-top: 20px; }
        th, td { padding: 10px; border: 1px solid #ddd; text-align: left; }
        th { background-color: #f4f4f4; }
    </style>
</head>
<body>
    <h2>Gold & Silver Prices Test</h2>

    @if(isset($error))
        <p style="color: red;">{{ $error }}</p>
    @else
        <p><strong>Date:</strong> {{ $data['date'] ?? 'N/A' }}</p>

        <table>
            <tr>
                <th>Currency</th>
                <th>Gold Price</th>
                <th>Silver Price</th>
                <th>Gold Change</th>
                <th>Silver Change</th>
            </tr>
            <tr>
                <td>{{ $items['curr'] ?? 'N/A' }}</td>
                <td>{{ number_format($items['xauPrice'] ?? 0, 2) }} MYR</td>
                <td>{{ number_format($items['xagPrice'] ?? 0, 2) }} MYR</td>
                <td>{{ number_format($items['chgXau'] ?? 0, 2) }} MYR</td>
                <td>{{ number_format($items['chgXag'] ?? 0, 2) }} MYR</td>
            </tr>
        </table>
    @endif
</body>
</html>
