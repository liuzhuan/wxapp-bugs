import icons from "./icons.js";

Page({
  data: {
    icons
  },
  onTap(e) {
    const { icon } = e.currentTarget.dataset;
    wx.showToast({
      title: icon,
      icon: "none"
    });
  }
});