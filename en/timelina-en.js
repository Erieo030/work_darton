// 先檢查畫面上是不是真的有 .timelineSwiper 這個元素，有才執行裡面的程式
if (document.querySelector('.timelineSwiper')) {

    // 準備數據
    const timelineData = [
        { year: "1983", details: ["Company established."] },
        { year: "1986", details: ["Launch of 1st Gen Silicon Carbide (DC) refractory."] },
        { year: "1989", details: ["Launch of 2nd Gen Silicon Carbide (DSS) refractory."] },
        { year: "1992", details: ["Launch of Cordierite (DR) refractory plate."] },
        { year: "1995", details: ["Launch of 3rd Gen Silicon Carbide (DD) refractory."] },
        {
            year: "1999", details: [
                "ISO 9002 certification achieved.",
                "Launch of Composite (DS) Sandwich Plate."
            ]
        },
        { year: "2002", details: ["Launch of 4th Gen Silicon Carbide (DK) refractory."] },
        { year: "2003", details: ["ISO 9001:2000 certification achieved."] },
        { year: "2004", details: ["Expansion of business scale and capacity."] }
    ];

    // 更新內容的函式
    function updateContent(index) {
        const contentDiv = document.getElementById('timelineContent');
        if (!contentDiv) return; // 如果找不到內容區塊就跳出，避免報錯

        // 取得從 index 開始的連續三筆資料
        const displayItems = [];
        for (let i = 0; i < 3; i++) {
            const dataIndex = (index + i) % timelineData.length;
            displayItems.push(timelineData[dataIndex]);
        }

        const fullHtml = displayItems.map(data => {
            const listHtml = data.details.map(item => `<li>${item}</li>`).join('');
            return `
      <div class="animate-fadeIn border-l-2 border-hota-green/20 pl-6 mb-10 last:mb-0">
        <h3 class="text-2xl font-bold text-hota-green mb-4">${data.year}/</h3>
        <ul class="space-y-4 text-slate-600 list-disc pl-5">
          ${listHtml}
        </ul>
      </div>
      `;
        }).join('');

        contentDiv.innerHTML = fullHtml;
    }

    // 初始化 Swiper
    const timelineSwiper = new Swiper(".timelineSwiper", {
        slidesPerView: 3,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true, // 開啟循環模式
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: { slidesPerView: 5 }
        },
        on: {
            // 初始載入時顯示第一筆
            init: function () {
                updateContent(this.realIndex);
            },
            // 滑動時更新內容
            slideChange: function () {
                updateContent(this.realIndex);
            }
        }
    });

    // 讓點擊年份也能切換 Swiper
    document.querySelectorAll('.timelineSwiper .swiper-slide').forEach((slide) => {
        slide.addEventListener('click', function () {
            const index = parseInt(this.getAttribute('data-swiper-slide-index'));
            // 確保有抓到 index 才進行滑動
            if (!isNaN(index)) {
                timelineSwiper.slideToLoop(index);
            }
        });
    });
}