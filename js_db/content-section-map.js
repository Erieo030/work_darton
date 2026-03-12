// <!-- Content Section(生產資訊+"地圖") -> Footer -->
document.addEventListener('DOMContentLoaded', () => {
    const mapImg = document.getElementById('main-map');

    const observerOptions = {
        threshold: 0.2 // 圖片進入 20% 就觸發，讓使用者能看到完整的升起過程
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 觸發動畫：回到原位 (translate-y-0) 並顯示 (opacity-60)
                entry.target.classList.remove('opacity-0', 'translate-y-20');
                entry.target.classList.add('opacity-1', 'translate-y-0');
            } else {
                // 離開視窗重置：回到下方並隱藏，以便下次捲入再次觸發
                entry.target.classList.remove('opacity-1', 'translate-y-0');
                entry.target.classList.add('opacity-0', 'translate-y-20');
            }
        });
    }, observerOptions);

    if (mapImg) {
        observer.observe(mapImg);
    }
});
