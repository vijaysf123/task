(function () {
    try {
      /* main variables */
      var debug = 0;
      var variation_name = "";
      /* all Pure helper functions */
      function waitForElement(selector, trigger, delayInterval, delayTimeout) {
        var interval = setInterval(function () {
          if (
            document &&
            document.querySelector(selector) &&
            document.querySelectorAll(selector).length > 0
          ) {
            clearInterval(interval);
            trigger();
          }
        }, delayInterval);
        setTimeout(function () {
          clearInterval(interval);
        }, delayTimeout);
      }
  
      var htmlString =''+ 
  '  <div class=eg_task>'+ 
  '  '+ 
  '      <svg class="eg-first" width="83" height="19" viewBox="0 0 83 19" fill="none" xmlns="http://www.w3.org/2000/svg">'+ 
  '  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5618 0H10.4876C10.4876 3.42529 8.95226 6.56917 6.27543 8.62599L4.66128 9.86594L10.9156 18.6139H16.0578L10.303 10.5644C13.0309 7.77816 14.5618 4.0296 14.5618 0ZM21.2031 18.607H17.2714V0.00247524H21.2031V18.607ZM33.087 5.73859V6.56185C32.0258 5.81926 30.7449 5.38287 29.3634 5.38287C25.7071 5.38287 22.7431 8.42318 22.7431 12.1736C22.7431 15.924 25.7071 18.9643 29.3634 18.9643C30.7449 18.9643 32.0258 18.528 33.087 17.7856V18.6081H36.8435V5.73859H33.087ZM33.0746 12.1736C33.0746 14.0023 31.5506 15.4848 29.6707 15.4848C27.7909 15.4848 26.267 14.0023 26.267 12.1736C26.267 10.3449 27.7909 8.86276 29.6707 8.86276C31.5506 8.86276 33.0746 10.3449 33.0746 12.1736ZM72.7168 6.56185V5.73859H76.4731V18.6081H72.7168V17.7856C71.6556 18.528 70.3747 18.9643 68.993 18.9643C65.3367 18.9643 62.3727 15.924 62.3727 12.1736C62.3727 8.42318 65.3367 5.38287 68.993 5.38287C70.3747 5.38287 71.6556 5.81926 72.7168 6.56185ZM69.3005 15.4848C71.1804 15.4848 72.7042 14.0023 72.7042 12.1736C72.7042 10.3449 71.1804 8.86276 69.3005 8.86276C67.4206 8.86276 65.8968 10.3449 65.8968 12.1736C65.8968 14.0023 67.4206 15.4848 69.3005 15.4848ZM78.1035 16.4614C78.1035 15.1259 79.1588 14.0434 80.4606 14.0434C81.7625 14.0434 82.818 15.1259 82.818 16.4614C82.818 17.7966 81.7625 18.8793 80.4606 18.8793C79.1588 18.8793 78.1035 17.7966 78.1035 16.4614ZM55.6976 5.39245C54.197 5.39245 52.7769 5.87031 51.8275 7.18868V5.73935H48.0872V18.6081H51.8734V11.8451C51.8734 9.88809 53.1528 8.92975 54.6932 8.92975C56.3442 8.92975 57.2933 9.94138 57.2933 11.8185V18.6081H61.0452V10.4241C61.0452 7.42921 58.7238 5.39245 55.6976 5.39245ZM42.6545 5.7388V7.41495C43.4075 6.40952 44.8106 5.73955 46.336 5.73955V9.48435C46.3289 9.48426 46.322 9.48388 46.3151 9.48351C46.3073 9.48308 46.2995 9.48266 46.2914 9.48266C44.8051 9.48266 42.6631 10.5723 42.6631 12.5995V18.6081H38.8085V5.7388H42.6545ZM4.16331 18.6131H0V1.18601e-05H4.16331V18.6131Z" fill="#133340"/>'+ 
  '  </svg>'+ 
  '  '+ 
  '      <svg class="eg-second" width="68" height="26" viewBox="0 0 68 26" fill="none" xmlns="http://www.w3.org/2000/svg">'+ 
  '  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9768 3.32142C12.1982 4.19161 10.9523 4.87795 9.7064 4.7799C9.55067 3.60331 10.1606 2.35318 10.8744 1.58104C11.6531 0.686345 13.0158 0.0490246 14.1189 0C14.2487 1.22562 13.7425 2.42672 12.9768 3.32142ZM14.106 5.01276C13.0084 4.9531 12.0069 5.32449 11.198 5.62448C10.6774 5.81752 10.2366 5.981 9.90117 5.981C9.52481 5.981 9.06578 5.80878 8.55038 5.61542C7.87506 5.36206 7.10297 5.07239 6.29331 5.0863C4.43747 5.11081 2.71141 6.10356 1.76402 7.6846C-0.182671 10.8467 1.25788 15.5285 3.13968 18.1023C4.06111 19.377 5.16423 20.7742 6.61776 20.7251C7.25722 20.7024 7.71722 20.518 8.19327 20.3272C8.74133 20.1076 9.31067 19.8795 10.1997 19.8795C11.0578 19.8795 11.6023 20.1017 12.1249 20.315C12.6219 20.5178 13.0991 20.7126 13.8075 20.7006C15.313 20.6761 16.2604 19.426 17.1818 18.1514C18.1762 16.7833 18.6131 15.4482 18.6795 15.2456L18.6872 15.2221C18.6856 15.2206 18.6733 15.2153 18.6517 15.2059C18.3193 15.0622 15.7786 13.9638 15.7542 11.0183C15.7297 8.54593 17.7694 7.29329 18.0905 7.0961L18.0906 7.09607C18.1101 7.08409 18.1232 7.07601 18.1292 7.07179C16.8314 5.25788 14.8068 5.06178 14.106 5.01276ZM24.5272 20.5658V1.45844H32.1193C36.0386 1.45844 38.7769 4.00772 38.7769 7.73359C38.7769 11.4595 35.9867 14.0333 32.0154 14.0333H27.6678V20.5658H24.5272ZM27.668 3.95873H31.2888C34.0142 3.95873 35.5715 5.33142 35.5715 7.74588C35.5715 10.1603 34.0142 11.5453 31.2758 11.5453H27.668V3.95873ZM49.1464 18.274C48.3158 19.7692 46.4859 20.7129 44.5133 20.7129C41.5932 20.7129 39.5557 19.0706 39.5557 16.5949C39.5557 14.1436 41.5283 12.7342 45.1751 12.5258L49.0945 12.3052V11.2512C49.0945 9.69466 48.0173 8.84899 46.0966 8.84899C44.5133 8.84899 43.3582 9.62112 43.1246 10.7977H40.2954C40.3863 8.32197 42.8521 6.52032 46.1874 6.52032C49.7823 6.52032 52.1183 8.29746 52.1183 11.0551V20.5659H49.2113V18.274H49.1464ZM45.3568 18.4455C43.6827 18.4455 42.6185 17.6857 42.6185 16.5213C42.6185 15.3202 43.6438 14.6216 45.6034 14.5113L49.0945 14.303V15.3815C49.0945 17.1709 47.4852 18.4455 45.3568 18.4455ZM61.7609 21.3135C60.502 24.6594 59.0615 25.7625 55.9987 25.7625C55.7651 25.7625 54.9864 25.738 54.8047 25.6889V23.397C54.9994 23.4216 55.4796 23.4461 55.7261 23.4461C57.1148 23.4461 57.8935 22.8945 58.3736 21.4606L58.6592 20.6149L53.3382 6.70417H56.6216L60.3203 17.9921H60.3852L64.0839 6.70417H67.2765L61.7609 21.3135Z" fill="#133340"/>'+ 
  '  </svg>'+ 
  '  </div>';
  
      function init() {
        document
          .querySelector(".c-myregistry .c-btn")
          .insertAdjacentHTML("afterend", htmlString);
  
        }
  
      waitForElement(".c-myregistry .c-btn", init, 100, 35000);
    } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();