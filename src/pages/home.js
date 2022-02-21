import footer from "../comboudun/footer";
import header from "../comboudun/header";
import Banner from "../comboudun/banner";
import NewProduct from "./products/newProduct";
import SaleProduct from "./products/saleProduct";
import News from "./post/news";

const homePage = {
  async render() {
    return /* html */`
        <div id="header">
        ${header.render()}
        </div>
        <div>
        ${Banner.render()}
        </div>
        <main>
          <div>
            ${await NewProduct.render()}
          </div>
          <div>
            ${await SaleProduct.render()}
          </div>
          <div class="news">
            ${await News.render()}
          </div>
        </main>
        
        <div id=""footer>
        ${footer.render()}
        </div>
        `;
  },
  afterRender() {
    header.afterRender();
  },
  // serach() {
  //   const search = document.getElementById("searchItem").value;
  //   const list = this.response;
  //   console.log(list);
  //   // if (search) {
  //   //     for (let i = 0; i < list.length; i++) {
  //   //         const str = list[i].name;
  //   //     }
  //   // }
  // },
};
export default homePage;