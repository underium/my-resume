import { asset, Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
        <link rel="stylesheet" href={asset("cv.css")} />
        <title>Javier Cáceres</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,700,400italic"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <div class="p-4 mx-auto max-w-screen-md bg-white">
        <header class="masthead">
          <h1>Javier Cáceres</h1>
          <h2>Programmer</h2>
        </header>
        <section id="contact">
          <h3>Contact</h3>
          <div class="grid-list">
            <div>
              <h4>Email</h4>
              <a href="mailto:hola@javiercaceres.es">hola@javiercaceres.es</a>
            </div>
            <div>
              <h4>Phone</h4>
              (912) 555-4321
            </div>
            <div>
              <h4>Website</h4>
              <a href="http://richardhendricks.example.com">
                richardhendricks.example.com
              </a>
            </div>
          </div>
        </section>
        <section id="about">
          <h3>About</h3>
          <article>
            <p>
              Richard hails from Tulsa. He has earned degrees from the
              University of Oklahoma and Stanford. (Go Sooners and Cardinal!)
              Before starting Pied Piper, he worked for Hooli as a part time
              software developer. While his work focuses on applied information
              theory, mostly optimizing lossless compression schema of both the
              length-limited and adaptive variants, his non-work interests range
              widely, everything from quantum computing to chaos theory. He
              could tell you about it, but THAT would NOT be a “length-limited”
              conversation!
            </p>
          </article>
        </section>
        <section id="profiles">
          <h3>Profiles</h3>
          <div class="grid-list">
            <div>
              <h4>Twitter</h4>
              neutralthoughts
            </div>
            <div>
              <h4>SoundCloud</h4>
              <a href="https://soundcloud.example.com/dandymusicnl">
                dandymusicnl
              </a>
            </div>
          </div>
        </section>

        <section class="section">
          <header>
            <h2 class="section-title">
              Work Experience <span class="item-count">(1)</span>
            </h2>
          </header>

          <section id="work">
            <section class="work-item">
              <label for="work-item-0"></label>

              <header class="clear">
                <div class="date">
                  <span class="startDate">Dec 2013</span>
                  <span class="endDate">- Dec 2014</span>
                </div>
                <div class="position">CEO/President</div>
                <div class="company">Pied Piper</div>
              </header>

              <span class="fas fa-map-marker-alt"></span>
              <span class="location">Palo Alto, CA,</span>
              <div class="item" id="work-item">
                <div class="summary">
                  <p>
                    Pied Piper is a multi-platform technology based on a
                    proprietary universal compression algorithm that has
                    consistently fielded high Weisman Scores™ that are not
                    merely competitive, but approach the theoretical limit of
                    lossless compression.
                  </p>
                </div>
                <ul class="highlights">
                  <li>
                    <p>
                      Build an algorithm for artist to detect if their music was
                      violating copy right infringement laws
                    </p>
                  </li>
                  <li>
                    <p>Successfully won Techcrunch Disrupt</p>
                  </li>
                  <li>
                    <p>
                      Optimized an algorithm that holds the current world record
                      for Weisman Scores
                    </p>
                  </li>
                </ul>
              </div>
            </section>
          </section>
        </section>
        <section class="section">
          <header>
            <h2 class="section-title">Volunteer</h2>
          </header>
          <section id="volunteer">
            <section class="volunteer-item">
              <label for="volunteer-item-0"></label>

              <header class="clear">
                <div class="header-left">
                  <div class="position">
                    Teacher
                  </div>
                  <div class="organization">
                    CoderDojo
                  </div>
                </div>
                <div class="date">
                  <span class="startDate">
                    Jan 2012
                  </span>
                  <span class="endDate">
                    - Jan 2013
                  </span>
                </div>
              </header>
              <div class="item">
                <div class="summary">
                  <p>Global movement of free coding clubs for young people.</p>
                </div>
                <ul class="highlights">
                  <li>
                    <p>Awarded 'Teacher of the Month'</p>
                  </li>
                </ul>
              </div>
            </section>
          </section>
        </section>
        <section class="section">
          <header>
            <h2 class="section-title">
              Education <span class="item-count">(1)</span>
            </h2>
          </header>

          <section id="education">
            <section class="education-item">
              <header class="clear">
                <div class="header-left">
                  <div class="studyType">
                    Bachelor
                  </div>
                  <div class="area">
                    Information Technology
                  </div>
                  <div class="institution">
                    University of Oklahoma
                  </div>
                </div>
                <div class="date">
                  <span class="startDate">
                    2011
                  </span>
                  <span class="endDate">
                    - 2014
                  </span>
                </div>
              </header>

              <ul class="courses">
                <li>DB1101 - Basic SQL</li>
                <li>CS2011 - Java Introduction</li>
              </ul>

              <div class="item">
              </div>
            </section>
          </section>
        </section>
        <section class="section">
          <header>
            <h2 class="section-title">
              Projects <span class="item-count">(1)</span>
            </h2>
          </header>
          <section id="projects">
            <section class="project-item">
              <header class="clear">
                <div class="position">Miss Direction</div>
                <div class="date">
                  <span class="startDate">Aug 2016</span>
                  <span class="endDate">- Aug 2016</span>
                </div>
              </header>
              <span class="website">
                <span class="fas fa-external-link-alt"></span>
                <a target="_blank" href="missdirection.example.com">
                  missdirection.example.com
                </a>
              </span>
              <ul class="keywords">
                <li>GoogleMaps</li>
                <li>Chrome Extension</li>
                <li>Javascript</li>
              </ul>
              <div class="item">
                <ul class="highlights">
                  <li>
                    <p>Won award at AIHacks 2016</p>
                  </li>
                  <li>
                    <p>Built by all women team of newbie programmers</p>
                  </li>
                  <li>
                    <p>
                      Using modern technologies such as GoogleMaps, Chrome
                      Extension and Javascript
                    </p>
                  </li>
                </ul>
              </div>
            </section>
          </section>
        </section>
        <section class="section">
          <header>
            <h2 class="section-title">Awards</h2>
          </header>
          <section id="awards">
            <section class="award-item">
              <label for="award-item-0"></label>

              <header class="clear">
                <div class="header-left">
                  <div class="title">
                    Digital Compression Pioneer Award
                  </div>
                  <div class="awarder">
                    Techcrunch
                  </div>
                </div>
                <div class="date">
                  2014
                </div>
              </header>

              <div class="item">
                <div class="summary">
                  <p>There is no spoon.</p>
                </div>
              </div>
            </section>
          </section>
        </section>
        <section class="section">
          <header>
            <h2 class="section-title">Publications</h2>
          </header>
          <section id="publications">
            <section class="publication-item">
              <label for="publication-item-0"></label>

              <header class="clear">
                <div class="header-left">
                  <span class="name">
                    Video compression for 3d media
                  </span>
                  <span class="publisher">
                    in Hooli
                  </span>
                </div>
                <span class="date">
                  1 Oct 2014
                </span>
              </header>

              <div class="item">
                <div class="summary">
                  <p>
                    Innovative middle-out compression algorithm that changes the
                    way we store data.
                  </p>
                </div>
              </div>
            </section>
          </section>
        </section>
        <section class="section">
          <header>
            <h2 class="section-title">Skills</h2>
          </header>
          <section id="skills">
            <div class="item">
              <h3 class="name">
                Web Development
              </h3>

              <div class="level master">
                <em>Master</em>
                <div class="bar"></div>
              </div>
              <ul class="keywords">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
              </ul>
            </div>
            <div class="item">
              <h3 class="name">
                Compression
              </h3>

              <div class="level master">
                <em>Master</em>
                <div class="bar"></div>
              </div>
              <ul class="keywords">
                <li>Mpeg</li>
                <li>MP4</li>
                <li>GIF</li>
              </ul>
            </div>
          </section>
        </section>
        <section class="section">
          <header>
            <h2 class="section-title">Languages</h2>
          </header>
          <section id="languages">
            <div class="display">
              <h3 class="language">
                English
              </h3>
              <div class="item">
                <div class="level fluency native speaker">
                  <em>Native speaker</em>
                  <div class="bar"></div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section class="section">
          <header>
            <h2 class="section-title">Interests</h2>
          </header>
          <section id="interests">
            <div class="item">
              <h3 class="name">
                Wildlife
              </h3>
              <ul class="keywords">
                <li>Ferrets</li>
                <li>Unicorns</li>
              </ul>
            </div>
          </section>
        </section>
        <section class="section">
          <header>
            <h2 class="section-title">References</h2>
          </header>
          <section id="references">
            <div class="item">
              <blockquote class="reference">
                &#8220;&#32;It is my pleasure to recommend Richard, his
                performance working as a consultant for Main St. Company proved
                that he will be a valuable addition to any company.&#32;&#8221;
              </blockquote>
              <div class="name">
                Erlich Bachman
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}
