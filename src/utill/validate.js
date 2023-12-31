export const validateEmail = (rule, value) => {
    if (!value) {
      return Promise.reject('vui lòng nhập email.');    
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      return Promise.reject('email không hợp lệ, vui lòng thử lại.');
    }
    return Promise.resolve();
  };
  export const validatePrice = (rule, value) => {
    if (!value) {
      return Promise.reject('vui lòng nhập giá sản phẩm.');
    }
    if (!/^\d+(\.\d{1,2})?$/.test(value)) {
      return Promise.reject('giá sản phẩm phải lớn hơn 0 và là số');
    }
    return Promise.resolve();
  };
  export const validateVolume = (rule, a) => {
    if (!a) {
      return Promise.reject('vui lòng thể tích sản phẩm.');
    }
    if (!/^\d+(\.\d{1,2})?$/.test(a)) {
      return Promise.reject('thể tích sản phẩm phải lớn hơn 0');
    }
    return Promise.resolve();
  };
 export const validatePhoneNumber = (rule, value) => {
    if (!value) {
      return Promise.reject('Vui lòng nhập số điện thoại.');
    }
    if (!/^[0-9]{10}$/.test(value)) {
      return Promise.reject('Số điện thoại phải có 10 chữ số.');
    }
    return Promise.resolve();
  };
 export const validateImg = (rule, value) => {
    if (!value) {
      return Promise.reject('link ảnh không được để trống.');
    }
    if(!/\.jpeg|jpg|gif|png$/i.test(value)){
        return Promise.reject("link ảnh sai định dạng")
    }
    return Promise.resolve();
  };
  export const validateName = (rule, value) => {
    // console.log(value)
    if (!value) {
      return Promise.reject('tên không được để trống.');
    }
    return Promise.resolve();
  };
  export const validateDesc = (rule, value) => {
    // console.log(value)
    if (!value) {
      return Promise.reject('link ảnh không được để trống.');
    }
    return Promise.resolve();
  };
  