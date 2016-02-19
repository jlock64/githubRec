$(document).ready(function () {
// BEGIN JAVASCRIPT //


//USER PROFILE
$('#username').text(users.name); //get username
$('#login').text(users.login); //get login name
$('#profilePic img').attr('src', 'https://avatars.githubusercontent.com/u/16665681?v=3'); //get profile pic
$('p.lines').append(' ' + '<span>' + moment(users.created_at).format("MMM Do YY") +'</span'); //timeformat
$('.statusBox p').mouseover(function() {
  $(this).css('color', '#4078c0').mouseout(function () {
    $(this).css('color', '#aaa');
  });
})

//REPOSITORY SECTION
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
+ "updated " + moment(el.created_at).startOf('day').fromNow()
"</p>"
+ "</div>"
})
$('.repoList').append(repoPosts);


//ACTIVITY MESSAGES
// var eventsObj = events.map(function(el) {
//   var commitMsg;
//   var headNumber;
//
//   if(el.payload.commits) {
//     commitMsg = el.payload.commits[0].message;
//   } else {
//     commitMsg = "";
//   }
//   if(el.payload.head) {
//     headNumber = el.payload.head.slice(0,7);
//   } else {
//     headNumber = "";
//   }
//
//   return {
//     username: el.actor.login,
//     time: moment(el.created_at).startOf('day').fromNow(),
//     master: el.payload.master_branch,
//     repoName: el.repo.name,
//     avatar: el.actor.avatar_url,
//     pushCommit: headNumber,
//     message: commitMsg
//   }
// })

var activityPosts = "";
events.forEach(function(el) {
  if(el.type === "PushEvent") {
    activityPosts += "<div class='public-activity'>"
                  + "<div class='icon-wrapper'>"
                  + "<span class='mega-octicon octicon-git-commit'>"
                  + "</span>"
                  + "</div>"
                  + "<div class='info-wrapper'>"
                  + "<div class='time'>"
                  + moment(el.created_at).startOf('day').fromNow()
                  + "</div>"
                  + "<div class='title'>"
                  + "<span class='actor'>" + el.actor.login + "</span>" + " pushed to " + "<span class='master'>"+ el.payload.ref.slice(11) + "</span>" + " at "
                  + "<span class='repoText'>" + el.repo.name + "</span>"
                  + "</div>"
                  + "<div class='details'>"
                  + "<img src='"+ el.actor.avatar_url +"'/>" + "<span class='octicon octicon-mark-github'>"
                  + "</span>"
                  + "<span class='head'>" + el.payload.head.slice(0,7) + "</span>" + "<span class='comMessage'>" + el.payload.commits[0].message + "</span>"
                  + "</div>"
                  + "</div>"
                  + "</div>"
  } else if (el.type === "CreateEvent" && el.payload.ref_type === "repository") {
      activityPosts += "<div class='createRepo'>"
      + "<span class='octicon octicon-git-branch'>"+ "</span>"
      + "<span class='actorRepo'>" + el.actor.login + "</span>" + "<span class='repoTextCreate'>" + "created repository " + "</span>" + "<span class='repoTextRepo'>" + el.repo.name + "</span>" + "<span class='timeText'>" + moment(el.created_at).startOf('day').fromNow() + "</span>"
      + "</div>" //end of div.createRepo
      //created repository do something
    }
    else {
      activityPosts += "<div class='createBranch'>"
      + "<span class='octicon octicon-repo'>" + "</span>"
      + "<span class='actorBranch'>" + el.actor.login + "</span>" + "<span class='branchTextCreate'>" + "created branch " + "</span>" + "<span class='branchText'>" + el.payload.master_branch + "</span>"
      + "<span class='atText'>" + " at " + "<span class='repoTextBranch'>" + el.repo.name + "</span>"
      + "<span class='momentText'>" + moment(el.created_at).startOf('day').fromNow() + "</span>"
      + "</div>"
    }
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
