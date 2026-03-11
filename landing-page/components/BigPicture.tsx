export default function BigPicture() {
  return (
    <section className="features_carrossel">
      <div className="texto">
        <div className="title">
          <p id="p2">See the Big Picture</p><br />
          <p className="pg">
            Area turns your data into clear, vibrant visuals that show you
            exactly what&apos;s happening in each region.
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
  );
}