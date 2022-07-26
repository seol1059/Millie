$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "소설", size: 50 },
    headers: { Authorization: "KakaoAK 7cd5cb83a9829a0d2d6a477a2965321d" }
})
    .done(function (msg) {
        var boxs = document.getElementsByClassName("fs2");
        for (var i = 0; i < boxs.length; i++) {
            $(".fs2").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
            $(".fs2").eq(i).append("<h4>" + msg.documents[i].title.substring(0, 10) + "</h4>");
            $(".fs2").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");


            // $(".fs1").eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
        }
    });