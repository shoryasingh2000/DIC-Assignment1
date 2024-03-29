var list = [
  {
    id: 1,
    name: "Shorya",
    src: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
    desc: " *****************************************%%%%%%%%%%%%%%%%%%%%%%^^^^^^^^^^^^^^^^^^^^^^^^^^^^^",
  },
  {
    id: 2,
    name: "Singh",
    src: "https://png.pngtree.com/element_our/png/20181206/female-avatar-vector-icon-png_262142.jpg",
    desc: "############################################################################################********************",
  },
  {
    id: 3,
    name: "Siddhant",
    src: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
    desc: "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",
  },
  {
    id: 4,
    name: "pratap",
    src: "https://png.pngtree.com/element_our/png/20181206/female-avatar-vector-icon-png_262142.jpg",
    desc: "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$",
  },
  {
    id: 5,
    name: "sanat",
    src: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
    desc: "Qui vel corrupti, ex excepturi asperiores iure reiciendis velit itaque, voluptatem, quas odit quo. Recusandae, expedita voluptatum rerum enim consequuntur hic a vel, quia ea tempora, asperiores illo ex placeat?",
  },
  {
    id: 6,
    name: "sonam",
    src: "https://png.pngtree.com/element_our/png/20181206/female-avatar-vector-icon-png_262142.jpg",
    desc: "Laudantium asperiores quo sint earum sed delectus eos qui error quisquam vel nihil quae at voluptate facilis non nam voluptatum, veritatis dignissimos. Deserunt nesciunt tenetur illum qui natus!",
  },
];

var reviews = document.querySelector("#container");

const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);

var content = "";
list.forEach((item) => {
  content += `<div class="shadow" id="${item.id}-review">
        <div class="photo"><img src="${item.src}" alt=""></div>
        <h3 class="name">${item.name}</h3>
        <p class="review">${item.desc}</p>
        <span class="page">${item.id}.</span>
      </div>`;
});

reviews.innerHTML = content;
var curId = 1;
document.getElementById(`${curId}-review`).style.display = "flex";
const nextReview = () => {
  document.getElementById(`${curId}-review`).style.display = "none";
  curId += curId < 6 ? 1 : -5;
  document.getElementById(`${curId}-review`).style.display = "flex";
};

const prevReview = () => {
  document.getElementById(`${curId}-review`).style.display = "none";
  curId -= curId > 1 ? 1 : -5;
  document.getElementById(`${curId}-review`).style.display = "flex";
};

//storing in localstorage;

localStorage.setItem("roll_number", "UE198095");

// creating cookies

document.cookie = "username=shorya singh";
document.cookie = "year=3rd year";
