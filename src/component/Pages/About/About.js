import React from "react";
import Head from "../Head/Head";
import './About.css'


const About =() => {
  return (
    <div >
      <Head/>
       <div className={'container py-4'}>
            <h3 className={'mb-3'}>
                درباره ما
            </h3>
            <div className={'about-paragraph'}>
                <p >
                    تلویزیون، همان جعبه جادویی که حالا بیشتر شبیه صفحه ای از کاغذ روز به روز، رو به نازکی می رود به عنوان رسانه ای تاثیرگذار و محبوب میان مردم دنیا زنده است. این مخاطبین هستند که با همراهی و حیات بخشی به تلویزیون، ریلیتی شو یا برنامه های زنده تلویزیونی را پرمخاطب تر کرده اند.
                </p>
                
                <p>
                    نوبین، پنجره ای ست برای تماشای مستند مسابقه، برنامه های تلویزیونی واقع نما و… از طریق چشم های شما.
                    تولد استودیو نوبین به سال 1389 و زمان ساخت اولین سری مستند مسابقه فرمانده برمی گردد و بعد از آن با تولید مجموعه های خانه ما، ضدگلوله، خونه به خونه، کارساز و بریم بسازیم و… جذابیت و هیجان را از طریق دیدن به بینندگان خود منتقل کرد.

                    مسیری که پیش گرفته ایم روشن است، روشن به درخشش چشم های شما.
                </p>
            </div>
       </div>
    </div>
  );
}

export default About;
