import React from "react";
import { useTranslation } from "react-i18next";

const ContactForm: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="contactform-bg rounded-[14px] md:rounded-[20px] p-6 md-[30px]">
      <h2 className="text-[#0F0A19] text-xl md:text-3xl mb-[10px] md:mb-[14px] tracking-[2%]">
        {t("aboutus.getintouch")}
      </h2>

      <p className="text-[#0F0A19B2] text-sm md:text-base">
        {t("aboutus.disc3")}
      </p>

      <form className="flex flex-col gap-5 mt-8">
        <input
          type="text"
          placeholder={t("aboutus.name")}
          className="placeholder:text-[#0F0A1999] placeholder:font-normal bg-white border border-[#0000001F] h-12 md:h-[52px] w-full outline-[#3D2278] text-[#0F0A19] font-medium text-sm md:text-base rounded-[10px] px-4"
        />

        <input
          type="email"
          placeholder={t("aboutus.email")}
          className="placeholder:text-[#0F0A1999] placeholder:font-normal bg-white border border-[#0000001F] h-12 md:h-[52px] w-full outline-[#3D2278] text-[#0F0A19] font-medium text-sm md:text-base rounded-[10px] px-4"
        />

        <input
          type="text"
          placeholder={t("aboutus.company")}
          className="placeholder:text-[#0F0A1999] placeholder:font-normal bg-white border border-[#0000001F] h-12 md:h-[52px] w-full outline-[#3D2278] text-[#0F0A19] font-medium text-sm md:text-base rounded-[10px] px-4"
        />

        <textarea
          placeholder={t("aboutus.describe")}
          className="placeholder:text-[#0F0A1999] placeholder:font-normal bg-white border border-[#0000001F] resize-none h-[140px] md:h-[160px] w-full outline-[#3D2278] text-[#0F0A19] font-medium text-sm md:text-base rounded-[10px] p-4"
        />

        <button
          type="button"
          className="bg-[#3D2278] mt-3 text-white rounded-[10px] w-full h-11 md:h-[52px] text-center px-3 text-sm md:text-lg tracking-[2%] font-medium transition-opacity duration-300 hover:opacity-90"
        >
          {t("btns.submit")}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
