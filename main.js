$('#username').text(users.name);
$('#login').text(users.login);

// var userName = users.name;
// document.getElementById('username').innerHTML = userName;

// var loginName = users.login;
// document.getElementById('login').innerHTML = loginName;

var repoPosts = "";
repos.forEach(function(el) {
  repoPosts +=
"<h3>"
+ "<a class='repoHeadline' href='#'>"
+ el.name
+ "</a>"
+ "</h3>"
+ "<div class='repoStats'>"
+ "<span>"
+ "Javascript"
+ "</span>"
+ "<a href='#'>"
+ "<span class='octicon octicon-star'>"
+ "</span>"
+ "0"
+ "</a>"
+ "<a href='#'>"
+ "<span class='octicon octicon-git-branch'>"
+ "</span>"
+ "0"
+ "</a>"
+ "<p>"
+ el.name
+ "</p>"
+ "<p>"
+ el.updated_at
"</p>"
+ "</div>"
})
$('.repoList').append(repoPosts);
