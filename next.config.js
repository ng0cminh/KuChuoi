module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["kuchuoi.com"],
  },
  domain: process.env.SITE_URL || "https://kuchuoi.herokuapp.com/",
  slogan: "Kủ Chuối",
  social: {
    fb: "https://www.facebook.com/groups/148005995748927",
    tw: "https://twitter.com/trungtamtreem",
    ins: "https://www.instagram.com/thienlb31",
  },

  POST_PER_PAGE: 6, // số bài viết trên 1 trang
  ORDER_BY: "ASC", // thứ tự sắp xếp bài viết ASC: hiện thị bài viết mới đến cũ, DESC: từ cũ đến mới, không phải 2 TH trên thì sẽ k săp xếp
  FOLDER_CONTENT: "contents", // tên thư mục chứa bài viết
};
