"use strict";

import data from "./data.json" with {type: "json"};

// Queryselector

const commentsSection = document.querySelector(".comments_container");
const addCommentTextArea = document.querySelector(".add__comment");
const sendBtn = document.querySelector(".send_comment-btn");
const deleteModal = document.querySelector(".delete-modal");
const deleteOverlay = document.querySelector(".overlay");
const noBtn = deleteModal.querySelector(".no_btn");
const yesBtn = deleteModal.querySelector(".yes_btn");

const currentUser = data.currentUser.username;

// Reausable Functions :

const commentHTMLFiller = function (obj, currentUsername) {
  let commentHTML = "";
  if (obj.replies.length == 0) {
    if (obj.user.username == currentUsername) {
      commentHTML += `
      <div class="comment_replies-container">
      <div class="comment" id="${obj.id}">
            
      <div class="score">
        <button class="plus_btn">
          <svg class="plus_score-svg" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
              fill="#C5C6EF"
            ></path>
          </svg>
        </button>
        <p class="score_number">${obj.score}</p>
        <button class="minus_btn">
          <svg class="minus_score-svg" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
              fill="#C5C6EF"
            ></path>
          </svg>
        </button>
      </div>
              
      <div class="comment_inner">
  
        <div class="comment_inner-header">
  
          <div class="comment_inner-details">
            <img
              src=${obj.user.image.png}
              alt="profile pic"
            />
            <p class="comment_username">${obj.user.username}</p>
            <p class="current_user-endicator">you</p>
            <p class="comment_time">${obj.createdAt}</p>
          </div>
  
         <div class="btns_container">
            <button class="btn delete_btn">
              <svg
                class="delete-svg"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                          d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"
                          fill="#ED6368"
                />
              </svg>
              Delete
            </button>
            <button class="btn edit_btn">
              <svg class="edit-svg" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"
                  fill="#5357B6"
                />
              </svg>
              Edit
            </button>
          </div>
  
        </div>
  
        <p class="comment_text">
          ${obj.content}
        </p>
  
      </div>
    </div><div class="replies_container"></div></div>
    `;
    } else {
      commentHTML += `
      <div class="comment_replies-container">
      <div class="comment" id="${obj.id}">
            
      <div class="score">
        <button class="plus_btn">
          <svg class="plus_score-svg" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
              fill="#C5C6EF"
            ></path>
          </svg>
        </button>
        <p class="score_number">${obj.score}</p>
        <button class="minus_btn">
          <svg class="minus_score-svg" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
              fill="#C5C6EF"
            ></path>
          </svg>
        </button>
      </div>
              
      <div class="comment_inner">
  
        <div class="comment_inner-header">
  
          <div class="comment_inner-details">
            <img
              src=${obj.user.image.png}
              alt="profile pic"
            />
            <p class="comment_username">${obj.user.username}</p>
            <p class="comment_time">${obj.createdAt}</p>
          </div>
  
          <button class="btn reply_btn">
            <svg class="reply-svg" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
                fill="#5357B6"
              ></path>
            </svg>
            Reply
          </button>
  
        </div>
  
        <p class="comment_text">
          ${obj.content}
        </p>
  
      </div>
    </div><div class="replies_container"></div></div>
    `;
    }
  } else {
    let replies = ``;
    obj.replies.forEach((reply) => {
      if (reply.user.username == currentUsername) {
        replies += `<div class="comment reply current_user-reply" id="${reply.id}">

      <div class="score">
        <button class="plus_btn">
          <svg
            class="plus_score-svg"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
              fill="#C5C6EF"
            ></path>
          </svg>
        </button>
        <p class="score_number">${reply.score}</p>
        <button class="minus_btn">
          <svg
            class="minus_score-svg"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
              fill="#C5C6EF"
            ></path>
          </svg>
        </button>
      </div>

      <div class="comment_inner">

        <div class="comment_inner-header">
          <div class="comment_inner-details">
            <img
              src=${reply.user.image.png}
              alt="profile pic"
            />
            <p class="comment_username">${reply.user.username}</p>
            <p class="current_user-endicator">you</p>
            <p class="comment_time">${reply.createdAt}</p>
          </div>

          <div class="btns_container">
            <button class="btn delete_btn">
              <svg
                class="delete-svg"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                          d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"
                          fill="#ED6368"
                />
              </svg>
              Delete
            </button>
            <button class="btn edit_btn">
              <svg class="edit-svg" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"
                  fill="#5357B6"
                />
              </svg>
              Edit
            </button>
          </div>

        </div>

        <p class="comment_text">
          <span class="reply_tag">@${obj.user.username}</span> ${reply.content}
        </p>
                
      </div>

    </div>`;
      } else {
        replies += `<div class="comment reply " id="${reply.id} ">

      <div class="score">

        <button class="plus_btn">
          <svg
            class="plus_score-svg"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
              fill="#C5C6EF"
            ></path>
          </svg>
        </button>

        <p class="score_number">${reply.score}</p>

        <button class="minus_btn">
          <svg
            class="minus_score-svg"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
              fill="#C5C6EF"
            ></path>
          </svg>
        </button>

      </div>

      <div class="comment_inner">

        <div class="comment_inner-header">

          <div class="comment_inner-details">
            <img
              src=${reply.user.image.png}
              alt="profile pic"
            />
            <p class="comment_username">${reply.user.username}</p>
            <p class="comment_time">${reply.createdAt}</p>
          </div>

         
        </div>

        <p class="comment_text">
          <span class="reply_tag">@${obj.user.username}</span> ${reply.content}
        </p>

      </div>
    </div>`;
      }
    });
    commentHTML += `<div class="comment_replies-container">
    <div class="comment" id="${obj.id}">
          
    <div class="score">
      <button class="plus_btn">
        <svg class="plus_score-svg" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
            fill="#C5C6EF"
          ></path>
        </svg>
      </button>
      <p class="score_number">${obj.score}</p>
      <button class="minus_btn">
        <svg class="minus_score-svg" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
            fill="#C5C6EF"
          ></path>
        </svg>
      </button>
    </div>
            
    <div class="comment_inner">

      <div class="comment_inner-header">

        <div class="comment_inner-details">
          <img
            src=${obj.user.image.png}
            alt="profile pic"
          />
          <p class="comment_username">${obj.user.username}</p>
          <p class="comment_time">${obj.createdAt}</p>
        </div>

        <button class="btn reply_btn">
          <svg class="reply-svg" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
              fill="#5357B6"
            ></path>
          </svg>
          Reply
        </button>

      </div>

      <p class="comment_text">
        ${obj.content}
      </p>

    </div>
  </div>
  <div class="replies_container">
  ${replies}
  </div>
  </div>`;
  }
  return commentHTML;
};

const updateUI = function () {
  commentsSection.innerHTML = "";
  data.comments.forEach((comment) => {
    commentsSection.insertAdjacentHTML(
      "beforeend",
      commentHTMLFiller(comment, currentUser)
    );
  });
};

const getID = (obj) => {
  let id = 0;
  obj.comments.forEach((comment) => {
    if (comment.id > id) {
      id = comment.id;
      if (comment.replies.length != 0) {
        comment.replies.forEach((reply) => {
          if (reply.id > id) id = reply.id;
        });
      }
    }
  });

  return id;
};

const checkEmptyText = (str) => {
  if (str == "") return false;
  if (str.trim().length === 0) return false;
  return true;
};

const closeDeleteModal = function () {
  deleteModal.classList.add("hidden");
  deleteOverlay.classList.add("hidden");
  document.body.style.overflow = "visible";
};

let commentToDelete;
const openDeleteModal = function (e) {
  deleteModal.classList.remove("hidden");
  deleteOverlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  commentToDelete = e.target.closest(".comment");
  removeEvents();
  updateSite();
};

const deleteComment = function (commentDelID) {
  // console.log(commentDelID);
  data.comments = data.comments.filter((comment) => comment.id != commentDelID);
  data.comments.forEach((comment) => {
    comment.replies = comment.replies.filter(
      (reply) => reply.id != commentDelID
    );
  });
};

// let updateCheck;

const editFunction = function (e) {
  // updateCheck = true;
  const updateBtnHTML = `<button class="sumbit_btn">UPDATE</button>`;
  e.target
    .closest(".btns_container")
    .insertAdjacentHTML("beforeend", updateBtnHTML);
  e.target.closest(".edit_btn").style.display = "none";
  const commentToEdit = e.target
    .closest(".comment")
    .querySelector(".comment_text");
  const existingCommentText = commentToEdit.textContent;
  commentToEdit.classList.add("hidden");
  const textarea = `<textarea
    name="input"
    class="input_comment"
    id=""
    placeholder="Add a comment..."
    >${existingCommentText.trim()}</textarea>`;
  commentToEdit.insertAdjacentHTML("afterend", textarea);
  removeEvents();
  updateSite();
};

const findReplyEdit = (id) => {
  // console.log(id);
  let replyToEdit;
  data.comments.forEach((comment) => {
    // console.log(';');
    if (comment.replies.find((reply) => reply.id == id)) {
      replyToEdit = comment.replies.find((reply) => reply.id == id);
      return;
    }
  });
  return replyToEdit;
};

const findCommentEdit = function (id) {
  id = Number(id);
  // console.log(id);
  const commentToEdit = data.comments.find((comment) => comment.id == id)
    ? data.comments.find((comment) => comment.id == id)
    : findReplyEdit(id);
  return commentToEdit;
};

const updateBtnFunction = (e) => {
  const commentDisplay = e.target
    .closest(".comment")
    .querySelector(".comment_text");
  const replyToUsername = commentDisplay.textContent
    .trim()
    .slice(0, commentDisplay.textContent.trim().indexOf(" ") + 1);
  let newComment = e.target.closest(".comment").querySelector("textarea").value;
  if (checkEmptyText(newComment)) {
    if (newComment[0] === "@")
      newComment = newComment.slice(newComment.indexOf(" "));
    commentDisplay.innerHTML = `<span class="reply_tag">${replyToUsername}</span> ${newComment.trim()}`;
    commentDisplay.classList.remove("hidden");
    e.target.closest(".comment").querySelector("textarea").remove();
    e.target.closest(".comment").querySelector(".edit_btn").style.display =
      "flex";

    // --->EditingReplyDATA :

    const idOfChangedComment = e.target.closest(".comment").id;

    const commentToEdit = findCommentEdit(idOfChangedComment);
    commentToEdit.content = newComment;

    // --->ChangingDATA :

    // console.log(newComment);

    e.target.remove();
  }
};

const replyBtnFunction = function (e) {
  const parent = e.target.closest(".comment_replies-container");
  const check = parent.querySelector(".write_reply");
  if (!check) {
    const existingReplySection = document.querySelector(".write_reply");
    if (existingReplySection) {
      existingReplySection.remove();
    }
    const addReplyHTML = `<div class="add_comment input write_reply">
          <img src="images/avatars/image-juliusomo.png" alt="profile pic">
          <textarea name="input" class="input_comment write_reply-text" id="" placeholder="Add a comment..."></textarea>
          <button class="send_comment-btn reply_comment-btn">REPLY</button>
        </div>`;

    parent.insertAdjacentHTML("beforeend", addReplyHTML);
    parent
      .querySelector(".write_reply")
      .scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    parent
      .querySelector(".write_reply")
      .scrollIntoView({ behavior: "smooth", block: "center" });
    check.style.transform = "scale(1.06)";
    check.style.boxShadow = " rgba(0, 0, 0, 0.4) 2.6px 2.6px 2.6px 2.6px";
    setTimeout(popUp, 1000);
    function popUp() {
      check.style.transform = "scale(1.01)";
      check.style.boxShadow = " rgba(0, 0, 0, 0.2) 1.95px 1.95px 2.6px 1.95px";
    }
  }
  const replySendBtn = document.querySelector(".reply_comment-btn");
  replySendBtn.addEventListener("click", function () {
    const replyContent = parent.querySelector("textarea").value;
    const commentRepliedToID = parent.querySelector(".comment").id;
    const repliesExisting = data.comments.find(
      (obj) => obj.id == commentRepliedToID
    ).replies;
    if (checkEmptyText(replyContent)) {
      maxId++;
      repliesExisting.push({
        id: maxId,
        content: replyContent,
        createdAt: "Today",
        score: 0,
        replyingTo: parent.querySelector(".comment_username").textContent,
        user: data.currentUser,
      });
      const reply = repliesExisting[repliesExisting.length - 1];
      const newReplyHtml = `<div class="comment reply current_user-reply" id="${
        reply.id
      }">

      <div class="score">
        <button class="plus_btn">
          <svg
            class="plus_score-svg"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
              fill="#C5C6EF"
            ></path>
          </svg>
        </button>
        <p class="score_number">${reply.score}</p>
        <button class="minus_btn">
          <svg
            class="minus_score-svg"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
              fill="#C5C6EF"
            ></path>
          </svg>
        </button>
      </div>

      <div class="comment_inner">

        <div class="comment_inner-header">
          <div class="comment_inner-details">
            <img
              src=${data.currentUser.image.png}
              alt="profile pic"
            />
            <p class="comment_username">${data.currentUser.username}</p>
            <p class="current_user-endicator">you</p>
            <p class="comment_time">Today</p>
          </div>

          <div class="btns_container">
            <button class="btn delete_btn">
              <svg
                class="delete-svg"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                          d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"
                          fill="#ED6368"
                />
              </svg>
              Delete
            </button>
            <button class="btn edit_btn">
              <svg class="edit-svg" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"
                  fill="#5357B6"
                />
              </svg>
              Edit
            </button>
          </div>

        </div>

        <p class="comment_text">
          <span class="reply_tag">@${
            parent.querySelector(".comment_username").textContent
          }</span> ${reply.content}
        </p>
                
      </div>

    </div>`;
      parent
        .querySelector(".replies_container")
        .insertAdjacentHTML("beforeend", newReplyHtml);
      document.querySelector(".write_reply").remove();
      // -->SortingComments
      data.comments.sort((a, b) => b.score - a.score);
      data.comments.forEach((reply) => {
        reply.replies.sort((a, b) => b.score - a.score);
      });
      updateUI();
      updateSite();
    }
  });
};

// DOM manipulation : landing page (this has to be at first so the dom tree can exist)
// -->UIUpdateAccodringToDataInJsonFile :
updateUI();
let maxId = getID(data);

// Queryselector

let upVote = document.querySelectorAll(".plus_btn");
let downVote = document.querySelectorAll(".minus_btn");
let replyBTNS = document.querySelectorAll(".reply_btn");
let deleteBTNS = document.querySelectorAll(".delete_btn");
let editBTNS = document.querySelectorAll(".edit_btn");
let updateBTNS = document.querySelectorAll(".sumbit_btn");

// DOM manipulation :

const addVote = function (e) {
  const score = e.target.closest(".comment").querySelector(".score_number");
  score.textContent++;

  // --->DATAchangingScore :
  const commentID = e.target.closest(".comment").id;
  findCommentEdit(commentID).score++;

  // -->SortingComments
  data.comments.sort((a, b) => b.score - a.score);
  data.comments.forEach((reply) => {
    reply.replies.sort((a, b) => b.score - a.score);
  });
  updateUI();
  updateSite();
};
const decreaseVote = function (e) {
  const score = e.target.closest(".comment").querySelector(".score_number");
  score.textContent--;

  // --->DATAchangingScore :
  const commentID = e.target.closest(".comment").id;
  findCommentEdit(commentID).score--;

  // -->SortingComments
  data.comments.sort((a, b) => b.score - a.score);
  data.comments.forEach((reply) => {
    reply.replies.sort((a, b) => b.score - a.score);
  });
  updateUI();
  updateSite();
};

// -->UpdatingEvents :
const updateSite = function () {
  upVote = document.querySelectorAll(".plus_btn");
  downVote = document.querySelectorAll(".minus_btn");
  replyBTNS = document.querySelectorAll(".reply_btn");
  deleteBTNS = document.querySelectorAll(".delete_btn");
  editBTNS = document.querySelectorAll(".edit_btn");
  updateBTNS = document.querySelectorAll(".sumbit_btn");

  upVote.forEach((btn) => btn.addEventListener("click", addVote));

  downVote.forEach((btn) => btn.addEventListener("click", decreaseVote));

  deleteBTNS.forEach((btn) => btn.addEventListener("click", openDeleteModal));

  editBTNS.forEach((editBtn) => {
    editBtn.addEventListener("click", editFunction);
  });

  updateBTNS.forEach((updateBtn) => {
    updateBtn.addEventListener("click", updateBtnFunction);
  });

  replyBTNS.forEach((btn) => {
    btn.addEventListener("click", replyBtnFunction);
  });
};

const removeEvents = function () {
  upVote.forEach((btn) => btn.removeEventListener("click", addVote));

  downVote.forEach((btn) => btn.removeEventListener("click", decreaseVote));

  deleteBTNS.forEach((btn) =>
    btn.removeEventListener("click", openDeleteModal)
  );

  editBTNS.forEach((editBtn) => {
    editBtn.removeEventListener("click", editFunction);
  });

  updateBTNS.forEach((updateBtn) => {
    updateBtn.removeEventListener("click", updateBtnFunction);
  });

  replyBTNS.forEach((btn) => {
    btn.removeEventListener("click", replyBtnFunction);
  });
};

updateSite();

// -->ReplyFeature
// --->ReplyFeature

replyBTNS.forEach((btn) => {
  btn.addEventListener("click", replyBtnFunction);
});

// -->SendFeature :

const sendCommentFunction = function () {
  const parent = sendBtn.closest(".input");
  const commentText = parent.querySelector("textarea").value;

  if (checkEmptyText(commentText)) {
    maxId++;
    const date = new Date();
    data.comments.push({
      id: maxId,
      content: commentText,
      createdAt:
        `Today , ` +
        `${date.getHours()}`.padStart(2, 0) +
        `:${date.getMinutes()}`.padStart(2, 0),
      score: 0,
      user: data.currentUser,
      replies: [],
    });
    const obj = data.comments[data.comments.length - 1];
    const newCommentHtml = `
  <div class="comment_replies-container">
    <div class="comment" id="${obj.id}">
          
    <div class="score">
      <button class="plus_btn">
        <svg class="plus_score-svg" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
            fill="#C5C6EF"
          ></path>
        </svg>
      </button>
      <p class="score_number">${obj.score}</p>
      <button class="minus_btn">
        <svg class="minus_score-svg" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
            fill="#C5C6EF"
          ></path>
        </svg>
      </button>
    </div>
            
    <div class="comment_inner">

      <div class="comment_inner-header">

        <div class="comment_inner-details">
          <img
            src=${obj.user.image.png}
            alt="profile pic"
          />
          <p class="comment_username">${obj.user.username}</p>
          <p class="current_user-endicator">you</p>
          <p class="comment_time">${obj.createdAt}</p>
        </div>

        <div class="btns_container">
            <button class="btn delete_btn">
              <svg
                class="delete-svg"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                          d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"
                          fill="#ED6368"
                />
              </svg>
              Delete
            </button>
            <button class="btn edit_btn">
              <svg class="edit-svg" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"
                  fill="#5357B6"
                />
              </svg>
              Edit
            </button>
          </div>

      </div>

      <p class="comment_text">
        ${obj.content}
      </p>

    </div>
  </div><div class="replies_container"></div></div>
  `;
    commentsSection.insertAdjacentHTML("beforeend", newCommentHtml);
    parent.querySelector("textarea").value = "";
    removeEvents();
    updateSite();
  } else {
    parent.classList.add("apply-shake");
  }

  parent.addEventListener("animationend", (e) => {
    parent.classList.remove("apply-shake");
  });
};

sendBtn.addEventListener("click", sendCommentFunction);

// -->DeleteFeature :

deleteBTNS.forEach((deleteBtn) => {
  deleteBtn.addEventListener("click", openDeleteModal);
  removeEvents();
  updateSite();
});

noBtn.addEventListener("click", closeDeleteModal);

yesBtn.addEventListener("click", function () {
  if (commentToDelete.closest(".replies_container") !== null) {
    // console.log('hedha reply');
    commentToDelete.remove();
  } else {
    commentToDelete.closest(".comment_replies-container").remove();
  }

  deleteComment(commentToDelete.id);

  closeDeleteModal();
});

// -->EditFeature :

editBTNS.forEach((editBtn) => {
  editBtn.addEventListener("click", editFunction);
});

updateBTNS.forEach((updateBtn) => {
  updateBtn.addEventListener("click", updateBtnFunction);
});

//sep//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// document.addEventListener('keydown' , function(e){
//   if (e.key === 'Enter'){

//     data.comments.sort((a , b )=> b.score - a.score)

// updateUI()
// updateSite()
//       }
// })

// const arrToSortScore = new Array() ;
// console.log(arrToSortScore);

// const fillWithScores = function(array , obj ){
//   for (const comment of obj){
//     array[comment.id-1] = comment.score
//   }
// }

// fillWithScores(arrToSortScore , data.comments)
// console.log(arrToSortScore);

// document.addEventListener('keydown' , function(e){
//   if (e.key === 'Enter'){
//     console.log(data);
//   }
// })

// console.log(findCommentEdit(3));

// document.addEventListener("keydown", function (e) {
//   if (e.key === "Enter") {
//     // console.log(data);
//     console.log("ui updated");
//     updateUI();
//     updateSite();
//   }
// });

//sep//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const editFunction = function(e){
//   const check =e.target.closest('.comment').querySelector('textarea') ;
//   if (!check){
//     e.target.closest('.edit_btn').style.filter = 'blur(1px)' ;
//     const commentToEdit = e.target.closest('.comment').querySelector('.comment_text')
//     const existingCommentText = (commentToEdit.textContent)
//     commentToEdit.classList.add("hidden");
//     const textarea = `<textarea
//     name="input"
//     class="input_comment"
//     id=""
//     placeholder="Add a comment..."
//     >${existingCommentText.trim()}</textarea>`
//     commentToEdit.insertAdjacentHTML('afterend' , textarea)
//   }
// }

// document.addEventListener('mouseover' , function(){
//   console.log('hi');
//   updateBTNS = document.querySelectorAll(".sumbit_btn");

//   updateBTNS.forEach((updateBtn)=>{
//     updateBtn.removeEventListener('click' , updateBtnFunction)
//   })

// })

// document.addEventListener("keydown", function (e) {
//   if (e.key == "Enter") {
//     // data.comments.forEach((comment)=>console.log(comment.replies))
//     console.log(data);
//   }
// });
