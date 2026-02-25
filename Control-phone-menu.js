const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');

function toggleMenu() {
    const isOpen = mobileMenu.classList.contains('translate-x-0');
    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }
}

function openMenu() {
    mobileMenu.classList.remove('translate-x-full');
    mobileMenu.classList.add('translate-x-0');
    menuOverlay.classList.remove('hidden');
    setTimeout(() => menuOverlay.classList.add('opacity-100'), 10);
    document.body.style.overflow = 'hidden'; // 鎖定背景不捲動
}

function closeMenu() {
    mobileMenu.classList.remove('translate-x-0');
    mobileMenu.classList.add('translate-x-full');
    menuOverlay.classList.remove('opacity-100');
    setTimeout(() => {
        menuOverlay.classList.add('hidden');
        document.body.style.overflow = ''; // 恢復捲動
    }, 300);
}

// 監聽漢堡鈕
menuBtn.addEventListener('click', toggleMenu);
// 監聽遮罩 (點擊選單以外區域關閉)
menuOverlay.addEventListener('click', closeMenu);

// 子選單展開功能
function toggleMobileSub(menuId, arrowId) {
    const subMenu = document.getElementById(menuId);
    const arrowIcon = document.getElementById(arrowId);
    if (subMenu) {
        subMenu.classList.toggle('hidden');
        if (arrowIcon) {
            arrowIcon.classList.toggle('rotate-180');
        }
    }
}