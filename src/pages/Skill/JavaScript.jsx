import React from 'react'
import SkillSection from './UI/SkiilSection'
import SkillRoad from './UI/SkillRoad'
import bg from '../../asset/images/bg.png'
import roadmap from '../../asset/images/roadmap.png'
function Js() {
  
  return (

        <section className="  mx-auto flex flex-col  ">

              <h1 className="inline-block p-10 ">
              جاوا اسکریپت 
              </h1>
       

              <SkillSection explain={'جاوا اسکریپت یک زبان برنامه نویسی محبوب است که برای ایجاد صفحات وب پویا و تعاملی استفاده می شود. این به توسعه دهندگان اجازه می دهد تا عملکرد و تعامل را به وب سایت های خود اضافه کنند و آنها را جذاب تر و کاربر پسندتر کندضوعا'}></SkillSection>


                <section className="flex gap-5 justify-center mx-auto h-[70vh] mt-8 w-full bg-hero-pattern1 bg-cover">
                            
                <SkillRoad title={'نتیجه'}></SkillRoad>
                <SkillRoad title={'نقاط ضعف جاوا اسکریپت'}></SkillRoad>
                <SkillRoad title={'دلیل برای یادگیری جاوا اسکریپت'}></SkillRoad>
                <SkillRoad title={'آینده جاوا اسکریپت'}></SkillRoad>
                <SkillRoad title={'نقشه راه'}></SkillRoad>
                <SkillRoad title={'شروع کار با جاوا اسکریپت'}></SkillRoad>
                <SkillRoad title={'کاربرد جاوا اسکریپت در دنیای برنامه نویسی'}></SkillRoad>


              
               </section>

               <section className='container mx-auto '>
                <h1 className="inline-block py-8 ">
                کاربرد جاوا اسکریپت در دنیای برنامه نویسی چیست؟
                </h1>
                <p className='px-5'>
                                      نسخه های اولیه زبان اسکریپت فقط برای استفاده داخلی بود. پس از اینکه نت اسکیپ آن را به عنوان یک مشخصات استاندارد برای مرورگرهای وب به ECMA International ارائه کرد، جاوا اسکریپت پیشگام انتشار ECMAScript بود. یک زبان برنامه نویسی همه منظوره برای اطمینان از قابلیت همکاری صفحات وب در مرورگرها و دستگاه های مختلف.
                      پیش‌تر به محبوبیت زبان جاوا اسکریپت اشاره کردیم. این محبوبیت بی دلیل نیست چرا که با این زبانِ شی گرا شما قادر خواهید بود تا سایت‌های بی‌روح خود را جان بخشی کنید و با کاربران خود تعامل داشته باشید. یعنی می‌توانید فایل‌های انیمیشنی، صوتی و تصویری را روی سایت خود به نمایش بگذارید. همچنین می‌توانید روی سایت‌تان تایمر قرار دهید، رنگ‌ها را با حرکت موس تغییر دهید و بسیاری کارهای دیگر که باعث جذابیت بیشتر صفحات وب می‌شوند.
                      اما این تمام چیزی نیست که جاوا اسکریپت در اختیار شما قرار می‌دهد. شما با استفاده از این زبان می‌توانید شروع به ساخت برنامه‌های وب و موبایل و دسکتاپ کنید. برای این منظور می‌توانید از فریم‌ورک‌های مختلف JavaScript که مجموعه‌ای از کتابخانه‌ها را در اختیار شما قرار می‌دهند استفاده کنید. امروزه جاوا اسکریپت دارای چارچوب ها و کتابخانه های زیادی برای ساده سازی پروژه های پیچیده مانند AngularJS، jQuery و ReactJS است. در حالی که بیشتر به برنامه های مبتنی بر وب پاسخ می دهد، ویژگی های برنامه نویسی جاوا اسکریپت پیاده سازی های دیگری در زمینه های مختلف دارد. در زیر چندین کاربرد اساسی جاوا اسکریپت آورده شده است.

                      <br />
                      <br />


                      1. برنامه های وب و موبایل
                      توسعه چارچوب های جاوا اسکریپت، متشکل از کتابخانه های کد جاوا اسکریپت، به توسعه دهندگان اجازه می دهد تا از کدهای جاوا اسکریپت از پیش نوشته شده در پروژه های خود استفاده کنند. این باعث صرفه جویی در زمان و تلاش آنها می شود تا مجبور باشند ویژگی های برنامه نویسی را از ابتدا کدنویسی کنند.
                      هر فریم ورک جاوا اسکریپت دارای ویژگی هایی است که هدف آن ساده سازی فرآیند توسعه و اشکال زدایی است.
                      به عنوان مثال، فریم‌ورک‌های جاوا اسکریپت جلویی مانند jQuery و ReactJS کارایی طراحی را بهبود می‌بخشند. آنها به توسعه دهندگان این امکان را می دهند تا بدون تأثیر بر یکدیگر، عملکرد یا ارزش، مجدداً از مؤلفه های کد استفاده کرده و به روز کنند.
                      در همین حال، فریمورک‌های توسعه اپلیکیشن موبایل مانند Cordova و Titanium امکان ایجاد اپلیکیشن‌های بومی یا ترکیبی را فراهم می‌کنند.
                      پیاده سازی کد جاوا اسکریپت در Node.js نیز نقش مهمی در توسعه وب دارد. Node.js به دلیل ماهیت تک رشته ای و معماری غیر مسدود کننده می تواند زمان پاسخگویی سرور را کاهش دهد و تاخیرها را حذف کند. Node.js همچنین به اندازه کافی سبک است تا به عنوان یک ابزار مقیاس پذیر برای میکروسرویس ها عمل کند و به شما امکان می دهد یک برنامه واحد شامل سرویس های کوچک با فرآیندهای جداگانه توسعه دهید.

                        <br />
                        <br />

                      2. ساختن وب سرورها و برنامه های کاربردی سرور
                      از طریق Node.js، جاوا اسکریپت به توسعه‌دهندگان اجازه می‌دهد تا سرورهای وب و زیرساخت‌های بک‌اند بسازند و در زمان و تلاش شما در ایجاد وب سرور صرفه‌جویی کنند. ماژول HTTP داخلی به شما امکان می دهد یک سرور HTTP پایه ایجاد کنید که متن ساده را هنگام دسترسی کاربران به یک صفحه وب نمایش می دهد. می‌توانید از وب سرور Node.js، Node-OS یا سرورهای شخص ثالث مانند Microsoft Internet Information Services (IIS) و Apache برای رسیدگی به درخواست‌های HTTP استفاده کنید. به خاطر داشته باشید که Node-OS بر روی سیستم عامل های لینوکس بهترین عملکرد را دارد زیرا بر روی هسته لینوکس ساخته شده است.

                      <br />
                      <br />
                      3. رفتار تعاملی در وب سایت ها
                      یکی از عملکردهای اصلی جاوا اسکریپت افزودن پویایی به صفحات وب است. این شامل نمایش انیمیشن ها، تغییر قابلیت مشاهده متن و ایجاد منوهای کشویی است.در حالی که شما می توانید تنها از کدهای HTML و CSS برای ساخت یک وب سایت استفاده کنید، اما فقط یک صفحه نمایش ثابت خواهد داشت. با جاوا اسکریپت، کاربر می تواند با صفحات وب تعامل داشته باشد و تجربه مرور بهتری داشته باشد.علاوه بر این، جاوا اسکریپت به شما امکان می دهد محتوای HTML و مقادیر ویژگی ها را بدون بارگیری مجدد صفحه وب تغییر دهید. با جاوا اسکریپت، می توانید تجربه مرور وب کاربران را با استفاده از کوکی ها نیز بهبود بخشید. ایجاد، خواندن و حذف کوکی ها در جاوا اسکریپت به ویژگی document.cookie نیاز دارد که به عنوان گیرنده و تنظیم کننده مقادیر کوکی ها عمل می کند.
                      <br />
                      <br />
                      4. توسعه بازی
                      جاوا اسکریپت اگر با HTML5 و یک رابط برنامه نویسی کاربردی (API) مانند WebGL استفاده شود، می تواند به شما در ساخت یک بازی کمک کند. بسیاری از موتورهای بازی مبتنی بر جاوا اسکریپت مانند Phaser، GDevelop و Kiwi.js برای رندر کردن گرافیک، بازیافت کد و برنامه‌های چند پلتفرمی در دسترس هستند. برخی از بازی های ساخته شده با موتورهای بازی جاوا اسکریپت عبارتند از Angry Birds، The Wizard و 2048.
                      به صورت کلی می‌توان کاربردهای زبان جاوا اسکریپت را به صورت زیر بیان کرد :
                      · برنامه نویسی فرانت اند
                      · برنامه نویسی بک اند با جاوا اسکریپت
                      · برنامه نویسی نرم افزارهای موبایل
                      · برنامه نویسی نرم افزارهای دسکتاپ
                </p>
               </section>


               <section className='bg-hero-pattern2 h-[80vh]  bg-no-repeat	'></section>

               <section className='container mx-auto '>
                <h1 className="inline-block py-8 ">
                شروع کار با جاوا اسکریپت
                </h1>
                <p className='px-5'>
                                    برای شروع یادگیری جاوا اسکریپت، باید درک اولیه ای از HTML و CSS داشته باشید. هنگامی که به درک خوبی رسیدید، می توانید به جاوا اسکریپت بروید و شروع به نوشتن اسکریپت های خود کنید.
                    منابع زیادی به صورت آنلاین برای کمک به یادگیری جاوا اسکریپت موجود است، از جمله آموزش ها، فیلم ها و دوره های آنلاین. مهم است که به طور منظم تمرین کنید و تکنیک های مختلف کدنویسی را برای بهبود مهارت های خود آزمایش کنید.
                    
                    بهترین سایت‌های آموزش جاوا اسکریپت عبارتند از:
                    <br />
                    <a href="">JavaScript.com</a>
                    <br />
                    <a href="">W3schools</a>
                    <br />
                   <a href=""> Mozilla Developer Network</a>
                   <br />
                    
                    بهترین سایت‌های آموزش جاوا اسکریپت به زبان فارسی عبارتند از:
                    <br />
                    <a href="">آکادمی آموزش برنامه‌نویسی سبزلرن</a>
                    <br />
                    <a href="">آموزش جاوا اسکریپت موزیلا</a>
                </p>
               </section>

               <section className='mx-auto  w-full flex justify-center'>
                <img src={roadmap} alt="" className='w-full mr-8'/>
               </section>


                {/* <section>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L34.3,160C68.6,160,137,160,206,170.7C274.3,181,343,203,411,224C480,245,549,267,617,245.3C685.7,224,754,160,823,160C891.4,160,960,224,1029,261.3C1097.1,299,1166,309,1234,272C1302.9,235,1371,149,1406,106.7L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg> 
                </section> */}


                  <section className='bg-hero-pattern3 bg-no-repeat  border'>

                    <h1>نظرات کاربران</h1>
                    <ul>
                      <li>قبل از مطرح کردن هرگونه سوال ، بخش سوالات دیگران را مطالعه نمایید.</li>
                      <li>در صورت وجود هرگونه مشکل از طریق بخش تیکت ها ، مشکل خود را پیگیری نمایید.</li>
                      <li>کامنت خود را بصورت فارسی تایپ نمایید. از به کار بردن کلمات رکیک یا توهین آمیز خودداری نمایید. در صورت مشاهده کامنت تایید نمیشود.</li>
                    </ul>

                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button>ارسال دیدگاه</button>
                  </section>


        </section>
      )
      
}

export default Js