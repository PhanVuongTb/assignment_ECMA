import instance from "./instance";

export const getAll = () => {
    const url = "/cate";
    return instance.get(url);
};

export const get = (id) => {
    const url = `/cate/${id}`;
    return instance.get(url);
};
export const remove = (id) => {
    const url = `/cate/${id}`;
    return instance.delete(url);
};

export const add = (cate) => {
    const url = `/cate`;
    return instance.post(url, cate);
};
export const update = (cate) => {
    const url = `/cate/${cate.id}`;
    return instance.put(url, cate);
};