
// ======== get URL ========
function appUrl() {
    location.href =
      "https://apps.apple.com/vn/app/forest-dice-explorer/id6504226491";
}


// ======== get Icon ========
appIcon = {
  icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/96/c9/27/96c9271a-199c-9f9c-15d5-edf68ea1ef80/AppIcon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/246x0w.webp",
};

var iconInfo = appIcon;
document.getElementById('iconLarge').src = iconInfo.icon;
document.getElementById('iconSmall').src = iconInfo.icon;



// ======== get images URL ========
imageUrl = {
  appImg1:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/48/ea/b3/48eab30a-25a4-5879-a3d1-f70dba35657a/f90df5cc-5200-442c-ade3-ab4ac7e1afa0_description-ios-size-dek_10.jpg/434x0w.webp",
  appImg2:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/67/eb/45/67eb4527-5bd4-c411-46f6-2269514e6e43/48b378dd-94b2-470a-8327-3e3624815e74_description-ios-size-dek_11.jpg/434x0w.webp",
  appImg3:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/d6/d3/f7/d6d3f7eb-1266-1fc5-9baa-a0212ca2594b/02a70d2b-42c7-47fe-bdff-b55ad5d4a930_description-ios-size-dek_12.jpg/434x0w.webp",
};

var getImg = imageUrl;
document.getElementById('pic1').src = getImg.appImg1
document.getElementById('pic2').src = getImg.appImg2
document.getElementById('pic3').src = getImg.appImg3
