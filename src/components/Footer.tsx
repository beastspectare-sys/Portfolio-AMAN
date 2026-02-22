const Footer = () => {
  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center flex flex-col items-center gap-4">

        {/* Download CV Button */}
        <a
          href="/Aman_Dolani_CV.pdf"
          download
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Download CV
        </a>

        {/* Copyright */}
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} Aman Dolani. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;