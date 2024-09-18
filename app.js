// إنشاء الخريطة وتحديد موقع افتراضي (الرياض كمثال)
var map = L.map('map').setView([24.7136, 46.6753], 13); // تمركز الخريطة على الرياض

// إضافة طبقة خريطة من OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// إضافة علامة (مطعم 1) مع نافذة منبثقة
var restaurant1 = L.marker([24.7136, 46.6753]).addTo(map);
restaurant1.bindPopup("<b>مطعم 1</b><br>قائمة المنتجات:<br>برجر: 50 ريال<br>بيتزا: 60 ريال");

// إضافة علامة (مطعم 2) مع نافذة منبثقة
var restaurant2 = L.marker([24.7215, 46.6854]).addTo(map);
restaurant2.bindPopup("<b>مطعم 2</b><br>قائمة المنتجات:<br>سوشي: 100 ريال<br>نودلز: 70 ريال");

// تفعيل البحث
document.getElementById('search-btn').addEventListener('click', function() {
    var query = document.getElementById('search').value.toLowerCase();
    if (query.includes('مطعم 1')) {
        map.setView([24.7136, 46.6753], 15);
        restaurant1.openPopup();
    } else if (query.includes('مطعم 2')) {
        map.setView([24.7215, 46.6854], 15);
        restaurant2.openPopup();
    } else {
        alert('لم يتم العثور على نتائج');
    }
});

// تفعيل أزرار التنقل السفلي
document.getElementById('map-btn').addEventListener('click', function() {
    map.setView([24.7136, 46.6753], 13); // تمركز على الرياض
});

document.getElementById('filter-btn').addEventListener('click', function() {
    alert('عرض التصنيفات: مطاعم، كافيهات');
});
