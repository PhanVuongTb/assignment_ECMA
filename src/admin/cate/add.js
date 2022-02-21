import axios from "axios";
import NavAdmin from "../../components/NavAdmin";
import { add } from "../../api/cate";

const AddCate = {
    render() {
        return /* html */`
        
        <div class="min-h-full">
            ${NavAdmin.render()}
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 class="text-xl mx-auto font-bold text-gray-900">
                        Thêm Danh Mục
                    </h1>
                </div>
            </header>
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div class="px-4 py-6 sm:px-0">
                        <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
                        <form action="#" method="POST" id="form-add-post">
                        <div class="shadow overflow-hidden sm:rounded-md">
                         
                            <div class="col-span-6 sm:col-span-3">
                                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                                    Tên đang mục
                                </span>
                                <input type="text" id="danhmuc" class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-20 rounded-md sm:text-sm focus:ring-1" placeholder="" />
                            </div>
                            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Thêm Tin Tức                        </button>
                            </div>
                        </div>  
                        </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
                    `;
    },
    afterRender() {
        const formAdd = document.querySelector("#form-add-post");
        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();
            add({
                name: document.querySelector("#danhmuc").value,
            });
            document.location.href = "/admin/cate";
        });
    },
};
export default AddCate;