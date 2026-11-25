# 1. Lấy sẵn một máy ảo siêu nhẹ đã cài sẵn Node.js bản 20
FROM node:20-alpine

# 2. Tạo và chọn thư mục làm việc bên trong container
WORKDIR /app

# 3. Copy toàn bộ file code từ dự án vào thư mục /app
COPY . .

# 4. Lệnh mặc định sẽ chạy khi khởi động container
CMD ["node", "math.test.js"]