import { Component, OnInit } from '@angular/core';
import InitAnimateOnScroll from '../../library/invokers/animate-on-scroll';
import InitSmoothScroll from '../../library/invokers/smooth-scroll';
import initParallax from '../../library/invokers/parallax';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-about',
  template: `
    <section class=" position-relative pt-lg-3 pt-xl-4 pt-xxl-5">
      <div
        class="bg-primary bg-opacity-10 rounded-circle position-absolute start-50 d-none d-lg-block"
        style="bottom: 220px; width: 480px; height: 480px; margin-left: -240px;"
        data-aos="zoom-in"
        data-aos-duration="700"
        data-aos-delay="200"
        data-aos-offset="300"
      ></div>
      <div
        class="container position-relative z-5 mt-2 pt-5 pb-2 pb-sm-4 pb-lg-5"
      >
        <div
          class="display-3 text-center text-primary mx-auto pt-5 my-2 my-sm-4"
          style="max-width: 680px;"
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="300.000000pt"
            height="70.000000pt"
            viewBox="0 0 1000.000000 300.000000"
            preserveAspectRatio="xMidYMid meet"
            style="margin-left: 0px;"
          >
            <g
              transform="translate(0.000000,275.000000) scale(0.100000,-0.100000)"
              fill="currentColor"
              stroke="none"
            >
              <path
                d="M520 2725 c0 -3 0 -104 0 -225 0 -121 0 -224 0 -230 0 -6 84 -10 230 -10 l231 0 -3 -787 c-4 -900 0 -858 -87 -944 -71 -71 -168 -85 -263 -38 -43 22 -73 62 -104 138 l-23 56 -250 3 c-138 1 -251 -1 -251 -5 0 -5 11 -48 24 -98 47 -173 117 -297 228 -401 188 -175 476 -231 735 -142 132 45 199 87 281 173 103 108 159 228 187 400 12 75 15 262 15 1103 l0 1012 -475 0 c-261 0 -475 -2 -475 -5z"
              ></path>
              <path
                d="M2305 2734 c-326 -53 -572 -272 -639 -571 -21 -92 -21 -270 0 -371 33 -164 134 -314 272 -405 79 -53 217 -116 397 -182 201 -74 271 -111 341 -180 74 -73 96 -129 96 -242 -1 -96 -31 -162 -107 -231 -73 -67 -154 -97 -260 -96 -102 1 -167 28 -229 94 -61 66 -88 121 -111 232 l-5 28 -256 0 -257 0 7 -60 c21 -187 95 -345 226 -484 176 -186 400 -275 664 -263 198 9 362 65 508 176 127 96 233 262 280 436 31 118 31 338 -1 450 -82 290 -258 442 -689 594 -95 34 -198 74 -230 90 -70 35 -146 115 -161 167 -14 52 -14 147 1 198 18 60 99 138 163 157 100 29 212 9 275 -48 54 -48 76 -86 97 -168 l19 -70 244 0 244 0 -3 49 c-8 132 -80 311 -171 423 -96 119 -250 219 -395 258 -60 16 -263 28 -320 19z"
              ></path>
              <path
                d="M3447 2481 l-187 -269 2 -417 3 -417 160 233 160 234 3 -907 c1 -533 6 -908 11 -908 5 0 168 233 362 518 775 1134 880 1287 889 1290 7 2 10 -320 10 -912 l0 -916 250 0 250 0 0 1370 0 1370 -232 0 -233 0 -390 -560 c-214 -307 -393 -559 -397 -559 -5 -1 -8 251 -8 559 l0 560 -232 0 -233 -1 -188 -268z"
              ></path>
              <path
                d="M5445 2727 c-3 -7 -4 -114 -3 -237 l3 -225 483 -3 482 -2 0 -330 0 -330 -272 -2 -273 -3 0 -235 0 -235 273 -3 272 -2 0 -320 c0 -249 -3 -320 -12 -320 -7 0 -220 0 -473 0 -253 0 -466 -4 -473 -8 -9 -7 -12 -61 -10 -238 l3 -229 738 -3 737 -2 -2 1367 -3 1368 -733 3 c-588 2 -734 0 -737 -11z"
              ></path>
              <path
                d="M7002 2503 l3 -238 478 -3 477 -2 0 -330 0 -330 -267 -2 -268 -3 -3 -237 -2 -238 270 0 270 0 -2 -320 -3 -321 -475 -2 -475 -2 -3 -237 -2 -238 735 0 735 0 0 1370 0 1370 -735 0 -735 0 2 -237z"
              ></path>
              <path
                d="M8557 2723 c-4 -3 -7 -618 -7 -1365 l0 -1358 255 0 255 0 0 1130 0 1130 253 2 252 3 3 233 2 232 -503 0 c-277 0 -507 -3 -510 -7z"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </section>

    <section class="container pt-5 pb-5 mb-5 mt-lg-3 mt-xl-4 mt-xxl-5">
      <div class="pt-4 pt-sm-3 mt-md-3">
        <h1
          class="pb-3 mb-2 mb-sm-3 mb-lg-4"
          data-aos="flip-up"
          data-aos-duration="300"
        >
          Hi this is <span class="text-primary">Jass</span>
        </h1>
        <p class="fs-lg" data-aos="fade-in" data-aos-duration="500">
          &nbsp;&nbsp;&nbsp;&nbsp;I am a full-stack web developer with a strong
          focus on writing efficient business logic, specializing in
          <span _ngcontent-ng-cli-universal-c5="" class="text-primary"
            >.NET, C#</span
          >
          (MVC,Web Api's,Razor Pages). I have successfully crafted and
          implemented intricate web applications that drive efficiency and
          results for businesses. Proficient in UI design using Bootstrap and
          have a command over
          <span _ngcontent-ng-cli-universal-c5="" class="text-primary"
            >Vue Js</span
          >, allowing me to create visually appealing and highly responsive user
          interfaces. I'm also in the early stages of my journey with
          <span _ngcontent-ng-cli-universal-c5="" class="text-primary"
            >Angular</span
          >, eagerly learning and expanding my skill set to become well-versed
          in this popular front-end framework.
        </p>
        <div class="d-flex">
          <div class="d-flex">
            <a
              *ngFor="let link of socialLinks"
              class="btn btn-outline-secondary btn-icon btn-sm {{
                'btn-' + link.platform.toLowerCase()
              }} me-3"
              target="_blank"
              [href]="link.url"
            >
              <i class="{{ link.icon }}"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Breadcrumb + Services grid -->
    <section class="container py-5 mt-5 mb-md-3 mb-lg-4 mb-xxl-5">
      <!-- Services grid -->
      <div
        class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 pb-sm-3 pb-md-4 pb-xl-5"
      >
        <!-- Item -->
        <div class="col">
          <a
            class="card card-hover-primary bg-secondary border-0 h-100 text-decoration-none"
            routerLink="/contact"
          >
            <div class="card-body pb-0">
              <svg
                class="d-block text-warning mb-4"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.7276 27.5001C1.21683 28.3857 0.916576 29.3769 0.850062 30.3971C0.783549 31.4173 0.952558 32.4391 1.34402 33.3835C1.73548 34.328 2.33891 35.1697 3.10764 35.8437C3.87638 36.5177 4.78982 37.0058 5.77734 37.2704C6.76486 37.5349 7.8 37.5689 8.80272 37.3695C9.80544 37.1701 10.7489 36.7428 11.5601 36.1206C12.3713 35.4983 13.0285 34.6979 13.4809 33.7811C13.9334 32.8643 14.1689 31.8558 14.1693 30.8334C14.1698 29.3654 13.6858 27.9382 12.7924 26.7734C11.8989 25.6085 10.6459 24.7712 9.22787 24.3913C7.80984 24.0114 6.30606 24.1101 4.94991 24.6722C3.59375 25.2344 2.46105 26.2284 1.7276 27.5001Z"
                ></path>
                <path
                  d="M11.7344 10.1667L4.23438 23.1667C5.42383 22.6595 6.71498 22.4361 8.00568 22.5142C9.29638 22.5922 10.5512 22.9695 11.6709 23.6163C12.7906 24.263 13.7444 25.1615 14.4569 26.2405C15.1694 27.3196 15.621 28.5496 15.776 29.8333L19.0427 24.1667C12.8427 13.45 11.9427 12.425 11.7344 10.1667Z"
                ></path>
                <path
                  d="M38.2784 27.5C37.8534 26.7833 25.6701 5.6083 25.4284 5.29996C24.4255 3.9011 22.9204 2.94436 21.2281 2.62997C19.5358 2.31559 17.7875 2.66792 16.3491 3.61323C14.9107 4.55855 13.8936 6.02357 13.5108 7.70171C13.1279 9.37984 13.409 11.141 14.2951 12.6166C14.2118 12.6166 13.8784 11.9 26.7284 34.1666C27.1662 34.925 27.749 35.5898 28.4437 36.1229C29.1383 36.656 29.9311 37.0471 30.7769 37.2739C31.6227 37.5006 32.5049 37.5585 33.373 37.4443C34.2412 37.3301 35.0784 37.046 35.8368 36.6083C36.5952 36.1706 37.2599 35.5877 37.793 34.8931C38.3262 34.1984 38.7173 33.4056 38.944 32.5598C39.1707 31.714 39.2287 30.8319 39.1145 29.9637C39.0003 29.0955 38.7162 28.2583 38.2784 27.5Z"
                ></path>
              </svg>
              <h3 class="h4 card-title mt-0">Contact</h3>
              <p class="card-text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint velit officia consequat duis enim velit mollit.
              </p>
            </div>
            <div class="card-footer border-0 py-3 my-3 mb-sm-4">
              <div
                class="btn btn-lg btn-icon btn-outline-primary rounded-circle pe-none"
              >
                <i class="ai-arrow-right"></i>
              </div>
            </div>
          </a>
        </div>

        <!-- Item -->
        <div class="col">
          <a
            class="card card-hover-primary bg-secondary border-0 h-100 text-decoration-none"
            href="#"
          >
            <div class="card-body pb-0">
              <svg
                class="d-block text-warning mb-4"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.6213 22.7824C26.4943 23.0213 20.6934 24.6146 15.525 27.255L8.87893 31.0927C7.12129 32.1061 4.87665 31.4978 3.86795 29.7493L0.49035 23.9008C-0.520513 22.1491 0.0820047 19.9007 1.83372 18.8898L7.33997 15.7103C7.65881 15.5262 8.06657 15.6354 8.25074 15.9543L12.5774 23.4483C12.7647 23.7727 13.1836 23.8804 13.5051 23.6822C13.816 23.4905 13.9009 23.074 13.7182 22.7577L9.36036 15.2095C9.18727 14.9097 9.27227 14.5269 9.55686 14.3297C14.1026 11.1781 17.9484 7.16404 20.9018 2.48266C22.0206 0.707687 24.6278 0.755188 25.6794 2.57599L34.9289 18.5981C35.9801 20.415 34.7215 22.7007 32.6213 22.7824ZM33.8082 11.6236C34.1506 9.6637 33.0019 7.69797 31.1452 7.02512C30.5616 6.81361 30.0322 7.44872 30.3425 7.98632C31.0812 9.2661 31.8225 10.5503 32.5721 11.8482C32.8853 12.3903 33.7004 12.2404 33.8082 11.6236ZM18.4184 35.2136L15.2546 29.7215C15.0708 29.4024 14.6625 29.2929 14.3434 29.477C12.6288 30.4663 12.564 30.5047 10.2768 31.8249C9.95788 32.009 9.84821 32.417 10.0324 32.736L13.2016 38.2245C13.6078 38.9274 14.3384 39.3096 15.0824 39.3096C15.8041 39.3096 16.0801 39.0654 17.625 38.1737C18.66 37.5762 19.0159 36.2478 18.4184 35.2136ZM38.676 6.55444C38.9948 6.37035 39.1041 5.96259 38.92 5.64375C38.736 5.32499 38.3284 5.21557 38.0093 5.39974L36.2843 6.39569C35.694 6.73653 35.9409 7.63989 36.6183 7.63989C36.8554 7.63981 36.8079 7.63297 38.676 6.55444ZM32.5456 3.09976L32.9663 1.53004C33.0616 1.17437 32.8505 0.808857 32.495 0.713521C32.139 0.618351 31.7737 0.829274 31.6783 1.18495L31.2577 2.75466C31.1444 3.17734 31.4629 3.5941 31.902 3.5941C32.1964 3.59402 32.4658 3.3976 32.5456 3.09976ZM39.9772 13.6731C40.0725 13.3175 39.8613 12.9519 39.5057 12.8566L37.9359 12.436C37.5803 12.3409 37.2148 12.5519 37.1194 12.9075C37.0241 13.2631 37.2353 13.6286 37.5909 13.724C39.3076 14.184 39.2134 14.1675 39.3336 14.1675C39.6279 14.1675 39.8973 13.971 39.9772 13.6731Z"
                ></path>
              </svg>
              <h3 class="h4 card-title mt-0">FAQ</h3>
              <p class="card-text">
                Find aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur neque congue.
              </p>
            </div>
            <div class="card-footer border-0 py-3 my-3 mb-sm-4">
              <div
                class="btn btn-lg btn-icon btn-outline-primary rounded-circle pe-none"
              >
                <i class="ai-arrow-right"></i>
              </div>
            </div>
          </a>
        </div>

        <!-- Item -->
        <div class="col">
          <a
            class="card card-hover-primary bg-secondary border-0 h-100 text-decoration-none"
            href="#"
          >
            <div class="card-body pb-0">
              <svg
                class="d-block text-warning mb-4"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.7306 12.5C25.4119 6.375 22.5994 2.5 19.9981 2.5C17.3969 2.5 14.5844 6.375 13.2656 12.5H26.7306Z"
                ></path>
                <path
                  d="M12.5 20C12.4997 21.6722 12.6112 23.3426 12.8338 25H27.1663C27.3888 23.3426 27.5003 21.6722 27.5 20C27.5003 18.3278 27.3888 16.6574 27.1663 15H12.8338C12.6112 16.6574 12.4997 18.3278 12.5 20Z"
                ></path>
                <path
                  d="M13.2656 27.5C14.5844 33.625 17.3969 37.5 19.9981 37.5C22.5994 37.5 25.4119 33.625 26.7306 27.5H13.2656Z"
                ></path>
                <path
                  d="M29.2956 12.5H37.1706C35.9874 9.80721 34.1895 7.42918 31.9213 5.55667C29.6531 3.68416 26.9775 2.36928 24.1094 1.7175C26.4806 3.80375 28.3406 7.66125 29.2956 12.5Z"
                ></path>
                <path
                  d="M38.0638 15H29.6887C29.895 16.6587 29.9981 18.3286 29.9975 20C29.9977 21.6715 29.8941 23.3413 29.6875 25H38.0625C38.9741 21.729 38.9741 18.271 38.0625 15H38.0638Z"
                ></path>
                <path
                  d="M24.1094 38.2825C26.978 37.6311 29.654 36.3164 31.9227 34.4438C34.1914 32.5713 35.9896 30.1931 37.1731 27.5H29.2981C28.3406 32.3388 26.4806 36.1963 24.1094 38.2825Z"
                ></path>
                <path
                  d="M10.7109 27.5H2.83594C4.01943 30.1931 5.81766 32.5713 8.08636 34.4438C10.3551 36.3164 13.0311 37.6311 15.8997 38.2825C13.5259 36.1963 11.6659 32.3388 10.7109 27.5Z"
                ></path>
                <path
                  d="M15.8919 1.7175C13.0233 2.36893 10.3472 3.68365 8.07854 5.55618C5.80984 7.42871 4.01161 9.80692 2.82812 12.5H10.7031C11.6606 7.66125 13.5206 3.80375 15.8919 1.7175Z"
                ></path>
                <path
                  d="M9.99868 20C9.99852 18.3285 10.102 16.6587 10.3087 15H1.93369C1.0221 18.271 1.0221 21.729 1.93369 25H10.3087C10.102 23.3413 9.99852 21.6715 9.99868 20Z"
                ></path>
              </svg>
              <h3 class="h4 card-title mt-0">Attributions</h3>
              <p class="card-text">
                Hac erat leo proin odio est sed sit felis facilisi integer sed
                congue neque turpis dictumst sit sed volutpat aliquet tortor
                non.
              </p>
            </div>
            <div class="card-footer border-0 py-3 my-3 mb-sm-4">
              <div
                class="btn btn-lg btn-icon btn-outline-primary rounded-circle pe-none"
              >
                <i class="ai-arrow-right"></i>
              </div>
            </div>
          </a>
        </div>

   
      </div>
    </section>
  `,
})
export class AboutComponent implements OnInit {
  loadingBarState: any;
  constructor(private loadingBar: LoadingBarService) {}
  ngOnInit(): void {
    this.loadingBarState = this.loadingBar.useRef();

    this.loadingBarState.start();
    InitAnimateOnScroll();
    InitSmoothScroll();
    initParallax();
    this.loadingBarState.complete();
  }

  socialLinks = [
    {
      platform: 'Instagram',
      icon: 'ai-instagram',
      url: 'https://instagram.com/jsm33t',
    },
    {
      platform: 'Facebook',
      icon: 'ai-facebook',
      url: 'https://facebook.com/iamjsm33t',
    },
    {
      platform: 'YouTube',
      icon: 'ai-github',
      url: 'https://github.com/jsm33t',
    },
  ];
}
