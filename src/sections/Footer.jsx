const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Delhi, India</p>
        <p>|</p>
        <p>nipuntaneja05@gmail.com</p>
      </div>

      <div className="flex gap-3">
        <a
          href="https://github.com/nipuntaneja05"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="GitHub"
        >
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a
          href="https://www.linkedin.com/in/nipun-taneja-88b798288/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="LinkedIn"
        >
          <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2" />
        </a>
        <a
          href="https://twitter.com/nipuntaneja05"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="Twitter"
        >
          <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
        </a>
        <a
          href="https://instagram.com/nipuntaneja05"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="Instagram"
        >
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </a>
      </div>

      <p className="text-white-500">© 2026 Nipun Taneja. All rights reserved.</p>
    </footer>
  );
};

export default Footer;