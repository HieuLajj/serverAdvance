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
const blueResume =(userInfo,userImage)=>{
   
    return `
    <!doctype html>
<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

        <title>Resume maker</title>
        <style>
            .resume {
                width: 6.1in;
                height: 7.86in;
            }
    
            .box {
                background-color: rgb(183, 182, 255);
                width: 100%;
                height: 100%;
            }
    
            .left-side {
                color: rgb(91, 88, 255);
                width: 33%;
                height: 100%;
                background-color: rgb(12, 36, 58);
    
            }
    
            .right-side {
                height: 100%;
                width: 65%;
                color: rgb(1, 0, 66);
            }
    
            .name {
                font-size: 1.2rem;
            }
    
            .profile-image {
                width: 90%;
                margin-left: 5%;
                margin-top: 3%;
            }
    
            .profile-image img {
                border-radius: 50%;
            }
    
            .heading-text {
                font-size: 0.9rem;
            }
    
            .para,
            .per-info {
                font-size: 0.7rem !important;
            }
    
            .about .para{
                width: 93%;
            }
            .key-skills li{
                font-size: 0.7rem;
            }
    
        </style>
    </head>
    <body>
        <div class="resume border shadow d-flex aligh-items-center jusify-content-center">
            <div class="box">
                <!-- SPELLING MISTAKE -->
                <div class="left-side d-inline-block">
                    <div class="profile-image">
                        <img class="img-fluid" src="${userImage}" alt="">
                    </div>
                    <div class="contact ml-2 mt-2">
                        <div class="heading-text text-uppercase">Thông tin cá nhân</div>
                        <p class="para mb-1">
                            Quê quán: ${userInfo.quequan}<br>
                            Địa chỉ hiện tại: ${userInfo.diachihientai}<br>
                            Điện thoại: ${userInfo.dienthoai}<br>
                            Email: ${userInfo.email}<br>
                            Ngày sinh: ${userInfo.ngaysinh}<br>
                            Chiều cao: ${userInfo.chieucao}<br>
                            Cân nặng: ${userInfo.cannang}<br>
                            Số hộ khẩu: ${userInfo.sohokhau}<br>
                            Số CMND/CCCD: ${userInfo.socccd}<br>
                            Tính cách: ${userInfo.tinhcach}<br>
                            Trình độ văn hóa: ${userInfo.quequan}<br>
                        </p>
                    </div>
                    <div class="expert ml-2 mt-2">
                        <div class="heading-text text-uppercase">Lĩnh vực chuyên môn</div>
                        <p class="para mb-1">
                           ${duyetmang(userInfo.linhvucchuyenmon)}
                        </p>
                    </div>
    
                    <div class="skill ml-2 mt-2">
                        <div class="heading-text text-uppercase">Kỹ năng</div>
                        <p class="para mb-1">
                           ${duyetmang(userInfo.kynang)}
                        </p>
                    </div>
    
    
                    <div class="hobbies ml-2 mt-2">
                        <div class="heading-text text-uppercase">Sở thích</div>
                        <p class="para mb-1">
                           ${duyetmang(userInfo.sothich)}
                        </p>
                    </div>
                </div>
                <div class="right-side d-inline-block m-0 p-0 align-top">
                    <h2 class="name text-uppercase ml-3 my-2">${userInfo.ten}</h2>
    
                    <div class="contact ml-3 mt-3">
                        <div class="heading-text text-uppercase">Giới thiệu về bản thân và nguyện vọng</div>
                        <p class="para mb-1">
                            ${userInfo.nguyenvong}
                        </p>
                    </div>
                    <div class="personal ml-3 mt-3">
                        <div class="heading-text text-uppercase">Kinh nghiệm</div>
                        <table class="per-info">
                            <tbody>
                               ${duyenmangthanhbang(userInfo.kinhnghiem)}
                            </tbody>
    
                        </table>
                    </div>
                    <div class="education ml-3 mt-3">
                        <div class="heading-text text-uppercase">Học vấn</div>
                        <table class="per-info">
                            <tbody>
                             ${duyenmangthanhbang(userInfo.hocvan)}
                            </tbody>
                        </table>
                    </div>
    
    
    
                    <div class="key-skills ml-3 mt-3">
                        <div class="heading-text text-uppercase">Chứng chỉ</div>
                        <ul class="pl-1">
                            ${duyetmang2(userInfo.chungchi)}
                        </ul>
                    </div>
                    <div class="key-skills ml-3 mt-3">
                        <div class="heading-text text-uppercase">Điều kiện đặc biệt</div>
                        <ul class="pl-1">
                            <li>${userInfo.dieukiendacbiet}</li>
                        </ul>
                    </div>
                    <div class="key-skills ml-3 mt-3">
                        <div class="heading-text text-uppercase">Mức lương</div>
                        <ul class="pl-1">
                            <li>${userInfo.mucluong}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    
        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
</html>
    `
}
module.exports = blueResume;