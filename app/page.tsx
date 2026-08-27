export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100">
      {/* هدر */}
      <header className="flex items-center justify-between px-6 py-5 md:px-12">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-yellow-600 font-bold text-zinc-950">
            G
          </div>
          <span className="text-lg font-bold">سیگنال طلا</span>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
          <a href="#features" className="hover:text-amber-400">
            امکانات
          </a>
          <a href="#pricing" className="hover:text-amber-400">
            تعرفه‌ها
          </a>
          <a href="#faq" className="hover:text-amber-400">
            سوالات متداول
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="/login"
            className="hidden text-sm text-zinc-300 hover:text-white md:block"
          >
            ورود
          </a>
          <a
            href="/signup"
            className="rounded-lg bg-amber-400 px-4 py-2 text-sm font-bold text-zinc-950 transition hover:bg-amber-300"
          >
            ثبت‌نام رایگان
          </a>
        </div>
      </header>

      {/* بخش اصلی (Hero) */}
      <section className="mx-auto flex max-w-4xl flex-col items-center px-6 pb-20 pt-16 text-center md:pt-24">
        <div className="mb-5 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1 text-xs font-medium text-amber-400">
          سیگنال‌های لحظه‌ای طلا با تحلیل هوش مصنوعی
        </div>
        <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
          ترید طلا رو
          <span className="bg-gradient-to-l from-amber-400 to-yellow-600 bg-clip-text text-transparent">
            {" "}
            هوشمندتر{" "}
          </span>
          انجام بده
        </h1>
        <p className="mb-10 max-w-2xl text-lg text-zinc-400">
          سیگنال‌های دقیق طلا، مدیریت ریسک حرفه‌ای، و دستیار هوش مصنوعی که
          ۲۴ ساعته پاسخگوی سوالاتته — همه در یک جا.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="/signup"
            className="rounded-lg bg-amber-400 px-8 py-3 font-bold text-zinc-950 transition hover:bg-amber-300"
          >
            شروع رایگان
          </a>
          <a
            href="#features"
            className="rounded-lg border border-zinc-700 px-8 py-3 font-bold text-zinc-100 transition hover:border-zinc-500"
          >
            بیشتر بدون
          </a>
        </div>
      </section>

      {/* امکانات */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">
          چرا سیگنال طلا؟
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "سیگنال لحظه‌ای",
              desc: "به محض صدور سیگنال، همون لحظه از طریق اپلیکیشن و سایت مطلع میشی.",
              icon: "⚡",
            },
            {
              title: "دستیار هوش مصنوعی",
              desc: "به‌جای پشتیبان انسانی، یه هوش مصنوعی آموزش‌دیده ۲۴ ساعته پاسخگوته.",
              icon: "🤖",
            },
            {
              title: "مدیریت ریسک",
              desc: "هر سیگنال با حد ضرر و حد سود دقیق، طراحی‌شده برای حفظ سرمایه‌ت.",
              icon: "🛡️",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
            >
              <div className="mb-4 text-3xl">{f.icon}</div>
              <h3 className="mb-2 text-lg font-bold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* تعرفه‌ها */}
      <section id="pricing" className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="mb-4 text-3xl font-bold">اشتراک خودت رو انتخاب کن</h2>
        <p className="mb-12 text-zinc-400">
          بدون تعهد بلندمدت، هر ماه قابل لغوه.
        </p>
        <div className="rounded-2xl border border-amber-400/40 bg-gradient-to-b from-amber-400/10 to-transparent p-8">
          <div className="mb-2 text-sm text-amber-400">اشتراک ماهانه</div>
          <div className="mb-6 text-4xl font-extrabold">
            به‌زودی <span className="text-lg font-normal text-zinc-400">تومان</span>
          </div>
          <a
            href="/signup"
            className="inline-block rounded-lg bg-amber-400 px-8 py-3 font-bold text-zinc-950 transition hover:bg-amber-300"
          >
            رزرو جایگاه زودهنگام
          </a>
        </div>
      </section>

      {/* فوتر */}
      <footer className="border-t border-zinc-800 px-6 py-8 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} سیگنال طلا. تمامی حقوق محفوظ است.
      </footer>
    </main>
  );
}
