// <!-- 圖片切換 -->
function changeImage(src, element) {
    // 1. 更改主圖路徑
    document.getElementById('mainImage').src = src;

    // 2. 處理縮圖邊框樣式
    // 先移除所有縮圖的橘色邊框，恢復預設
    document.querySelectorAll('.thumb-btn').forEach(btn => {
        btn.classList.remove('border-orange-500', 'border-2');
        btn.classList.add('border-slate-200', 'border');
    });

    // 為當前點擊的縮圖加上橘色邊框
    element.classList.remove('border-slate-200', 'border');
    element.classList.add('border-orange-500', 'border-2');
}
