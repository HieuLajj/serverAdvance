function duyetmang(g){
    let b=""
    g.forEach(element => {
        b+= `${element}<br>`
    })
    return b;
}
function duyetmang2(g){
    let b=""
    g.forEach(element => {
        b+= `<li>${element}</li>`
    })
    return b;
}
function duyenmangthanhbang(g){
    let b=""
    for (key in g){
        b+= `<tr class="border">
                <td>${key}</td>
                <td>${g[key]}</td>
            </tr>`
    }
    return b;
}
function duyenmanghocvan(g){
    let b=""
    for (key in g){
        b+= `
            <div class="cvo-info fz-13 row">
                <div class="cvo-info-school-wraper">
                    <span class="cvo-info-school">${g[key]}</span>
                </div>
                <div class="cvo-info-time">
                    <span class="cvo-info-start">${key}</span>
                </div>
            </div>
            `
    }
    return b;
}
function duyenmangkinhnghiem(g){
    let b=""
    for (key in g){
        b+= `
        <li>
                 <div class="date">${key}</div> 
                 <div class="info">
                      <p class="semi-bold">${g[key]}</p> 
        
                 </div>
             </li>
            `
    }
    return b;
}
const resume4_en = (anh, userInfo, userImage) => {
    return`
    <!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Resume maker</title>
    <style>
        
body {
  background: #585c68;
  font-size: 14px;
  line-height: 22px;
  color: #555555;
}

.bold {
  font-weight: 700;
  font-size: 14px;
  margin: auto;
  text-transform: uppercase;
}

.semi-bold {
  font-weight: 500;
  font-size: 16px;
  margin: auto;
}

.resume {
    width: 6.1in;
    height: 7.86in;
    display: flex;
}

.resume .resume_left {
  width: 280px;
  background: #0bb5f4;
}

.resume .resume_left .resume_profile img {
  width: 60%;
  height: 60%;
  margin: 10px auto;
  display: block;
}

.resume .resume_left .resume_content {
  padding: 0 25px;
}

.resume .resume_left .bold {
  color: #fff;
}

.resume .resume_left .regular {
  color: #b1eaff;
}

.resume .resume_item {
  padding: 10px 0;
  border-bottom: 2px solid #b1eaff;
}

.resume .resume_left .resume_item:last-child,
.resume .resume_right .resume_item:last-child {
  border-bottom: 0px;
}

.resume .resume_left ul li {
  display: flex;
  margin-bottom: 10px;
  align-items: center;
}

.resume .resume_left ul li:last-child {
  margin-bottom: 0;
}
.resume .resume_left ul {
    padding: 0;
}

.resume .resume_left ul li .icon {
  width: 25px;
  height: 25px;
  background: #fff;
  color: #0bb5f4;
  border-radius: 50%;
  margin-right: 15px;
  font-size: 16px;
  position: relative;
}

.resume .icon i,
.resume .resume_right .resume_hobby ul li i {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.resume .resume_left ul li .data {
  color: #b1eaff;
}
.resume .resume_left ul li .data p{
  margin: auto;
}

.resume .resume_left .resume_skills ul li {
  display: flex;
  margin-bottom: 10px;
  color: #b1eaff;
  justify-content: space-between;
  align-items: center;
}

.resume .resume_left .resume_skills ul li .skill_name {
  width: 25%;
  font-size: 13px;
}

.resume .resume_left .resume_skills ul li .skill_progress {
  width: 60%;
  margin: 0 5px;
  height: 5px;
  background: #009fd9;
  position: relative;
}

.resume .resume_left .resume_skills ul li .skill_per {
  width: 15%;
}

.resume .resume_left .resume_skills ul li .skill_progress span {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #fff;
}

.resume .resume_left .resume_social .semi-bold {
  color: #fff;
  margin-bottom: 3px;
}

.resume .resume_right {
  width: 520px;
  background: #fff;
  padding: 10px 25px;
}

.resume .resume_right .bold {
  color: #0bb5f4;
}

.resume .resume_right .resume_work ul,
.resume .resume_right .resume_education ul {
  padding-left: 40px;
  overflow: hidden;
}

.resume .resume_right ul li {
  position: relative;
}

.resume .resume_right ul li .date {
  font-size: 13px;
  font-weight: 500;
}

.resume .resume_right ul li .info {
  margin-bottom: 20px;
}

.resume .resume_right ul li:last-child .info {
  margin-bottom: 0;
}

.resume .resume_right .resume_work ul li:before,
.resume .resume_right .resume_education ul li:before {
  content: "";
  position: absolute;
  top: 9px;
    left: -17px;
    width: 6px;
  height: 6px;
  border-radius: 50%;
  border: 2px solid #0bb5f4;
}

.resume .resume_right .resume_work ul li:after,
.resume .resume_right .resume_education ul li:after {
  content: "";
  position: absolute;
  top: 11px;
  left: -15px;
  width: 2px;
  height: 115px;
  background: #0bb5f4;
}

    </style>
</head>

<body>
    
<div class="resume">
    <div class="resume_left">
      <div class="resume_profile">
        <img class="img-fluid" src="${userImage ? userImage : anh.anhdaidien}"
        alt="">
      </div>
      <div class="resume_content">
        <div class="resume_item resume_info">
          <div class="title">
            <p class="bold">${userInfo?.ten? userInfo?.ten: anh.ten}</p>
            <p class="regular">${userInfo?.nganhnghe? userInfo?.nganhnghe: anh.nganhnghe}</p>
          </div>
          <ul>
            <li>
              <div class="icon">
                <i class="fas fa-map-signs"></i>
              </div>
              <div class="data">
              ${userInfo?.diachihientai? userInfo?.diachihientai: anh.diachihientai}
              </div>
            </li>
            <li>
              <div class="icon">
                <i class="fas fa-mobile-alt"></i>
              </div>
              <div class="data">
              ${userInfo?.dienthoai? userInfo?.dienthoai: anh.dienthoai}
              </div>
            </li>
            <li>
              <div class="icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="data">
              ${userInfo?.email? userInfo?.email: anh.email}
              </div>
            </li>
            <li>
              <div class="icon">
                <i class="fab fa-weebly"></i>
              </div>
              <div class="data">
                www.halee.com
              </div>
            </li>
          </ul>
        </div>
        <div class="resume_item resume_skills">
          <div class="title">
            <p class="bold">Skills</p>
          </div>
          <ul>
            <li>
              <div class="skill_name">
                HTML
              </div>
              <div class="skill_progress">
                <span style="width: 80%;"></span>
              </div>
              <div class="skill_per">80%</div>
            </li>
            <li>
              <div class="skill_name">
                CSS
              </div>
              <div class="skill_progress">
                <span style="width: 70%;"></span>
              </div>
              <div class="skill_per">70%</div>
            </li>
            <li>
              <div class="skill_name">
                SASS
              </div>
              <div class="skill_progress">
                <span style="width: 90%;"></span>
              </div>
              <div class="skill_per">90%</div>
            </li>
            <li>
              <div class="skill_name">
                JS
              </div>
              <div class="skill_progress">
                <span style="width: 60%;"></span>
              </div>
              <div class="skill_per">60%</div>
            </li>
            <li>
              <div class="skill_name">
                LESS
              </div>
              <div class="skill_progress">
                <span style="width: 88%;"></span>
              </div>
              <div class="skill_per">88%</div>
            </li>
          </ul>
        </div>
        <div class="resume_item resume_social">
          <div class="title">
            <p class="bold">Social</p>
          </div>
          <ul>
            <li>
              <div class="icon">
                <i class="fab fa-facebook-square"></i>
              </div>
              <div class="data">
        
                <p>Halee@facebook</p>
              </div>
            </li>
            <li>
              <div class="icon">
                <i class="fab fa-twitter-square"></i>
              </div>
              <div class="data">
            
                <p>Halee@twitter</p>
              </div>
            </li>
    
          </ul>
        </div>
      </div>
   </div>
   <div class="resume_right">
     <div class="resume_item resume_about">
         <div class="title">
            <p class="bold">Objective</p>
          </div>
         <p> ${userInfo?.nguyenvong? userInfo?.nguyenvong: anh.nguyenvong}
        </p>  </div>
     <div class="resume_item resume_work">
         <div class="title">
            <p class="bold">experience Work</p>
          </div>
         <ul>
         ${duyenmangkinhnghiem(userInfo?.kinhnghiem? userInfo?.kinhnghiem: anh.kinhnghiem)}    
         </ul>
     </div>
     <div class="resume_item resume_education">
       <div class="title">
            <p class="bold">Education</p>
          </div>
       <ul>
       ${duyenmangkinhnghiem(userInfo?.hocvan? userInfo?.hocvan: anh.hocvan)}
         </ul>
     </div>
   </div>
 </div>
    </body>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
    crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    crossorigin="anonymous"></script>

</html>
    `
}
module.exports = resume4_en;