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
        <div class="cvo-info row">
            <div class="cvo-info-school-wraper fz-13">
                <strong>${g[key]}</strong>
            </div>
            <div class="cvo-info-time fz-13">
                <span class="cvo-info-start">${key}</span>
            </div>
        </div>
            `
    }
    return b;
}
const resume2_vn = (anh, userInfo, userImage) => {
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
        .resume {
            width: 6.1in;
            height: 7.86in;
        }

        .color-heading {
            color: #ff9f0a;
            word-break: break-word;
        }

        .box {
            background-color: white;
            width: 100%;
            height: 100%;
        }

        .left-side {
            color: rgb(91, 88, 255);
            width: 33%;
            height: 100%;
            background-color:#1abc9c;
        }

        .right-side {
            height: 100%;
            width: 65%;
            color: rgb(1, 0, 66);
            padding: 0 10px;
        }
        .right-side i {
            color: white;
    background: #029c7c;
    font-size: 16px;
    border-radius: 50%;
    text-align: center;
    width: 30px;
    height: 30px;
    padding-top: 7px;
    margin-right: 5px;
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
            font-size: 15px;
            font-weight: 700;
        }

        .fz-13 {
            font-size: 13px;
        }

        .cvo-info {
            justify-content: space-between;
            padding: 0 14px;
        }

        .para,
        .per-info {
            font-size: 13px;
            padding-bottom: 15px;
        }

        .about .para {
            width: 93%;
        }
        .profile-view {
            background: #029c7c;
        }
        .profile-view img {
            width: 150px;
            display: block;
            margin: 0 auto;
            border-radius: 50%;
            padding: 10px;
        }
        .contact i {
            width: 20px;
    height: 20px;
    background-color: #029c7c;
    border-radius: 50%;
    display: inline-block;
    text-align: center;
    font-size: 12px;
    line-height: 20px;
    margin: 5px 0;
        }
    </style>
</head>

<body>
    <div class="resume border shadow d-flex aligh-items-center jusify-content-center">
        <div class="box">
            <div class="left-side d-inline-block">
                <div class="profile-view">
                    <img class="img-fluid" src="${userImage ? userImage : anh.anhdaidien}"
                        alt="">
                    <h5 class="text-white text-uppercase text-center mt-3">${userInfo?.ten? userInfo?.ten: anh.ten}</h5>
                    <p class="job text-white text-center">${userInfo?.nganhnghe? userInfo?.nganhnghe: anh.nganhnghe}</p>
                </div>
                <div class="contact info-border ml-2 mt-2">
                    <div class="para mb-1">
                        <div class="info-personal"> <i class="text-white fa-regular fa-calendar"></i>
                            <span class="text-white">${userInfo?.ngaysinh? userInfo?.ngaysinh: anh.ngaysinh}</span>
                        </div>
                        <div class="info-personal"> <i class="text-white fa-solid fa-user"></i>
                            <span class="text-white">${userInfo?.gioitinh? userInfo?.gioitinh: anh.gioitinh}</span>
                        </div>
                        <div class="info-personal"><i class="text-white fa-solid fa-mobile-screen"></i>
                            <span class="text-white">${userInfo?.dienthoai? userInfo?.dienthoai: anh.dienthoai}</span>
                        </div>
                        <div class="info-personal"><i class="text-white fa-regular fa-envelope"></i>
                            <span class="text-white">${userInfo?.email? userInfo?.email: anh.email}</span>
                        </div>
                        <div class="info-personal"> <i class="text-white fa-solid fa-house-user"></i>
                            <span class="text-white">${userInfo?.diachihientai? userInfo?.diachihientai: anh.diachihientai}</span>
                        </div>
                        <div class="info-personal"> <i class="text-white fa-solid fa-globe"></i>
                            <span class="text-white">${userInfo?.quequan? userInfo?.quequan: anh.quequan}</span>
                        </div>
                    </div>
                </div>
               
                <div class="skill info-border ml-2 mt-2">
                    <div class="text-white heading-text  text-uppercase"> Kỹ năng</div>
                    <p class="para mb-1 text-white ">
                    ${duyetmang(userInfo?.kynang? userInfo?.kynang: anh.kynang)}
                    </p>
                </div>

                <div class="hobbies info-border ml-2 mt-2">
                    <div class="text-white heading-text text-uppercase">Sở thích</div>
                    <ul class="para mb-1 text-white">
                    ${duyetmang2(userInfo?.sothich? userInfo?.sothich: anh.sothich)}
                    </ul>
                </div>
            </div>
            <div class="right-side d-inline-block m-0 p-0 align-top">
                <div class="education info-border ml-3 my-2">
                    <div class="text-black heading-text text-uppercase">
                        <i class="fa-solid fa-graduation-cap"></i><span>Học vấn</span></div>
                    ${duyenmanghocvan(userInfo?.hocvan? userInfo?.hocvan: anh.hocvan)}
                </div>
                <div class="contact info-border ml-3 my-2">
                    <div class="text-black heading-text text-uppercase">
                        <i class="fa-solid fa-arrow-up"></i>
                        <span>Mục tiêu nghề nghiệp</span></div>
                    <p class="para mb-1">
                    ${userInfo?.nguyenvong? userInfo?.nguyenvong: anh.nguyenvong}
                    </p>
                </div>
                <div class="personal info-border ml-3 my-2">
                    <div class="text-black heading-text text-uppercase">
                        <i class="fa-solid fa-briefcase"></i>
                        <span>Kinh nghiệm làm việc</span> </div>
                        ${duyenmangkinhnghiem(userInfo?.kinhnghiem? userInfo?.kinhnghiem: anh.kinhnghiem)}
                </div>
                <div class="award info-border ml-3 my-2">
                    <div class=" text-black heading-text text-uppercase">
                        <i class="fa-solid fa-trophy"></i>
                        <span>Điều kiện đặc biệt</span></div>
                    <div class="cvo-detail-edu fz-13 para">
                    <ul class="pl-1">
                        <li>${userInfo?.dieukiendacbiet? userInfo?.dieukiendacbiet: anh.dieukiendacbiet}</li>
                    </ul>
                    </div>
                </div>
                <div class="certificate info-border ml-3 my-2">
                    <div class="text-black heading-text text-uppercase">
                        <i class="fa-sharp fa-solid fa-file-lines"></i>
                        <span>Chứng chỉ</span></div>
                    <div class="cvo-detail-edu fz-13 para">
                    <ul class="pl-1">
                        ${duyetmang2(userInfo?.chungchi? userInfo?.chungchi: anh.chungchi)}
                    </ul>
                    </div>
                </div>
                <div class="additional-info info-border ml-3 my-2">
                    <div class="text-black heading-text text-uppercase">
                        <i class="fa-solid fa-pen"></i>
                        <span>Thông tin thêm</span></div>
                    <div class="cvo-detail-edu fz-13 para">
                        <p>(optional)</p>
                    </div>
                </div>
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
module.exports = resume2_vn;