function calculateSplits() {
    const totalTime = document.getElementById('totalTime').value;
    const resultsBody = document.getElementById('resultsBody');

    // 既存の結果をクリア
    resultsBody.innerHTML = '';

    if (!totalTime) {
        alert('全体のタイムを入力してください。');
        return;
    }

    // 各区間の開始と終了の距離
    const distanceRanges = [
        '0~15m',
        '15~25m',
        '25~35m',
        '35~45m',
        '45~50m'
    ];

    // 各区間の係数
    const coefficients = [
        5.5/23, // 0~15m
        5/23, // 15~25m
        5/23, // 25~35m
        5/23, // 35~45m
        2.5/23  // 45~50m
    ];

    // 各区間のタイムを計算して表に追加
    coefficients.forEach((coefficient, index) => {
        const timeForSplit = (totalTime * coefficient).toFixed(2);
        const row = resultsBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = distanceRanges[index]; // 距離で表示
        cell2.textContent = `${timeForSplit}`;
    });
}
