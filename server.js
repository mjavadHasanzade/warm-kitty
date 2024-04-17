const express = require("express");
const sequelize = require("./database");
const Adjectives = require("./Models/adjective");
const Nouns = require("./Models/nouns");
const defaultRoutes = require("./Routes/default");
const nounsRoutes = require("./Routes/nouns");
const adjectiveRoutes = require("./Routes/adjective");
const qaRoutes = require("./Routes/fakeQA");
var bodyParser = require("body-parser");
const FakeQA = require("./Models/fakeQA");

const app = express();

//! type of data
//! naun
//! adj

//? initialize the database
sequelize
  .sync({ force: true })
  .then(async () => {
    await Nouns.bulkCreate([
      { name: "chockolate", emoji: "🍫" },
      { name: "glass", emoji: "🍷" },
      { name: "Cat", emoji: "🐈" },
      { name: "Pen", emoji: "🖊️" },
      { name: "pillow", emoji: "💩" },
    ]);
    await Adjectives.bulkCreate([
      { name: "warm", type: "any" },
      { name: "scary", type: "any" },
      { name: "Blue", type: "any" },
      { name: "funny", type: "any" },
      { name: "salty", type: "any" },
    ]);

    await FakeQA.bulkCreate([
      {
        question: "چگونه می‌توانم یک نقشه Google Maps را در وبسایتم نمایش دهم؟",
        answer:
          "برای نمایش یک نقشه Google Maps در وبسایت، باید از API Google Maps استفاده کنید و کلید API معتبری را دریافت کرده و در کدهای وبسایتتان قرار دهید.",
      },
      {
        question: "مزایا و معایب استفاده از فریم‌ورک React چیست؟",
        answer:
          "مزایا: توسعه سریع‌تر، مدیریت بهتر وضعیت، قابلیت استفاده مجدد اجزاء، بهبود عملکرد، اکوسیستم بزرگ و جامع. معایب: مناسب برای پروژه‌های بزرگتر، نیاز به یادگیری courve زمانی برای شروع.",
      },
      {
        question:
          "چگونه می‌توانم تصویر یک فایل را در جاوااسکریپت آپلود کرده و نمایش دهم؟",
        answer:
          "با استفاده از API File و API FileReader در جاوااسکریپت، می‌توانید تصویر فایل را بارگذاری کرده و آن را در صفحه نمایش دهید.",
      },
      {
        question:
          "چگونه می‌توانم یک پروژه موفق در حوزه کسب و کار شخصی را راه‌اندازی کنم؟",
        answer:
          "برای راه‌اندازی یک پروژه موفق در حوزه کسب و کار شخصی، نیاز است به بررسی بازار، تعیین هدف و استراتژی، ایجاد یک برنامه کسب و کار، ارتباط با مشتریان و بازاریابی مناسب تمرکز کنید.",
      },
      {
        question: "چگونه می‌توانم با استرس روزمره کنار بیایم؟",
        answer:
          "برای کاهش استرس روزمره، می‌توانید از تمرین‌های تنفسی، تمرین بدنی، مدیریت زمان، مدیتیشن و استفاده از روش‌های مشاوره و پشتیبانی روانشناختی استفاده کنید.",
      },
      {
        question: "نکات مهم در آموزش آشپزی چیست؟",
        answer:
          "نکات مهم در آموزش آشپزی شامل تمرکز بر انتخاب مواد اولیه با کیفیت، آشنایی با تکنیک‌های پخت و پز، دقت در اندازه‌گیری مواد، آشنایی با ترفندهای آشپزی و تجربه و تمرین مداوم است.",
      },
      {
        question: "چگونه می‌توانم سبک زندگی روزمره بهبود ببخشم؟",
        answer:
          "برای بهبود سبک زندگی روزمره، می‌توانید به تعادل کار و زندگی، مدیریت زمان، تغذیه سالم، ورزش و فعالیت بدنی، استراحت کافی، روابط اجتماعی سالم و رسیدگی به خودتان توجه کنید.",
      },
      {
        question: "نکات مهم در خرید بیمه چیست؟",
        answer:
          "نکات مهم در خرید بیمه شامل مطالعه دقیق شرایط بیمه، تعیین نیازها و پوشش‌های مورد نیاز، مقایسه قیمت‌ها و شرکت‌های بیمه، مشاوره با کارشناسان بیمه و بررسی شرایط قرارداد قبل از امضا است.",
      },
      {
        question: "چگونه می‌توانم به مدیریت مالی شخصیم توجه کنم؟",
        answer:
          "برای مدیریت مالی شخصی، می‌توانید بودجه‌بندی، پس‌انداز، کاهش هزینه‌های غیرضروری، سرمایه‌گذاری هوشمند، پرداخت به موقع قبوض و بدهی‌ها و آگاهی درباره مسائل مالی و سرمایه‌گذاری استفاده کنید.",
      },
      {
        question: "نکات مهم در آموزش ورزش به صورت منظم چیست؟",
        answer:
          "نکات مهم در آموزش ورزش به صورت منظم شامل تعیین هدف‌های قابل دسترس، انتوصیه می‌کنم به تعداد دلخواه خودتان، آبجکت‌های دیگر با موضوعات مورد نظرتان را به آرایه اضافه کنید.",
      },
    ]);

    console.log("db sync");
  })
  .catch((err) => console.log(err));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use("/", defaultRoutes);
app.use("/nouns", nounsRoutes);
app.use("/adj", adjectiveRoutes);
app.use("/qas", qaRoutes);

app.listen(3000, () => {
  console.log("server is listeing to port http:localhost:3000");
});
