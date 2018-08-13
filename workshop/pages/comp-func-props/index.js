function callback(e) {
  console.log("callback from page", e);
}

Page({
  data: {
    callback: callback
  }
})