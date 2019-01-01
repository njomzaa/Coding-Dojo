$(document).ready(function(){
    $("#btnclick").click(function() {
        $("#Edona #fav").show();
    });
    $("#hide").click(function() {
        $("#Edona #fav,#Edona #award").hide();
    });
    $("#show").click(function() {
        $("#Edona #fav,#Edona #award").show();
    });
    $("#toggle").click(function() {
        $("#Edona #fav,#Edona #award").toggle();
    });
    $("#btnDown").click(function(){
        $('#Gresa img').slideDown();
    });
    $("#btnUp").click(function(){
        $('#Gresa img').slideUp(700); 
        // 700 defines the duration in milisec (default:400ms)
    });
    $("#btnToggle").click(function(){
        $('#Gresa img').slideToggle();
    });
    $("#btnFadeIn").click(function(){
        $('#Gresa img').fadeIn();
    });
    $("#btnfadeout").click(function(){
        $("#hobbies").fadeOut()
    });
    $("#addclass").click(function(){
        $("ol").addClass("changecolor");
    });
    $("#btnappend").click(function(){
        $("ol").append("<li>Sports</li>");
    });
    $("#btnbefore").click(function(){
        $("ol").before("<h4>My hobbies</h4>");
    });
    $("#btnafter").click(function(){
        $("ol").after("<p>My biography is here.</p");
    });
    $("#textChng").click(function(){
        $('#Diarina ul').text("You can spend months trying to learn this stuff on your own, or you can come here at Coding Dojo and get it right away. We Believe in Human Potential! ");
    });
    $("#htmlChng").click(function(){
        $("#htmlChng").html("Coding Dojo Ninja");
    });
    $("#attrChng").click(function(){
        alert($("#Diarina img").attr('name'));
    });
    $("#valChng").click(function(){
        $("input:text").val("Coding Dojo Ninja ");
    });
})