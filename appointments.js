/* Departments Data */

const departments = {

    pediatrics: {
        name: "الأطفال",
        price: 180,

        documents: [
            "بطاقة الهوية أو شهادة ميلاد الطفل إن وجدت.",
            "سجل التطعيمات.",
            "التقارير الطبية السابقة.",
            "نتائج التحاليل أو الأشعة السابقة.",
            "قائمة الأدوية التي يتناولها الطفل."
        ],

        preparation: [
            "تحديد عمر الطفل وسبب الزيارة.",
            "تسجيل الأعراض ومدة ظهورها.",
            "يُفضّل حضور أحد الوالدين أو ولي الأمر.",
            "إبلاغ الطبيب بأي حساسية معروفة."
        ],

        warning:
            "في حالة ظهور أعراض شديدة أو تدهور مفاجئ، يجب طلب الرعاية العاجلة."
    },


    internal: {
        name: "الباطنة",
        price: 200,

        documents: [
            "بطاقة الهوية.",
            "التقارير الطبية السابقة.",
            "نتائج التحاليل الأخيرة.",
            "تقارير الأشعة السابقة.",
            "قائمة الأدوية الحالية."
        ],

        preparation: [
            "تحديد الشكوى الأساسية ومدة ظهورها.",
            "ذكر الأمراض المزمنة إن وجدت.",
            "ترتيب التقارير الطبية حسب تاريخها.",
            "تجهيز الأسئلة التي ترغب في مناقشتها مع الطبيب."
        ],

        warning:
            "يُرجى إبلاغ الطبيب بأي حساسية دوائية أو أدوية يتم استخدامها حاليًا."
    },


    emergency: {
        name: "الطوارئ",
        price: 100,

        documents: [
            "بطاقة الهوية إن أمكن.",
            "التقارير الطبية السابقة إن وجدت.",
            "قائمة الأدوية الحالية.",
            "معلومات عن الحساسية الدوائية."
        ],

        preparation: [
            "قسم الطوارئ مخصص للحالات التي تحتاج إلى تقييم عاجل.",
            "لا يشترط وجود حجز مسبق للحالات الطارئة.",
            "توضيح الأعراض ووقت بدايتها عند الوصول.",
            "اتباع تعليمات الفريق الطبي."
        ],

        warning:
            "في الحالات الخطيرة، لا تنتظر موعد الحجز الإلكتروني. اطلب المساعدة العاجلة فورًا."
    },


    rabies: {
    name: "علاج السعار",
    price: 150,

    documents: [
        "بطاقة الهوية أو أي مستند لإثبات البيانات.",
        "تاريخ ووقت العضة أو الخدش إن وُجد.",
        "معلومات عن الحيوان المتسبب في الإصابة إن أمكن.",
        "شهادة تطعيم الحيوان إن كانت متاحة.",
        "سجل التطعيمات السابقة ضد السعار إن وُجد.",
        "أي تقارير طبية أو مستندات خاصة بالتعرض السابق."
    ],

    preparation: [
        "التوجه إلى المركز فورًا عند التعرض لعضة أو خدش من حيوان يُشتبه في إصابته.",
        "غسل مكان العضة أو الخدش بالماء الجاري والصابون لمدة 15 دقيقة.",
        "عدم تأخير التقييم الطبي في انتظار موعد الحجز.",
        "إبلاغ الطبيب بنوع الحيوان ومكان الإصابة ووقت حدوثها.",
        "إخبار الطبيب إذا سبق تلقي تطعيم ضد السعار."
    ],

    warning:
        "التعرض المحتمل للسعار يحتاج إلى تقييم طبي عاجل. لا تنتظر موعدًا إلكترونيًا؛ اغسل الجرح فورًا بالماء والصابون لمدة 15 دقيقة، ثم توجّه إلى أقرب جهة طبية لتقييم الحالة وبدء الوقاية اللازمة."
},


    lab: {
        name: "المعمل والأشعة",
        price: 120,

        documents: [
            "بطاقة الهوية.",
            "طلب التحليل أو الأشعة إن كان مطلوبًا.",
            "التقارير والفحوصات السابقة ذات الصلة.",
            "قائمة الأدوية الحالية."
        ],

        preparation: [
            "تحديد نوع التحليل أو الأشعة المطلوبة.",
            "التأكد من موعد الفحص ومدته.",
            "اتباع تعليمات التحضير الخاصة بالفحص.",
            "الوصول قبل الموعد بوقت كافٍ."
        ],

        warning:
            "بعض الفحوصات تحتاج إلى تحضير خاص، يُرجى الاستفسار من القسم المختص عن أي تعليمات خاصة قبل موعد الحجز."
    },


    dental: {
        name: "الأسنان",
        price: 150,

        documents: [
            "بطاقة الهوية.",
            "أشعة الأسنان السابقة إن وجدت.",
            "التقارير الطبية المتعلقة بعلاج الأسنان.",
            "قائمة الأدوية الحالية."
        ],

        preparation: [
            "تحديد سبب الزيارة ومكان الألم إن وجد.",
            "تنظيف الأسنان قبل الحضور.",
            "إبلاغ الطبيب بأي أمراض مزمنة.",
            "إحضار الأشعة السابقة إن وجدت."
        ],

        warning:
            "في حالة وجود تورم شديد أو صعوبة في التنفس أو البلع، يجب طلب الرعاية العاجلة."
    },


    orthopedics: {
        name: "العظام",
        price: 220,

        documents: [
            "بطاقة الهوية.",
            "أشعة X-ray أو MRI أو CT السابقة إن وجدت.",
            "التقارير الطبية السابقة.",
            "تقارير العمليات الجراحية إن وجدت.",
            "قائمة الأدوية المستخدمة."
        ],
        preparation: [
            "تحديد مكان الألم أو الإصابة.",
            "توضيح وقت حدوث الإصابة.",
            "ذكر أي إصابات سابقة في نفس المكان.",
            "ارتداء ملابس مناسبة للفحص."
        ],

        warning:
            "الإصابات الشديدة أو التشوه المفاجئ أو فقدان الإحساس تحتاج إلى تقييم عاجل."
    },


    gynecology: {
        name: "النساء والتوليد",
        price: 250,

        documents: [
            "بطاقة الهوية.",
            "التقارير الطبية السابقة.",
            "نتائج التحاليل.",
            "صور الأشعة أو السونار السابقة.",
            "ملف متابعة الحمل إن وجد."
        ],

        preparation: [
            "تحديد سبب الزيارة.",
            "في حالة متابعة الحمل، يُفضّل ذكر عمر الحمل.",
            "توضيح الأعراض الحالية إن وجدت.",
            "إحضار نتائج الفحوصات السابقة."
        ],

        warning:
            "الأعراض الشديدة أثناء الحمل، مثل النزيف الغزير أو الألم الشديد، تستدعي التقييم العاجل."
    }

};


/* Get Department from URL */

const params = new URLSearchParams(
    window.location.search
);

const selectedDepartment = params.get("department");


/* Page Elements */

const departmentName =
    document.getElementById("departmentName");

const departmentPrice =
    document.getElementById("departmentPrice");

const instructionsContent =
    document.getElementById("instructionsContent");

const appointmentForm =
    document.getElementById("appointmentForm");


/* Display Department */

function showDepartment(departmentKey) {

    const department = departments[departmentKey];

    // Check if department exists
    if (!department) {

        departmentName.textContent =
            "قسم غير محدد";

        departmentPrice.textContent = "--";

        instructionsContent.innerHTML = `
            <div class="empty-message">
                <p>
                    لم يتم تحديد القسم بشكل صحيح.
                    يرجى الرجوع إلى
                    <a href="services.html">صفحة الخدمات</a>
                    واختيار القسم المطلوب.
                </p>
            </div>
        `;

        appointmentForm.style.display = "none";

        return;
    }


    // Show department name and price
    departmentName.textContent =
        department.name;

    departmentPrice.textContent =
        department.price + " جنيه";


    // Show instructions
    instructionsContent.innerHTML = `

        <div class="instruction-section">

            <h3>الأوراق والمستندات المطلوبة</h3>

            <ul>
                ${department.documents.map(item =>
                    `<li>${item}</li>`
                ).join("")}
            </ul>

        </div>


        <div class="instruction-section">

            <h3>إرشادات قبل الزيارة</h3>

            <ul>
                ${department.preparation.map(item =>
                    `<li>${item}</li>`
                ).join("")}
            </ul>

        </div>


        <div class="warning-box">

            <strong>ملاحظة مهمة</strong>

            <p>${department.warning}</p>

        </div>

    `;

}


/* Run Department Function (appointments page only) */

if (appointmentForm) {

    showDepartment(selectedDepartment);

}


/* Prevent Past Dates */

const dateInput =
    document.getElementById("appointmentDate");

const today = new Date();

const year = today.getFullYear();

const month = String(today.getMonth() + 1)
    .padStart(2, "0");

const day = String(today.getDate())
    .padStart(2, "0");

if (dateInput) {

    dateInput.min = `${year}-${month}-${day}`;

}


/* Submit Booking */

if (appointmentForm) {

    appointmentForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const department =
                departments[selectedDepartment];

            // Go to the payment page with the booking details
            const timeInput =
                document.getElementById("appointmentTime");

            const bookingParams = new URLSearchParams({
                department: selectedDepartment,
                date: dateInput.value,
                time: timeInput.value
            });

            window.location.href =
                "payment.html?" + bookingParams.toString();

        }
    );

}


/* =====================================================
   Services Page (added)
   Cards are built from the departments data above,
   so prices always match the booking page.
   ===================================================== */

const servicesGrid =
    document.getElementById("servicesGrid");

// Order of the cards on the services page
const servicesOrder = [
    "rabies",
    "emergency",
    "internal",
    "pediatrics",
    "gynecology",
    "orthopedics",
    "dental",
    "lab"
];

// Icon and short description for each department
const servicesInfo = {

    rabies: {
        icon: "🐕",
        description: "تطعيمات السعار وعلاج العقر والخدش"
    },

    emergency: {
        icon: "🚑",
        description: "استقبال الحالات العاجلة على مدار الساعة"
    },

    internal: {
        icon: "🩺",
        description: "كشف وعلاج أمراض الباطنة والسكر والضغط"
    },

    pediatrics: {
        icon: "🧒",
        description: "رعاية الأطفال والتطعيمات الدورية"
    },

    gynecology: {
        icon: "🤰",
        description: "متابعة الحمل والولادة وأمراض النساء"
    },

    orthopedics: {
        icon: "🦴",
        description: "كسور وآلام المفاصل والعمود الفقري"
    },

    dental: {
        icon: "🦷",
        description: "كشف وحشو وتنظيف وخلع الأسنان"
    },

    lab: {
        icon: "🔬",
        description: "تحاليل طبية وأشعة عادية وسونار"
    }

};


/* Display Services */

function showServices() {

    servicesGrid.innerHTML = servicesOrder.map(key => {

        const department = departments[key];
        const info = servicesInfo[key];

        return `

            <a class="service-item"
               href="appointments.html?department=${key}">

                <div class="icon">${info.icon}</div>

                <h3>${department.name}</h3>

                <p>${info.description}</p>

                <div class="price">${department.price} جنيه</div>

            </a>

        `;

    }).join("");

}


/* Run Services Function (services page only) */

if (servicesGrid) {

    showServices();

}


/* =====================================================
   Payment Page (added)
   Reads the booking details from the URL and shows
   the payment form. Nothing is sent or stored.
   ===================================================== */

const paymentForm =
    document.getElementById("paymentForm");

if (paymentForm) {

    const payDepartment = departments[params.get("department")];
    const payDate = params.get("date");
    const payTime = params.get("time");

    const paymentContent = document.getElementById("paymentContent");
    const paymentEmpty = document.getElementById("paymentEmpty");
    const paymentSuccess = document.getElementById("paymentSuccess");
    const paymentError = document.getElementById("paymentError");

    const cardNumber = document.getElementById("cardNumber");
    const cardExpiry = document.getElementById("cardExpiry");
    const cardCvv = document.getElementById("cardCvv");
    const walletNumber = document.getElementById("walletNumber");

    const panels = {
        card: document.getElementById("cardFields"),
        wallet: document.getElementById("walletFields"),
        cash: document.getElementById("cashFields")
    };

    const methodNames = {
        card: "كارت بنكي",
        wallet: "محفظة إلكترونية",
        cash: "الدفع في المستشفى"
    };


    /* Formatting helpers */

    function formatArabicDate(value) {

        const date = new Date(value + "T00:00:00");

        if (isNaN(date)) {
            return value;
        }

        return date.toLocaleDateString("ar-EG", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });

    }

    function formatArabicTime(value) {

        const [hours, minutes] = value.split(":").map(Number);

        const period = hours < 12 ? "ص" : "م";
        const hour12 = String(hours % 12 || 12).padStart(2, "0");

        return hour12 + ":" +
            String(minutes).padStart(2, "0") + " " + period;

    }

    function showError(message) {

        paymentError.textContent = message;
        paymentError.hidden = false;

    }


    /* Booking summary */

    if (!payDepartment || !payDate || !payTime) {

        paymentContent.hidden = true;
        paymentEmpty.hidden = false;

    } else {

        document.getElementById("summaryDepartment").textContent =
            payDepartment.name;

        document.getElementById("summaryDate").textContent =
            formatArabicDate(payDate);

        document.getElementById("summaryTime").textContent =
            formatArabicTime(payTime);

        document.getElementById("summaryTotal").textContent =
            payDepartment.price + " جنيه";

    }


    /* Switch payment method */

    function getMethod() {

        return paymentForm.querySelector(
            'input[name="paymentMethod"]:checked'
        ).value;

    }

    paymentForm.querySelectorAll(
        'input[name="paymentMethod"]'
    ).forEach(radio => {

        radio.addEventListener("change", function () {

            const method = getMethod();

            Object.keys(panels).forEach(key => {
                panels[key].hidden = key !== method;
            });

            paymentForm.querySelectorAll(".method-option")
                .forEach(option => {
                    option.classList.toggle(
                        "active",
                        option.contains(radio) && radio.checked
                    );
                });

            paymentError.hidden = true;

        });

    });


    /* Input formatting */

    cardNumber.addEventListener("input", function () {

        const digits = cardNumber.value
            .replace(/\D/g, "")
            .slice(0, 16);

        cardNumber.value = digits.replace(/(.{4})/g, "$1 ").trim();

    });

    cardExpiry.addEventListener("input", function () {

        let digits = cardExpiry.value
            .replace(/\D/g, "")
            .slice(0, 4);

        if (digits.length > 2) {
            digits = digits.slice(0, 2) + "/" + digits.slice(2);
        }

        cardExpiry.value = digits;

    });

    cardCvv.addEventListener("input", function () {

        cardCvv.value = cardCvv.value
            .replace(/\D/g, "")
            .slice(0, 4);

    });

    walletNumber.addEventListener("input", function () {

        walletNumber.value = walletNumber.value
            .replace(/\D/g, "")
            .slice(0, 11);

    });


    /* Validation */

    function validatePayment(method) {

        if (method === "card") {

            const digits = cardNumber.value.replace(/\s/g, "");

            if (digits.length !== 16) {
                return "رقم الكارت لازم يكون 16 رقم.";
            }

            const expiry = cardExpiry.value.match(/^(\d{2})\/(\d{2})$/);

            if (!expiry || Number(expiry[1]) < 1 || Number(expiry[1]) > 12) {
                return "اكتب تاريخ الانتهاء بالشكل MM/YY.";
            }

            const now = new Date();
            const expiryYear = 2000 + Number(expiry[2]);
            const expiryMonth = Number(expiry[1]);

            if (
                expiryYear < now.getFullYear() ||
                (expiryYear === now.getFullYear() &&
                    expiryMonth < now.getMonth() + 1)
            ) {
                return "الكارت منتهي الصلاحية.";
            }

            if (!/^\d{3,4}$/.test(cardCvv.value)) {
                return "رمز CVV لازم يكون 3 أو 4 أرقام.";
            }

        }

        if (method === "wallet") {

            if (!/^01[0125]\d{8}$/.test(walletNumber.value)) {
                return "اكتب رقم محفظة صحيح مكوّن من 11 رقم.";
            }

        }

        return "";

    }


    /* Confirm payment */

    paymentForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const method = getMethod();
        const errorMessage = validatePayment(method);

        if (errorMessage) {
            showError(errorMessage);
            return;
        }

        paymentError.hidden = true;

        const reference = "WQ-" +
            Math.floor(100000 + Math.random() * 900000);

        document.getElementById("bookingRef").textContent = reference;

        document.getElementById("successMessage").textContent =
            "تم حجز ميعادك في قسم " + payDepartment.name +
            " يوم " + formatArabicDate(payDate) +
            " الساعة " + formatArabicTime(payTime) +
            " (" + methodNames[method] + ").";

        paymentContent.hidden = true;
        paymentSuccess.hidden = false;

        window.scrollTo({ top: 0, behavior: "smooth" });

    });


    /* Cancel: back to the booking page */

    document.getElementById("cancelPayment")
        .addEventListener("click", function () {

            const key = params.get("department");

            window.location.href = departments[key]
                ? "appointments.html?department=" + key
                : "services.html";

        });

}


/* =====================================================
   Verify Page (index.html) + Patient Greeting (added)
   Saves the patient name for this browser tab only,
   then moves on to the services page.
   ===================================================== */

/* Greeting in the header (all pages) */

let savedPatientName = null;

try {
    savedPatientName = sessionStorage.getItem("patientName");
} catch (error) {
    savedPatientName = null;
}

const headerLink = document.querySelector(
    ".site-header .header-link"
);

if (savedPatientName && headerLink) {

    const actions = document.createElement("div");
    actions.className = "header-actions";

    const greeting = document.createElement("span");
    greeting.className = "patient-greeting";
    greeting.textContent = "أهلاً، " + savedPatientName;

    headerLink.parentNode.insertBefore(actions, headerLink);
    actions.appendChild(greeting);
    actions.appendChild(headerLink);

}


/* Verify form */

const verifyForm =
    document.getElementById("verifyForm");

if (verifyForm) {

    const nameInput = document.getElementById("name");
    const nidInput = document.getElementById("nid");
    const verifyError = document.getElementById("message");
    const verifySuccess = document.getElementById("successMessage");

    verifyForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = nameInput.value.trim();
        const nid = nidInput.value.trim();

        // Name: Arabic or English letters and spaces only
        const nameRule = /^[\u0600-\u06FFa-zA-Z\s]+$/;

        // National ID: digits only
        const nidRule = /^[0-9]+$/;

        verifyError.hidden = true;
        verifySuccess.hidden = true;

        if (!nameRule.test(name)) {

            verifyError.textContent =
                "الاسم لازم يكون حروف عربي أو إنجليزي بس";
            verifyError.hidden = false;

            return;
        }

        if (!nidRule.test(nid)) {

            verifyError.textContent =
                "الرقم القومي لازم يكون أرقام بس";
            verifyError.hidden = false;

            return;
        }

        try {
            sessionStorage.setItem("patientName", name);
        } catch (error) {
            // Storage blocked: continue without saving the name
        }

        verifySuccess.textContent =
            "تمام، البيانات صحيحة. جاري تحويلك لصفحة الخدمات...";
        verifySuccess.hidden = false;

        setTimeout(function () {
            window.location.href = "services.html";
        }, 900);

    });

}
