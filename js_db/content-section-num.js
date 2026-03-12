// <!-- Content Section("生產資訊"+地圖) -->
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');

    // 定義具備 Ease-out (先快後慢) 效果的跑數函數
    const animateValue = (obj) => {
        const target = +obj.getAttribute('data-target');
        let startTimestamp = null;
        const duration = 2000; // 總動畫時間 (毫秒)

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;

            // 計算進度百分比 (0 到 1)
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            // Ease-out 公式：讓進度在接近 1 的時候變慢
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);

            const currentValue = Math.floor(easeOutProgress * target);

            // 顯示格式化後的數字
            obj.innerText = currentValue.toLocaleString();

            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                // 確保最後精準停在目標值
                obj.innerText = target.toLocaleString();
            }
        };

        window.requestAnimationFrame(step);
    };

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateValue(entry.target);
            } else {
                // 離開視窗時重置，以便下次捲入再次觸發
                entry.target.innerText = "0";
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });
});
