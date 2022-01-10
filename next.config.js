module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["kuchuoi.com"],
  },
  domain: process.env.SITE_URL || "https://kuchuoi.com/",
  appIdFb: "636890294324159",
  slogan: "Kủ Chuối Blog",
  aboutMe:
    "Một người vừa là bệnh nhân viêm gan vừa là bác sĩ điều trị theo dõi cho chính mình. Mong được chia sẻ những khó khăn cũng như lo lắng về bệnh với những người cùng cảnh ngộ.",
  social: {
    fb: "https://www.facebook.com/lebathien91",
    tw: "https://twitter.com/trungtamtreem",
    link: "https://kuchuoi.com",
  },
  SELECTION: "Featured", // Lựa chọn bài viết hiển thị theo selection
  FOLDER_CONTENT: "contents", // tên thư mục chứa bài viết
  POST_PER_PAGE: 6, // số bài viết trên 1 trang
  ORDER_BY: "ASC", // thứ tự sắp xếp bài viết ASC: hiện thị bài viết mới đến cũ, DESC: từ cũ đến mới, không phải 2 TH trên thì sẽ săp xếp theo Alpha B
};
