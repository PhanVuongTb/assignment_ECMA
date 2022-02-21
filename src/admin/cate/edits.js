import axios from "axios";
import { update, get } from "../../api/cate";

const editCate = {
    async render(id) {
        const { data } = await get(id);
        return /* html */`
        
        <div class="min-h-full">
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 class="text-xl mx-auto font-bold text-gray-900">
                        Sửa Danh Mục
                    </h1>
                </div>
            </header>
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div class="px-4 py-6 sm:px-0">
                        <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
                        <form action="#" method="POST" id="form-edit">
                        <div class="shadow overflow-hidden sm:rounded-md">
                         
                            <div class="col-span-6 sm:col-span-3">
                                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                                    Tên Danh mục
                                </span>
                                <input type="text" id="danhmuc" class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" value="${data.name}" />
                            </div>
                    </div>
                    <div class="flex">
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-900 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Update</button>
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
    afterRender(id) {
        const formEdit = document.querySelector("#form-edit");
        formEdit.addEventListener("submit", async (e) => {
            e.preventDefault();
            update({
                id,
                name: document.querySelector("#danhmuc").value,
            });
            document.location.href = "/admin/cate";
        });
    },
};
export default editCate;