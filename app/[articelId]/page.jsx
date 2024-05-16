import React from 'react'

export default function Article({ params }) {
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
  const article = articles.find(article => article.id == params.articelId)
  console.log({params})
  return (
    <div>
      {article ? (
        <div dir="auto" className="container mx-auto px-4">
          <article>
            <header>
              <h1 className="text-2xl font-bold text-gray-800">{article.title}</h1>
              <p className="text-lg text-gray-600">{article.subtitle}</p>
              <img src={article.image} alt={article.title} />
              <p>{article.quote}</p>
              <p>כתב/ה {article.editor} בתאריך {new Date(article.date).toLocaleDateString()}</p>
            </header>
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
            <footer>
              <ul className="flex flex-wrap">
                {article.tags.map(tag => (
                  <li key={tag} className="mr-2 mb-2 px-2 py-1 bg-gray-200 rounded-full">{tag}</li>
                ))}
              </ul>
              {article.comments.map(comment => (
                <div key={comment.date} className="border-t border-gray-300 pt-4 mt-4">
                  <p><strong>{comment.author}</strong> - {new Date(comment.date).toLocaleString()}</p>
                  <p>{comment.content}</p>
                </div>
              ))}
            </footer>
          </article>
        </div>
      ) : (
        <p>Article not found</p>
      )}
    </div>
  );
}