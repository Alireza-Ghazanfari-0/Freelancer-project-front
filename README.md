
# Freelancer Project - Frontend | فرانت‌اند پروژه فریلنسری

A responsive, multi-page freelance web app built with **HTML, CSS, Tailwind CSS, JavaScript, and React**.  
یک اپلیکیشن فریلنسری چندصفحه‌ای و ریسپانسیو، ساخته‌شده با **HTML، CSS، Tailwind CSS، JavaScript و React**.

## 📌 Description | توضیحات

Users can register and choose a role (Freelancer or Employer).  
Employers post projects; freelancers browse them and send price requests.  
Admins have full access to manage users and activities.

کاربران ثبت‌نام می‌کنند و نقش خود را انتخاب می‌کنند (فریلنسر یا کارفرما).  
کارفرما پروژه ثبت می‌کند و فریلنسرها درخواست می‌دهند.  
ادمین بر همه چیز نظارت دارد.

### ✅ OTP Simulation | شبیه‌سازی OTP
OTP code is shown on the login page instead of sending SMS (handled via backend).  
کد ورود OTP به‌جای ارسال پیامک، مستقیماً در صفحه نمایش داده می‌شود (در بک‌اند مدیریت شده).

### ✅ Admin Approval | تأیید توسط ادمین
After registration and profile completion, admin approval is required.  
بعد از عضویت و تکمیل پروفایل، حساب باید توسط ادمین تأیید شود.

---

## 🔗 Live URLs | لینک‌های مهم

- 🌐 Frontend Website: [freelancer-web-application.netlify.app](https://freelancer-web-application.netlify.app/)
- 💻 Frontend Repo: [GitHub](https://github.com/Alireza-Ghazanfari-0/Freelancer-project-front)

- 🧠 Backend Repo: [GitHub](https://github.com/Alireza-Ghazanfari-0/Freelancer-project-backend)
- ⚙️ Backend API (Render): [freelancer-project-backend-87md.onrender.com](https://freelancer-project-backend-87md.onrender.com/)
- ☁️ MongoDB Atlas URL:
  ```
  mongodb+srv://<username>:<password>@cluster0-freelancer.pjgkpj1.mongodb.net/react-app-freelancer-mongo-atlas
  ```

---

## 🧰 Tech Stack | تکنولوژی‌های استفاده شده

- React + Tailwind CSS
- Responsive Design + Dark/Light Mode
- Routing (react-router-dom)
- Authentication & Authorization
- Role-based access (Freelancer, Employer, Admin)
- Form validation (react-hook-form)
- State & Server management (react-query)
- Custom hooks, context API, modals, loading/errors
- Sorting & filtering on data tables
- Code-splitting, organized file structure under `/src`

### 📁 Structure (پوشه‌بندی):
- `src/context`, `features`, `hooks`, `pages`, `services`, `ui`, `utilities`
- داخل `features`: تفکیک شده بر اساس نوع محتوا و کاربرد

---

## 📱 Sample Phone Numbers | شماره‌های آماده تست

You can login with any phone number, but the following are pre-configured:  
شما می‌توانید با هر شماره‌ای وارد شوید، اما شماره‌های زیر قبلاً ثبت شده‌اند:

- `09360000000` – Freelancer  
- `09361111111`, `09360009876`, `09367140000` – Employers  
- `09367141111` – Freelancer  
- `09367149999` – Admin  

> Suggested: Try logging in with a new number to see full registration & approval process.

---

Thank you 🙌 | با تشکر 🙌  
**Alireza Ghazanfari**
alireza.ghazanfari@yahoo.com
