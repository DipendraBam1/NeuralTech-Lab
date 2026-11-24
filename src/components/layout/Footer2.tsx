import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const Footer2 = () => {
  return (
    <footer className="w-full border-t border-gray-100 bg-white">
      <div className="flex min-h-[92px] w-full flex-col items-center justify-between gap-5 px-6 py-6 sm:flex-row sm:px-10 lg:px-[54px]">

        {/* Copyright */}
        <p className="text-[11px] text-slate-500">
          © 2026 Neural Tech Labs. All rights reserved.
        </p>

        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-500">
          <a href="/terms" className="transition-colors hover:text-primary">
            Terms & Conditions
          </a>
          <a href="/cookies" className="transition-colors hover:text-primary">
            Cookies
          </a>
          <a href="/privacy-policy" className="transition-colors hover:text-primary">
            Privacy Policy
          </a>
          <a href="/sitemap" className="transition-colors hover:text-primary">
            Sitemap
          </a>
        </nav>


{/* Social Media */}
<div className="flex items-center gap-3">
  <a
    href="#"
    aria-label="Facebook"
    className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-white transition hover:bg-slate-200"
  >
    <FaFacebookF size={13} />
  </a>

  <a
    href="#"
    aria-label="X"
    className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-white transition hover:bg-slate-200"
  >
    <FaXTwitter size={13} />
  </a>

  <a
    href="#"
    aria-label="Instagram"
    className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-white transition hover:bg-slate-200"
  >
    <FaInstagram size={13} />
  </a>

  <a
    href="#"
    aria-label="LinkedIn"
    className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-white transition hover:bg-slate-200"
  >
    <FaLinkedinIn size={13} />
  </a>
</div>


      </div>
    </footer>
  );
};

export default Footer2;
