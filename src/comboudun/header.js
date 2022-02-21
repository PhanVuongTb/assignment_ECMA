import Cate from "./cate";
import { reRender } from "../utils/rerender";

const Header = {
    render() {
        return /* html */`
      <div x-data="{ cartOpen: false , isOpen: false }" class="bg-white">
        <header>
          <div class="container mx-auto px-6 py-3">
            <div class="flex items-center justify-between">
    
              <!-- Địa chỉ -->
              <div class="hidden w-full text-gray-600 md:flex md:items-center">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z"
                    fill="currentColor" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z"
                    fill="currentColor" />
                </svg>
                <span class="mx-1 text-sm">BBA Hoàn Cầu Đống Đa - Hà Nội</span>
              </div>
    
              <!-- logo -->
              <div class="w-full pl-16">
                <a href="/"><img src="./images/logo-footer.png" alt=""></a>
              </div>
    
              <!-- Tìm kiếm - tài khoản - giỏ hàng -->
              <div class="flex items-center justify-end w-full">
    
                <!-- tìm kiếm -->
                <div class="pr-5">
                  <div class="relative mt-6 max-w-lg mx-auto">
                    <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                      <svg class="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </span>
                    <input
                      class="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline"
                      type="text" placeholder="Search">
                  </div>
                </div>
    
    
                <!-- Tài khoản -->
                <div class="pt-5">
                  <div class=" relative inline-block text-left dropdown">
                    <button class="inline-flex justify-center w-full px-4 py-2" type="button" aria-haspopup="true"
                      aria-expanded="true" aria-controls="headlessui-menu-items-117">
                      <svg class="h-6 w-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </button>
                    <div
                      class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                      <div
                        class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                        aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                        <div class="py-1">
                          <a href="/signin" tabindex="0"
                            class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                            role="menuitem">Đăng nhập</a>
                        </div>
                        <div class="py-1">
                          <a href="/signup" tabindex="3"
                            class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                            role="menuitem">Đăng ký</a>
                        </div>
                      </div>
                    </div>
                    ${localStorage.getItem("user") ? `
                    <div
                      class=" invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                      <div
                        class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                        aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                        <div class="px-4 py-3">
                          <p class="text-sm leading-5">Signed in as</p>
                          <span class="block py-3 px-4 text-black" id="account"></span>
                        </div>
                        <div class="py-1">
                          <a href="/admin/statistical" tabindex="0"
                            class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                            role="menuitem">Admin</a>
                        </div>
                        <div class="py-1">
                        <a class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                         id="logout">logout</a>
                        </div>
                      </div>
                    </div>` : ""}
                  </div>
                </div>
    
                <!-- Giỏ hàng -->
                <div class="pt-6">
                  <a href="/cart" class="text-gray-600 focus:outline-none mx-4 sm:mx-0">
                    <svg class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </a>
                </div>
    
                <!-- Menu rút gọn -->
                <div class="flex sm:hidden">
                  <button @click="isOpen = !isOpen" type="button"
                    class="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                    aria-label="toggle menu">
                    <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                      <path fill-rule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                      </path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="">
            <nav :class="{'flex': open, 'hidden': !open}" class="sm:flex sm:justify-center sm:items-center mt-4">
            <a class="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="/">Trang chủ</a>
            <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="/#/products">Shop</a>
    
            <!-- Danh mục -->
            <div @click.away="open = false" class="relative" x-data="{ open: false }">
              <button @click="open = !open"
                class="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                <span>Danh mục</span>
                <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': open, 'rotate-0': !open}"
                  class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1">
                  <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg>
              </button>
              <div x-show="open" x-transition:enter="transition ease-out duration-100"
                x-transition:enter-start="transform opacity-0 scale-95"
                x-transition:enter-end="transform opacity-100 scale-100"
                x-transition:leave="transition ease-in duration-75"
                x-transition:leave-start="transform opacity-100 scale-100"
                x-transition:leave-end="transform opacity-0 scale-95"
                class="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
                ${Cate.render()}
              </div>
            </div>
            <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="/post">Bài viết</a>
            <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="/about">
              Liên hệ</a>
          </nav>
            </div>
          </div>
        </header>
        
      </div>
        `;
    },
    afterRender() {
        const account = document.querySelector("#account");
        const btnLogout = document.querySelector("#logout");
        account.innerHTML = JSON.parse(localStorage.getItem("user")).email;

        btnLogout.addEventListener("click", () => {
            localStorage.removeItem("user");
            alert("Ban da logout thanh cong");
            reRender(Header, "#header");
        });
    },
};
export default Header;