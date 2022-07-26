$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "로맨스", size: 50 },
    headers: { Authorization: "KakaoAK 7cd5cb83a9829a0d2d6a477a2965321d" }
})
    .done(function (msg) {
        var boxs = document.getElementsByClassName("box4");
        for (var i = 0; i < boxs.length; i++) {
            $(".box4").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
            $(".box4").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
            $(".box4").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
            $(".box4").eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
        }
    });