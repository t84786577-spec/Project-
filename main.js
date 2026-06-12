// 1. تفاعل فتح وإغلاق القائمة في الهواتف المذكور في التكليف
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
    menuBtn.onclick = function() {
        navMenu.classList.toggle("active");
    };
}

// 2. تفاعل تبديل مظهر الموقع الشامل بالكامل (Light / Dark Mode Toggle)
const colorButton = document.getElementById("colorBtn");

if (colorButton) {
    colorButton.onclick = function() {
        // نتحكم في كلاس البودي بالكامل ليتحول التصميم والمكونات فوراً
        document.body.classList.toggle("dark-theme");
        
        if (document.body.classList.contains("dark-theme")) {
            colorButton.textContent = "☀️ تفعيل المظهر الفاتح";
        } else {
            colorButton.textContent = "✨ تبديل مظهر الموقع";
        }
    };
}

// 3. التحقق الذكي وظهور صندوق رسالة "تم بنجاح" عند إرسال البيانات
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault(); // إيقاف إعادة تحميل الصفحة تلقائياً

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let date = document.getElementById("date").value;
        let messageElement = document.getElementById("message");

        // مسح أي رسالة سابقة وكلاس قديم
        messageElement.innerHTML = "";
        messageElement.className = "";

        // التحقق الفني
        if (name === "" || email === "" || date === "") {
            messageElement.innerHTML = "⚠️ عذراً، يرجى ملء جميع الخانات أولاً لإتمام الحجز.";
            messageElement.classList.add("error-box");
        } else {
            // ظهور رسالة "تم" الاحترافية مع كتابة اسم المستخدم تفاعلياً
            messageElement.innerHTML = "🎉 تم حجز الموعد بنجاح دكتور/ة " + name + "! سنتواصل معك لتأكيد التوقيت.";
            messageElement.classList.add("success-box");
            
            // تصفير الخانات بعد الحجز الناجح
            bookingForm.reset();
        }
    });
}
