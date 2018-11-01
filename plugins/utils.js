var utils = {
  getUrlParams:function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return (r[2]); return null;
  },
  formatDate:function(t){
    let date = new Date(t);
    let m = date.getMonth() + 1;
    let fm = m>9?m:"0"+m;
    let d = date.getDate();
    let fd = d > 9 ? d : "0" + d;
    return date.getFullYear() + '-' + fm+'-'+fd;
  }
}