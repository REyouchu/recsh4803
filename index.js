// 监听窗口大小变化
window.addEventListener('resize', () => {
    // 获取窗口宽度
    const windowWidth = window.innerWidth;

    // 根据窗口宽度调整页面布局
    if (windowWidth < 768) {
        // 手机布局
        adjustForMobile();
    } else if (windowWidth >= 768 && windowWidth < 1024) {
        // 平板布局
        adjustForTablet();
    } else {
        // 桌面布局
        adjustForDesktop();
    }
});

// 根据不同的设备调整页面布局
function adjustForMobile() {
    // 手机布局的调整逻辑
    console.log('Adjusting layout for mobile');
}

function adjustForTablet() {
    // 平板布局的调整逻辑
    console.log('Adjusting layout for tablet');
}

function adjustForDesktop() {
    // 桌面布局的调整逻辑
    console.log('Adjusting layout for desktop');
}

// 页面加载完成时执行一次布局调整
window.addEventListener('load', () => {
    adjustLayout();
});

// 根据窗口宽度进行一次布局调整
function adjustLayout() {
    const windowWidth = window.innerWidth;
    if (windowWidth < 768) {
        adjustForMobile();
    } else if (windowWidth >= 768 && windowWidth < 1024) {
        adjustForTablet();
    } else {
        adjustForDesktop();
    }
}
