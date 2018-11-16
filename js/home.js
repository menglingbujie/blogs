(function(){
  var Home = new Vue({
    el: "#panelsId",
    data() {
      return {
        articleList: {}
      }
    },
    methods: {
      fetchArticlePanel() {
        var that = this;
        $.getJSON(HomeApi.articles_lasted,function(resp){
          console.log("===re--", resp.article);
          that.articleList = resp.article;
        })
      },
    },
    created() {
      this.fetchArticlePanel();
    },
  })
})()
