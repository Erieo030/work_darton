// 先檢查畫面上是不是真的有 .timelineSwiper 這個元素，有才執行裡面的程式
if (document.querySelector('.timelineSwiper')) {

    // 準備數據
    const timelineData = [
        { year: "1983", details: ["公司創立。"] },
        { year: "1986", details: ["第一代碳化矽(DC)耐火材推出。"] },
        { year: "1989", details: ["第二代碳化矽(DSS)耐火材推出。"] },
        { year: "1992", details: ["菫青石(DR)耐火板推出。"] },
        { year: "1995", details: ["第三代碳化矽(DD)耐火材推出。"] },
        {
            year: "1999", details: [
                "ISO 9002 國際品質保證系統認証通過。",
                "第一代複合材料(DS)三明治耐火板推出。"
            ]
        },
        { year: "2002", details: ["第四代碳化矽(DK)耐火材推出。"] },
        { year: "2003", details: ["ISO 9001：2000國際品質保證系統認證通過研發創新，顧客滿意"] },
        { year: "2004", details: ["擴大營業規模及產能。"] }
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