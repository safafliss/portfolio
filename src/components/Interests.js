function Interests() {
  return (
    <div className="art-content">
      {/* <!-- curtain --> */}
      <div className="art-curtain"></div>
      {/* <!-- top background --> */}
      <div
        className="art-top-bg"
        style={{ backgroundImage: "url(img/bg.jpg)" }}
      >
        {/* <!-- overlay --> */}
        <div className="art-top-bg-overlay"></div>
        {/* <!-- overlay end --> */}
      </div>
      {/* <!-- top background end --> */}
      {/* <!-- swup container --> */}
      <div className="transition-fade" id="swup">
        {/* <!-- scroll frame --> */}
        <div id="scrollbar" className="art-scroll-frame">
          {/*       <!-- container --> */}
          <div className="container-fluid">
            {/* <!-- row --> */}
            <div className="row p-30-0">
              {/*   <!-- col --> */}
              <div className="col-lg-12">
                {/* <!-- filter --> */}
                <div className="art-filter mb-30">
                  {/* <!-- filter link --> */}
                  <a href="#a" data-filter="*" className="art-link art-current">
                    All Categories
                  </a>
                  {/* <!-- filter link --> */}
                  <a href="#a" data-filter=".graphics" className="art-link">
                    Languages
                  </a>
                  {/* <!-- filter link --> */}
                  <a href="#a" data-filter=".photography" className="art-link">
                    Theatre
                  </a>
                  {/* <!-- filter link --> */}
                  <a href="#a" data-filter=".travel" className="art-link">
                    Reading
                  </a>
                </div>
                {/* <!-- filter end --> */}
              </div>
              {/*        <!-- col end --> */}

              <div className="art-grid art-grid-3-col art-gallery">
                {/* <!-- grid item -->  */}
                <div className="art-grid-item travel">
                  {/* <!-- grid item frame -->  */}
                  <a
                    data-fancybox="gallery"
                    href="img/interests/travel/g1.PNG"
                    className="art-a art-portfolio-item-frame art-horizontal"
                  >
                    {/* <!-- img -->  */}
                    <img src="img/interests/travel/g1.PNG" alt="item" />
                    {/* <!-- zoom icon -->  */}
                    <span className="art-item-hover">
                      <i className="fas fa-expand"></i>
                    </span>
                  </a>
                  {/*  <!-- grid item frame end -->  */}
                  {/* <!-- description -->  */}
                  <div className="art-item-description">
                    {/* <!-- title -->  */}
                    {/* <h5 className="mb-15">Vienne</h5>
                    <div className="mb-15">
                      Vienna is a beautiful historical city. It is clean and
                      organized . For me it is a fantastic place to visit,
                      especially for classical music lovers.
                    </div> */}
                  </div>
                  {/*   <!-- description end -->  */}
                </div>
                {/*        <!-- grid item end -->  */}
                {/* <!-- grid item -->  */}
                <div className="art-grid-item travel">
                  {/* <!-- grid item frame -->  */}
                  <a
                    data-fancybox="gallery"
                    href="img/interests/travel/g2.PNG"
                    className="art-a art-portfolio-item-frame art-horizontal"
                  >
                    {/* <!-- img -->  */}
                    <img src="img/interests/travel/g2.PNG" alt="item" />
                    {/* <!-- zoom icon -->  */}
                    <span className="art-item-hover">
                      <i className="fas fa-expand"></i>
                    </span>
                  </a>
                  {/*  <!-- grid item frame end -->  */}
                  {/* <!-- description -->  */}
                  <div className="art-item-description">
                    {/* <!-- title -->  */}
                    {/* <h5 className="mb-15">Vienne</h5>
                    <div className="mb-15">
                      Vienna is a beautiful historical city. It is clean and
                      organized . For me it is a fantastic place to visit,
                      especially for classical music lovers.
                    </div> */}
                  </div>
                  {/*   <!-- description end -->  */}
                </div>
                {/*        <!-- grid item end -->  */}
                {/* <!-- grid item -->  */}
                <div className="art-grid-item travel">
                  {/* <!-- grid item frame -->  */}
                  <a
                    data-fancybox="gallery"
                    href="img/interests/travel/g3.PNG"
                    className="art-a art-portfolio-item-frame art-horizontal"
                  >
                    {/* <!-- img -->  */}
                    <img src="img/interests/travel/g3.PNG" alt="item" />
                    {/* <!-- zoom icon -->  */}
                    <span className="art-item-hover">
                      <i className="fas fa-expand"></i>
                    </span>
                  </a>
                  {/*  <!-- grid item frame end -->  */}
                  {/* <!-- description -->  */}
                  <div className="art-item-description">
                    {/* <!-- title -->  */}
                    {/* <h5 className="mb-15">Vienne</h5>
                    <div className="mb-15">
                      Vienna is a beautiful historical city. It is clean and
                      organized . For me it is a fantastic place to visit,
                      especially for classical music lovers.
                    </div> */}
                  </div>
                  {/*   <!-- description end -->  */}
                </div>
                {/*        <!-- grid item end -->  */}
                {/* <!-- grid item -->  */}
                <div className="art-grid-item travel">
                  {/* <!-- grid item frame -->  */}
                  <a
                    data-fancybox="gallery"
                    href="img/interests/travel/g4.PNG"
                    className="art-a art-portfolio-item-frame art-horizontal"
                  >
                    {/* <!-- img -->  */}
                    <img src="img/interests/travel/g4.PNG" alt="item" />
                    {/* <!-- zoom icon -->  */}
                    <span className="art-item-hover">
                      <i className="fas fa-expand"></i>
                    </span>
                  </a>
                  {/*  <!-- grid item frame end -->  */}
                  {/* <!-- description -->  */}
                  <div className="art-item-description">
                    {/* <!-- title -->  */}
                    {/* <h5 className="mb-15">Vienne</h5>
                    <div className="mb-15">
                      Vienna is a beautiful historical city. It is clean and
                      organized . For me it is a fantastic place to visit,
                      especially for classical music lovers.
                    </div> */}
                  </div>
                  {/*   <!-- description end -->  */}
                </div>
                {/*        <!-- grid item end -->  */}
                {/* <!-- grid item -->  */}
                <div className="art-grid-item travel">
                  {/* <!-- grid item frame -->  */}
                  <a
                    data-fancybox="gallery"
                    href="img/interests/travel/g5.PNG"
                    className="art-a art-portfolio-item-frame art-horizontal"
                  >
                    {/* <!-- img -->  */}
                    <img src="img/interests/travel/g5.PNG" alt="item" />
                    {/* <!-- zoom icon -->  */}
                    <span className="art-item-hover">
                      <i className="fas fa-expand"></i>
                    </span>
                  </a>
                  {/*  <!-- grid item frame end -->  */}
                  {/* <!-- description -->  */}
                  <div className="art-item-description">
                    {/* <!-- title -->  */}
                    {/* <h5 className="mb-15">Vienne</h5>
                    <div className="mb-15">
                      Vienna is a beautiful historical city. It is clean and
                      organized . For me it is a fantastic place to visit,
                      especially for classical music lovers.
                    </div> */}
                  </div>
                  {/*   <!-- description end -->  */}
                </div>
                {/*        <!-- grid item end -->  */}
                {/* <!-- grid item -->  */}
                <div className="art-grid-item travel">
                  {/* <!-- grid item frame -->  */}
                  <a
                    data-fancybox="gallery"
                    href="img/interests/travel/g6.PNG"
                    className="art-a art-portfolio-item-frame art-horizontal"
                  >
                    {/* <!-- img -->  */}
                    <img src="img/interests/travel/g6.PNG" alt="item" />
                    {/* <!-- zoom icon -->  */}
                    <span className="art-item-hover">
                      <i className="fas fa-expand"></i>
                    </span>
                  </a>
                  {/*  <!-- grid item frame end -->  */}
                  {/* <!-- description -->  */}
                  <div className="art-item-description">
                    {/* <!-- title -->  */}
                    {/* <h5 className="mb-15">Vienne</h5>
                    <div className="mb-15">
                      Vienna is a beautiful historical city. It is clean and
                      organized . For me it is a fantastic place to visit,
                      especially for classical music lovers.
                    </div> */}
                  </div>
                  {/*   <!-- description end -->  */}
                </div>
                {/*        <!-- grid item end -->  */}
                {/* <!-- grid item -->  */}
                <div className="art-grid-item travel">
                  {/* <!-- grid item frame -->  */}
                  <a
                    data-fancybox="gallery"
                    href="img/interests/travel/g7.PNG"
                    className="art-a art-portfolio-item-frame art-horizontal"
                  >
                    {/* <!-- img -->  */}
                    <img src="img/interests/travel/g7.PNG" alt="item" />
                    {/* <!-- zoom icon -->  */}
                    <span className="art-item-hover">
                      <i className="fas fa-expand"></i>
                    </span>
                  </a>
                  {/*  <!-- grid item frame end -->  */}
                  {/* <!-- description -->  */}
                  <div className="art-item-description">
                    {/* <!-- title -->  */}
                    {/* <h5 className="mb-15">Vienne</h5>
                    <div className="mb-15">
                      Vienna is a beautiful historical city. It is clean and
                      organized . For me it is a fantastic place to visit,
                      especially for classical music lovers.
                    </div> */}
                  </div>
                  {/*   <!-- description end -->  */}
                </div>
                {/*        <!-- grid item end -->  */}
                {/* <!-- grid item -->  */}
                <div className="art-grid-item travel">
                  {/* <!-- grid item frame -->  */}
                  <a
                    data-fancybox="gallery"
                    href="img/interests/travel/g8.PNG"
                    className="art-a art-portfolio-item-frame art-horizontal"
                  >
                    {/* <!-- img -->  */}
                    <img src="img/interests/travel/g8.PNG" alt="item" />
                    {/* <!-- zoom icon -->  */}
                    <span className="art-item-hover">
                      <i className="fas fa-expand"></i>
                    </span>
                  </a>
                  {/*  <!-- grid item frame end -->  */}
                  {/* <!-- description -->  */}
                  <div className="art-item-description">
                    {/* <!-- title -->  */}
                    {/* <h5 className="mb-15">Vienne</h5>
                    <div className="mb-15">
                      Vienna is a beautiful historical city. It is clean and
                      organized . For me it is a fantastic place to visit,
                      especially for classical music lovers.
                    </div> */}
                  </div>
                  {/*   <!-- description end -->  */}
                </div>
                {/*        <!-- grid item end -->  */}
                {/* <!-- grid item -->  */}
                <div className="art-grid-item travel">
                  {/* <!-- grid item frame -->  */}
                  <a
                    data-fancybox="gallery"
                    href="img/interests/travel/g9.PNG"
                    className="art-a art-portfolio-item-frame art-horizontal"
                  >
                    {/* <!-- img -->  */}
                    <img src="img/interests/travel/g9.PNG" alt="item" />
                    {/* <!-- zoom icon -->  */}
                    <span className="art-item-hover">
                      <i className="fas fa-expand"></i>
                    </span>
                  </a>
                  {/*  <!-- grid item frame end -->  */}
                  {/* <!-- description -->  */}
                  <div className="art-item-description">
                    {/* <!-- title -->  */}
                    {/* <h5 className="mb-15">Vienne</h5>
                    <div className="mb-15">
                      Vienna is a beautiful historical city. It is clean and
                      organized . For me it is a fantastic place to visit,
                      especially for classical music lovers.
                    </div> */}
                  </div>
                  {/*   <!-- description end -->  */}
                </div>
                {/*        <!-- grid item end -->  */}
                {/* <!-- grid item -->  */}
                <div className="art-grid-item travel">
                  {/* <!-- grid item frame -->  */}
                  <a
                    data-fancybox="gallery"
                    href="img/interests/travel/g10.PNG"
                    className="art-a art-portfolio-item-frame art-horizontal"
                  >
                    {/* <!-- img -->  */}
                    <img src="img/interests/travel/g10.PNG" alt="item" />
                    {/* <!-- zoom icon -->  */}
                    <span className="art-item-hover">
                      <i className="fas fa-expand"></i>
                    </span>
                  </a>
                  {/*  <!-- grid item frame end -->  */}
                  {/* <!-- description -->  */}
                  <div className="art-item-description">
                    {/* <!-- title -->  */}
                    {/* <h5 className="mb-15">Vienne</h5>
                    <div className="mb-15">
                      Vienna is a beautiful historical city. It is clean and
                      organized . For me it is a fantastic place to visit,
                      especially for classical music lovers.
                    </div> */}
                  </div>
                  {/*   <!-- description end -->  */}
                </div>
                {/*        <!-- grid item end -->  */}
                {/* <!-- grid item -->  */}
                <div className="art-grid-item travel">
                  {/* <!-- grid item frame -->  */}
                  <a
                    data-fancybox="gallery"
                    href="img/interests/travel/g11.PNG"
                    className="art-a art-portfolio-item-frame art-horizontal"
                  >
                    {/* <!-- img -->  */}
                    <img src="img/interests/travel/g11.PNG" alt="item" />
                    {/* <!-- zoom icon -->  */}
                    <span className="art-item-hover">
                      <i className="fas fa-expand"></i>
                    </span>
                  </a>
                  {/*  <!-- grid item frame end -->  */}
                  {/* <!-- description -->  */}
                  <div className="art-item-description">
                    {/* <!-- title -->  */}
                    {/* <h5 className="mb-15">Vienne</h5>
                    <div className="mb-15">
                      Vienna is a beautiful historical city. It is clean and
                      organized . For me it is a fantastic place to visit,
                      especially for classical music lovers.
                    </div> */}
                  </div>
                  {/*   <!-- description end -->  */}
                </div>
                {/*        <!-- grid item end -->  */}
                {/* <!-- grid item -->  */}
                <div className="art-grid-item travel">
                  {/* <!-- grid item frame -->  */}
                  <a
                    data-fancybox="gallery"
                    href="img/interests/travel/g12.PNG"
                    className="art-a art-portfolio-item-frame art-horizontal"
                  >
                    {/* <!-- img -->  */}
                    <img src="img/interests/travel/g12.PNG" alt="item" />
                    {/* <!-- zoom icon -->  */}
                    <span className="art-item-hover">
                      <i className="fas fa-expand"></i>
                    </span>
                  </a>
                  {/*  <!-- grid item frame end -->  */}
                  {/* <!-- description -->  */}
                  <div className="art-item-description">
                    {/* <!-- title -->  */}
                    {/* <h5 className="mb-15">Vienne</h5>
                    <div className="mb-15">
                      Vienna is a beautiful historical city. It is clean and
                      organized . For me it is a fantastic place to visit,
                      especially for classical music lovers.
                    </div> */}
                  </div>
                  {/*   <!-- description end -->  */}
                </div>
                {/*        <!-- grid item end -->  */}
                {/* <!-- grid item -->  */}
                <div className="art-grid-item travel">
                  {/* <!-- grid item frame -->  */}
                  <a
                    data-fancybox="gallery"
                    href="img/interests/travel/g13.PNG"
                    className="art-a art-portfolio-item-frame art-horizontal"
                  >
                    {/* <!-- img -->  */}
                    <img src="img/interests/travel/g13.PNG" alt="item" />
                    {/* <!-- zoom icon -->  */}
                    <span className="art-item-hover">
                      <i className="fas fa-expand"></i>
                    </span>
                  </a>
                  {/*  <!-- grid item frame end -->  */}
                  {/* <!-- description -->  */}
                  <div className="art-item-description">
                    {/* <!-- title -->  */}
                    {/* <h5 className="mb-15">Vienne</h5>
                    <div className="mb-15">
                      Vienna is a beautiful historical city. It is clean and
                      organized . For me it is a fantastic place to visit,
                      especially for classical music lovers.
                    </div> */}
                  </div>
                  {/*   <!-- description end -->  */}
                </div>
                {/*        <!-- grid item end -->  */}
                {/* <!-- grid item -->  */}
                <div className="art-grid-item travel">
                  {/* <!-- grid item frame -->  */}
                  <a
                    data-fancybox="gallery"
                    href="img/interests/travel/g14.PNG"
                    className="art-a art-portfolio-item-frame art-horizontal"
                  >
                    {/* <!-- img -->  */}
                    <img src="img/interests/travel/g14.PNG" alt="item" />
                    {/* <!-- zoom icon -->  */}
                    <span className="art-item-hover">
                      <i className="fas fa-expand"></i>
                    </span>
                  </a>
                  {/*  <!-- grid item frame end -->  */}
                  {/* <!-- description -->  */}
                  <div className="art-item-description">
                    {/* <!-- title -->  */}
                    {/* <h5 className="mb-15">Vienne</h5>
                    <div className="mb-15">
                      Vienna is a beautiful historical city. It is clean and
                      organized . For me it is a fantastic place to visit,
                      especially for classical music lovers.
                    </div> */}
                  </div>
                  {/*   <!-- description end -->  */}
                </div>
                {/*        <!-- grid item end -->  */}
                {/* <!-- grid item -->  */}
                <div className="art-grid-item travel">
                  {/* <!-- grid item frame -->  */}
                  <a
                    data-fancybox="gallery"
                    href="img/interests/travel/g15.PNG"
                    className="art-a art-portfolio-item-frame art-horizontal"
                  >
                    {/* <!-- img -->  */}
                    <img src="img/interests/travel/g15.PNG" alt="item" />
                    {/* <!-- zoom icon -->  */}
                    <span className="art-item-hover">
                      <i className="fas fa-expand"></i>
                    </span>
                  </a>
                  {/*  <!-- grid item frame end -->  */}
                  {/* <!-- description -->  */}
                  <div className="art-item-description">
                    {/* <!-- title -->  */}
                    {/* <h5 className="mb-15">Vienne</h5>
                    <div className="mb-15">
                      Vienna is a beautiful historical city. It is clean and
                      organized . For me it is a fantastic place to visit,
                      especially for classical music lovers.
                    </div> */}
                  </div>
                  {/*   <!-- description end -->  */}
                </div>
                {/*        <!-- grid item end -->  */}
                {/* <!-- grid item -->  */}
                <div className="art-grid-item travel">
                  {/* <!-- grid item frame -->  */}
                  <a
                    data-fancybox="gallery"
                    href="img/interests/travel/g16.PNG"
                    className="art-a art-portfolio-item-frame art-horizontal"
                  >
                    {/* <!-- img -->  */}
                    <img src="img/interests/travel/g16.PNG" alt="item" />
                    {/* <!-- zoom icon -->  */}
                    <span className="art-item-hover">
                      <i className="fas fa-expand"></i>
                    </span>
                  </a>
                  {/*  <!-- grid item frame end -->  */}
                  {/* <!-- description -->  */}
                  <div className="art-item-description">
                    {/* <!-- title -->  */}
                    {/* <h5 className="mb-15">Vienne</h5>
                    <div className="mb-15">
                      Vienna is a beautiful historical city. It is clean and
                      organized . For me it is a fantastic place to visit,
                      especially for classical music lovers.
                    </div> */}
                  </div>
                  {/*   <!-- description end -->  */}
                </div>
                {/*        <!-- grid item end -->  */}
                {/* <!-- grid item -->  */}
                <div className="art-grid-item travel">
                  {/* <!-- grid item frame -->  */}
                  <a
                    data-fancybox="gallery"
                    href="img/interests/travel/g17.PNG"
                    className="art-a art-portfolio-item-frame art-horizontal"
                  >
                    {/* <!-- img -->  */}
                    <img src="img/interests/travel/g17.PNG" alt="item" />
                    {/* <!-- zoom icon -->  */}
                    <span className="art-item-hover">
                      <i className="fas fa-expand"></i>
                    </span>
                  </a>
                  {/*  <!-- grid item frame end -->  */}
                  {/* <!-- description -->  */}
                  <div className="art-item-description">
                    {/* <!-- title -->  */}
                    {/* <h5 className="mb-15">Vienne</h5>
                    <div className="mb-15">
                      Vienna is a beautiful historical city. It is clean and
                      organized . For me it is a fantastic place to visit,
                      especially for classical music lovers.
                    </div> */}
                  </div>
                  {/*   <!-- description end -->  */}
                </div>
                {/*        <!-- grid item end -->  */}
                {/* <!-- grid item -->  */}
                <div className="art-grid-item travel">
                  {/* <!-- grid item frame -->  */}
                  <a
                    data-fancybox="gallery"
                    href="img/interests/travel/g18.PNG"
                    className="art-a art-portfolio-item-frame art-horizontal"
                  >
                    {/* <!-- img -->  */}
                    <img src="img/interests/travel/g18.PNG" alt="item" />
                    {/* <!-- zoom icon -->  */}
                    <span className="art-item-hover">
                      <i className="fas fa-expand"></i>
                    </span>
                  </a>
                  {/*  <!-- grid item frame end -->  */}
                  {/* <!-- description -->  */}
                  <div className="art-item-description">
                    {/* <!-- title -->  */}
                    {/* <h5 className="mb-15">Vienne</h5>
                    <div className="mb-15">
                      Vienna is a beautiful historical city. It is clean and
                      organized . For me it is a fantastic place to visit,
                      especially for classical music lovers.
                    </div> */}
                  </div>
                  {/*   <!-- description end -->  */}
                </div>
                {/*        <!-- grid item end -->  */}
                {/* <!-- grid item -->  */}
                <div className="art-grid-item travel">
                  {/* <!-- grid item frame -->  */}
                  <a
                    data-fancybox="gallery"
                    href="img/interests/travel/g19.PNG"
                    className="art-a art-portfolio-item-frame art-horizontal"
                  >
                    {/* <!-- img -->  */}
                    <img src="img/interests/travel/g19.PNG" alt="item" />
                    {/* <!-- zoom icon -->  */}
                    <span className="art-item-hover">
                      <i className="fas fa-expand"></i>
                    </span>
                  </a>
                  {/*  <!-- grid item frame end -->  */}
                  {/* <!-- description -->  */}
                  <div className="art-item-description">
                    {/* <!-- title -->  */}
                    {/* <h5 className="mb-15">Vienne</h5>
                    <div className="mb-15">
                      Vienna is a beautiful historical city. It is clean and
                      organized . For me it is a fantastic place to visit,
                      especially for classical music lovers.
                    </div> */}
                  </div>
                  {/*   <!-- description end -->  */}
                </div>
                {/*        <!-- grid item end -->  */}
                {/* <!-- grid item -->  */}
                <div className="art-grid-item graphics">
                  {/* <!-- grid item frame -->  */}
                  <a
                    data-fancybox="gallery"
                    href="img/interests/graphic/delf.jpg"
                    className="art-a art-portfolio-item-frame art-vertical"
                  >
                    {/* <!-- img -->  */}
                    <img src="img/interests/graphic/delf.jpg" alt="item" />
                    {/* <!-- zoom icon -->  */}
                    <span className="art-item-hover">
                      <i className="fas fa-expand"></i>
                    </span>
                  </a>
                  {/*  <!-- grid item frame end -->  */}
                  {/* <!-- description -->  */}
                  <div className="art-item-description">
                    {/* <!-- title -->  */}
                    {/* <h5 className="mb-15">Project title</h5> */}
                    <div className="mb-15">DELF B2</div>
                  </div>
                  {/*   <!-- description end -->  */}
                </div>
                {/*        <!-- grid item end -->  */}
                {/* <!-- grid item -->  */}
                <div className="art-grid-item graphics">
                  {/* <!-- grid item frame -->  */}
                  <a
                    data-fancybox="gallery"
                    href="img/interests/graphic/korean.jpg"
                    className="art-a art-portfolio-item-frame art-vertical"
                  >
                    {/* <!-- img -->  */}
                    <img src="img/interests/graphic/korean.jpg" alt="item" />
                    {/* <!-- zoom icon -->  */}
                    <span className="art-item-hover">
                      <i className="fas fa-expand"></i>
                    </span>
                  </a>
                  {/*  <!-- grid item frame end -->  */}
                  {/* <!-- description -->  */}
                  <div className="art-item-description">
                    {/* <!-- title -->  */}
                    {/* <h5 className="mb-15">Project title</h5> */}
                    <div className="mb-15">Korean A1</div>
                  </div>
                  {/*   <!-- description end -->  */}
                </div>
                {/*        <!-- grid item end -->  */}

                {/* <!-- grid item -->  */}
                <div className="art-grid-item photography">
                  {/* <!-- grid item frame -->  */}
                  <a
                    data-fancybox="gallery"
                    href="img/interests/photography/theatre.jpg"
                    className="art-a art-portfolio-item-frame art-square"
                  >
                    {/* <!-- img -->  */}
                    <img
                      src="img/interests/photography/theatre.jpg"
                      alt="item"
                    />
                    {/* <!-- zoom icon -->  */}
                    <span className="art-item-hover">
                      <i className="fas fa-expand"></i>
                    </span>
                  </a>
                  {/*  <!-- grid item frame end -->  */}
                  {/* <!-- description -->  */}
                  <div className="art-item-description">
                    {/* <!-- title -->  */}
                    {/* <h5 className="mb-15">Project title</h5> */}
                    <div className="mb-15">It is my source of happiness.</div>
                  </div>
                  {/*   <!-- description end -->  */}
                </div>
                {/*  <!-- grid item end -->  */}
              </div>
            </div>
            {/*       <!-- row end -->  */}
          </div>
          {/*         <!-- container end --> */}

          {/*       <!-- container --> */}
          <div className="container-fluid">
            {/*      <!-- row --> */}

            {/*       <!-- row end -->  */}
          </div>
          {/*         <!-- container end --> */}

          {/*       <!-- container --> */}
          <div className="container-fluid"></div>
          {/*         <!-- container end --> */}
        </div>
        {/*            <!-- scroll frame end -->*/}
      </div>{" "}
      {/*
          <!-- swup container end -->*/}
    </div>
  );
}

export default Interests;
