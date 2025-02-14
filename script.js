// new function
function updateClock() {
    const now = new Date(); // الحصول على الوقت الحالي
    const hours = now.getHours().toString().padStart(2, '0'); // الساعات
    const minutes = now.getMinutes().toString().padStart(2, '0'); // الدقائق
    const seconds = now.getSeconds().toString().padStart(2, '0'); // الثواني

    // تحديث العناصر في الـ HTML
    // textContent : تحديث القيمه بالقيمه التي ستصاف بعد =
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// تحديث الساعة كل ثانية
setInterval(updateClock, 1000);

// تشغيل الساعة فور تحميل الصفحة
updateClock();