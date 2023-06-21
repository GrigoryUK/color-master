

export default function youtubeJS() {

    const frames = document.getElementsByTagName("iframe");
    if (frames) {
      for (var i = 0; i < frames.length; i++) {
        frames[i].src += "?wmode=opaque";
      }
    }


}
