Page({
    data: {
        SDKVersion: '',
        model: '',
        system: '',
        version: '',
        platform: '',
    },
    onLoad,
})

function onLoad() {
    wx.getSystemInfo({
        success: (res) => {
            console.log(res)
            const {
                SDKVersion, 
                model, 
                system, 
                version, 
                platform
            } = res

            this.setData({
                SDKVersion,
                model,
                system,
                version,
                platform,
            })
        }
    })
}