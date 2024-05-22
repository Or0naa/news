import React from 'react'

export default function About() {
    return (
        <div dir="auto" class="bg-theme-light p-8 rounded-lg shadow-md">
            <h2 class="text-3xl font-bold text-center mb-6 text-theme-accent">אודות האתר המצחיק שלנו</h2>
            <p class="text-lg mb-4">
                אהלן ילדים! רוצים לשמוע סיפור מגניב על האתר הכי מצחיק ברשת? הכל התחיל כשחבורה של חברים החליטה לפתוח אתר שיגרום לכולם לצחוק ולהנות. הם אספו את כל הבדיחות הכי מצחיקות, התמונות הכי מצחיקות והסרטונים הכי מבדרים ברשת, והכניסו הכל לאתר אחד גדול ומרהיב.
            </p>
            <div class="flex justify-center mb-4">
                <img className='w-80 object-cover rounded-full'  src="/chil.png" alt="חבורה מצחיקה" class="rounded-full" />
            </div>
            <p class="text-lg mb-4">
                אבל מה שהפך את האתר הזה למשהו ממש מיוחד הם הדמויות המצחיקות שמנהלות אותו - הדוד הידן, הדודה הצבעונית והחתול הדובון. הם מטורפים לגמרי, אבל בדרך הכי מצחיקה שיש!
            </p>
            <div class="flex justify-around mb-4">
                <div class="text-center">
                    <img width={80}  src="https://img.fruugo.com/product/0/71/23975710_max.jpg" alt="הדוד הידן" class="rounded-full mb-2" />
                    <p class="text-sm">הדוד הידן</p>
                </div>
                <div class="text-center">
                    <img width={80} src="https://img.lovepik.com/png/20231105/Woman-Exaggerated-Expression-Cartoon-Stereoscopic-Illustration-figure-portrait-Exaggeration_505531_wh860.png" alt="הדודה הצבעונית" class="rounded-full mb-2" />
                    <p class="text-sm">הדודה הצבעונית</p>
                </div>
                <div class="text-center">
                    <img width={80}  src="https://www.ikea.com/il/he/images/products/lilleplutt-soft-toy-cat-grey-white__0876952_pe611260_s5.jpg?f=s" alt="החתול הדובון" class="rounded-full mb-2" />
                    <p class="text-sm">החתול הדובון</p>
                </div>
            </div>
            <p class="text-lg mb-4">
                באתר שלהם תמצאו המון פינות מצחיקות - יש פינת צ'יטים לסרטים מצחיקים, פינת קומיקס, ופינה של משחקי וידאו שיגרמו לכם לצחוק עד דמעות. אתם יכולים גם לשלוח להם בדיחות משלכם והם ישמחו להעלות אותן לאתר.
            </p>
            <div class="bg-theme-dark p-4 rounded-lg">
                <p class="text-lg font-bold mb-2">הפסטיבל המצחיקון השנתי</p>
                <p class="text-base">
                    אבל הדבר הכי שווה הוא הפסטיבל המצחיקון שהם עורכים מדי שנה - יום של צחוקים, קפיצות עלטרמפולינה ענקית, ארוחת צהריים מלאה במאכלים מצחיקים וכל מיני הפתעות מבדרות. כל מי שבא חוזר הביתה עם כאב בטן מרוב צחוק.
                </p>
            </div>
            <p class="text-lg mt-4">
                אז מה אתם אומרים חברים, נֶצטרף לחבורה המבדרת הזאת? בטוח שתמצאו שם המון חברים חדשים שיצחיקו אתכם ללא הפסקה. בואו איתי לפסטיבל המצחיקון הבא, זה יהיה ממש כיף!
            </p>
        </div>
    )
}
