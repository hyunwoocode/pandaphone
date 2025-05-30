// 제품 데이터
const productsData = [
    {
        id: 1,
        name: "언더싱크 정수기2",
        manufacturer: "SK 매직",
        category: "정수기",
        model: "WPU-9100CRE",
        image: "https://pandaphone.store/web/product/big/202505/275d2d5b027d8ae3075c11588da546a6.jpg",
        options: [
            {
                period: "3년",
                management: "방문관리",
                visit: "4개월관리",
                price: 18900,
                commission: 95000
            }
        ],
        detail: {
            features: [
                "원터치 간편 설치로 주방 공간 효율성 극대화",
                "4단계 정수 필터링 시스템으로 안전한 물 공급",
                "LED 필터 교체 알림 기능으로 편리한 관리",
                "컴팩트한 언더싱크 디자인으로 주방 인테리어 보존"
            ],
            specifications: {
                "정수방식": "4단계 필터링 (침전+활성탄+중공사막+후활성탄)",
                "정수량": "분당 1.8L",
                "설치방식": "언더싱크형",
                "외형치수": "폭 320 × 깊이 130 × 높이 350 (mm)",
                "무게": "3.5kg",
                "전원": "DC 24V",
                "사용온도": "5℃ ~ 35℃",
                "수압": "1.5 ~ 4.0 kgf/㎠"
            },
            services: [
                "전국 무료설치 서비스",
                "정기 필터 교체 및 점검 서비스",
                "24시간 고객 상담 서비스",
                "A/S 무상 지원 (제품 하자 시)",
                "이사/이전 설치 무료 서비스 (1회)"
            ]
        }
    },
    {
        id: 2,
        name: "에코미니 정수기 그린41",
        manufacturer: "SK 매직",
        category: "정수기",
        model: "WPU-GBC102S",
        image: "https://pandaphone.store/web/product/big/202505/275d2d5b027d8ae3075c11588da546a6.jpg",
        options: [
            {
                period: "3년",
                management: "자가관리",
                visit: "4개월필터발송,12개월방문",
                price: 18900,
                commission: 95000
            },
            {
                period: "5년",
                management: "자가관리",
                visit: "4개월필터발송,12개월방문",
                price: 15900,
                commission: 95000
            },
            {
                period: "6년",
                management: "자가관리",
                visit: "4개월필터발송,12개월방문",
                price: 14900,
                commission: 95000
            }
        ],
        detail: {
            features: [
                "친환경 그린 컬러로 주방 인테리어와 완벽 조화",
                "간편한 자가관리 시스템으로 경제적 사용",
                "미니 사이즈로 공간 활용도 극대화",
                "4개월마다 필터 자동 배송으로 편리한 관리"
            ],
            specifications: {
                "정수방식": "3단계 필터링 (침전+활성탄+중공사막)",
                "정수량": "분당 1.5L",
                "설치방식": "카운터탑형",
                "외형치수": "폭 280 × 깊이 180 × 높이 320 (mm)",
                "무게": "2.8kg",
                "전원": "DC 24V",
                "사용온도": "5℃ ~ 35℃",
                "수압": "1.0 ~ 4.0 kgf/㎠"
            },
            services: [
                "전국 무료설치 서비스",
                "정기 필터 자동 배송 서비스",
                "연 1회 전문기사 방문점검",
                "온라인 A/S 신청 서비스",
                "필터 교체 가이드 동영상 제공"
            ]
        }
    },
    {
        id: 3,
        name: "뉴 미니 정수기",
        manufacturer: "SK 매직",
        category: "정수기",
        model: "WPU-PBC204S",
        image: "https://pandaphone.store/web/product/big/202505/275d2d5b027d8ae3075c11588da546a6.jpg",
        options: [
            {
                period: "3년",
                management: "자가관리",
                visit: "4개월필터발송,12개월방문",
                price: 20900,
                commission: 95000
            },
            {
                period: "5년",
                management: "자가관리",
                visit: "4개월필터발송,12개월방문",
                price: 17900,
                commission: 148700
            },
            {
                period: "6년",
                management: "자가관리",
                visit: "4개월필터발송,12개월방문",
                price: 16900,
                commission: 162601
            },
            {
                period: "3년",
                management: "방문관리",
                visit: "4개월관리",
                price: 23900,
                commission: 95000
            },
            {
                period: "5년",
                management: "방문관리",
                visit: "4개월관리",
                price: 20900,
                commission: 157700
            },
            {
                period: "6년",
                management: "방문관리",
                visit: "4개월관리",
                price: 19900,
                commission: 174600
            }
        ],
        detail: {
            features: [
                "업그레이드된 신모델로 향상된 정수 성능",
                "자가관리와 방문관리 선택 가능한 유연한 관리 시스템",
                "슬림한 미니 디자인으로 어디든 설치 가능",
                "경제적인 다양한 요금제 옵션 제공"
            ],
            specifications: {
                "정수방식": "4단계 필터링 (침전+활성탄+중공사막+후활성탄)",
                "정수량": "분당 2.0L",
                "설치방식": "카운터탑형",
                "외형치수": "폭 300 × 깊이 200 × 높이 350 (mm)",
                "무게": "3.2kg",
                "전원": "DC 24V",
                "사용온도": "5℃ ~ 35℃",
                "수압": "1.5 ~ 4.0 kgf/㎠"
            },
            services: [
                "전국 무료설치 서비스",
                "정기 필터 배송 서비스 (자가관리)",
                "정기 방문관리 서비스 (방문관리)",
                "24시간 고객센터 운영",
                "무료 A/S 서비스",
                "이사 시 무료 재설치 (1회)"
            ]
        }
    },
    {
        id: 4,
        name: "스스로 플러스 직수 정수기",
        manufacturer: "SK 매직",
        category: "정수기",
        model: "WPU-JCC103",
        image: "https://pandaphone.store/web/product/big/202505/275d2d5b027d8ae3075c11588da546a6.jpg",
        options: [
            {
                period: "3년",
                management: "자가관리",
                visit: "4개월필터발송,12개월방문",
                price: 30900,
                commission: 185000
            },
            {
                period: "5년",
                management: "자가관리",
                visit: "4개월필터발송,12개월방문",
                price: 24900,
                commission: 259700
            },
            {
                period: "6년",
                management: "자가관리",
                visit: "4개월필터발송,12개월방문",
                price: 23900,
                commission: 280600
            },
            {
                period: "3년",
                management: "방문관리",
                visit: "4개월관리",
                price: 34900,
                commission: 185000
            },
            {
                period: "5년",
                management: "방문관리",
                visit: "4개월관리",
                price: 28900,
                commission: 271700
            },
            {
                period: "6년",
                management: "방문관리",
                visit: "4개월관리",
                price: 27900,
                commission: 296600
            }
        ],
        detail: {
            features: [
                "직수형 정수 시스템으로 위생적이고 신선한 물 공급",
                "스스로 관리 가능한 사용자 친화적 설계",
                "플러스 기능으로 다양한 편의 기능 제공",
                "고급스러운 디자인으로 주방 품격 향상"
            ],
            specifications: {
                "정수방식": "5단계 직수 필터링",
                "정수량": "분당 2.5L",
                "설치방식": "카운터탑형/언더싱크형 선택",
                "외형치수": "폭 350 × 깊이 220 × 높이 380 (mm)",
                "무게": "4.5kg",
                "전원": "AC 220V",
                "사용온도": "5℃ ~ 35℃",
                "수압": "1.5 ~ 6.0 kgf/㎠"
            },
            services: [
                "전국 무료설치 서비스",
                "정기 필터 자동 배송",
                "스마트 관리 앱 제공",
                "전문기사 정기 점검",
                "무상 A/S 서비스",
                "24시간 원격 모니터링"
            ]
        }
    },
    {
        id: 5,
        name: "초소형 직수 정수기",
        manufacturer: "SK 매직",
        category: "정수기",
        model: "WPU-JCC104SWH",
        image: "https://pandaphone.store/web/product/big/202505/275d2d5b027d8ae3075c11588da546a6.jpg",
        options: [
            {
                period: "3년",
                management: "자가관리",
                visit: "4개월필터발송,12개월방문",
                price: 34900,
                commission: 192999
            },
            {
                period: "5년",
                management: "자가관리",
                visit: "4개월필터발송,12개월방문",
                price: 14450,
                commission: 279699
            },
            {
                period: "6년",
                management: "자가관리",
                visit: "4개월필터발송,12개월방문",
                price: 13950,
                commission: 304600
            },
            {
                period: "7년",
                management: "자가관리",
                visit: "4개월필터발송,12개월방문",
                price: 13450,
                commission: 327499
            },
            {
                period: "3년",
                management: "방문관리",
                visit: "4개월관리",
                price: 38900,
                commission: 192999
            },
            {
                period: "5년",
                management: "방문관리",
                visit: "4개월관리",
                price: 16450,
                commission: 291699
            },
            {
                period: "6년",
                management: "방문관리",
                visit: "4개월관리",
                price: 15950,
                commission: 320599
            },
            {
                period: "7년",
                management: "방문관리",
                visit: "4개월관리",
                price: 15450,
                commission: 347500
            }
        ],
        detail: {
            features: [
                "업계 최소 크기의 초소형 직수 정수기",
                "직수형으로 물 탱크 없어 위생적 사용",
                "7년 장기 렌탈 가능한 경제적 상품",
                "화이트 컬러로 깔끔한 주방 연출"
            ],
            specifications: {
                "정수방식": "4단계 직수 필터링",
                "정수량": "분당 1.8L",
                "설치방식": "카운터탑형",
                "외형치수": "폭 250 × 깊이 150 × 높이 280 (mm)",
                "무게": "2.3kg",
                "전원": "DC 24V",
                "사용온도": "5℃ ~ 35℃",
                "수압": "1.5 ~ 4.0 kgf/㎠"
            },
            services: [
                "전국 무료설치 서비스",
                "정기 필터 배송 서비스",
                "장기 렌탈 할인 혜택",
                "무상 A/S 서비스",
                "이사 시 무료 재설치",
                "고객센터 상담 서비스"
            ]
        }
    },
    {
        id: 6,
        name: "워터룸 고온수 정수기",
        manufacturer: "SK 매직",
        category: "정수기",
        model: "WPU-B400C",
        image: "https://pandaphone.store/web/product/big/202505/275d2d5b027d8ae3075c11588da546a6.jpg",
        options: [
            {
                period: "3년",
                management: "방문관리",
                visit: "4개월관리",
                price: 37900,
                commission: 305000
            },
            {
                period: "5년",
                management: "방문관리",
                visit: "4개월관리",
                price: 33900,
                commission: 305000
            }
        ],
        detail: {
            features: [
                "고온수 기능으로 차, 커피, 라면 조리에 최적",
                "워터룸 기술로 안전하고 위생적인 온수 공급",
                "프리미엄 디자인으로 주방 공간의 품격 향상",
                "정확한 온도 조절로 다양한 용도에 활용"
            ],
            specifications: {
                "정수방식": "5단계 정수 + 온수 시스템",
                "정수량": "분당 2.0L (냉수), 분당 1.5L (온수)",
                "온수온도": "85℃ ~ 95℃",
                "설치방식": "카운터탑형",
                "외형치수": "폭 380 × 깊이 250 × 높이 420 (mm)",
                "무게": "8.5kg",
                "전원": "AC 220V",
                "소비전력": "1200W"
            },
            services: [
                "전국 무료설치 서비스",
                "정기 방문관리 서비스",
                "온수 시스템 전문 점검",
                "안전장치 정기 검사",
                "무상 A/S 서비스",
                "긴급 출동 서비스"
            ]
        }
    },
    {
        id: 7,
        name: "그랜드 정수기 프리스탠딩",
        manufacturer: "SK 매직",
        category: "정수기",
        model: "WPU-B600F",
        image: "https://pandaphone.store/web/product/big/202505/275d2d5b027d8ae3075c11588da546a6.jpg",
        options: [
            {
                period: "3년",
                management: "방문관리",
                visit: "4개월관리",
                price: 32900,
                commission: 215000
            },
            {
                period: "4년",
                management: "방문관리",
                visit: "4개월관리",
                price: 31900,
                commission: 215000
            },
            {
                period: "5년",
                management: "방문관리",
                visit: "4개월관리",
                price: 28900,
                commission: 215000
            }
        ],
        detail: {
            features: [
                "프리스탠딩형으로 어디든 자유로운 설치",
                "그랜드 급 대용량 정수 능력",
                "고급스러운 외관으로 인테리어 포인트",
                "다양한 기간 선택으로 경제적 사용"
            ],
            specifications: {
                "정수방식": "6단계 프리미엄 필터링",
                "정수량": "분당 3.0L",
                "설치방식": "프리스탠딩형",
                "외형치수": "폭 400 × 깊이 300 × 높이 1200 (mm)",
                "무게": "25kg",
                "전원": "AC 220V",
                "사용온도": "5℃ ~ 35℃",
                "수압": "1.5 ~ 6.0 kgf/㎠"
            },
            services: [
                "전국 무료설치 서비스",
                "정기 방문관리 서비스",
                "프리미엄 필터 교체",
                "전문기사 정기 점검",
                "무상 A/S 서비스",
                "VIP 고객 서비스"
            ]
        }
    }
];

// 카드별 할인 정보
const cardDiscounts = {
    "농협": 2000,
    "롯데": 1500,
    "하나": 1800,
    "BC": 1700,
    "국민": 2200,
    "우리": 1600,
    "삼성": 1900
};

// 고유한 제품 목록 생성 (첫 번째 옵션의 가격을 기준으로)
function getUniqueProducts() {
    return productsData.map(product => ({
        id: product.id,
        name: product.name,
        manufacturer: product.manufacturer,
        category: product.category,
        model: product.model,
        image: product.image,
        basePrice: Math.min(...product.options.map(opt => opt.price))
    }));
}

// 특정 제품의 전체 정보 가져오기
function getProductById(id) {
    return productsData.find(product => product.id === parseInt(id));
}

// 특정 조건에 맞는 옵션 찾기
function findOption(productId, period, management, visit) {
    const product = getProductById(productId);
    if (!product) return null;
    
    return product.options.find(option => 
        option.period === period && 
        option.management === management && 
        option.visit === visit
    );
}

// 제품별 사용 가능한 옵션들 가져오기
function getAvailableOptions(productId) {
    const product = getProductById(productId);
    if (!product) return { periods: [], managements: [], visits: [] };
    
    const periods = [...new Set(product.options.map(opt => opt.period))];
    const managements = [...new Set(product.options.map(opt => opt.management))];
    const visits = [...new Set(product.options.map(opt => opt.visit))];
    
    return { periods, managements, visits };
}

// 특정 조건에 맞는 옵션들 필터링
function getFilteredOptions(productId, selectedPeriod = null, selectedManagement = null) {
    const product = getProductById(productId);
    if (!product) return [];
    
    return product.options.filter(option => {
        return (!selectedPeriod || option.period === selectedPeriod) &&
               (!selectedManagement || option.management === selectedManagement);
    });
}

// 카드 할인 계산
function calculateCardDiscount(cardType, price) {
    if (!cardType || !cardDiscounts[cardType]) return 0;
    return cardDiscounts[cardType];
}

// 최종 가격 계산
function calculateFinalPrice(price, cardDiscount) {
    return Math.max(0, price - cardDiscount);
}

// ===== 상세페이지 관리 함수들 =====

// 제품 상세 정보 가져오기
function getProductDetail(productId) {
    const product = getProductById(productId);
    return product ? product.detail : null;
}

// 제품 특징 가져오기
function getProductFeatures(productId) {
    const detail = getProductDetail(productId);
    return detail ? detail.features : [];
}

// 제품 사양 가져오기
function getProductSpecifications(productId) {
    const detail = getProductDetail(productId);
    return detail ? detail.specifications : {};
}

// 서비스 안내 가져오기
function getProductServices(productId) {
    const detail = getProductDetail(productId);
    return detail ? detail.services : [];
}

// 제품 상세 정보 업데이트
function updateProductDetail(productId, detailData) {
    const product = getProductById(productId);
    if (!product) return false;
    
    if (detailData.features) product.detail.features = detailData.features;
    if (detailData.specifications) product.detail.specifications = detailData.specifications;
    if (detailData.services) product.detail.services = detailData.services;
    
    return true;
}

// 제품 특징 추가
function addProductFeature(productId, feature) {
    const product = getProductById(productId);
    if (!product || !product.detail) return false;
    
    product.detail.features.push(feature);
    return true;
}

// 제품 특징 제거
function removeProductFeature(productId, featureIndex) {
    const product = getProductById(productId);
    if (!product || !product.detail || featureIndex < 0 || featureIndex >= product.detail.features.length) {
        return false;
    }
    
    product.detail.features.splice(featureIndex, 1);
    return true;
}

// 제품 사양 추가/수정
function updateProductSpecification(productId, key, value) {
    const product = getProductById(productId);
    if (!product || !product.detail) return false;
    
    product.detail.specifications[key] = value;
    return true;
}

// 제품 사양 제거
function removeProductSpecification(productId, key) {
    const product = getProductById(productId);
    if (!product || !product.detail) return false;
    
    delete product.detail.specifications[key];
    return true;
}

// 서비스 항목 추가
function addProductService(productId, service) {
    const product = getProductById(productId);
    if (!product || !product.detail) return false;
    
    product.detail.services.push(service);
    return true;
}

// 서비스 항목 제거
function removeProductService(productId, serviceIndex) {
    const product = getProductById(productId);
    if (!product || !product.detail || serviceIndex < 0 || serviceIndex >= product.detail.services.length) {
        return false;
    }
    
    product.detail.services.splice(serviceIndex, 1);
    return true;
}

// 상세페이지 HTML 생성 (카페24 스타일)
function generateProductDetailHTML(productId) {
    const product = getProductById(productId);
    if (!product) return '';
    
    const detail = product.detail;
    if (!detail) return '';
    
    let html = `
    <div class="product-detail-tabs">
        <div class="tab-header">
            <button class="tab-btn active" data-tab="features">제품특징</button>
            <button class="tab-btn" data-tab="specifications">제품사양</button>
            <button class="tab-btn" data-tab="services">서비스안내</button>
        </div>
        
        <div class="tab-content">
            <!-- 제품특징 탭 -->
            <div id="features-tab" class="tab-pane active">
                <h3>제품 특징</h3>
                <ul class="feature-list">`;
    
    detail.features.forEach(feature => {
        html += `<li><i class="icon-check"></i> ${feature}</li>`;
    });
    
    html += `
                </ul>
            </div>
            
            <!-- 제품사양 탭 -->
            <div id="specifications-tab" class="tab-pane">
                <h3>제품 사양</h3>
                <table class="spec-table">
                    <tbody>`;
    
    Object.entries(detail.specifications).forEach(([key, value]) => {
        html += `
                        <tr>
                            <th>${key}</th>
                            <td>${value}</td>
                        </tr>`;
    });
    
    html += `
                    </tbody>
                </table>
            </div>
            
            <!-- 서비스안내 탭 -->
            <div id="services-tab" class="tab-pane">
                <h3>서비스 안내</h3>
                <ul class="service-list">`;
    
    detail.services.forEach(service => {
        html += `<li><i class="icon-service"></i> ${service}</li>`;
    });
    
    html += `
                </ul>
            </div>
        </div>
    </div>`;
    
    return html;
}

// 전체 제품의 상세 정보 검색
function searchProductDetails(keyword) {
    const results = [];
    
    productsData.forEach(product => {
        if (!product.detail) return;
        
        let matchFound = false;
        const detail = product.detail;
        
        // 제품특징에서 검색
        detail.features.forEach(feature => {
            if (feature.toLowerCase().includes(keyword.toLowerCase())) {
                matchFound = true;
            }
        });
        
        // 사양에서 검색
        Object.entries(detail.specifications).forEach(([key, value]) => {
            if (key.toLowerCase().includes(keyword.toLowerCase()) || 
                value.toLowerCase().includes(keyword.toLowerCase())) {
                matchFound = true;
            }
        });
        
        // 서비스에서 검색
        detail.services.forEach(service => {
            if (service.toLowerCase().includes(keyword.toLowerCase())) {
                matchFound = true;
            }
        });
        
        if (matchFound) {
            results.push({
                id: product.id,
                name: product.name,
                model: product.model
            });
        }
    });
    
    return results;
} 
