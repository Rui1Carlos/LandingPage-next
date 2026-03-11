"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import '../styles/styly.css'; // Importa o CSS globalmente

export default function Home() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  // Bloquear rolagem quando menu aberto
  useEffect(() => {
    if (menuActive) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('menu-open');
    } else {
      document.body.style.overflow = 'auto';
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.style.overflow = 'auto';
      document.body.classList.remove('menu-open');
    };
  }, [menuActive]);

  // Fechar menu ao pressionar ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="tudo">
      <header>
        <nav className="menu">
          <div id="A">
            <li>Area</li>
          </div>
          <div className={`centro ${menuActive ? 'active' : ''}`}>
            <ul>
              <li><Link href="#benefict">Benefits</Link></li>
              <li><Link href="#specifications">Specifications</Link></li>
              <li><Link href="#how_to">How To</Link></li>
              <li><Link href="#contact">Contact Us</Link></li>
            </ul>
            <input
              id="btn1-mobile"
              type="button"
              value="Learn More"
              onClick={closeMenu}
            />
          </div>

          <div>
            <button className="discover" id="btn1">
              Learn More
              <img src="/assets/↗.png" alt="" />
            </button>
          </div>

          <div
            className={`menu-toggle ${menuActive ? 'active' : ''}`}
            id="mobile-menu"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>

        <div
          className={`menu-overlay ${menuActive ? 'active' : ''}`}
          id="menu-overlay"
          onClick={closeMenu}
        ></div>
      </header>

      <main>
        <div className="titulo">
          <h1>Browse everything.</h1>
        </div>
        <br /><br />

        <div className="container">
          <div id="div-atras"></div>
          <div className="img" id="div-frente">
            <img src="/assets/Inner_screen.png" id="img-1" alt="Inner screen" />
            <img src="/assets/mobile.png" id="img-2" alt="Mobile" />
          </div>
        </div>

        <br /><br /><br />

        <div className="logo_cloud">
          <p>trusted by:</p><br />
          <div className="logo_row">
            <img src="/assets/Logo 1.png" alt="Logo 1" />
            <img src="/assets/Logo 2.png" alt="Logo 2" />
            <img src="/assets/Logo 3.png" alt="Logo 3" />
            <img src="/assets/Logo 4.png" alt="Logo 4" />
            <img src="/assets/Logo 5.png" alt="Logo 5" />
            <img src="/assets/Logo 6.png" alt="Logo 6" />
          </div>
        </div>
        <br />

        <div className="benefict" id="benefict">
          <div className="texto">
            <p id="p1">Benefits</p><br />
            <p id="p2">We’ve cracked the code.</p><br />
            <p id="p3">Area provides real insights, without the data overload.</p>
          </div>
          <br /><br />

          <div className="icons">
            <section className="icon">
              <hr />
              <br />
              <img src="/assets/Cable icon.png" alt="Cable icon" />
              <br />
              <p className="t_icone">Amplify Insights</p>
              <br />
              <p className="pg">
                Unlock data-driven decisions with comprehensive analytics,
                revealing key opportunities for strategic regional growth.
              </p>
            </section>
            <section className="icon">
              <hr />
              <br />
              <img src="/assets/Earth icon.png" alt="Earth icon" />
              <br />
              <p className="t_icone">Control Your Global Presence</p>
              <br />
              <p className="pg">
                Unlock data-driven decisions with comprehensive analytics,
                revealing key opportunities for strategic regional growth.
              </p>
            </section>
            <section className="icon">
              <hr />
              <br />
              <img src="/assets/Account icon-1.png" alt="Account icon" />
              <br />
              <p className="t_icone">Remove Language Barriers</p>
              <br />
              <p className="pg">
                Adapt to diverse markets with built-in localization for clear
                communication and enhanced user experience.
              </p>
            </section>
            <section className="icon">
              <hr />
              <br />
              <img src="/assets/Chart icon.png" alt="Chart icon" />
              <br />
              <p className="t_icone">Visualize Growth</p>
              <br />
              <p className="pg">
                Generate precise, visually compelling reports that illustrate
                your growth trajectories across all regions.
              </p>
            </section>
            <br />
          </div>
          <br /><br />

          <div className="img_hero">
            <img id="img_hero" src="/assets/Hero Image.png" alt="Hero" />
          </div>
          <br />
        </div>
        <br /><br /><br /><br /><br />

        <section className="features_carrossel">
          <div className="texto">
            <div className="title">
              <p id="p2">See the Big Picture</p><br />
              <p className="pg">
                Area turns your data into clear, vibrant visuals that show you
                exactly what's happening in each region.
              </p>
            </div>
            <br />
            <div className="list">
              <ol>
                <li>
                  <p className="l-p1">01</p>
                  <p>
                    Spot Trends in Seconds: No more digging through numbers.li
                  </p>
                </li>
                <li>
                  <p className="l-p1">02</p>
                  <p>
                    Get Everyone on the Same Page: Share easy-to-understand
                    reports with your team.
                  </p>
                </li>
                <li>
                  <p className="l-p1">03</p>
                  <p>
                    Make Presentations Pop: Interactive maps and dashboards keep
                    your audience engaged.
                  </p>
                </li>
                <li>
                  <p className="l-p1">04</p>
                  <p>
                    Your Global Snapshot: Get a quick, clear overview of your
                    entire operation.
                  </p>
                </li>
              </ol>
              <input className="discover" type="button" value="Discover More" />
              <span></span>
            </div>
            <br /><br />
          </div>

          <div className="features_car">
            <img src="/assets/Image.png" alt="Features" />
          </div>
          <br />
        </section>

        <section className="specifications">
          <hr />
          <div className="content">
            <div>
              <p id="p3">Specs</p>
              <h2>Why Choose Area?</h2>
              <p className="spci-p" id="p3">
                You need a solution that keeps up. That’s why we developed Area.
                A developer-friendly approach to streamline your business.
              </p>
              <br />
              <input className="discover" type="button" value="Discover More" />
            </div>
          </div>
          <br /><br />
        </section>

        <section className="table" id="tab">
          <div className="card">
            <div className="card-header">Area</div>
            <table className="card-table">
              <tbody>
                <tr><td><div className="item"><img src="/assets/Check icon.png" alt="" /><p>Ultra-fast browsing</p></div></td></tr>
                <tr><td><div className="item"><img src="/assets/Check icon.png" alt="" /><p>Advanced AI insights</p></div></td></tr>
                <tr><td><div className="item"><img src="/assets/Check icon.png" alt="" /><p>Seamless integration</p></div></td></tr>
                <tr><td><div className="item"><img src="/assets/Check icon.png" alt="" /><p>Advanced AI insights</p></div></td></tr>
                <tr><td><div className="item"><img src="/assets/Check icon.png" alt="" /><p>Ultra-fast browsing</p></div></td></tr>
                <tr><td><div className="item"><img src="/assets/Check icon.png" alt="" /><p>Full UTF-8 support</p></div></td></tr>
              </tbody>
            </table>
          </div>

          <div className="card">
            <div className="card-header">WebSurge</div>
            <table className="card-table">
              <tbody>
                <tr><td><div className="item"><img src="/assets/Check icon.png" alt="" /><p>Fast browsing</p></div></td></tr>
                <tr><td><div className="item"><img src="/assets/Check icon.png" alt="" /><p>Basic AI recommendations</p></div></td></tr>
                <tr><td><div className="item"><img src="/assets/Check icon.png" alt="" /><p>Restricts customization</p></div></td></tr>
                <tr><td><div className="item"><img src="/assets/Close icon.png" alt="" /><p>Basic AI insights</p></div></td></tr>
                <tr><td><div className="item"><img src="/assets/Check icon.png" alt="" /><p>Fast browsing</p></div></td></tr>
                <tr><td><div className="item"><img src="/assets/Close icon.png" alt="" /><p>Potential display errors</p></div></td></tr>
              </tbody>
            </table>
          </div>

          <div className="card">
            <div className="card-header">HyperView</div>
            <table className="card-table">
              <tbody>
                <tr><td><div className="item"><img src="/assets/Close icon.png" alt="" /><p>Moderate speeds</p></div></td></tr>
                <tr><td><div className="item"><img src="/assets/Close icon.png" alt="" /><p>No AI assitance</p></div></td></tr>
                <tr><td><div className="item"><img src="/assets/Close icon.png" alt="" /><p>Steep learning curve</p></div></td></tr>
                <tr><td><div className="item"><img src="/assets/Close icon.png" alt="" /><p>No AI assistance</p></div></td></tr>
                <tr><td><div className="item"><img src="/assets/Close icon.png" alt="" /><p>Moderate speeds</p></div></td></tr>
                <tr><td><div className="item"><img src="/assets/Close icon.png" alt="" /><p>Partial UTL-8 support</p></div></td></tr>
              </tbody>
            </table>
          </div>
        </section>
        <br /><br />

        <div className="how_work">
          <hr />
          <div className="map" id="how_to">
            <h2>Map Your Success</h2>
            <input className="discover" type="button" value="Discover More" />
          </div>
          <hr />
          <div className="icons">
            <section>
              <p id="p3">01</p>
              <div>
                <p className="icons_p">Get Started</p>
                <p id="p3">With our intuitive setup, you’re up and running in minutes.</p>
              </div>
            </section>
            <section>
              <p id="p3">02</p>
              <div>
                <p className="icons_p">Customize and Configure</p>
                <p id="p3">Adapt Area to your specific requirements and preferences.</p>
              </div>
            </section>
            <section>
              <p id="p3">03</p>
              <div>
                <p className="icons_p">Grow Your Business</p>
                <p id="p3">Make informed decisions to exceed your goals.</p>
              </div>
            </section>
          </div>
        </div>
        <br /><br />

        <div className="img_hero">
          <img id="img_hero" src="/assets/Image (3).png" alt="Success" />
        </div>
        <br /><br /><br />

        <section className="centered" id="contact">
          <br />
          <hr />
          <div>
            <h1 id="h1">Connect with us</h1>
          </div>
          <div>
            <p>
              Schedule a quick call to learn how Area can turn your regional data
              into a powerful advantage.
            </p>
          </div>
          <button id="learn">
            Learn More
            <img src="/assets/↗.png" alt="" />
          </button>
          <hr />
        </section>
      </main>

      <br /><br /><br /><br />

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
    </div>
  );
}