function section3(){
    $('.filter-buttons').click(function(){
        $('.filter-buttons').removeClass('active-button');
        $(this).addClass('active-button');
    });

    $.getJSON("./data/stories-test.json", function(json) {
        // console.log(json); // this will show the info it in firebug console
        $.each(json,function(key, value){
            // console.log(key, value);
            let tempDiv = $("<a class='card col-md-3 col-lg-3 col-sm-4 col-xs-12' href='"+value.link+"' target='_blank'></a>");
            let tempClasses = "mix";
            let tempTagBar = $("<div class='tag-bar-container'></div>");
            $.each(value.tags, function(k,v){
                console.log(v);
                tempClasses = tempClasses + ' ' + v;
                tempTagBar.append('<div class="tag-bar tag-bar-'+v+'"></div>');
            });
            let tempCardBody = $("<div class='card-body'></div>")
            const tempTitle = $("<p class='card-title'></p>").text(value.title);
            const tempDescription = $("<p class='card-description'></p>").text(value.description);
            const tempImage = $("<img src='"+value.img+"' class='col-md-12 col-xs-12 col-sm-12 col-lg-12'></img>");
            const tempAuthor = $("<p class='card-author'></p>").text('By '+value.author);
            const tempDate = $("<p class='card-date'></p>").text(value.date);
            let tempCardFooter = $("<div class='card-footer'></div>");
            tempCardFooter.append(tempAuthor).append(tempDate);
            tempCardBody.append(tempTitle).append(tempDescription).append(tempTagBar).append(tempCardFooter);
            tempDiv.addClass(tempClasses).append(tempImage).append(tempCardBody);
            $('#cards-container').append(tempDiv);


        });
        var mixer = mixitup('.container',{
            animation: {
                duration: 300
            }
        });
    });



   



}