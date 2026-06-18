
let currentFontSize = parseInt(localStorage.getItem("fontSize")) || 16;
document.body.style.fontSize = currentFontSize + "px";

const increaseBtn = document.getElementById("increase-font");
const decreaseBtn = document.getElementById("decrease-font");
const contrastBtn = document.getElementById("contrast-btn");

if (increaseBtn) {
    increaseBtn.addEventListener("click", () => {
        if (currentFontSize < 28) {
            currentFontSize += 2;
            document.body.style.fontSize = currentFontSize + "px";
            localStorage.setItem("fontSize", currentFontSize);
        }
    });
}

if (decreaseBtn) {
    decreaseBtn.addEventListener("click", () => {
        if (currentFontSize > 12) {
            currentFontSize -= 2;
            document.body.style.fontSize = currentFontSize + "px";
            localStorage.setItem("fontSize", currentFontSize);
        }
    });
}

if (localStorage.getItem("highContrast") === "true") {
    document.body.classList.add("high-contrast");
}

if (contrastBtn) {
    contrastBtn.addEventListener("click", () => {
        document.body.classList.toggle("high-contrast");
        localStorage.setItem("highContrast", document.body.classList.contains("high-contrast"));
    });
}


const articlesDatabase = {
    'home-1': `
        <span class="badge bg-red">Tiêu điểm</span>
        <h2 class="full-article-title mt-2">Khai mạc tuần lễ văn hóa di sản đặc sắc tại trung tâm thành phố</h2>
        <p class="article-meta text-sm text-gray-600 mb-4">Đăng lúc: 2 giờ trước | Chuyên mục: Văn Hóa</p>
        <div class="full-article-body text-gray-800 leading-9 font-semibold">
            <p class="mb-4">Sáng nay, chuỗi lễ hội văn hóa truyền thống quy mô lớn đã chính thức bắt đầu tại quảng trường trung tâm cố đô. Sự kiện thu hút hàng vạn lượt khách nội địa và quốc tế tới thưởng thức nghệ thuật ẩm thực dân gian, xem trình diễn trang phục truyền thống và trải nghiệm không gian triển lãm nghệ thuật số hóa 3D tái hiện lịch sử hào hùng.</p>
            <p class="mb-4">Ban tổ chức cho biết điểm nhấn của năm nay là việc đưa các ứng dụng công nghệ thực tế ảo vào không gian di sản, giúp người dùng trẻ dễ dàng tiếp cận các giá trị cốt lõi cổ xưa một cách sinh động.</p>
            <p>Dự kiến sự kiện kéo dài liên tục trong vòng 7 ngày với nhiều khung giờ biểu diễn đường phố miễn phí phục vụ cộng đồng.</p>
        </div>
    `,
    'home-2': `
        <span class="badge bg-blue">Tin mới</span>
        <h2 class="full-article-title mt-2">Dự thảo chuyển đổi xanh: Đầu tư đồng bộ hạ tầng xe điện đô thị</h2>
        <p class="article-meta text-sm text-gray-600 mb-4">Đăng lúc: 4 giờ trước | Chuyên mục: Kinh Tế Số</p>
        <div class="full-article-body text-gray-800 leading-9 font-semibold">
            <p class="mb-4">UBND tỉnh vừa phê duyệt đề án thử nghiệm xây dựng 50 trạm sạc điện thông minh ứng dụng công nghệ năng lượng mặt trời thế hệ mới tại các điểm đỗ xe công cộng đô thị, nhằm khuyến khích cộng đồng giảm thiểu khí thải phát thải độc hại.</p>
            <p>Kế hoạch giai đoạn 2 sẽ mở rộng liên kết với các doanh nghiệp vận tải hành khách công cộng để xanh hóa toàn bộ mạng lưới xe buýt đô thị nội đô trước năm 2028.</p>
        </div>
    `,
    'tech-1': `
        <h2 class="full-article-title">Điện thoại gập Samsung dùng được mấy năm trước khi hỏng?</h2>
        <div class="img-container mt-2"><img src="cong-nghe/1x_1_7_.webp" alt="Màn hình điện thoại thông minh gập hiển thị cấu trúc tinh thể sắc nét" class="responsive-img"></div>
        <div class="full-article-body text-gray-800 leading-9 font-semibold mt-4">
            <p class="mb-4">Theo các báo cáo thử nghiệm độ bền phần cứng mới nhất năm 2026, thế hệ màn hình gập mới của Samsung đã nâng cấp vòng đời đóng mở lên đến mức 500.000 lần nhờ cấu trúc bản lề kép hợp kim cải tiến.</p>
            <p>Tuy nhiên, trong môi trường sử dụng thực tế với bụi mịn bám dính hoặc nhiệt độ thay đổi, người dùng phổ thông có thể kỳ vọng thiết bị hoạt động ổn định từ 3 đến 4 năm trước khi lớp phim bảo vệ uốn cong xuất hiện dấu hiệu mòn nếp hoặc bong mép nhẹ.</p>
        </div>
    `,
    'tech-2': `
        <h2 class="full-article-title">Ứng dụng trí tuệ nhân tạo (AI) tối ưu hóa mạng lưới điện thông minh</h2>
        <div class="full-article-body text-gray-800 leading-9 font-semibold mt-4">
            <p class="mb-4">Các tập đoàn viễn thông lớn vừa thử nghiệm thành công mô hình thuật toán trí tuệ nhân tạo điều phối năng lượng tự động. Thuật toán có khả năng tự động phân tích hành vi phụ tải tiêu thụ, dự báo lưu lượng giờ cao điểm chính xác 98% giúp ngăn chặn tình trạng quá tải lưới điện cục bộ diện rộng.</p>
        </div>
    `,
    'sports-1': `
        <h2 class="full-article-title">Giải chạy Marathon quốc tế Huế 2026 phá kỷ lục vận động viên đăng ký</h2>
        <div class="full-article-body text-gray-800 leading-9 font-semibold mt-4">
            <p class="mb-4">Ban tổ chức sự kiện chạy điền kinh quy mô lớn chính thức công bố số lượng hồ sơ đạt cột mốc lịch sử mới với hơn 15.000 vận động viên chuyên nghiệp lẫn phong trào đăng ký tham gia.</p>
            <p>Cung đường chạy thiết kế xuyên qua hệ thống lăng tẩm cung điện rợp bóng cây cổ thụ giúp nâng cao vị thế quảng bá du lịch thể thao di sản bền vững.</p>
        </div>
    `,
    'ent-1': `
        <h2 class="full-article-title">Sân khấu trình diễn nghệ thuật thực cảnh huyền ảo lung linh trên Sông Hương</h2>
        <div class="full-article-body text-gray-800 leading-9 font-semibold mt-4">
            <p class="mb-4">Đêm diễn mở màn nghệ thuật âm nhạc thực cảnh kết hợp công nghệ trình chiếu ánh sáng đồ họa 3D Mapping lên mặt nước sông Hương huyền thoại đã mang tới cho hàng vạn khán giả trải nghiệm nghe nhìn vô cùng choáng ngợp.</p>
        </div>
    `,
    'edu-1': `
        <h2 class="full-article-title">Đại học Huế đẩy mạnh quy trình số hóa thủ tục đăng ký nguyện vọng xét tuyển</h2>
        <div class="full-article-body text-gray-800 leading-9 font-semibold mt-4">
            <p class="mb-4">Nhằm hỗ trợ tối đa cho thí sinh trong mùa tuyển sinh năm nay, Đại học Huế chính thức đưa vào vận hành hệ thống phần mềm sinh trắc học thông minh tích hợp dữ liệu quốc gia. Quy trình mới giúp học sinh rút ngắn thời gian làm hồ sơ xét tuyển chỉ còn 3 phút và loại bỏ hoàn toàn các lỗi sai sót.</p>
        </div>
    `,
    'biz-1': `
        <h2 class="full-article-title">Kinh tế tuần hoàn: Doanh nghiệp dệt may đón đầu xu hướng năng lượng xanh</h2>
        <div class="full-article-body text-gray-800 leading-9 font-semibold mt-4">
            <p class="mb-4">Để đáp ứng nghiêm ngặt các rào cản tiêu chuẩn phát triển bền vững ESG từ thị trường châu Âu khó tính, hàng loạt nhà máy đã tiến hành lắp đặt hệ thống năng lượng mặt trời áp mái tự sản tự tiêu.</p>
        </div>
    `
};

let lastFocusedElement = null; // Lưu lại nút vừa bấm để trả tiêu điểm về chính xác khi thoát bài viết

// Hàm hiển thị bài viết chi tiết đầy đủ
function openFullArticle(articleKey) {
    const articleHtml = articlesDatabase[articleKey];
    if (!articleHtml) return;

    // Lưu lại vị trí nút bấm hiện tại để phục vụ điều hướng phím Tab lùi về sau này
    lastFocusedElement = document.activeElement;

    document.getElementById('tabs-container').classList.add('hidden'); // Ẩn danh sách tin tổng hợp
    const fullArticleView = document.getElementById('full-article-view');
    document.getElementById('full-article-content').innerHTML = articleHtml; // Đổ nội dung chi tiết 
    fullArticleView.classList.remove('hidden'); // Hiện khối đọc bài chi tiết

    // Chuyển tiêu điểm phím vào nút "Quay lại" 
    const backBtn = document.getElementById('back-to-list-btn');
    if (backBtn) {
        backBtn.focus();
    }
}

// Hàm đóng bài viết chi tiết quay lại danh mục
function closeFullArticle() {
    document.getElementById('full-article-view').classList.add('hidden'); // Ẩn vùng đọc chi tiết
    document.getElementById('tabs-container').classList.remove('hidden'); // Hiện lại danh sách tin cũ

    // Trả tiêu điểm bàn phím về chính xác nút bấm cũ
    if (lastFocusedElement) {
        lastFocusedElement.focus();
    }
}

document.getElementById('back-to-list-btn').addEventListener('click', closeFullArticle);



const tabs = document.querySelectorAll('.tab-link');
const panels = document.querySelectorAll('.tab-panel');

function switchTab(tabId, shouldScroll = false) {
    const targetTab = document.getElementById(tabId);
    if (!targetTab) return;

    // Tự động đóng vùng xem bài viết đầy đủ nếu người dùng đổi hẳn tab chuyên mục khác 
    document.getElementById('full-article-view').classList.add('hidden');
    document.getElementById('tabs-container').classList.remove('hidden');

    tabs.forEach(tab => {
        if (tab === targetTab) {
            tab.setAttribute('aria-selected', 'true');
            tab.removeAttribute('tabindex');
            tab.classList.add('active-tab');
        } else {
            tab.setAttribute('aria-selected', 'false');
            tab.setAttribute('tabindex', '-1');
            tab.classList.remove('active-tab');
        }
    });

    const targetPanelId = targetTab.getAttribute('aria-controls');
    panels.forEach(panel => {
        if (panel.id === targetPanelId) {
            panel.classList.remove('hidden');
            panel.setAttribute('aria-hidden', 'false');
        } else {
            panel.classList.add('hidden');
            panel.setAttribute('aria-hidden', 'true');
        }
    });

    if (shouldScroll) {
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.focus();
            mainContent.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        switchTab(e.currentTarget.id, true);
    });
});

// Điều hướng bàn phím tĩnh lặng hoàn toàn cho các phím mũi tên
const tabList = document.querySelector('[role="tablist"]');
if (tabList) {
    tabList.addEventListener('keydown', (e) => {
        const activeTab = document.activeElement;
        if (!activeTab || !activeTab.classList.contains('tab-link')) return;

        let index = Array.from(tabs).indexOf(activeTab);

        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault(); // Chặn màn hình kéo xuống
            index = (index + 1) % tabs.length;
            tabs[index].focus();
            switchTab(tabs[index].id, false); // Tham số false: Thay đổi nội dung tĩnh lặng
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            index = (index - 1 + tabs.length) % tabs.length;
            tabs[index].focus();
            switchTab(tabs[index].id, false);
        }
    });
}