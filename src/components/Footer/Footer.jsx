import { Facebook, Instagram, Twitter, Youtube } from "../../assets";

const Footer = () => {
  return (
    <footer className="pt-16 pb-12 relative">
      <div className="w-full max-w-[492px] flex flex-col gap-8 mx-auto text-center">
        <div className="flex max-w-[240px] mx-auto w-full justify-between">
          <Facebook />
          <Instagram />
          <Twitter />
          <Youtube />
        </div>
        <div className="flex justify-between">
          <p className="font-bold text-[#111827] text-[18px] leading-[24px]">
            Conditions of Use
          </p>
          <p className="font-bold text-[#111827] text-[18px] leading-[24px]">
            Privacy & Policy
          </p>
          <p className="font-bold text-[#111827] text-[18px] leading-[24px]">
            Press Room
          </p>
        </div>
        <div>
          <p className="font-bold text-[#6B7280] text-[18px] leading-[24px]">
            © 2024 MovieBox by Yoga Ulil Al Baab
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
