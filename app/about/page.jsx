import Link from 'next/link'
import React from 'react'

export default function About() {
    return (
        <div dir="auto" class="bg-theme-light p-8 rounded-lg shadow-md">
            <h2 class="text-3xl font-bold text-center mb-6 text-theme-accent">אודות האתר שלנו</h2>
            <p class="text-lg mb-4">
                אהלן ילדים! ברוכים הבאים לאתר החדשות שלכם!! האתר שבו אתם הכותבים והכותבות, העורכים והעורכות.. כל התוכן באתר הוא שלכם ובשבילכם
            </p>
            <div class="flex justify-center mb-4">
                <img className='w-80 object-cover rounded-full' src="/chil.png" alt="חבורה מצחיקה" class="rounded-full" />
            </div>
            <p class="text-lg mb-4">
                אבל מה שהפך את האתר הזה למשהו ממש מיוחד הם הדמויות המדהימות שהקימו ושמנהלות אותו - אלירז בלאו, אורנא בן אברהם ויוסף יהב. הם מטורפים לגמרי, אבל בדרך הכי מצחיקה שיש!
            </p>
            <div class="flex justify-around mb-4">
                <div class="text-center">
                    <img width={80} src="https://img.fruugo.com/product/0/71/23975710_max.jpg" alt="הדוד הידן" class="rounded-full mb-2" />
                    <p class="text-sm">אורנא</p>
                </div>
                <div class="text-center">
                    <img width={80} src="https://img.lovepik.com/png/20231105/Woman-Exaggerated-Expression-Cartoon-Stereoscopic-Illustration-figure-portrait-Exaggeration_505531_wh860.png" alt="הדודה הצבעונית" class="rounded-full mb-2" />
                    <p class="text-sm">אלירז</p>
                </div>
                <div class="text-center">
                    <img width={80} src="https://www.ikea.com/il/he/images/products/lilleplutt-soft-toy-cat-grey-white__0876952_pe611260_s5.jpg?f=s" alt="החתול הדובון" class="rounded-full mb-2" />
                    <Link href="/admin" class="text-sm cursor-none">החתול יוסף</Link>
                </div>
            </div>
            <p class="text-lg mb-4">
                באתר תמצאו חדשות שיעניינו דווקא אתכם! בנושאים מגוונים כמו למשל, בעלי חיים, היסטוריה, משחקים ואפילו פוליטיקה אם בא לכם להרדם טוב הלילה            </p>
            <div class="bg-theme-dark p-4 rounded-lg">
                <p class="text-lg font-bold mb-2">הקטע הכי מגניב</p>
                <p class="text-base">
                    אבל הדבר הכי מיוחד זאת האפשרות לכתוב בעצמכם כתבות לאתר! אתם חושבים על הנושא, עורכים תחקיר וכותבים את הטקסט, ו... הכתבה מתפרסמת באתר כדי שכולם יוכלו לקרוא!!!                </p>
            </div>
            <p class="text-lg mt-4">
                אפשר גם להזמין עוד חברות וחברים לקרוא את הכתבות באתר שלכם ולצרף לחבורה את מי שרק תרצו!            </p>
        </div>
    )
}
