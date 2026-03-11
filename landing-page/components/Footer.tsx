import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <nav>
          <ul>
            <li><Link href="#benefict">Benefits</Link></li>
            <li><Link href="#specifications">Specifications</Link></li>
            <li><Link href="#how_to">How-to</Link></li>
          </ul>
        </nav>
      </div>
      <br /><br />
      <br /><br />

      <div id="fundo">
        <div className="credits">
          <div className="logo">
            <div><img src="/assets/Logo.png" alt="Logo" /></div>
          </div>
          <div id="text">
            <p>@ Area</p>
            <p>2026</p>
          </div>
        </div>
        <p id="all">All Rights Reserved</p>
      </div>
      <br />
    </footer>
  );
}