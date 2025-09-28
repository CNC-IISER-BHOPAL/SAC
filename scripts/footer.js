// footer.js
export function createFooter() {
    const footerHTML = `
      <div class="footerlast bg-gray-100">
        <footer class="footer ">
          <div class="inner-footer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Contact us info -->
            <div class="footer-items">
              <img
                src="images/IISERB-LOGO.png"
                class="h-[150px] w-auto mb-4 block"
                alt="IISER Bhopal Logo"
              />
              <h3 class="footer-heading text-xl font-bold mb-4 text-gray-800">Contact us</h3>
              <ul class="space-y-2">
                <li>
                  <a
                    href="https://www.google.com/maps/place/IISER+BHOPAL/@23.2857935,77.2706367,17z/data=!3m1!4b1!4m6!3m5!1s0x397c60d9f8872aef:0x9b99241b1431032!8m2!3d23.2857936!4d77.2755076!16s%2Fg%2F12xql9g02?entry=ttu"
                    class="flex items-center text-gray-600 hover:text-yellow-600 transition-colors"
                    target="_blank"
                  >
                    <i class="fa fa-map-marker mr-2" aria-hidden="true"></i>
                    IISER Bhopal, Bhauri
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:sac@iiserb.ac.in"
                    class="flex items-center text-gray-600 hover:text-yellow-600 transition-colors"
                  >
                    <i class="fa fa-envelope mr-2" aria-hidden="true"></i>
                    sac@iiserb.ac.in
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/sac_iiserb/"
                    class="flex items-center text-gray-600 hover:text-yellow-600 transition-colors"
                    target="_blank"
                  >
                    <i class="fa fa-instagram mr-2" aria-hidden="true"></i>
                    instagram.com/sac_iiserb
                  </a>
                </li>
              </ul>
            </div>
            
            <!-- Councils -->
            <div class="footer-items border-l-0 md:border-l-2 md:border-gray-200 md:pl-8">
              <h3 class="footer-heading text-xl font-bold mb-4 text-gray-800">Councils</h3>
              <ul class="space-y-2">
                <li>
                  <a
                    href="mailto: culturalcouncil@iiserb.ac.in"
                    class="text-gray-600 hover:text-yellow-600 transition-colors"
                    target="_blank"
                  >
                    Cultural Council
                  </a>
                </li>
                <li>
                  <a
                    href="mailto: cnc@iiserb.ac.in"
                    class="text-gray-600 hover:text-yellow-600 transition-colors"
                    target="_blank"
                  >
                    Computer and Networking Council
                  </a>
                </li>
                <li>
                  <a
                    href="mailto: esic@iiserb.ac.in"
                    class="text-gray-600 hover:text-yellow-600 transition-colors"
                    target="_blank"
                  >
                    Environmental and Social Initiatives Council
                  </a>
                </li>
                <li>
                  <a
                    href="mailto: falc@iiserb.ac.in"
                    class="text-gray-600 hover:text-yellow-600 transition-colors"
                    target="_blank"
                  >
                    Fine Arts and Literary Council
                  </a>
                </li>
                <li>
                  <a
                    href="mailto: sciencecouncil@iiserb.ac.in"
                    class="text-gray-600 hover:text-yellow-600 transition-colors"
                    target="_blank"
                  >
                    Science Council
                  </a>
                </li>
                <li>
                  <a
                    href="mailto: sportscouncil@iiserb.ac.in"
                    class="text-gray-600 hover:text-yellow-600 transition-colors"
                    target="_blank"
                  >
                    Sports Council
                  </a>
                </li>
                <li>
                  <a
                    href="mailto: sdc@iiserb.ac.in"
                    class="text-gray-600 hover:text-yellow-600 transition-colors"
                    target="_blank"
                  >
                    Student Development Council
                  </a>
                </li>
              </ul>
            </div>
            
            <!-- Services -->
            <div class="footer-items">
              <h3 class="footer-heading text-xl font-bold mb-4 text-gray-800">Services</h3>
              <ul class="space-y-2">
                <li>
                  <a
                    href="Representativecouncil.html"
                    class="text-gray-600 hover:text-yellow-600 transition-colors"
                    target="_blank"
                  >
                    Representative Council
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.iiserb.ac.in/hc"
                    class="text-gray-600 hover:text-yellow-600 transition-colors"
                    target="_blank"
                  >
                    Health center
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.iiserb.ac.in/dosa/counsellor"
                    class="text-gray-600 hover:text-yellow-600 transition-colors"
                    target="_blank"
                  >
                    Councelling Cell
                  </a>
                </li>
                <li>
                  <a
                    href="https://icdpc.iiserb.ac.in/"
                    class="text-gray-600 hover:text-yellow-600 transition-colors"
                    target="_blank"
                  >
                    Placement cell
                  </a>
                </li>
              </ul>
            </div>
            
            <!-- Links -->
            <div class="footer-items">
              <h3 class="footer-heading text-xl font-bold mb-4 text-gray-800">Links</h3>
              <ul class="space-y-2 mb-6">
                <li>
                  <a
                    href="https://www.iiserb.ac.in/doaa"
                    class="text-gray-600 hover:text-yellow-600 transition-colors"
                    target="_blank"
                  >
                    Office, Academic Affairs
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.iiserb.ac.in/dosa"
                    class="text-gray-600 hover:text-yellow-600 transition-colors"
                    target="_blank"
                  >
                    Office, Student Affairs
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.iiserb.ac.in/iwd/people"
                    class="text-gray-600 hover:text-yellow-600 transition-colors"
                    target="_blank"
                  >
                    Office, Institute Works Department
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.iiserb.ac.in/vh/"
                    class="text-gray-600 hover:text-yellow-600 transition-colors"
                    target="_blank"
                  >
                    Visitor's Hostel
                  </a>
                </li>
              </ul>
              <button onclick="scrollToTop()" class="scroll-top-button bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition-colors flex items-center">
                Scroll to top
                <i class="fa fa-long-arrow-up ml-2" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          
          <!-- Footer Bottom -->
          <div class="footer-bottom mt-8 pt-6 border-t border-gray-200 text-center">
            <span class="text-gray-800 text-lg mb-2 block">
              Designed & Developed by
              <a
                href="https://www.linkedin.com/in/tanishq-sharma-5204bb249"
                target="_blank"
                class="text-yellow-600 underline hover:text-yellow-700"
              >
                Tanishq Sharma
              </a>
              and
              <a
                href="https://www.linkedin.com/in/shailesh-kachhi-681a041a2"
                target="_blank"
                class="text-yellow-600 underline hover:text-yellow-700"
              >
                Shailesh Kachhi
              </a>
            </span>
            <p class="text-gray-600">
              Copyright &copy;${new Date().getFullYear()} Student Activity Council, Indian Institute of
              Science Education and Research Bhopal. All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    `;
  
    return footerHTML;
  }
  
  // Function to scroll to top
  export function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Initialize the footer
  export function initFooter(containerId = 'footer-container') {
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = createFooter();
    }
  }
  
  // Auto-initialize if loaded directly in browser
  if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
      initFooter();
    });
  }