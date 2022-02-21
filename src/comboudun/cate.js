import { getAll } from "../api/cate";

const Cate = {
    async render() {
        const response = await getAll();
        return /* html */ `
        ${response.data.map((cate) => `
                            <tr>
                                                
                              <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-sm text-gray-900">${cate.name}</div>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="/admin/cate/${cate.id}/edit" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">sửa</a>
                              </td>    
                       
                              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button data-id=${cate.id} class="bnt btn-remove inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Xóa</button>
                              </td>
                            </tr>
                            `).join("")}
          `;
    },
};

export default Cate;