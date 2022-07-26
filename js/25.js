
        $.ajax({

            method: "GET",

            url: "https://dapi.kakao.com/v3/search/book?target=title",

            data: { query: "불편한 편의점" },

            headers: { Authorization: "KakaoAK 7cd5cb83a9829a0d2d6a477a2965321d" }

        })



            .done(function (msg) {



                console.log(msg.documents[1].title);

                console.log(msg.documents[1].thumbnail);





                // sub1

                // $(".corthro").append("<h3>" + msg.documents[0].title + "</h3>");

                // $(".corthro").append("<img src='" + msg.documents[0].thumbnail + "'/>");

                // $(".corthro").append("<h6>" + msg.documents[0].authors[0] + "</h6>");

                // $(".corthro").append(msg.documents[0].price + "원");



                var str = msg.documents[0].contents;

                var str2 = str.substring(0, 600);

                $(".corthro").append("<p>" + str2 + "</p>");
                $(".corthro").append("<p>" + str2 + "</p>");
                $(".corthro").append("<p>" + str2 + "</p>");
                $(".corthro").append("<p>" + str2 + "</p>");

                $(".corthro").append("<span>" + "자세히보기" + "</span>");

            });





        //메모장으로 sub 텍스트 가져오기, 서버에 올려야 보임



        $(function () {

            $.get("./sub_text/sub.txt", function (data) {

                $(".corthro").html(data);



            })



        });

