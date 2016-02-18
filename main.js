$(document).ready(function () {
  // BEGIN JAVASCRIPT //

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
+ el.description
+ "</p>"
+ "<p>"
+ el.updated_at
"</p>"
+ "</div>"
})
$('.repoList').append(repoPosts);

////////// ACTIVITY MESSAGES /////////

var eventsObj = events.map(function(el) {
  if(el.payload.commits) {
    var commitMsg = el.payload.commits[0].message;
  } else {
    var commitMsg = ""
  }
  return {
    username: el.actor.login,
    time: el.created_at,
    master: el.payload.master_branch,
    repoName: el.repo.name,
    avatar: el.actor.avatar_url,
    commitNum: el.payload.head,
    message: commitMsg
  }
})

var activityPosts = "";
eventsObj.forEach(function(el) {
  activityPosts += "<div class='public-activity'>"
                + "<div class='icon-wrapper'>"
                + "<span class='mega-octicon octicon-git-commit'>"
                + "</span>"
                + "</div>"
                + "<div class='time'>"
                + el.time
                + "</div>"
                + "<div class='title'>"
                + el.username + " pushed to " + el.master + " at " + el.repoName
                + "</div>"
                + "<div class='details'>"
                + el.avatar + "<span class='octicon octicon-mark-github'>"
                + "</span>"
                + el.commitNum + el.message
                + "</div>"
                + "</div>"
  console.log(activityPosts);
})
$(".public-activity-wrapper").append(activityPosts);

$('#pubActivity').on('click', function(events) {
  event.preventDefault;
  $('.subSectionNav-wrapper').addClass('inactive');
  $('.public-activity-wrapper').removeClass('inactive');
})

$('#repoLink').on('click', function(events) {
  event.preventDefault;
  $('.subSectionNav-wrapper').removeClass('inactive');
  $('.public-activity-wrapper').addClass('inactive');
})


}) // END OF JAVASCRIPT //
