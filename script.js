function calculateSplits() {
    const totalTime = document.getElementById('totalTime').value;
    if (!totalTime) {
        alert('全体のタイムを入力してください。');
        return;
    }

    // ここでは、各区間の平均速度が同じと仮定しています。
    const splits = [15, 10, 10, 10, 5]; // 各区間の距離
    const totalDistance = splits.reduce((acc, val) => acc + val, 0);
    const perMeterTime = totalTime / totalDistance; // 1メートルあたりの平均時間

    const results = splits.map((distance, index) => {
        return `区間${index + 1} (${distance}m): ${(perMeterTime * distance).toFixed(2)}秒`;
    });

    document.getElementById('results').innerHTML = results.join('<br>');
}
