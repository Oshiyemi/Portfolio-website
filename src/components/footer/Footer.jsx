import "./Footer.css";

const OWNER_NAME = "Oshiyemi Kashopefoluwa David";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="siteFooter" aria-label="Footer">
      <p className="siteFooter__copyright">
        &copy; {currentYear} {OWNER_NAME}. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
