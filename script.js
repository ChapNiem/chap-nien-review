const movies = [
  {id:1,title:"Cao Vũ: Tôi Trở Thành Vô Già Toàn Hệ",season:"Mùa 6",duration:"28h 2p",update:"HÔM NAY",category:["Tu Tiên","Nam Chính","Hệ Thống"],color:"linear-gradient(135deg,#182a40,#101014 50%,#4c1525)",tags:["ĐỒ HỌA 3D","NAM CHÍNH","TU TIÊN","HỆ THỐNG"],original:"高武：我才是全系无敌",description:"Một thiếu niên vô tình thức tỉnh năng lực đặc biệt, từ đó bước vào hành trình tu luyện và từng bước khám phá bí mật của thế giới.",episodes:3},
  {id:2,title:"Ở Tu Tiên Giới Thu Gom Phế Phẩm, Ta Âm Thầm Vô Địch",season:"Mùa 7",duration:"35h 44p",update:"HÔM NAY",category:["Tu Tiên","Hệ Thống","Hài Hước"],color:"linear-gradient(135deg,#bde4e2,#edf3dc 48%,#78a56d)",tags:["TU TIÊN","HÀI HƯỚC","HỆ THỐNG"],original:"我在修仙界收废品",description:"Một phế vật tưởng như bình thường lại sở hữu hệ thống kỳ lạ. Càng thu gom đồ bỏ đi, thực lực của hắn càng tăng.",episodes:4},
  {id:3,title:"Sự Tồn Rõ Ràng Vô Địch, Sao Lại Nhát Như Kiến?",season:"Mùa 4",duration:"6h 20p",update:"HÔM NAY",category:["Vô Địch","Tu Tiên","Hài Hước"],color:"linear-gradient(135deg,#f4e5a5,#fff9db 48%,#c98b22)",tags:["TU TIÊN","VÔ ĐỊCH","HÀI HƯỚC"],original:"师尊明明无敌为何怂如蝼蚁",description:"Tổng Chí Viễn thân là Đại Đế chí tôn nhưng chỉ muốn ẩn mình sống yên ổn. Thế nhưng hệ thống liên tục ép hắn nhận đệ tử.",episodes:2},
  {id:4,title:"Toàn Viên Ác Tiên: Ta Có Một Tòa Chúng Sinh Quan",season:"Mùa 6",duration:"16h 44p",update:"HÔM NAY",category:["Tu Tiên","Nam Chính"],color:"linear-gradient(135deg,#5d100d,#15090d 60%,#bd3d1d)",tags:["TU TIÊN","NAM CHÍNH","ĐẠI CHIẾN"],original:"全员恶仙",description:"Bước vào thế giới tu tiên đầy hiểm nguy, nhân vật chính phải đối mặt với những đối thủ mạnh và từng bước xây dựng thế lực.",episodes:5},
  {id:5,title:"Sơn Hải Hiển Thánh",season:"Mùa 7",duration:"17h 37p",update:"HÔM NAY",category:["Tu Tiên","Vô Địch"],color:"linear-gradient(135deg,#071d28,#18244e 55%,#d7d7bd)",tags:["TU TIÊN","VÔ ĐỊCH"],original:"山海显圣",description:"Sơn Hải giới mở ra, vô số truyền thuyết cổ xưa thức tỉnh. Một người trẻ bắt đầu con đường chứng đạo.",episodes:6},
  {id:6,title:"Ta Đã Nguyên Anh Kỳ Rồi, Người Còn Bảo Ta Học!",season:"Mùa 2 - P2",duration:"24h 32p",update:"HÔM QUA",category:["Học Đường","Tu Tiên","Tình Cảm"],color:"linear-gradient(135deg,#101824,#431521 65%,#c9c9c9)",tags:["TU TIÊN","TÌNH CẢM"],original:"我都元婴期了，你跟我说要上学？",description:"Đã đạt cảnh giới Nguyên Anh nhưng nhân vật chính vẫn phải đối mặt với những chuyện dở khóc dở cười của cuộc sống.",episodes:2},
  {id:7,title:"Ngự Hồ",season:"Mùa 3 - P2",duration:"18h 58p",update:"HÔM QUA",category:["Tu Tiên","Võ Hiệp"],color:"linear-gradient(135deg,#f8f4e7,#c9e6dc 55%,#657bce)",tags:["TU TIÊN","LINH THÚ"],original:"御狐",description:"Mang theo linh thú bước vào con đường tu hành, thiếu niên dần hé lộ thân phận đặc biệt của mình.",episodes:4},
  {id:8,title:"Biệt Đội Số 0: Bắc Thần Lâm Tinh Hà",season:"Mùa 6",duration:"15h 33p",update:"HÔM QUA",category:["Xuyên Không","Tu Tiên"],color:"linear-gradient(135deg,#08182e,#10194e 50%,#e9eefb)",tags:["XUYÊN KHÔNG","TU TIÊN"],original:"北辰临星河",description:"Một đội ngũ đặc biệt cùng bước vào vùng đất bí ẩn, nơi sức mạnh và số phận giao nhau.",episodes:3},
  {id:9,title:"Nghịch Giang Hồ: Lấy Chúng Sinh Làm Bàn Cờ",season:"Mùa 6",duration:"15h 29p",update:"HÔM QUA",category:["Võ Hiệp","Nam Chính"],color:"linear-gradient(135deg,#07080c,#171016 50%,#4e111a)",tags:["VÕ HIỆP","NAM CHÍNH"],original:"逆江湖",description:"Giang hồ nổi sóng, một người mang trong mình bí mật lớn quyết định dùng cả thiên hạ làm bàn cờ.",episodes:5},
  {id:10,title:"Ngọc Nữ Trong Tay",season:"Mùa 4",duration:"4h 59p",update:"28/9/2026",category:["Tình Cảm","Hiện Đại"],color:"linear-gradient(135deg,#24262a,#101010 55%,#6d1620)",tags:["HIỆN ĐẠI","TÌNH CẢM"],original:"掌中玉女",description:"Một câu chuyện tình cảm hiện đại với những bí mật đan xen giữa các nhân vật.",episodes:2},
  {id:11,title:"Chúc Cửu Âm",season:"Mùa 6",duration:"14h 57p",update:"28/9/2026",category:["Tu Tiên","Nữ Chính"],color:"linear-gradient(135deg,#08121e,#21152e 55%,#b9d0d0)",tags:["NỮ CHÍNH","TU TIÊN"],original:"祝九阴",description:"Nữ chính bước qua nghịch cảnh, thức tỉnh sức mạnh và bắt đầu hành trình thay đổi vận mệnh.",episodes:4},
  {id:12,title:"Giác Tỉnh Thập Điện Diêm La, Ta Chính Là Hồng Quân Tiên",season:"Mùa 9",duration:"28h 48p",update:"28/9/2026",category:["Tu Tiên","Hệ Thống","Vô Địch"],color:"linear-gradient(135deg,#270708,#10090e 55%,#8d2620)",tags:["TU TIÊN","HỆ THỐNG","VÔ ĐỊCH"],original:"觉醒十殿阎罗",description:"Thức tỉnh sức mạnh huyền bí, nhân vật chính bước vào con đường nghịch thiên và đối đầu với các thế lực cổ xưa.",episodes:7}
];

let currentCategory="Tất cả";
let saved=JSON.parse(localStorage.getItem("chapNiemSaved")||"[]");

function esc(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}

function render(){
  const q=document.getElementById("searchInput").value.toLowerCase().trim();
  let list=movies.filter(m=>{
    const categoryOk=currentCategory==="Tất cả"||m.category.includes(currentCategory);
    const searchOk=!q || (m.title+" "+m.original+" "+m.description+" "+m.category.join(" ")).toLowerCase().includes(q);
    return categoryOk&&searchOk;
  });
  const sort=document.getElementById("sortSelect").value;
  if(sort==="name") list.sort((a,b)=>a.title.localeCompare(b.title));
  if(sort==="duration") list.sort((a,b)=>b.duration.localeCompare(a.duration));
  if(document.body.dataset.saved==="1") list=list.filter(m=>saved.includes(m.id));

  const grid=document.getElementById("movieGrid");
  if(!list.length){grid.innerHTML='<div class="empty">Không tìm thấy phim phù hợp.</div>';return;}
  grid.innerHTML=list.map(m=>`
    <article class="card">
      <div class="cover" style="background-image:${m.color}" onclick="openMovie(${m.id})">
        <button class="heart" onclick="event.stopPropagation();toggleSave(${m.id})">${saved.includes(m.id)?"♥":"♡"}</button>
        <div class="cover-title">${esc(m.title)}</div>
        <div class="duration">◷ ${m.duration}</div>
      </div>
      <div class="card-title">${esc(m.title)}</div>
      <div class="meta"><span class="season">${esc(m.season)}</span><span>Cập nhật: <b class="${m.update.includes("HÔM NAY")?"update":"update old"}">${esc(m.update)}</b></span></div>
    </article>`).join("");
}

function toggleSave(id){
  saved=saved.includes(id)?saved.filter(x=>x!==id):[...saved,id];
  localStorage.setItem("chapNiemSaved",JSON.stringify(saved)); render();
}

function openMovie(id){
  const m=movies.find(x=>x.id===id); if(!m)return;
  document.getElementById("modal").classList.remove("hidden");
  const hero=document.getElementById("detailHero");
  hero.style.backgroundImage=m.color;
  document.getElementById("detailTags").innerHTML=m.tags.map(t=>`<span>${esc(t)}</span>`).join("");
  document.getElementById("detailTitle").textContent=m.title;
  document.getElementById("detailOriginal").textContent="Tên gốc: "+m.original;
  document.getElementById("detailDuration").textContent=m.duration;
  document.getElementById("detailDescription").textContent=m.description;
  document.getElementById("saveDetail").onclick=()=>toggleSave(m.id);
  document.getElementById("episodes").innerHTML=Array.from({length:m.episodes},(_,i)=>`
    <div class="episode">
      <div class="episode-top"><span class="episode-name">Mùa ${Math.min(i+1,4)}${i>3?" - P2":""}</span><span>◉ Báo lỗi</span></div>
      <div class="episode-duration">◷ ${Math.max(1,Math.round(parseInt(m.duration)*60/m.episodes))}p</div>
      <div class="episode-links"><a href="#" onclick="return false;">● Facebook</a><a class="youtube" href="#" onclick="return false;">▶ YouTube</a></div>
    </div>`).join("");
}

function closeMovie(){document.getElementById("modal").classList.add("hidden");}
document.getElementById("closeModal").onclick=closeMovie;
document.getElementById("modalBackdrop").onclick=closeMovie;
document.getElementById("searchInput").oninput=render;
document.getElementById("sortSelect").onchange=render;

document.querySelectorAll(".category").forEach(btn=>btn.onclick=()=>{
  document.querySelectorAll(".category").forEach(x=>x.classList.remove("active"));
  btn.classList.add("active"); currentCategory=btn.dataset.category; render();
});
document.getElementById("savedTab").onclick=()=>{
  document.body.dataset.saved=document.body.dataset.saved==="1"?"0":"1";
  document.getElementById("savedTab").innerHTML=document.body.dataset.saved==="1"?"♥ Đã lưu":"♡ Đã lưu";
  render();
};
document.getElementById("gridBtn").onclick=()=>alert("Đây là nút mẫu. Sau này bạn có thể nâng cấp thành chức năng xuất ảnh 3×3.");
render();
