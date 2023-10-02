import axios from "axios";
import { toast } from "react-toastify";
export const FETCH_LOADING = "Yükleniyor";
export const FETCH_ERROR = "Hata";
export const NOT_EKLE = "NOT_EKLE";
export const NOT_SIL = "NOT_SIL";

export function notEkle(not) {
  // ...
  toast.success("Not eklendi", { theme: "light" });
  return {
    type: NOT_EKLE,
    payload: not,
  };
}

export function notSil(notId) {
  // ...
  toast.warn("Not silindi");
  return {
    type: NOT_SIL,
    payload: notId,
  };
}

export function fetchLoading() {
  toast.info("Lütfen bekleyiniz", { autoClose: 1000 });
  return { type: FETCH_LOADING };
}

export function fetchError(msg) {
  return { type: FETCH_ERROR, payload: msg };
}

export const notEkleAPI = (yeniNot) => (dispatch) => {
  dispatch(fetchLoading());
  axios
    .post("https://httpbin.org/anything", yeniNot)
    .then((res) => {
      if (res.status === 200) {
        // res.data objesi içerisinden ihtiyaç duyduğunuz değeri bulun ve oluşturduğunuz notEkle ile dispatch edin
        dispatch(notEkle(res.data.json));
      }
    })
    .catch((error) => {
      dispatch(fetchError(error.response.message));
    });
};

export const notSilAPI = (id) => (dispatch) => {
  dispatch(fetchLoading());
  console.log(id);
  axios
    .delete("https://httpbin.org/anything", { data: id })
    .then((res) => {
      if (res.status === 200) {
        // res.data objesi içerisinden ihtiyaç duyduğunuz değeri bulun ve oluşturduğunuz notSil ile dispatch edin
        dispatch(notSil(res.data.data));
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch(fetchError(error.response.message));
    });
};
