module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["kuchuoi.com"],
  },
  domain: process.env.SITE_URL || "https://kuchuoi.com/",
  slogan: "Bác Sĩ Nhà Quê",
  aboutMe:
    "Blog được xây dựng để viết về kiến thức chuyên môn y khoa của mình, mục đích là để lưu lại những thông tin y khoa mình cần dùng đến. Nó có thể có ích với những người cần thông tin giống mình",
  social: {
    fb: "https://www.facebook.com/groups/148005995748927",
    tw: "https://twitter.com/trungtamtreem",
    link: "https://kuchuoi.com",
  },

  FOLDER_CONTENT: "contents/posts", // tên thư mục chứa bài viết
  POST_PER_PAGE: 6, // số bài viết trên 1 trang
  ORDER_BY: "ASC", // thứ tự sắp xếp bài viết ASC: hiện thị bài viết mới đến cũ, DESC: từ cũ đến mới, không phải 2 TH trên thì sẽ k săp xếp
};
