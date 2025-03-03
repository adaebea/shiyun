document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const uploadArea = document.getElementById('uploadArea');
    const uploadButton = document.getElementById('uploadButton');
    const imageInput = document.getElementById('imageInput');
    const previewImage = document.getElementById('previewImage');
    const resultSection = document.getElementById('resultSection');
    const poemList = document.getElementById('poemList');
    const poemDetail = document.getElementById('poemDetail');
    const closeDetail = document.getElementById('closeDetail');
    const poemTitle = document.getElementById('poemTitle');
    const poemAuthor = document.getElementById('poemAuthor');
    const poemContent = document.getElementById('poemContent');
    
    // 添加初始动画
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 300);
    
    // 动态背景效果 - 光晕跟随鼠标移动
    const glowOrbs = document.querySelectorAll('.glow-orb');
    const container = document.querySelector('.container');
    
    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        // 第一个光晕跟随鼠标，但有延迟和阻尼效果
        setTimeout(() => {
            glowOrbs[0].style.transform = `translate(${(mouseX - window.innerWidth / 2) / 20}px, ${(mouseY - window.innerHeight / 2) / 20}px)`;
        }, 100);
        
        // 第二个光晕反向跟随鼠标
        setTimeout(() => {
            glowOrbs[1].style.transform = `translate(${-(mouseX - window.innerWidth / 2) / 30}px, ${-(mouseY - window.innerHeight / 2) / 30}px)`;
        }, 150);
        
        // 容器的微妙视差效果
        container.style.transform = `translate(${(mouseX - window.innerWidth / 2) / 100}px, ${(mouseY - window.innerHeight / 2) / 100}px)`;
    });
    
    // 点击上传区域触发文件选择
    uploadArea.addEventListener('click', function() {
        imageInput.click();
        
        // 添加点击动画
        uploadArea.classList.add('clicked');
        setTimeout(() => {
            uploadArea.classList.remove('clicked');
        }, 300);
    });
    
    // 点击上传按钮触发文件选择
    uploadButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 添加涟漪效果
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);
        
        const x = e.clientX - e.target.getBoundingClientRect().left;
        const y = e.clientY - e.target.getBoundingClientRect().top;
        
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
        
        imageInput.click();
    });
    
    // 拖拽文件上传
    uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });
    
    uploadArea.addEventListener('dragleave', function() {
        uploadArea.classList.remove('dragover');
    });
    
    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        
        if (e.dataTransfer.files.length) {
            imageInput.files = e.dataTransfer.files;
            handleImageUpload(e.dataTransfer.files[0]);
        }
    });
    
    // 监听文件选择变化
    imageInput.addEventListener('change', function() {
        if (imageInput.files.length) {
            handleImageUpload(imageInput.files[0]);
        }
    });
    
    // 处理图片上传
    function handleImageUpload(file) {
        // 检查文件类型
        if (!file.type.match('image/jpeg') && !file.type.match('image/png')) {
            showNotification('请上传JPG或PNG格式的图片', 'error');
            return;
        }
        
        // 显示加载动画
        showLoading();
        
        // 创建文件读取器
        const reader = new FileReader();
        
        reader.onload = function(e) {
            // 显示预览图
            previewImage.src = e.target.result;
            
            // 模拟图像分析（实际项目中这里会调用AI图像分析API）
            setTimeout(() => {
                // 隐藏加载动画
                hideLoading();
                
                // 显示结果区域
                resultSection.style.display = 'block';
                
                // 添加动画类
                setTimeout(() => {
                    resultSection.classList.add('show');
                    
                    // 添加动态背景效果 - 根据图片颜色调整光晕颜色
                    getImageColors(e.target.result, function(colors) {
                        if (colors && colors.length >= 2) {
                            // 更新光晕颜色
                            glowOrbs[0].style.background = `radial-gradient(circle, ${colors[0]}66 0%, ${colors[0]}00 70%)`;
                            glowOrbs[1].style.background = `radial-gradient(circle, ${colors[1]}66 0%, ${colors[1]}00 70%)`;
                            
                            // 不再修改按钮渐变变量
                            // document.documentElement.style.setProperty('--button-gradient', `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 100%)`);
                        }
                    });
                    
                }, 100);
                
                analyzeImage(file);
                
                // 滚动到结果区域
                resultSection.scrollIntoView({ behavior: 'smooth' });
            }, 1500); // 模拟分析延迟
        };
        
        reader.readAsDataURL(file);
    }
    
    // 从图片中提取主要颜色
    function getImageColors(imageUrl, callback) {
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.src = imageUrl;
        
        img.onload = function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            
            ctx.drawImage(img, 0, 0, img.width, img.height);
            
            // 采样点
            const samplePoints = [
                { x: Math.floor(img.width * 0.25), y: Math.floor(img.height * 0.25) },
                { x: Math.floor(img.width * 0.75), y: Math.floor(img.height * 0.75) }
            ];
            
            const colors = [];
            
            for (const point of samplePoints) {
                const pixelData = ctx.getImageData(point.x, point.y, 1, 1).data;
                const color = `rgba(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]}, 0.4)`;
                colors.push(color);
            }
            
            callback(colors);
        };
        
        img.onerror = function() {
            callback(null);
        };
    }
    
    // 模拟图像分析
    function analyzeImage(file) {
        // 在实际项目中，这里会调用AI图像分析API
        // 这里我们模拟一个分析过程，随机选择几个标签
        
        // 所有可能的标签
        const possibleTags = ['mountain', 'water', 'cloud', 'sunset', 'forest', 'snow', 'flower'];
        
        // 随机选择2-3个标签
        const numTags = Math.floor(Math.random() * 2) + 2; // 2或3个标签
        const selectedTags = [];
        
        while (selectedTags.length < numTags) {
            const randomIndex = Math.floor(Math.random() * possibleTags.length);
            const tag = possibleTags[randomIndex];
            
            if (!selectedTags.includes(tag)) {
                selectedTags.push(tag);
            }
        }
        
        // 根据标签获取诗句
        const poems = getPoemsByTags(selectedTags);
        
        // 显示诗句
        displayPoems(poems);
        
        // 显示分析结果通知
        showNotification(`已识别图片内容: ${selectedTags.join(', ')}`, 'success');
    }
    
    // 显示诗句
    function displayPoems(poems) {
        // 清空诗句列表
        poemList.innerHTML = '';
        
        // 添加新的诗句，带有延迟动画
        poems.forEach((poem, index) => {
            const poemItem = document.createElement('div');
            poemItem.className = 'poem-item';
            poemItem.style.opacity = '0';
            poemItem.style.transform = 'translateY(20px)';
            
            const poemText = document.createElement('p');
            poemText.className = 'poem-text';
            poemText.textContent = poem.text;
            
            poemItem.appendChild(poemText);
            poemList.appendChild(poemItem);
            
            // 延迟显示动画
            setTimeout(() => {
                poemItem.style.opacity = '1';
                poemItem.style.transform = 'translateY(0)';
                poemItem.style.transition = 'all 0.5s ease';
            }, 300 * (index + 1));
            
            // 点击诗句显示详情
            poemItem.addEventListener('click', function() {
                showPoemDetail(poem);
            });
        });
    }
    
    // 显示诗句详情
    function showPoemDetail(poem) {
        poemTitle.textContent = poem.title;
        poemAuthor.textContent = `${poem.dynasty}·${poem.author}`;
        poemContent.textContent = poem.content;
        
        // 显示详情弹窗
        poemDetail.style.display = 'flex';
        
        // 添加动画效果
        setTimeout(() => {
            poemDetail.classList.add('active');
        }, 10);
    }
    
    // 关闭诗句详情
    closeDetail.addEventListener('click', function() {
        poemDetail.classList.remove('active');
        
        setTimeout(() => {
            poemDetail.style.display = 'none';
        }, 300);
    });
    
    // 点击弹窗外部关闭
    poemDetail.addEventListener('click', function(e) {
        if (e.target === poemDetail) {
            poemDetail.classList.remove('active');
            
            setTimeout(() => {
                poemDetail.style.display = 'none';
            }, 300);
        }
    });
    
    // 显示通知
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // 显示通知
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // 自动关闭通知
        setTimeout(() => {
            notification.classList.remove('show');
            
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
    
    // 显示加载动画
    function showLoading() {
        // 创建加载动画元素
        const loadingEl = document.createElement('div');
        loadingEl.className = 'loading-overlay';
        loadingEl.innerHTML = `
            <div class="loading-spinner">
                <svg viewBox="0 0 50 50">
                    <circle cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
                </svg>
                <p>分析图片中...</p>
            </div>
        `;
        
        document.body.appendChild(loadingEl);
        
        // 显示加载动画
        setTimeout(() => {
            loadingEl.classList.add('show');
        }, 10);
    }
    
    // 隐藏加载动画
    function hideLoading() {
        const loadingEl = document.querySelector('.loading-overlay');
        if (loadingEl) {
            loadingEl.classList.remove('show');
            
            setTimeout(() => {
                loadingEl.remove();
            }, 300);
        }
    }
    
    // 添加CSS样式
    const style = document.createElement('style');
    style.textContent = `
        body {
            transition: opacity 0.5s ease;
            opacity: 0;
        }
        
        body.loaded {
            opacity: 1;
        }
        
        .upload-area.clicked {
            transform: scale(0.98);
        }
        
        .result-section {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.5s ease;
        }
        
        .result-section.show {
            opacity: 1;
            transform: translateY(0);
        }
        
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 25px;
            background-color: rgba(30, 30, 30, 0.9);
            color: white;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            z-index: 1000;
            transform: translateX(120%);
            transition: transform 0.3s ease;
            backdrop-filter: blur(10px);
            border-left: 4px solid #ff3e5f;
        }
        
        .notification.show {
            transform: translateX(0);
        }
        
        .notification.success {
            border-left-color: #4CAF50;
        }
        
        .notification.error {
            border-left-color: #f44336;
        }
        
        .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2000;
            opacity: 0;
            transition: opacity 0.3s ease;
            backdrop-filter: blur(5px);
        }
        
        .loading-overlay.show {
            opacity: 1;
        }
        
        .loading-spinner {
            text-align: center;
        }
        
        .loading-spinner svg {
            width: 50px;
            height: 50px;
            animation: rotate 2s linear infinite;
        }
        
        .loading-spinner circle {
            stroke: #ff3e5f;
            stroke-linecap: round;
            animation: dash 1.5s ease-in-out infinite;
        }
        
        .loading-spinner p {
            margin-top: 15px;
            color: white;
            font-size: 16px;
        }
        
        @keyframes rotate {
            100% {
                transform: rotate(360deg);
            }
        }
        
        @keyframes dash {
            0% {
                stroke-dasharray: 1, 150;
                stroke-dashoffset: 0;
            }
            50% {
                stroke-dasharray: 90, 150;
                stroke-dashoffset: -35;
            }
            100% {
                stroke-dasharray: 90, 150;
                stroke-dashoffset: -124;
            }
        }
        
        .btn .ripple {
            position: absolute;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.4);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    
    document.head.appendChild(style);
}); 