import Image from "next/image"
import Link from "next/link"

export default function Home() {

  const articles = [
    {
      "id": "1",
      "title": "כלבי הים: המסתורין המופלא של עולמם התת-ימי",
      "subtitle": "האגדה שמאחורי יצורים מופלאים",
      "editor": "שרה כהן",
      "date": "2024-05-15T00:00:00.000Z",
      "content": "כלבי הים מהווים קבוצה מרתקת ומופלאה של יצורים שגורים בעומקי הים האטלנטי. הם מסוגלים לשחזר עד עשורים של נסיעות ומסעות ים, תמיד מרתקים ומעוררי השראה. כלבי הים מופיעים במגוון מסורות ואגדות ימיות, והם חלק בלתי נפרד מתרבות האנושות כבר מאז עת העתיקה. על פי המסורת, כלבי הים הם מיוחסים גם לתפקידים מגוררים, כמו מסייעי ים ונושאי צילומים, והם מהווים חלק בלתי נפרד מסביבות הימים הרחוקות והקרובים.",
      "quote": "כלבי הים מהווים קבוצה מרתקת ומופלאה של יצורים שגורים בעומקי הים האטלנטי.",
      "image": "https://www.animalinfo.co.il/wp-content/uploads/2023/10/%D7%9B%D7%9C%D7%91-%D7%99%D7%9D-%D7%95%D7%93%D7%9C-%D7%91%D7%9E%D7%99%D7%9D.jpg",
      "tags": [
        "כלבי ים",
        "מיתולוגיה ימית",
        "אגדות"
      ],
      "comments": [
        {
          "author": "דניאל",
          "date": "2024-05-16T08:30:00.000Z",
          "content": "מאמר מרתק!"
        },
        {
          "author": "רינת",
          "date": "2024-05-17T10:15:00.000Z",
          "content": "תודה על השיתוף!"
        }
      ]
    },
    {
      "id": "2",
      "title": "משחקי כדורגל היסטוריים: כאשר הספורט הפך לאגדה",
      "subtitle": "על משחקים שעצמם בתודעה הקולקטיבית",
      "editor": "דוד כהן",
      "date": "2024-05-15T00:00:00.000Z",
      "content": "משחקי כדורגל היסטוריים מהווים את הבסיס למורשת ספורטיבית עוצרת נשימה. הם נזכרים בתודעה הקולקטיבית כאירועים שעיצבו את המשך התולדות הספורט הפופולרי ברחבי העולם. משחקים כמו הגמרים האפיים בגביע העולם, רגעי התורמה הגדולה במגרש, והקרבות התעוררות בין קבוצות גדולות - כל אלה מהווים את הניב העשיר של משחקי הכדורגל ההיסטוריים. מהם קרבות גדולות בין ריבליים התחרותיים ביותר, ועד לפעילות נוער שבה הגיבו האוהדים המסורים ביותר.",
      "quote": "משחקי כדורגל היסטוריים מהווים את הבסיס למורשת ספורטיבית עוצרת נשימה.",
      "image": "https://a7.org/files/pictures/000/1044331.jpg",
      "tags": [
        "כדורגל",
        "היסטוריה",
        "אגדות"
      ],
      "comments": [
        {
          "author": "אלון",
          "date": "2024-05-16T14:45:00.000Z",
          "content": "מאמר מרתק!"
        },
        {
          "author": "שירה",
          "date": "2024-05-17T12:20:00.000Z",
          "content": "תודה על השיתוף!"
        }
      ]
    },
    {
      "id": "3",
      "title": "הדרך הנכונה להכין עוגיות: מתכון קלאסי לטעמים משובחים",
      "subtitle": "טיפים, טכניקות והמתכון המושלם",
      "editor": "רינה לוי",
      "date": "2024-05-15T00:00:00.000Z",
      "content": "לא דבר יכול להשוות לריח של עוגיות טריות שצוננות מהתנור. אבל האם יש דרך נכונה ומושלמת להכין אותן? כמובן! ההכנה הנכונה של עוגיות מתחילה עם מתכון נבדל, שבו כל מרכיב נמדד בקפידה ומעורבב באופן יחסי. בכדי לקבל את התוצאה הטובה ביותר, חשוב להקפיד גם על טכניקות נכונות בהכנה ובאפייה. להלן מתכון לעוגיות שוקולד צ'יפס, פשוט וטעים:\n\nמרכיבים:\n- 1/2 כוס חמאה (חדר טמפרטורה)\n- 3/4 כוס סוכר לבן\n- 3/4 כוס סוכר חום\n- 1 ביצה (חדר טמפרטורה)\n- 1 1/2 כפות תמצית וניל\n- 2 1/4 כוסות קמח לבן\n- 1/2 כפית מלח\n- 1/2 כפית אבקת סודה לשתייה\n- 2 כוסות שבבי שוקולד\n\nהוראות:\n1. לחמם את התנור ל-175 מעלות צלזיוס (350 מעלות פרנהייט).\n2. בקערה גדולה, לערבב היטב את החמאה, הסוכר הלבן והסוכר החום עד שהמרקם יהיה חלק וקרמי.\n3. להוסיף את הביצה ואת תמצית הווניל לתערובת החמאה ולערבב היטב.\n4. בקערה נפרדת, לערבב את הקמח, המלח ואבקת הסודה.\n5. להוסיף את תערובת הקמח לתערובת החמאה ולערבב עד שהכל מתמזג למרקם אחיד.\n6. להוסיף את שבבי השוקולד ולערבב היטב עד שהם מתפזרים באופן אחיד בתערובת.\n7. להכין כדורים בגודל של כפות אפייה ולמעלה על תוך ציורים קטנים מבית העוגיות ברצופים.\n8. לאפות בתנור החם למשך כ-8-10 דקות, עד שהעוגיות מתקבלות בגוון זהבי בעקביות.\n9. להוציא מהתנור ולהקריר על רשת מזג האוויר לפחות 5 דקות לפני שהן נפלטות מהתבנית.",
      "quote": "לא דבר יכול להשוות לריח של עוגיות טריות שצוננות מהתנור.",
      "image": "https://www.thecookingfoodie.co.il//Images/Site/Pages/98ae247e-fe43-4c26-83b6-bcd913c3a91c.jpg",
      "tags": [
        "אפייה",
        "עוגיות",
        "מתכונים"
      ],
      "comments": [
        {
          "author": "יובל",
          "date": "2024-05-16T16:00:00.000Z",
          "content": "המתכון נראה פשוט מעולה!"
        },
        {
          "author": "מיה",
          "date": "2024-05-17T13:45:00.000Z",
          "content": "תודה על השיתוף!"
        }
      ]
    }
  ]


  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-5xl mx-auto">
        {articles.map((article) => (
          <div dir="auto" key={article.id} className="bg-white rounded-lg overflow-hidden shadow-md mb-8">
            <img src={article.image} alt="article" className="w-full h-64 object-cover object-center" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-4">{article.subtitle} / {article.editor}</p>
              <p className="text-gray-400 mb-4">{new Date(article.date).toDateString()}</p>
              <p className="text-gray-800 mb-4">{article.quote}</p>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-200 py-1 px-2 rounded-md text-sm text-gray-600 cursor-pointer hover:bg-primary-100">{tag}</span>
                ))}
              </div>
              <Link href={article.id} className="text-blue-500 mt-4 block">קרא עוד <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block -mt-1 ml-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.707 4.293a1 1 0 0 1 1.414 1.414L4.414 10l2.707 2.293a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3zm8 0a1 1 0 0 1 1.414 1.414L12.414 10l2.293 2.293a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3z" clipRule="evenodd" /></svg></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}