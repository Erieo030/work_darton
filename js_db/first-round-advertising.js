if (document.querySelector('.mySwiper')) {
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        effect: "fade",        // 淡入淡出切換
        fadeEffect: {
            crossFade: true      // 交叉淡入，效果更滑順
        },
        speed: 1200,           // 切換速度 (毫秒)
        autoplay: {
            delay: 5000,         // 自動播放間隔
            disableOnInteraction: false, // 使用者點擊後依然繼續自動播放
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true, // 動態點點效果
        },
    });
}