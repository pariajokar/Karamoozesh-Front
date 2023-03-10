import logoSite from '../../asset/images/logo-site.png';

export default function Footer() {
  return (
    <footer
      className="flex items-center w-full h-[100px] pl-8 bg-[#C5D0DA] text-black-400 text-xs"
      style={{ direction: 'ltr' }}
    >
      <img
        src={logoSite}
        alt=""
        className="w-[75px] h-[75px] mr-4 bg-white rounded-full"
      />
      <div className="flex flex-col justify-center w-full h-full">
        <div className="flex">
          <p className="mr-4">درباره ما</p>
          <p>تماس با ما</p>
        </div>
        <div className="w-[90%] h-[0.5px] my-2 bg-black-900"></div>
        <p>
          تمامی حقوق برای سایت آموزشیار محفوظ است
        </p>
      </div>
    </footer>
  );
}
