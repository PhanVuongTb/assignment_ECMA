import { getAll } from "../../api/products";
import Header from "../../comboudun/header";
import Footer from "../../comboudun/footer";

const ProductsPage = {
  async render() {
    const { data } = await getAll();
    return /* html */`
        <div id="header">
                ${Header.render()}
            </div>
            <div class="my-20">
        <div class="flex flex-row justify-between my-5 pb-10">
          <h2 class="text-3xl">Tất cả sản phẩm</h2>
        </div>
        <div class="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          ${data.map((product) => `
          <div class="shadow-lg rounded-lg">
            <a href="/products/${product.id}">
              <img src="${product.img}" class="rounded-tl-lg rounded-tr-lg" />
            </a>
            <div class="p-5">
              <h3><a href="/products/${product.id}">${product.name}</a></h3>
              <div class="flex flex-col xl:flex-row justify-between">
                <a id="btnAddToCart" class="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center"
                  href="/products/${product.id}">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Add to cart
                </a>
                <a class="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center"
                  href="/products/${product.id}">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd" />
                  </svg>
                  View Details
                </a>
              </div>
            </div>
          </div>
  
          `).join("")}
            </div>
            ${Footer.render()}
            `;
  },
  afterRender() {
    Header.afterRender();
  },
};
export default ProductsPage;