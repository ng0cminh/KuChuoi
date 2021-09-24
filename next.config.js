module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["example.com"],
  },
  domain: process.env.SITE_URL || "https://kuchuoi.herokuapp.com",
  slogan: "Kủ Chuối Blog",

  POST_PER_PAGE: 3, // số bài viết trên 1 trang
  ORDER_BY: "ASC", // thứ tự sắp xếp bài viết ASC: hiện thị bài viết mới đến cũ, DESC: từ cũ đến mới, không phải 2 TH trên thì sẽ k săp xếp
  FOLDER_CONTENT: "contents", // tên thư mục chứa bài viết
};
