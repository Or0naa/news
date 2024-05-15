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
        "image": "data:image/jpeg;base64,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",
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
    <div>
      <ul>
        {articles.map((articel) => (
          <li key={articel.id}>
            {articel.title}
            <br />
            {articel.subtitle}
            <br />
            {articel.editor}
            <br />
            {articel.date}
            <br />
            {articel.content}
            <br />
            {articel.quote}
            <br/>
            <img src={articel.image}/>
          </li>
         
        ))}
      </ul>
      
    </div>
  )
}
