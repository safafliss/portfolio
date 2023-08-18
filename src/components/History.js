function History() {
  return (
    <div className="art-content">
      {/* <!-- curtain --> */}
      <div className="art-curtain"></div>
      {/*  <!-- top background --> */}
      <div
        className="art-top-bg"
        style={{ backgroundImage: "url(img/bg.jpg)" }}
      >
        {/*   <!-- overlay --> */}
        <div className="art-top-bg-overlay"></div>
        {/*     <!-- overlay end --> */}
      </div>
      {/*   <!-- top background end --> */}
      {/*           <!-- swup container --> */}
      <div className="transition-fade" id="swup">
        {/*       <!-- scroll frame --> */}
        <div id="scrollbar" className="art-scroll-frame">
          {/*      <!-- container --> */}
          <div className="container-fluid">
            {/*     <!-- row -->*/}
            <div className="row p-30-0">
              {/*      <!-- col -->*/}
              <div className="col-lg-6">
                {/*                   <!-- section title -->*/}
                <div className="art-section-title">
                  {/*    <!-- title frame -->*/}
                  <div className="art-title-frame">
                    {/*      <!-- title -->*/}
                    <h4>Education</h4>
                  </div>
                  {/*  <!-- title frame end -->*/}
                </div>
                {/*    <!-- section title end -->*/}

                {/*   <!-- timeline -->*/}

                <div className="art-timeline art-gallery">
                  <div className="art-timeline-item">
                    <div className="art-timeline-mark-light"></div>
                    <div className="art-timeline-mark"></div>

                    {/* <div className="art-a art-timeline-content">
                      <div className="art-card-header">
                        <div className="art-left-side">
                          <h5>Video editing training</h5>
                          <div className="art-el-suptitle mb-15">
                            MasterClass:Private training center
                          </div>
                        </div>
                        <div className="art-right-side">
                          <span className="art-date">
                            August 2022 - Sep 2022
                          </span>
                        </div>
                      </div>
                      <p>With Adobe Premiere:</p>
                      <ul>
                        <li>
                          Edit an entire video from beginning to end, using
                          professional and efficient techniques.
                        </li>
                        <li>
                          Design clean and professional titles for videos.
                        </li>
                        <li>Mask and green screen</li>
                      </ul>
                      <p>With Adobe AfterEffect:</p>
                      <ul>
                        <li>
                          Practice compositing techniques to achieve stunning
                          video effects.
                        </li>
                      </ul>
                      <a
                        data-fancybox="diplome"
                        href="files/masterclass.png"
                        className="art-link art-color-link art-w-chevron"
                      >
                        Certificate
                      </a>
                    </div> */}
                  </div>
                  <div className="art-timeline-item">
                    <div className="art-timeline-mark-light"></div>
                    <div className="art-timeline-mark"></div>

                    <div className="art-a art-timeline-content">
                      <div className="art-card-header">
                        <div className="art-left-side">
                          <h5>Software Engineering</h5>
                          <div className="art-el-suptitle mb-15">
                            ESPRIT: Private School of Engineering and
                            Technologies
                          </div>
                        </div>
                        <div className="art-right-side">
                          <span className="art-date">2021 - 2024</span>
                        </div>
                      </div>

                      <p>Esprit is accredited by:</p>
                      <ul>
                        <li>EUR-ACE® (Ingénieur Européen accrédité)</li>
                        <li>
                          CDIO™ Initiative “Conceive –Design –Implement
                          –Operate”
                        </li>
                        <li>
                          Member of: ‫‪*CTI (FRANCE)‬‬‫ *ABET‬‬ ‫‪(USA) *ASIIN‬‬
                          (Germany)
                        </li>
                      </ul>
                      {/* <a
                        data-fancybox="diplome"
                        href="files/esprit.png"
                        className="art-link art-color-link art-w-chevron"
                      >
                        Diplome
                      </a> */}
                    </div>
                  </div>

                  <div className="art-timeline-item">
                    <div className="art-timeline-mark-light"></div>
                    <div className="art-timeline-mark"></div>

                    <div className="art-a art-timeline-content">
                      <div className="art-card-header">
                        <div className="art-left-side">
                          <h5>Preparatory Cycle (MP MATH-PHYSICS)</h5>
                          <div className="art-el-suptitle mb-15">
                            IPEIT, Montfleury
                          </div>
                        </div>
                        <div className="art-right-side">
                          <span className="art-date">2019 - 2020</span>
                        </div>
                      </div>
                      <p>
                        Graduated in Preparatory Cycle (MP MATH-PHYSICS) and
                        passed the National Competitive Entrance Examination For
                        Engineering Training Cycles.
                      </p>
                    </div>
                  </div>

                  <div className="art-timeline-item">
                    <div className="art-timeline-mark-light"></div>
                    <div className="art-timeline-mark"></div>

                    <div className="art-a art-timeline-content">
                      <div className="art-card-header">
                        <div className="art-left-side">
                          <h5>Bachelor's Degree in Mathematics</h5>
                          <div className="art-el-suptitle mb-15">
                            LPB, Bizerte
                          </div>
                        </div>
                        <div className="art-right-side">
                          <span className="art-date"> June 2019</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*    <!-- timeline end --> */}
              </div>
              <div className="col-lg-6">
                {/*                   <!-- section title -->*/}
                <div className="art-section-title">
                  {/*    <!-- title frame -->*/}
                  <div className="art-title-frame">
                    {/*      <!-- title -->*/}
                    <h4>Internship History</h4>
                  </div>
                  {/*  <!-- title frame end -->*/}
                </div>
                {/*    <!-- section title end -->*/}

                {/*   <!-- timeline -->*/}
                <div className="art-timeline">
                  {/* <div className="art-timeline-item">
                    <div className="art-timeline-mark-light"></div>
                    <div className="art-timeline-mark"></div>

                    <div className="art-a art-timeline-content">
                      <div className="art-card-header">
                        <div className="art-left-side">
                          <h5>Full-stack engineer</h5>
                          <div className="art-el-suptitle mb-15">
                            Socotec monitoring(company)
                          </div>
                        </div>
                        <div className="art-right-side">
                          <span className="art-date">Juin 2022 - Present</span>
                        </div>
                      </div>
                      <span className="art-date">
                        Tags: ReactJs, MaterialUi, Nodejs, ExpressJS, Python,
                        PostgreSQL, TimescalDB , AWS, Serverless, Git, Github
                      </span>
                      <br /> <br />
                    </div>
                  </div> */}

                  <div className="art-timeline-item">
                    <div className="art-timeline-mark-light"></div>
                    <div className="art-timeline-mark"></div>

                    <div className="art-a art-timeline-content">
                      <div className="art-card-header">
                        <div className="art-left-side">
                          <h5>Engineer internship</h5>
                          <div className="art-el-suptitle mb-15">
                            Louati Sécurité et Informatique (company)
                          </div>
                        </div>
                        <div className="art-right-side">
                          <span className="art-date">
                            July 2023 - August 2023
                          </span>
                        </div>
                      </div>
                      <p>
                        Designing a Web application for human resource
                        management
                      </p>
                      <span className="art-date">
                        Tags: ReactJs, NodeJs, ExpressJs, MongoDB, Git, Github.
                      </span>
                      <br /> <br />
                      {/* <a
                        data-fancybox="diplome"
                        href="files/datatys.png"
                        className="art-link art-color-link art-w-chevron"
                      >
                        Certificate
                      </a> */}
                    </div>

                    {/*     <!-- popup -->*/}
                    <div
                      className="art-recomendation-popup"
                      style={{ display: "none" }}
                      id="art-recomendation-popup-1"
                    >
                      {/*     <!-- testimonial -->*/}
                      <div className="art-a art-testimonial">
                        {/*    <!-- testimonial body -->*/}
                        <div className="testimonial-body">
                          {/*     <!-- photo --> */}
                          <img
                            className="art-testimonial-face"
                            src="img/testimonials/face-3.jpg"
                            alt="face"
                          />
                          {/*  <!-- name -->*/}
                          <h5>Paul Trueman</h5>
                          <div className="art-el-suptitle mb-15">
                            Template author
                          </div>
                          {/*   <!-- text --> */}
                          <div className="mb-15">
                            Working with Artur has been a pleasure. Better yet -
                            I alerted them of a minor issue before going to
                            sleep. The issue was fixed the next morning. I
                            couldn't ask for better support. Thank you Artur!
                            This is easily a 5 star freelancer.
                          </div>
                        </div>
                        {/*  <!-- testimonial body end --> */}
                        {/*       <!-- testimonial footer --> */}
                        <div className="art-testimonial-footer">
                          <div className="art-left-side">
                            {/*   <!-- star rate -->*/}
                            <ul className="art-star-rate">
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                            </ul>
                            {/*        <!-- star rate end -->*/}
                          </div>
                          <div className="art-right-side"></div>
                        </div>
                        {/*      <!-- testimonial footer end --> */}
                      </div>
                      {/*    <!-- testimonial end --> */}
                    </div>
                    {/*    <!-- popup end --> */}
                  </div>

                  <div className="art-timeline-item">
                    <div className="art-timeline-mark-light"></div>
                    <div className="art-timeline-mark"></div>

                    <div className="art-a art-timeline-content">
                      <div className="art-card-header">
                        <div className="art-left-side">
                          <h5>Technical internship</h5>
                          <div className="art-el-suptitle mb-15">
                            Société Tunisie Travaux (company)
                          </div>
                        </div>
                        <div className="art-right-side">
                          <span className="art-date">
                            June 2022 - August 2022
                          </span>
                        </div>
                      </div>
                      <p>
                        Designing a Web application that presents the STT
                        company
                      </p>
                      {/* <ul>
                        <li>
                          Development of a medical appointment management
                          system.{" "}
                        </li>
                        <li>
                          Set up a platform to bring doctors closer to Proxym
                          employees and facilitate the appointment booking
                          process.
                        </li>
                      </ul> */}
                      <span className="art-date">
                        Tags: HTML, CSS, JavaScript, Git, Github.
                      </span>
                      <br /> <br />
                      <a
                        data-fancybox="diplome"
                        href="files/proxym2.png"
                        className="art-link art-color-link art-w-chevron"
                      >
                        Certificate
                      </a>
                    </div>

                    {/*     <!-- popup -->*/}
                    <div
                      className="art-recomendation-popup"
                      style={{ display: "none" }}
                      id="art-recomendation-popup-2"
                    >
                      {/*     <!-- testimonial -->*/}
                      <div className="art-a art-testimonial">
                        {/*    <!-- testimonial body -->*/}
                        <div className="testimonial-body">
                          {/*     <!-- photo --> */}
                          <img
                            className="art-testimonial-face"
                            src="img/testimonials/face-4.jpg"
                            alt="face"
                          />
                          {/*  <!-- name -->*/}
                          <h5>Paul Trueman</h5>
                          <div className="art-el-suptitle mb-15">
                            Template author
                          </div>
                          {/*   <!-- text --> */}
                          <div className="mb-15">
                            Working with Artur has been a pleasure. Better yet -
                            I alerted them of a minor issue before going to
                            sleep. The issue was fixed the next morning. I
                            couldn't ask for better support. Thank you Artur!
                            This is easily a 5 star freelancer.
                          </div>
                        </div>
                        {/*  <!-- testimonial body end --> */}
                        {/*       <!-- testimonial footer --> */}
                        <div className="art-testimonial-footer">
                          <div className="art-left-side">
                            {/*   <!-- star rate -->*/}
                            <ul className="art-star-rate">
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                            </ul>
                            {/*        <!-- star rate end -->*/}
                          </div>
                          <div className="art-right-side"></div>
                        </div>
                        {/*      <!-- testimonial footer end --> */}
                      </div>
                      {/*    <!-- testimonial end --> */}
                    </div>
                    {/*    <!-- popup end --> */}
                  </div>

                  <div className="art-timeline-item">
                    <div className="art-timeline-mark-light"></div>
                    <div className="art-timeline-mark"></div>

                    <div className="art-a art-timeline-content">
                      <div className="art-card-header">
                        <div className="art-left-side">
                          <h5>Technical internship</h5>
                          <div className="art-el-suptitle mb-15">
                            KLEOS (company)
                          </div>
                        </div>
                        <div className="art-right-side">
                          <span className="art-date">July 2022 - Sep 2022</span>
                        </div>
                      </div>
                      <p>
                        Setting up a security architecture based on Fortinet
                        products.
                      </p>
                      <span className="art-date">
                        Tags: GNS3
                      </span>
                      <br /> <br />
                      <a
                        data-fancybox="diplome"
                        href="files/proxym1.png"
                        className="art-link art-color-link art-w-chevron"
                      >
                        Certificate
                      </a>
                    </div>

                    {/*     <!-- popup -->*/}
                    <div
                      className="art-recomendation-popup"
                      style={{ display: "none" }}
                      id="art-recomendation-popup-3"
                    >
                      {/*     <!-- testimonial -->*/}
                      <div className="art-a art-testimonial">
                        {/*    <!-- testimonial body -->*/}
                        <div className="testimonial-body">
                          {/*     <!-- photo --> */}
                          <img
                            className="art-testimonial-face"
                            src="img/testimonials/face-2.jpg"
                            alt="face"
                          />
                          {/*  <!-- name -->*/}
                          <h5>Paul Trueman</h5>
                          <div className="art-el-suptitle mb-15">
                            Template author
                          </div>
                          {/*   <!-- text --> */}
                          <div className="mb-15">
                            Working with Artur has been a pleasure. Better yet -
                            I alerted them of a minor issue before going to
                            sleep. The issue was fixed the next morning. I
                            couldn't ask for better support. Thank you Artur!
                            This is easily a 5 star freelancer.
                          </div>
                        </div>
                        {/*  <!-- testimonial body end --> */}
                        {/*       <!-- testimonial footer --> */}
                        <div className="art-testimonial-footer">
                          <div className="art-left-side">
                            {/*   <!-- star rate -->*/}
                            <ul className="art-star-rate">
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li className="art-empty-item">
                                <i className="fas fa-star"></i>
                              </li>
                            </ul>
                            {/*        <!-- star rate end -->*/}
                          </div>
                          <div className="art-right-side"></div>
                        </div>
                        {/*      <!-- testimonial footer end --> */}
                      </div>
                      {/*    <!-- testimonial end --> */}
                    </div>
                    {/*    <!-- popup end --> */}
                  </div>
                </div>
                {/*    <!-- timeline end --> */}
              </div>
              {/*       <!-- col end -->*/}
            </div>
            {/*       <!-- row end -->*/}
          </div>
          {/*         <!-- container end -->*/}

          {/*      <!-- container --> */}
          <div className="container-fluid"></div>
          {/*         <!-- container end -->*/}

          {/*      <!-- container --> */}
          <div className="container-fluid"></div>
          {/*         <!-- container end -->*/}

          {/* <!-- scroll frame end --> */}
        </div>
        {/* <!-- swup container end --> */}
      </div>{" "}
    </div>
  );
}
export default History;
