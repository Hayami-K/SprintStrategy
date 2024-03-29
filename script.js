function calculateSplits() {
    const totalTime = document.getElementById('totalTime').value;
    if (!totalTime) {
        alert('全体のタイムを入力してください。');
        return;
    }

    // 各区間の係数
    const coefficients = [
        5.5/23, // 0~15m
        5/23, // 15~25m
        5/23, // 25~35m
        5/23, // 35~45m
        2.5/23  // 45~50m
    ];

    // 各区間のタイムを計算
    const splitTimes = coefficients.map((coefficient, index) => {
        const timeForSplit = (totalTime * coefficient).toFixed(2);
        return `区間${index + 1}: ${timeForSplit}秒`;
    });

    document.getElementById('results').innerHTML = splitTimes.join('<br>');
}

