const nouns = [
  { name: "chocolate", emoji: "🍫" },
  { name: "glass", emoji: "🍷" },
  { name: "cat", emoji: "🐈" },
  { name: "pen", emoji: "🖊️" },
  { name: "pillow", emoji: "💩" },
  { name: "book", emoji: "📚" },
  { name: "phone", emoji: "📱" },
  { name: "tree", emoji: "🌳" },
  { name: "car", emoji: "🚗" },
  { name: "sun", emoji: "☀️" },
  { name: "flower", emoji: "🌻" },
  { name: "coffee", emoji: "☕" },
  { name: "dog", emoji: "🐶" },
  { name: "moon", emoji: "🌙" },
  { name: "chair", emoji: "🪑" },
  { name: "keyboard", emoji: "⌨️" },
  { name: "shoes", emoji: "👟" },
  { name: "cloud", emoji: "☁️" },
  { name: "bottle", emoji: "🍾" },
  { name: "cake", emoji: "🍰" },
  { name: "banana", emoji: "🍌" },
  { name: "underwear", emoji: "🩲" },
  { name: "rubber duck", emoji: "🦆" },
  { name: "sunglasses", emoji: "😎" },
  { name: "toilet paper", emoji: "🧻" },
  { name: "pizza", emoji: "🍕" },
  { name: "unicorn", emoji: "🦄" },
  { name: "silly hat", emoji: "🤪" },
  { name: "whoopie cushion", emoji: "💨" },
  { name: "banana peel", emoji: "🍌🍌" },
  { name: "شکلات", emoji: "🍫", lang: "fa" },
  { name: "لیوان", emoji: "🍷", lang: "fa" },
  { name: "گربه", emoji: "🐈", lang: "fa" },
  { name: "مداد", emoji: "🖊️", lang: "fa" },
  { name: "بالشت", emoji: "💩", lang: "fa" },
  { name: "کتاب", emoji: "📚", lang: "fa" },
  { name: "تلفن", emoji: "📱", lang: "fa" },
  { name: "درخت", emoji: "🌳", lang: "fa" },
  { name: "ماشین", emoji: "🚗", lang: "fa" },
  { name: "خورشید", emoji: "☀️", lang: "fa" },
  { name: "گل", emoji: "🌻", lang: "fa" },
  { name: "قهوه", emoji: "☕", lang: "fa" },
  { name: "سگ", emoji: "🐶", lang: "fa" },
  { name: "ماه", emoji: "🌙", lang: "fa" },
  { name: "صندلی", emoji: "🪑", lang: "fa" },
  { name: "کیبورد", emoji: "⌨️", lang: "fa" },
  { name: "کفش", emoji: "👟", lang: "fa" },
  { name: "ابر", emoji: "☁️", lang: "fa" },
  { name: "شیشه", emoji: "🍾", lang: "fa" },
  { name: "کیک", emoji: "🍰", lang: "fa" },
  { name: "موز", emoji: "🍌", lang: "fa" },
  { name: "زیرپوش", emoji: "🩲", lang: "fa" },
  { name: "استکان کوچک", emoji: "🦆", lang: "fa" },
  { name: "عینک آفتابی", emoji: "😎", lang: "fa" },
  { name: "کاغذ توالت", emoji: "🧻", lang: "fa" },
  { name: "پیتزا", emoji: "🍕", lang: "fa" },
  { name: "یونیکورن", emoji: "🦄", lang: "fa" },
  { name: "کلاه احمقانه", emoji: "🤪", lang: "fa" },
  { name: "پنبه", emoji: "💨", lang: "fa" },
  { name: "پوست موز", emoji: "🍌🍌", lang: "fa" },
];

const adjs = [
  { name: "warm", type: "quality", lang: "en" },
  { name: "scary", type: "quality", lang: "en" },
  { name: "blue", type: "color", lang: "en" },
  { name: "funny", type: "quality", lang: "en" },
  { name: "salty", type: "taste", lang: "en" },
  { name: "big", type: "size", lang: "en" },
  { name: "loud", type: "sound", lang: "en" },
  { name: "soft", type: "texture", lang: "en" },
  { name: "bright", type: "quality", lang: "en" },
  { name: "sweet", type: "taste", lang: "en" },
  { name: "happy", type: "emotion", lang: "en" },
  { name: "fast", type: "speed", lang: "en" },
  { name: "spicy", type: "taste", lang: "en" },
  { name: "sleepy", type: "state", lang: "en" },
  { name: "shiny", type: "quality", lang: "en" },
  { name: "fresh", type: "quality", lang: "en" },
  { name: "noisy", type: "sound", lang: "en" },
  { name: "smooth", type: "texture", lang: "en" },
  { name: "hilarious", type: "quality", lang: "en" },
  { name: "delicious", type: "quality", lang: "en" },
  { name: "brave", type: "trait", lang: "en" },
  { name: "calm", type: "trait", lang: "en" },
  { name: "playful", type: "trait", lang: "en" },
  { name: "energetic", type: "trait", lang: "en" },
  { name: "grumpy", type: "trait", lang: "en" },
  { name: "cheerful", type: "trait", lang: "en" },
  { name: "mysterious", type: "quality", lang: "en" },
  { name: "silly", type: "trait", lang: "en" },
  { name: "spiky", type: "texture", lang: "en" },
  { name: "bumpy", type: "texture", lang: "en" },
  { name: "گرم", type: "quality", lang: "fa" },
  { name: "ترسناک", type: "quality", lang: "fa" },
  { name: "آبی", type: "color", lang: "fa" },
  { name: "باحال", type: "quality", lang: "fa" },
  { name: "شور", type: "taste", lang: "fa" },
  { name: "بزرگ", type: "size", lang: "fa" },
  { name: "بلند", type: "sound", lang: "fa" },
  { name: "نرم", type: "texture", lang: "fa" },
  { name: "روشن", type: "quality", lang: "fa" },
  { name: "شیرین", type: "taste", lang: "fa" },
  { name: "خوشحال", type: "emotion", lang: "fa" },
  { name: "سریع", type: "speed", lang: "fa" },
  { name: "تند", type: "taste", lang: "fa" },
  { name: "خواب‌آلود", type: "state", lang: "fa" },
  { name: "درخشان", type: "quality", lang: "fa" },
  { name: "تازه", type: "quality", lang: "fa" },
  { name: "پر سر و صدا", type: "sound", lang: "fa" },
  { name: "صاف", type: "texture", lang: "fa" },
  { name: "خنده‌دار", type: "quality", lang: "fa" },
  { name: "خوشمزه", type: "quality", lang: "fa" },
  { name: "شجاع", type: "trait", lang: "fa" },
  { name: "آرام", type: "trait", lang: "fa" },
  { name: "بازیگوش", type: "trait", lang: "fa" },
  { name: "پرانرژی", type: "trait", lang: "fa" },
  { name: "روسفید", type: "trait", lang: "fa" },
  { name: "شاداب", type: "trait", lang: "fa" },
  { name: "مرموز", type: "quality", lang: "fa" },
  { name: "حماقت", type: "trait", lang: "fa" },
  { name: "خاردار", type: "texture", lang: "fa" },
  { name: "چاله‌دار", type: "texture", lang: "fa" },
];

const qas = [
  {
    question: "چگونه می‌توانم یک نقشه Google Maps را در وبسایتم نمایش دهم؟",
    answer:
      "برای نمایش یک نقشه Google Maps در وبسایت، باید از API Google Maps استفاده کنید و کلید API معتبری را دریافت کرده و در کدهای وبسایتتان قرار دهید.",
    lang: "fa"
  },
  {
    question: "مزایا و معایب استفاده از فریم‌ورک React چیست؟",
    answer:
      "مزایا: توسعه سریع‌تر، مدیریت بهتر وضعیت، قابلیت استفاده مجدد اجزاء، بهبود عملکرد، اکوسیستم بزرگ و جامع. معایب: مناسب برای پروژه‌های بزرگتر، نیاز به یادگیری courve زمانی برای شروع.",
    lang: "fa"
  },
  {
    question:
      "چگونه می‌توانم تصویر یک فایل را در جاوااسکریپت آپلود کرده و نمایش دهم؟",
    answer:
      "با استفاده از API File و API FileReader در جاوااسکریپت، می‌توانید تصویر فایل را بارگذاری کرده و آن را در صفحه نمایش دهید.",
    lang: "fa"
  },
  {
    question:
      "چگونه می‌توانم یک پروژه موفق در حوزه کسب و کار شخصی را راه‌اندازی کنم؟",
    answer:
      "برای راه‌اندازی یک پروژه موفق در حوزه کسب و کار شخصی، نیاز است به بررسی بازار، تعیین هدف و استراتژی، ایجاد یک برنامه کسب و کار، ارتباط با مشتریان و بازاریابی مناسب تمرکز کنید.",
    lang: "fa"
  },
  {
    question: "چگونه می‌توانم با استرس روزمره کنار بیایم؟",
    answer:
      "برای کاهش استرس روزمره، می‌توانید از تمرین‌های تنفسی، تمرین بدنی، مدیریت زمان، مدیتیشن و استفاده از روش‌های مشاوره و پشتیبانی روانشناختی استفاده کنید.",
    lang: "fa"
  },
  {
    question: "نکات مهم در آموزش آشپزی چیست؟",
    answer:
      "نکات مهم در آموزش آشپزی شامل تمرکز بر انتخاب مواد اولیه با کیفیت، آشنایی با تکنیک‌های پخت و پز، دقت در اندازه‌گیری مواد، آشنایی با ترفندهای آشپزی و تجربه و تمرین مداوم است.",
    lang: "fa"
  },
  {
    question: "چگونه می‌توانم سبک زندگی روزمره بهبود ببخشم؟",
    answer:
      "برای بهبود سبک زندگی روزمره، می‌توانید به تعادل کار و زندگی، مدیریت زمان، تغذیه سالم، ورزش و فعالیت بدنی، استراحت کافی، روابط اجتماعی سالم و رسیدگی به خودتان توجه کنید.",
    lang: "fa"
  },
  {
    question: "نکات مهم در خرید بیمه چیست؟",
    answer:
      "نکات مهم در خرید بیمه شامل مطالعه دقیق شرایط بیمه، تعیین نیازها و پوشش‌های مورد نیاز، مقایسه قیمت‌ها و شرکت‌های بیمه، مشاوره با کارشناسان بیمه و بررسی شرایط قرارداد قبل از امضا است.",
    lang: "fa"
  },
  {
    question: "چگونه می‌توانم به مدیریت مالی شخصیم توجه کنم؟",
    answer:
      "برای مدیریت مالی شخصی، می‌توانید بودجه‌بندی، پس‌انداز، کاهش هزینه‌های غیرضروری، سرمایه‌گذاری هوشمند، پرداخت به موقع قبوض و بدهی‌ها و آگاهی درباره مسائل مالی و سرمایه‌گذاری استفاده کنید.",
    lang: "fa"
  },
  {
    question: "نکات مهم در آموزش ورزش به صورت منظم چیست؟",
    answer:
      "نکات مهم در آموزش ورزش به صورت منظم شامل تعیین هدف‌های قابل دسترس، انتوصیه می‌کنم به تعداد دلخواه خودتان، آبجکت‌های دیگر با موضوعات مورد نظرتان را به آرایه اضافه کنید.",
    lang: "fa"
  },
  {
    "question": "How can I display a Google Maps map on my website?",
    "answer": "To display a Google Maps map on your website, you need to use the Google Maps API and obtain a valid API key, then place it in your website code.",
    "lang": "en"
  },
  {
    "question": "What are the advantages and disadvantages of using the React framework?",
    "answer": "Advantages: Faster development, better state management, reusable components, improved performance, large and comprehensive ecosystem. Disadvantages: More suitable for larger projects, requires a learning curve to get started.",
    "lang": "en"
  },
  {
    "question": "How can I upload and display an image file in JavaScript?",
    "answer": "Using the File and FileReader APIs in JavaScript, you can upload an image file and display it on a web page.",
    "lang": "en"
  },
  {
    "question": "How can I start a successful personal business project?",
    "answer": "To start a successful personal business project, you need to research the market, define goals and strategies, create a business plan, focus on customer communication and proper marketing.",
    "lang": "en"
  },
  {
    "question": "How can I cope with daily stress?",
    "answer": "To reduce daily stress, you can use techniques such as breathing exercises, physical exercise, time management, meditation, and seek counseling and psychological support methods.",
    "lang": "en"
  },
  {
    "question": "What are the important points in cooking education?",
    "answer": "Important points in cooking education include focusing on selecting quality ingredients, familiarizing yourself with cooking techniques, accuracy in ingredient measurements, learning cooking tips and tricks, and gaining experience through continuous practice.",
    "lang": "en"
  },
  {
    "question": "How can I improve my daily lifestyle?",
    "answer": "To improve your daily lifestyle, you can focus on work-life balance, time management, healthy eating, exercise and physical activity, adequate rest, healthy social relationships, and self-care.",
    "lang": "en"
  },
  {
    "question": "What are the important points in buying insurance?",
    "answer": "Important points in buying insurance include carefully studying the insurance terms and conditions, determining needs and required coverage, comparing prices and insurance companies, consulting with insurance experts, and reviewing contract terms before signing.",
    "lang": "en"
  },
  {
    "question": "How can I pay attention to personal financial management?",
    "answer": "For personal financial management, you can use budgeting, saving, reducing unnecessary expenses, smart investing, timely payment of bills and debts, and gaining awareness about financial issues and investments.",
    "lang": "en"
  },
  {
    "question": "What are the important points in regular sports training?",
    "answer": "Important points in regular sports training include setting achievable goals, gradually increasing the number of repetitions and intensity, maintaining proper form and technique, listening to your body, and staying hydrated.",
    "lang": "en"
  }
];

export { nouns, adjs, qas };
