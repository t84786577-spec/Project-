document.addEventListener('DOMContentLoaded', function() {
    // 1. تفعيل القائمة المرنة للشاشات الصغيرة (الهواتف)
    const menuBtn = document.getElementById('menuBtn');
    const navMenu = document.querySelector('nav');

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            // تغيير نص الزر حسب حالة القائمة
            if (navMenu.classList.contains('active')) {
                menuBtn.textContent = 'إغلاق القائمة';
            } else {
                menuBtn.textContent = 'القائمة';
            }
        });
    }

    // 2. تفعيل زر تبديل الوضع الداكن (Dark Mode Toggle)
    const colorBtn = document.getElementById('colorBtn');
    if (colorBtn) {
        colorBtn.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            
            // تغيير نص الزر ليتناسب مع الوضع الحالي
            if (document.body.classList.contains('dark-theme')) {
                colorBtn.textContent = 'تفعيل الوضع الفاتح';
                colorBtn.style.backgroundColor = '#e9c46a';
                colorBtn.style.color = '#1a1a2e';
            } else {
                colorBtn.textContent = 'تغيير مظهر الموقع';
                colorBtn.style.backgroundColor = '#2a9d8f';
                colorBtn.style.color = '#ffffff';
            }
        });
    }

    // 3. التحقق من حقول نموذج الحجز (Form Validation) وإظهار رسالة النجاح
    const bookingForm = document.getElementById('bookingForm');
    const messageDiv = document.getElementById('message');

    if (bookingForm && messageDiv) {
        bookingForm.addEventListener('submit', function(event) {
            // منع الصفحة من إعادة التحميل الافتراضية
            event.preventDefault();

            // جلب القيم المدخلة في الحقول
            const clientName = document.getElementById('clientName').value.trim();
            const clientPhone = document.getElementById('clientPhone').value.trim();
            const serviceSelect = document.getElementById('serviceSelect').value;

            // إفراغ أي رسائل سابقة وتجهيز الصندوق
            messageDiv.className = '';
            messageDiv.innerHTML = '';

            // التحقق من تعبئة جميع الحقول بالشكل الصحيح
            if (clientName === '' || clientPhone === '' || serviceSelect === '') {
                messageDiv.textContent = '⚠️ عذراً، يرجى ملء جميع الحقول المطلوبة قبل إرسال الطلب.';
                messageDiv.classList.add('error-box');
                return;
            }

            // التحقق من طول رقم الهاتف (يجب ألا يقل عن 9 أرقام كمثال)
            if (clientPhone.length < 9 || isNaN(clientPhone)) {
                messageDiv.textContent = '⚠️ عذراً، يرجى إدخال رقم هاتف صحيح وصالح.';
                messageDiv.classList.add('error-box');
                return;
            }

            // في حال كانت المدخلات سليمة، يتم إظهار رسالة النجاح التفاعلية (تم)
            messageDiv.innerHTML = `✅ <strong>تم حجز موعدك بنجاح!</strong><br>شكراً لك يا سيد/ة <strong>${clientName}</strong>، سنتواصل معك قريباً لتأكيد الموعد.`;
            messageDiv.classList.add('success-box');

            // إعادة تعيين وإفراغ حقول الفورم بعد النجاح
            bookingForm.reset();
        });
    }
});
