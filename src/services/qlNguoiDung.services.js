import axios from 'axios'


export const qlNguoiDungServices = {
    dangKy: (payload) =>
        axios.post('https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy', payload, {
            headers: {
                TokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2MyIsIkhldEhhblN0cmluZyI6IjA5LzA5LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTcyNTg0MDAwMDAwMDAiLCJuYmYiOjE2OTY4NzA4MDAsImV4cCI6MTcyNTk4NzYwMH0.a30YDpRRs8DiVygvNfzGZr-a9fge4_6hBAu8wYOBE4o'
            }
        }),

    dangNhap: (payload) =>
        axios.post('https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap', payload, {
            headers: {
                TokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2MyIsIkhldEhhblN0cmluZyI6IjA5LzA5LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTcyNTg0MDAwMDAwMDAiLCJuYmYiOjE2OTY4NzA4MDAsImV4cCI6MTcyNTk4NzYwMH0.a30YDpRRs8DiVygvNfzGZr-a9fge4_6hBAu8wYOBE4o'
            }
        })
}