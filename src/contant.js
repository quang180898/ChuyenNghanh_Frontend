export const IMAGE_URL = "../"

export const CONTENT_TYPE = 'application/json; charset=utf-8';
export const CONTENT_MULITPART = 'multipart/form-data';
export const MNV_ENCODE = 0;

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

export const PERMISSION = [
    { value: 1, label: 'admin', data: 'Admin' },
    { value: 2, label: 'user', data: 'User' },
]

export const GENDER_TYPE = [
    {value: 0, label: "Male" },
    {value: 1, label: "Famale"},
]

export const PAGES_URL = {
    login: {
        url: '/login',
        title: ''
    },
    register: {
        url: '/register',
        title: ''
    },
    forgotPassword: {
        url: '/forgotPassword',
        title: ''
    },
    home: {
        url: '/home',
        title: ''
    },
}