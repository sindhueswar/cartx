import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import WebFont from "webfontloader";
import image1 from "./../../assets/wristwatch.png";
import image2 from "./../../assets/watch2.png";
import "./Home.css";

function Home() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Nunito Sans:400,700"],
      },
    });
  }, []);

  return (
    <div className="flex-nowrap body">
      <div>
        <Header />
        <div className="border-line w-full "></div>
        <div className="left-margin right-margin ml-6 mr-6 md:ml-32">
          <div className="ml-4 md:ml-10 overflow-visible">
            <div className="flex-nowrap">
              <div className="text-svg md:flex">
                <div className="headtext">
                  <div className="flex md:m-4">
                    <p className="nextgen md:mt-14 md:ml-12">NEXT GEN</p>
                    <svg
                      width="116"
                      height="115"
                      viewBox="0 0 116 115"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="nextgensvg mt-2"
                    >
                      <path
                        d="M58 0L62.7471 38.7404L84.9539 6.64355L71.1537 43.1525L105.733 25.0522L76.547 50.9661L115.577 51.0089L77.6914 60.391L112.231 78.5671L74.3247 69.2681L96.4611 101.414L67.2182 75.5639L71.8803 114.315L58 77.836L44.1197 114.315L48.7817 75.5639L19.5389 101.414L41.6753 69.2681L3.76906 78.5671L38.3086 60.391L0.422886 51.0089L39.453 50.9661L10.2669 25.0522L44.8463 43.1525L31.0461 6.64355L53.2529 38.7404L58 0Z"
                        fill="#FE682F"
                      />
                    </svg>
                  </div>
                  <p className="nextgen sw md:ml-16">SMART WATCH</p>

                  <div className="desc1 md:m-2">
                    Everyone looks your watch and it represents who you are your
                    values and your personal style.
                  </div>
                  <div className="flex md:ml-2 mr-20 mt-9 justify-between">
                    <div className="price">$550.00</div>
                    <svg
                      className="flex pricesvg"
                      width="57"
                      height="69"
                      viewBox="0 0 57 69"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M45.8483 0.669889C46.2548 0.458065 46.7562 0.615936 46.968 1.0225C50.548 7.89382 53.3368 15.46 54.7894 23.0947C54.8717 23.5273 54.9577 23.9646 55.0444 24.4061C55.7063 27.7747 56.4152 31.3829 55.9148 34.9199C55.4129 38.4681 54.0181 40.739 51.8036 41.9429C50.6981 42.5439 49.4351 42.8515 48.0633 42.9511C48.0354 43.6472 47.9264 44.3442 47.7191 45.0354C46.9954 47.4488 45.3947 49.5595 43.5052 51.2947C41.6115 53.0338 39.3846 54.4358 37.3293 55.4258C33.7374 57.156 29.9797 57.5429 26.2554 57.0323C26.7464 60.8198 25.1119 64.1449 21.9793 66.4649C18.3057 69.1855 13.7078 68.9822 9.71561 67.8288C9.17188 67.6717 8.63795 67.4917 8.11471 67.289C8.0689 67.567 8.02505 67.8421 7.98422 68.1131C7.91594 68.5664 7.49309 68.8786 7.03977 68.8103C6.58645 68.742 6.2743 68.3191 6.34259 67.8658C6.40753 67.4346 6.47629 67.0128 6.54648 66.597C5.32616 65.9897 4.17484 65.248 3.10546 64.3736C3.07384 64.3477 3.03965 64.32 3.00326 64.2905C2.67557 64.0246 2.16991 63.6144 1.76232 63.1344C1.3247 62.619 0.833483 61.8315 1.00823 60.8978C1.23627 59.6794 2.16364 58.8265 3.13753 58.3552C4.11122 57.8839 5.30535 57.704 6.31052 57.9898C7.42444 58.3064 8.18166 58.9346 8.58762 59.8134C8.97276 60.6472 8.9931 61.6039 8.88129 62.5124C8.75556 63.5339 8.5788 64.5829 8.40051 65.6157C8.97761 65.8525 9.57002 66.0586 10.1764 66.2338C13.958 67.3265 17.9257 67.4011 20.9912 65.1308C23.8227 63.0338 25.1563 60.097 24.5274 56.7321C23.4396 56.5039 22.3573 56.2045 21.2855 55.8451C17.6175 54.6151 14.3969 52.6239 11.4195 50.2896L11.3389 50.2264C9.38261 48.6929 6.81736 46.6821 5.53979 44.1765C5.21968 43.5487 5.01297 42.7844 5.07843 42.0285C5.14626 41.2455 5.51171 40.4724 6.30816 39.9608C7.13328 39.4308 8.10671 39.3388 8.96659 39.4093C9.83529 39.4806 10.6826 39.7248 11.3449 39.9714C14.4664 41.1338 17.2283 43.263 19.5107 45.4961C22.2581 48.1841 24.763 51.4231 25.889 55.2987C29.5518 55.9007 33.1816 55.581 36.6089 53.9301C38.5459 52.9971 40.6299 51.6812 42.3823 50.0719C44.139 48.4587 45.5196 46.5904 46.1289 44.5586C46.2838 44.0421 46.3714 43.514 46.3997 42.9774C45.5947 42.9493 44.7622 42.8675 43.9104 42.7465C41.2703 42.3717 38.7765 41.2815 36.4323 40.2567C35.9941 40.0652 35.5612 39.8759 35.1335 39.6941C30.701 37.8091 27.0461 35.7606 23.4875 32.5126C21.3545 30.5659 19.7417 28.0303 19.524 24.9781C19.4366 23.7532 19.6821 22.7228 20.221 21.8996C20.7573 21.0803 21.5373 20.5379 22.3962 20.2016C24.0839 19.5406 26.1885 19.6263 27.903 20.0285C33.9473 21.4467 38.5902 25.6456 42.2187 30.2633C43.6315 32.0613 45.3903 34.3976 46.6044 36.9278C47.2677 38.3101 47.7863 39.7871 47.9839 41.2922C49.1523 41.2034 50.1631 40.9452 51.0107 40.4844C52.6193 39.6098 53.8162 37.9025 54.2711 34.6873C54.7294 31.448 54.0812 28.134 53.4154 24.7305C53.3293 24.2902 53.2429 23.8484 53.1585 23.405C51.7401 15.95 49.011 8.53689 45.4957 1.78959C45.2838 1.38302 45.4417 0.881713 45.8483 0.669889ZM46.3099 41.3122C46.1256 40.1062 45.6967 38.8737 45.1077 37.646C43.9789 35.2936 42.3208 33.0803 40.9133 31.2891C37.3832 26.7964 33.0343 22.9377 27.5238 21.6448C25.9891 21.2847 24.2591 21.2549 23.0015 21.7474C22.3878 21.9878 21.9174 22.3393 21.61 22.8089C21.3051 23.2746 21.1135 23.9282 21.18 24.8599C21.3588 27.3672 22.6858 29.5332 24.6067 31.2864C27.984 34.369 31.4601 36.3279 35.7832 38.1663C36.2429 38.3618 36.6974 38.56 37.1484 38.7567C39.4963 39.7806 41.7482 40.7627 44.1437 41.1028C44.9072 41.2112 45.6295 41.2826 46.3099 41.3122ZM24.0205 54.9142C22.905 51.7858 20.782 49.0625 18.3497 46.6828C16.1517 44.5322 13.5833 42.5765 10.7656 41.5272C10.1868 41.3117 9.49575 41.1184 8.83095 41.0639C8.15733 41.0087 7.60208 41.1028 7.20538 41.3576C6.90351 41.5515 6.76257 41.8235 6.7324 42.1718C6.69989 42.5472 6.80359 43.0003 7.01879 43.4224C8.11532 45.5729 10.4 47.3807 12.4438 48.9831C15.3274 51.2439 18.3811 53.1201 21.8133 54.2711C22.5483 54.5175 23.2845 54.733 24.0205 54.9142ZM6.8423 64.8815C6.98835 64.0295 7.12611 63.1827 7.23356 62.3096C7.3295 61.5301 7.27711 60.9353 7.08048 60.5096C6.90467 60.129 6.57106 59.7898 5.85653 59.5866C5.32333 59.435 4.55072 59.5156 3.86078 59.8495C3.17105 60.1833 2.73791 60.6804 2.64006 61.2032C2.6078 61.3755 2.6802 61.6504 3.02783 62.0598C3.32924 62.4148 3.71335 62.7276 4.05312 63.0042C4.08805 63.0326 4.12251 63.0607 4.15636 63.0884C4.9978 63.7764 5.89536 64.3745 6.8423 64.8815Z"
                        fill="#181818"
                      />
                    </svg>
                  </div>
                </div>
                <div className="border-line2 mb-0"></div>
                <img className="watch1" src={image1} alt="My Image" />
                <div className="border-line2-1 mb-0"></div>
              </div>
            </div>

            <div className="flex shopnowsvg mt-7 ml-4">
              <div className="shopnow">
                <svg
                  width="169.508px"
                  height="55.111px"
                  viewBox="0 0 170 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shopnowbox"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="168.508"
                    height="54.1111"
                    fill="#FE682F"
                  />
                  <path
                    d="M50.8214 32.2551C49.9574 32.2551 49.1467 32.1378 48.3894 31.9031C47.632 31.6684 46.992 31.3378 46.4694 30.9111L47.1574 29.4071C47.7014 29.8231 48.272 30.1271 48.8694 30.3191C49.4774 30.5111 50.1334 30.6071 50.8374 30.6071C51.616 30.6071 52.2134 30.4738 52.6294 30.2071C53.056 29.9298 53.2694 29.5458 53.2694 29.0551C53.2694 28.6284 53.072 28.3031 52.6774 28.0791C52.2934 27.8551 51.648 27.6418 50.7414 27.4391C49.8027 27.2364 49.04 27.0018 48.4534 26.7351C47.8667 26.4684 47.424 26.1271 47.1254 25.7111C46.8267 25.2951 46.6774 24.7671 46.6774 24.1271C46.6774 23.4658 46.8587 22.8738 47.2214 22.3511C47.584 21.8284 48.096 21.4231 48.7574 21.1351C49.4187 20.8364 50.1814 20.6871 51.0454 20.6871C51.8347 20.6871 52.5867 20.8098 53.3014 21.0551C54.016 21.2898 54.6027 21.6151 55.0614 22.0311L54.3734 23.5351C53.3707 22.7351 52.2614 22.3351 51.0454 22.3351C50.32 22.3351 49.744 22.4844 49.3174 22.7831C48.9014 23.0711 48.6934 23.4764 48.6934 23.9991C48.6934 24.4364 48.88 24.7724 49.2534 25.0071C49.6267 25.2418 50.2614 25.4604 51.1574 25.6631C52.1067 25.8764 52.8747 26.1164 53.4614 26.3831C54.0587 26.6391 54.512 26.9698 54.8214 27.3751C55.1414 27.7804 55.3014 28.2924 55.3014 28.9111C55.3014 29.5831 55.12 30.1751 54.7574 30.6871C54.4054 31.1884 53.888 31.5778 53.2054 31.8551C52.5334 32.1218 51.7387 32.2551 50.8214 32.2551ZM61.5685 24.0951C62.5072 24.0951 63.2058 24.3618 63.6645 24.8951C64.1232 25.4284 64.3525 26.2338 64.3525 27.3111V32.1111H62.3525V27.4231C62.3525 26.8151 62.2352 26.3724 62.0005 26.0951C61.7765 25.8178 61.4192 25.6791 60.9285 25.6791C60.3525 25.6791 59.8885 25.8604 59.5365 26.2231C59.1952 26.5858 59.0245 27.0711 59.0245 27.6791V32.1111H57.0245V20.8311H59.0245V25.3751C59.2912 24.9591 59.6432 24.6444 60.0805 24.4311C60.5285 24.2071 61.0245 24.0951 61.5685 24.0951ZM69.9519 32.2391C69.1519 32.2391 68.4479 32.0738 67.8399 31.7431C67.2425 31.4124 66.7785 30.9378 66.4479 30.3191C66.1172 29.7004 65.9519 28.9804 65.9519 28.1591C65.9519 27.3378 66.1172 26.6231 66.4479 26.0151C66.7785 25.3964 67.2425 24.9218 67.8399 24.5911C68.4479 24.2604 69.1519 24.0951 69.9519 24.0951C70.7519 24.0951 71.4505 24.2604 72.0479 24.5911C72.6559 24.9218 73.1199 25.3964 73.4399 26.0151C73.7705 26.6231 73.9359 27.3378 73.9359 28.1591C73.9359 28.9804 73.7705 29.7004 73.4399 30.3191C73.1199 30.9378 72.6559 31.4124 72.0479 31.7431C71.4505 32.0738 70.7519 32.2391 69.9519 32.2391ZM69.9359 30.6871C70.5865 30.6871 71.0825 30.4738 71.4239 30.0471C71.7652 29.6204 71.9359 28.9911 71.9359 28.1591C71.9359 27.3378 71.7652 26.7138 71.4239 26.2871C71.0825 25.8498 70.5919 25.6311 69.9519 25.6311C69.3119 25.6311 68.8159 25.8498 68.4639 26.2871C68.1225 26.7138 67.9519 27.3378 67.9519 28.1591C67.9519 28.9911 68.1225 29.6204 68.4639 30.0471C68.8052 30.4738 69.2959 30.6871 69.9359 30.6871ZM80.083 24.0951C80.755 24.0951 81.3523 24.2658 81.875 24.6071C82.4083 24.9484 82.819 25.4338 83.107 26.0631C83.4057 26.6818 83.555 27.3964 83.555 28.2071C83.555 29.0178 83.4057 29.7271 83.107 30.3351C82.819 30.9431 82.4137 31.4124 81.891 31.7431C81.3683 32.0738 80.7657 32.2391 80.083 32.2391C79.5283 32.2391 79.0323 32.1218 78.595 31.8871C78.1577 31.6524 77.8217 31.3271 77.587 30.9111V34.9911H75.587V24.2871H77.555V25.4711C77.7897 25.0338 78.1257 24.6978 78.563 24.4631C79.011 24.2178 79.5177 24.0951 80.083 24.0951ZM79.555 30.6871C80.1843 30.6871 80.675 30.4738 81.027 30.0471C81.379 29.6098 81.555 28.9964 81.555 28.2071C81.555 27.3964 81.379 26.7671 81.027 26.3191C80.675 25.8711 80.1843 25.6471 79.555 25.6471C78.915 25.6471 78.419 25.8658 78.067 26.3031C77.7257 26.7404 77.555 27.3644 77.555 28.1751C77.555 28.9751 77.7257 29.5938 78.067 30.0311C78.419 30.4684 78.915 30.6871 79.555 30.6871ZM97.3001 20.8311H99.2361V32.1111H97.6841L91.6361 24.2391V32.1111H89.7161V20.8311H91.2521L97.3001 28.6871V20.8311ZM105.061 32.2391C104.261 32.2391 103.557 32.0738 102.949 31.7431C102.352 31.4124 101.888 30.9378 101.557 30.3191C101.227 29.7004 101.061 28.9804 101.061 28.1591C101.061 27.3378 101.227 26.6231 101.557 26.0151C101.888 25.3964 102.352 24.9218 102.949 24.5911C103.557 24.2604 104.261 24.0951 105.061 24.0951C105.861 24.0951 106.56 24.2604 107.157 24.5911C107.765 24.9218 108.229 25.3964 108.549 26.0151C108.88 26.6231 109.045 27.3378 109.045 28.1591C109.045 28.9804 108.88 29.7004 108.549 30.3191C108.229 30.9378 107.765 31.4124 107.157 31.7431C106.56 32.0738 105.861 32.2391 105.061 32.2391ZM105.045 30.6871C105.696 30.6871 106.192 30.4738 106.533 30.0471C106.875 29.6204 107.045 28.9911 107.045 28.1591C107.045 27.3378 106.875 26.7138 106.533 26.2871C106.192 25.8498 105.701 25.6311 105.061 25.6311C104.421 25.6311 103.925 25.8498 103.573 26.2871C103.232 26.7138 103.061 27.3378 103.061 28.1591C103.061 28.9911 103.232 29.6204 103.573 30.0471C103.915 30.4738 104.405 30.6871 105.045 30.6871ZM121.131 24.2871H123.083L120.011 32.1111H118.267L116.347 27.0711L114.475 32.1111H112.747L109.659 24.2871H111.707L113.707 29.7271L115.707 24.2871H117.147L119.147 29.7591L121.131 24.2871Z"
                    fill="#1A1A1A"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="168.508"
                    height="54.1111"
                    stroke="black"
                  />
                </svg>
              </div>
              <svg
                className="ml-20 pointer"
                width="116"
                height="72"
                viewBox="0 0 116 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.1056 3.70537C18.0463 11.4355 9.36674 22.6601 3.56497 25.4136C7.80023 24.8839 18.9627 25.2114 29.7305 30.7592"
                  stroke="#181818"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.13738 25.0036C42.5941 6.81747 56.1208 20.6368 83.6129 63.8537C83.7201 64.0222 83.9883 63.9317 83.9906 63.7321C84.4866 20.9982 109.989 38.1065 105.384 65.9091"
                  stroke="#181818"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="md:pb-16">
            <div className="border-line3 mb-0"></div>
            <div className="col2 md:flex">
              <img className="img2" src={image2} alt="Wristwatch2" />
              <div className="mt-3">
                <svg
                  className="circle"
                  width="62"
                  height="61"
                  viewBox="0 0 62 61"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="26.2846"
                    cy="26.2846"
                    r="25.7846"
                    fill="#FE682F"
                    stroke="black"
                  />
                  <circle
                    cx="35.7073"
                    cy="34.7154"
                    r="25.7846"
                    fill="#FDF6EB"
                    stroke="black"
                  />
                </svg>
                <p className="everyone">
                  EVERYONE LOOKS AT YOUR WATCH AND IT REPRESENTS WHO YOU ARE,
                  YOUR VALUES AND YOUR PERSONAL STYLE
                </p>
              </div>
              <div className="border-line2  mb-0"></div>
              <div className="whats ">
                WHATS TRENDING?
                <div className="whatssvg m-4">
                  <svg
                    width="155"
                    height="8"
                    viewBox="0 0 155 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M65.9066 0.766163C58.6742 1.02872 51.5268 1.35156 44.5568 1.7045C34.6901 2.20379 24.8272 2.7203 15.0238 3.5381C11.9379 3.79636 8.8041 3.95991 5.73748 4.28272C3.81246 4.48502 1.25991 4.77337 0.924925 4.83362C0.749712 4.86806 0.673273 4.91976 0.648573 4.93697C0.474904 5.05749 0.506592 5.17366 0.604619 5.26405C0.643984 5.30278 0.743527 5.39751 1.01985 5.41043C19.4998 6.29279 38.3966 4.57111 56.8989 4.39033C88.9853 4.08043 122.044 5.31143 153.876 7.99726C154.154 8.01878 154.424 7.91115 154.462 7.75189C154.509 7.59694 154.308 7.44629 154.03 7.42477C122.145 4.73464 89.0316 3.49932 56.8835 3.81353C39.64 3.98139 22.0562 5.4922 4.78886 4.9757C5.1856 4.93265 5.57464 4.8896 5.9297 4.85086C8.98396 4.52804 12.1046 4.3688 15.1782 4.11055C24.9608 3.29274 34.8036 2.77624 44.6572 2.28125C56.8835 1.66145 69.6424 1.12772 82.5016 0.878076C87.1019 0.916814 91.6868 0.955569 96.2716 1.00292C106.19 1.10622 116.155 1.40751 126.05 1.81211C129.03 1.93693 132.009 2.06605 134.988 2.17796C135.976 2.2167 138.523 2.32859 138.879 2.31998C139.319 2.31137 139.403 2.10479 139.411 2.07035C139.434 1.99288 139.419 1.88526 139.203 1.79488C139.18 1.78196 139.041 1.73889 138.732 1.71307C120.74 0.189377 101.528 -0.0645317 82.5171 0.301327C62.4641 0.142071 42.3339 0.0731716 22.3318 0C22.0454 0 21.8116 0.129145 21.8092 0.288401C21.8077 0.447657 22.0385 0.576807 22.3248 0.581111C36.8081 0.632761 51.3646 0.684383 65.9066 0.766163Z"
                      fill="#1A1A1A"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="border-line4 w-full "></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
