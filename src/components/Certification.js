function Certification() {
  return (
    <div className="art-content">
      {/* <!-- curtain --> */}
      <div className="art-curtain"></div>

      {/* <!-- top background -->*/}
      <div
        className="art-top-bg"
        style={{ backgroundImage: "url(img/bg.jpg)" }}
      >
        {/* <!-- overlay -->*/}
        <div className="art-top-bg-overlay"></div>
        {/* <!-- overlay end -->*/}
      </div>
      {/* <!-- top background end -->*/}

      {/*   <!-- swup container -->*/}
      <div className="transition-fade" id="swup">
        {/*   <!-- scroll frame -->*/}
        <div id="scrollbar" className="art-scroll-frame">
          {/*  <!-- container -->*/}
          <div className="container-fluid">
            {/*<!-- row -->*/}
            <div className="row p-30-0">
              {/*    <!-- col -->*/}
              <div className="col-lg-12">
                {/*   <!-- filter -->*/}
                <div className="art-filter mb-30">
                  {/*    <!-- filter link -->*/}
                  <a href="a#" data-filter="*" className="art-link art-current">
                    All Categories
                  </a>
                  {/*    <!-- filter link -->*/}
                  <a href="a#" data-filter=".internship" className="art-link">
                    Internships
                  </a>
                  <a href="a#" data-filter=".training" className="art-link">
                    Education
                  </a>
                  {/*    <!-- filter link -->*/}
                  <a href="a#" data-filter=".coursera" className="art-link">
                    Coursera & Others
                  </a>
                </div>
                {/*   <!-- filter end -->*/}
              </div>
              {/* <!-- col end -->*/}

              <div className="art-grid art-grid-3-col art-gallery">
                {/*       <!-- grid item -->*/}
                <div className="art-grid-item training">
                  {/*         <!-- grid item frame -->*/}
                  <a
                    data-fancybox="gallery"
                    href="img/certification/bachelorDegree.jpg"
                    className="art-a art-portfolio-item-frame art-square"
                  >
                    {/*         <!-- img -->*/}
                    <img
                      src="img/certification/bachelorDegree.jpg"
                      alt="item"
                    />
                    {/*   <!-- zoom icon -->*/}
                    <span className="art-item-hover">
                      <i className="fas fa-expand"></i>
                    </span>
                  </a>
                  {/*    <!-- grid item frame end -->*/}
                  {/*   <!-- description -->*/}
                  <div className="art-item-description">
                    {/*   <!-- title -->*/}
                    <h5 className="mb-15">Bachelor's degree in Mathematics</h5>
                    {/* <div className="mb-15">Sit amet, consectetur adipisicing elit. Quas, architecto.</div> */}
                  </div>
                  {/*     <!-- description end -->*/}
                </div>
                {/*        <!-- grid item end -->*/}
                {/*       <!-- grid item -->*/}
                <div className="art-grid-item training">
                  {/*         <!-- grid item frame -->*/}
                  <a
                    data-fancybox="gallery"
                    href="img/certification/prep.jpg"
                    className="art-a art-portfolio-item-frame art-square"
                  >
                    {/*         <!-- img -->*/}
                    <img src="img/certification/prep.jpg" alt="item" />
                    {/*   <!-- zoom icon -->*/}
                    <span className="art-item-hover">
                      <i className="fas fa-expand"></i>
                    </span>
                  </a>
                  {/*    <!-- grid item frame end -->*/}
                  {/*   <!-- description -->*/}
                  <div className="art-item-description">
                    {/*   <!-- title -->*/}
                    <h5 className="mb-15">Preparatory Certificate</h5>
                    {/* <div className="mb-15">Sit amet, consectetur adipisicing elit. Quas, architecto.</div> */}
                  </div>
                  {/*     <!-- description end -->*/}
                </div>
                {/*        <!-- grid item end -->*/}
                <div className="art-grid-item training">
                  {/*         <!-- grid item frame -->*/}
                  <a
                    data-fancybox="gallery"
                    href="img/certification/prep1.jpg"
                    className="art-a art-portfolio-item-frame art-square"
                  >
                    {/*         <!-- img -->*/}
                    <img src="img/certification/prep1.jpg" alt="item" />
                    {/*   <!-- zoom icon -->*/}
                    <span className="art-item-hover">
                      <i className="fas fa-expand"></i>
                    </span>
                  </a>
                  {/*    <!-- grid item frame end -->*/}
                  {/*   <!-- description -->*/}
                  <div className="art-item-description">
                    {/*   <!-- title -->*/}
                    <h5 className="mb-15">
                      National Competitive Entrance Examination For Engineering
                      Training Cycles Certificate
                    </h5>
                    {/* <div className="mb-15">Sit amet, consectetur adipisicing elit. Quas, architecto.</div> */}
                  </div>
                  {/*     <!-- description end -->*/}
                </div>
                {/*       <!-- grid item -->*/}
                <div className="art-grid-item internship">
                  {/*         <!-- grid item frame -->*/}
                  <a
                    data-fancybox="gallery"
                    href="img/certification/stt.jpg"
                    className="art-a art-portfolio-item-frame art-square"
                  >
                    {/*         <!-- img -->*/}
                    <img src="img/certification/stt.jpg" alt="item" />
                    {/*   <!-- zoom icon -->*/}
                    <span className="art-item-hover">
                      <i className="fas fa-expand"></i>
                    </span>
                  </a>
                  {/*    <!-- grid item frame end -->*/}
                  {/*   <!-- description -->*/}
                  <div className="art-item-description">
                    {/*   <!-- title -->*/}
                    <h5 className="mb-15">Technical Internship</h5>
                    {/* <div className="mb-15">Sit amet, consectetur adipisicing elit. Quas, architecto.</div> */}
                  </div>
                  {/*     <!-- description end -->*/}
                </div>
                {/*        <!-- grid item end -->*/}

                {/*       <!-- grid item -->*/}
                <div className="art-grid-item internship">
                  {/*         <!-- grid item frame -->*/}
                  <a
                    data-fancybox="gallery"
                    href="img/certification/kleos.jpg"
                    className="art-a art-portfolio-item-frame art-square"
                  >
                    {/*         <!-- img -->*/}
                    <img src="img/certification/kleos.jpg" alt="item" />
                    {/*   <!-- zoom icon -->*/}
                    <span className="art-item-hover">
                      <i className="fas fa-expand"></i>
                    </span>
                  </a>
                  {/*    <!-- grid item frame end -->*/}
                  {/*   <!-- description -->*/}
                  <div className="art-item-description">
                    {/*   <!-- title -->*/}
                    <h5 className="mb-15">Technical Internship</h5>
                    {/* <div className="mb-15">Sit amet, consectetur adipisicing elit. Quas, architecto.</div> */}
                  </div>
                  {/*     <!-- description end -->*/}
                </div>
                {/*        <!-- grid item end -->*/}


                {/*       <!-- grid item -->*/}
                <div className="art-grid-item coursera">
                  {/*         <!-- grid item frame -->*/}
                  <a
                    data-fancybox="gallery"
                    href="img/certification/Coursera5.pdf"
                    className="art-a art-portfolio-item-frame art-square"
                  >
                    {/*         <!-- img -->*/}
                    <img src="img/certification/Coursera5.png" alt="item" />
                    {/*   <!-- zoom icon -->*/}
                    <span className="art-item-hover">
                      <i className="fas fa-expand"></i>
                    </span>
                  </a>
                  {/*    <!-- grid item frame end -->*/}
                  {/*   <!-- description -->*/}
                  <div className="art-item-description">
                    {/*   <!-- title -->*/}
                    <h5 className="mb-15">
                      Programming Foundations with JavaScript, HTML and CSS
                    </h5>
                    {/* <div className="mb-15">Sit amet, consectetur adipisicing elit. Quas, architecto.</div> */}
                    {/*    <!-- button -->*/}
                    <a
                      href="https://www.coursera.org/account/accomplishments/certificate/3LG8H375VSE3"
                      target="_blank"
                      className="art-link art-color-link art-w-chevron"
                      rel="noreferrer"
                    >
                      Read more
                    </a>
                  </div>
                  {/*     <!-- description end -->*/}
                </div>
                {/*        <!-- grid item end -->*/}
                {/*       <!-- grid item -->*/}
                <div className="art-grid-item coursera">
                  {/*         <!-- grid item frame -->*/}
                  <a
                    data-fancybox="gallery"
                    href="img/certification/nmtc.jpg"
                    className="art-a art-portfolio-item-frame art-square"
                  >
                    {/*         <!-- img -->*/}
                    <img src="img/certification/nmtc.jpg" alt="item" />
                    {/*   <!-- zoom icon -->*/}
                    <span className="art-item-hover">
                      <i className="fas fa-expand"></i>
                    </span>
                  </a>
                  {/*    <!-- grid item frame end -->*/}
                  {/*   <!-- description -->*/}
                  <div className="art-item-description">
                    {/*   <!-- title -->*/}
                    <h5 className="mb-15">
                      National Microsoft Technologies Camp Competition
                    </h5>
                  </div>
                  {/*     <!-- description end -->*/}
                </div>
                {/*        <!-- grid item end -->*/}
                {/*       <!-- grid item -->*/}
                <div className="art-grid-item coursera">
                  {/*         <!-- grid item frame -->*/}
                  <a
                    data-fancybox="gallery"
                    href="img/certification/CertificateIeee.pdf"
                    className="art-a art-portfolio-item-frame art-square"
                  >
                    {/*         <!-- img -->*/}
                    <img src="img/certification/CertificateIeee.png" alt="item" />
                    {/*   <!-- zoom icon -->*/}
                    <span className="art-item-hover">
                      <i className="fas fa-expand"></i>
                    </span>
                  </a>
                  {/*    <!-- grid item frame end -->*/}
                  {/*   <!-- description -->*/}
                  <div className="art-item-description">
                    {/*   <!-- title -->*/}
                    <h5 className="mb-15">
                      National Microsoft Technologies Camp Competition
                    </h5>
                  </div>
                  {/*     <!-- description end -->*/}
                </div>
                {/*        <!-- grid item end -->*/}
              </div>
            </div>
            {/* <!-- row end --> */}
          </div>
          {/* <!-- container end --> */}

          {/*  <!-- container -->*/}

          {/* <!-- container end --> */}

          {/*  <!-- container -->*/}
          <div className="container-fluid"></div>
          {/* <!-- container end --> */}
        </div>
        {/* <!-- scroll frame end --> */}
      </div>
      {/* <!-- swup container end --> */}
    </div>
  );
}
export default Certification;
