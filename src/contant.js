import { getLocalStore } from "functions/Utils";

export const IMAGE_URL = "../"

export const CONTENT_TYPE = 'application/json; charset=utf-8';
export const CONTENT_MULITPART = 'multipart/form-data';
export const MNV_ENCODE = 0;
export const MAX_SIZE_IMAGE = 2500000; //limit size image
export const MNV_LANGUAGE = getLocalStore('language');
export const ERROR_SERVER = 'Đã xảy ra lỗi'; //check status error fail

export const FILE_CONTENT_TYPE = {
    DEFAULT: 'application/octet-stream',
    PDF: 'application/pdf',
    PNG: 'image/png',
    JPEG: 'image/jpeg',
    JPG: 'image/jpg',
    DOC: 'application/msword',
    DOCX: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    XLS: 'application/vnd.ms-excel',
    XLSX: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    DWG: 'image/vnd.dwg',
}

export const NOTIFICATION_TYPE = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error',
}

export const PERMISSION = [
    { value: 1, label: 'admin', data: 'Admin' },
    { value: 2, label: 'user', data: 'User' },
]

export const GENDER_TYPE = [
    {value: 0, label: "Male" },
    {value: 1, label: "Famale"},
]

export const SETTING_USER = [
    {value: 1, label: "Tài khoản của tôi" },
    {value: 2, label: "Thoát tài khoản"},
]

export const PAGES_URL = {
    login: {
        url: '/login',
        title: 'Login'
    },
    register: {
        url: '/register',
        title: 'Register'
    },
    forgotPassword: {
        url: '/forgotPassword',
        title: 'ForgotPassword'
    },
    home: {
        url: '/',
        title: 'Home'
    },
    admin: {
        url: '/admin',
        title: 'Admin'
    },
}