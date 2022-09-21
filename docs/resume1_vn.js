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
const resume1_vn = (anh, userInfo, userImage) => {
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
            background-color: #FFEBCD;
            padding: 0 10px;
        }

        .right-side {
            height: 100%;
            width: 65%;
            color: rgb(1, 0, 66);
            padding: 0 10px;
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
            border-bottom: 1px solid #ff9f0a;
        }

        .about .para {
            width: 93%;
        }
    </style>
</head>

<body>
    <div class="resume border shadow d-flex aligh-items-center jusify-content-center">
        <div class="box">
            <!-- SPELLING MISTAKE -->
            <div class="left-side d-inline-block">
                <h5 class="color-heading text-uppercase text-center mt-3">${userInfo?.ten? userInfo?.ten: anh.ten}</h5>
                <p class="job text-secondary text-center">${userInfo?.nganhnghe? userInfo?.nganhnghe: anh.nganhnghe}</p>
                <div class="profile-image">
                    <img class="img-fluid" src="${userImage ? userImage : anh.anhdaidien}"
                        alt="">
                </div>
                <div class="contact info-border ml-2 mt-2">
                    <div class="color-heading heading-text">Thông tin liên hệ</div>
                    <div class="para mb-1">
                        <div class="info-personal"> <i class="color-heading fa-regular fa-calendar"></i>
                            <span class="text-secondary">${userInfo?.ngaysinh? userInfo?.ngaysinh: anh.ngaysinh}</span>
                        </div>
                        <div class="info-personal"> <i class="color-heading fa-solid fa-user"></i>
                            <span class="text-secondary">${userInfo?.gioitinh? userInfo?.gioitinh: anh.gioitinh}</span></div>
                        <div class="info-personal"><i class="color-heading fa-solid fa-mobile-screen"></i>
                             <span class="text-secondary">${userInfo?.dienthoai? userInfo?.dienthoai: anh.dienthoai}</span>
                        </div>
                        <div class="info-personal"><i class="color-heading fa-regular fa-envelope"></i>
                             <span class="text-secondary">${userInfo?.email? userInfo?.email: anh.email}</span>
                        </div>
                        <div class="info-personal"> <i class="color-heading fa-solid fa-house-user"></i>
                             <span class="text-secondary">${userInfo?.diachihientai? userInfo?.diachihientai: anh.diachihientai}</span>
                        </div>
                        <div class="info-personal"> <i class="color-heading fa-solid fa-globe"></i>
                             <span class="text-secondary">${userInfo?.quequan? userInfo?.quequan: anh.quequan}</span>
                        </div>
                    </div>
                </div>

                <div class="skill info-border ml-2 mt-2">
                    <div class=" color-heading heading-text">Kỹ năng</div>
                    <p class="para mb-1 text-secondary">
                    ${duyetmang(userInfo?.kynang? userInfo?.kynang: anh.kynang)}
                    </p>
                </div>

                <div class="hobbies info-border ml-2 mt-2">
                    <div class=" color-heading heading-text">Sở thích</div>
                    <p class="para mb-1 text-secondary">
                    ${duyetmang(userInfo?.sothich? userInfo?.sothich: anh.sothich)}
                    </p>
                </div>
            </div>
            <div class="right-side d-inline-block m-0 p-0 align-top">
                <div class="contact info-border ml-3 my-2">
                    <div class="color-heading heading-text">Mục tiêu nghề nhiệp</div>
                    <p class="para mb-1">
                        ${userInfo?.nguyenvong? userInfo?.nguyenvong: anh.nguyenvong}
                    </p>
                </div>

                <div class="education info-border ml-3 my-2">
                    <div class="color-heading heading-text">Học vấn</div>
                    ${duyenmanghocvan(userInfo?.hocvan? userInfo?.hocvan: anh.hocvan)}
                </div>
                <div class="personal info-border ml-3 my-2">
                    <div class="color-heading heading-text">Kinh nghiệm làm việc</div>
                    ${duyenmangkinhnghiem(userInfo?.kinhnghiem? userInfo?.kinhnghiem: anh.kinhnghiem)}
                </div>
                <div class="award info-border ml-3 my-2">
                    <div class=" color-heading heading-text">Điều kiện đặc biệt</div>
                    <div class="cvo-detail-edu fz-13 para">
                        <ul class="pl-1">
                            <li>${userInfo?.dieukiendacbiet? userInfo?.dieukiendacbiet: anh.dieukiendacbiet}</li>
                        </ul>
                    </div>
                </div>
                <div class="certificate info-border ml-3 my-2">
                    <div class="color-heading heading-text">Chứng chỉ</div>
                    <div class="cvo-detail-edu fz-13 para">
                        <ul class="pl-1">
                            ${duyetmang2(userInfo?.chungchi? userInfo?.chungchi: anh.chungchi)}
                        </ul>
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
module.exports = resume1_vn;