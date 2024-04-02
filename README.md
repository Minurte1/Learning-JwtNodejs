Hi
Learning JWT Node.js Backend

Giới thiệu

Đây là một dự án nhỏ để học về cách sử dụng JSON Web Tokens (JWT) trong phát triển ứng dụng backend sử dụng Node.js.
JWT là một phương pháp phổ biến để xác thực và ủy quyền người dùng trong các ứng dụng web và di động.

Trong dự án này, chúng ta sẽ xây dựng một backend đơn giản sử dụng Node.js và Express, và triển khai cơ chế JWT để xác thực người dùng và quản lý phiên làm việc.

Các chức năng chính
Đăng nhập và Đăng ký: Cung cấp các API endpoints để người dùng có thể đăng nhập vào hệ thống hoặc tạo một tài khoản mới.

Tạo và Xác thực JWT: Sử dụng JWT để tạo token sau khi người dùng đăng nhập thành công và xác thực token này cho các yêu cầu sau này.

Bảo mật Route: Bảo vệ một số route bằng cách yêu cầu token hợp lệ từ người dùng.

Cách cài đặt
Clone repository: Clone repository này về máy của bạn bằng cách chạy lệnh sau:

bash
Copy code
git clone https://github.com/your-username/Learning-JwtNodejs.git
Cài đặt dependencies: Di chuyển vào thư mục của dự án và cài đặt các dependencies bằng npm hoặc yarn:

bash
Copy code
cd Learning-JwtNodejs
npm install
hoặc

bash
Copy code
cd Learning-JwtNodejs
yarn install
Cấu hình biến môi trường: Tạo một tập tin .env trong thư mục gốc của dự án và cung cấp các biến môi trường sau:

plaintext
Copy code
PORT=3003
JWT_SECRET=your_secret_key
Thay your_secret_key bằng một chuỗi bí mật bất kỳ bạn muốn sử dụng cho việc ký và xác thực JWT.

Khởi động ứng dụng: Chạy ứng dụng bằng lệnh:

bash
Copy code
npm start

Sau khi ứng dụng đã khởi động thành công, bạn có thể sử dụng các API endpoints để thực hiện các thao tác đăng nhập, đăng ký và truy cập các route được bảo vệ.

Công nghệ sử dụng
Node.js: Môi trường chạy JavaScript dựa trên Chrome V8 engine để thực thi mã nền.

Express: Framework web Node.js để xây dựng các ứng dụng web và API.

JWT (JSON Web Tokens): Chuẩn mở cho việc tạo ra các token ủy quyền được định dạng dưới dạng JSON.
