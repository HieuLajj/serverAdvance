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
    //for (key in g){
    g.forEach(function(g){
        let split = g.split(":");
        b+= `
            <div class="cvo-info fz-13 row">
                <div class="cvo-info-school-wraper">
                    <span class="cvo-info-school">${split[1]}</span>
                </div>
                <div class="cvo-info-time">
                    <span class="cvo-info-start">${split[0]}</span>
                </div>
            </div>
            `
        });
    return b;
}
function duyenmangkinhnghiem(g){
    let b=""
    //for (key in g){
    g.forEach(function(g){
        let split = g.split(":");
        b+= `
        <div class="cvo-info row">
            <div class="cvo-info-school-wraper fz-13">
                <strong>${split[1]}</strong>
            </div>
            <div class="cvo-info-time fz-13">
                <span class="cvo-info-start">${split[0]}</span>
            </div>
        </div>
            `
    });
    return b;
}
const resume3_vn = (anh, userInfo, userImage) => {
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

        .box {
            background-color: white;
            width: 100%;
            height: 100%;
        }

        .left-side {
            height: 100%;
        }

        .right-side {
            height: 100%;
            color: rgb(1, 0, 66);
            padding: 0 10px;
        }

        .right-side i {
            color: white;
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

        .profile-view img {
            width: 150px;
            display: block;
            margin: 0 auto;
            border-radius: 20px;
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
        .contact, .education, .personal, .skill, .hobbies, .award, .certificate, .additional-info {
            border-bottom: 1px solid #f22f2f;
            position: relative;
        }
        .contact::before, .education::before, .personal::before, .skill::before, .hobbies::before, .award::before, .certificate::before, .additional-info::before {
            content: "";
            background-color: #f22f2f;
            width: 80%;
            height: 3px;
            bottom: -2px;
            position: absolute;
        }

        .profile-view {
            display: flex;
            justify-content: space-between;
            padding: 10px;
            border-right: 3px solid #f22f2f;
            border-left: 3px solid #f22f2f;
            margin-top: 20px;
        }

        .infor-primary {
            display: flex;
        }

        .profile-view .para {
            text-align: right;
            display: grid;
            grid-gap: 5px;
            color: gray;
        }

        .name {
            padding: 0 10px;
        }

        .name h5 {
            color: #f22f2f;
            font-weight: 700;
        }

        .job {
            font-size: 16px;
            text-transform: uppercase;
            color: #733c59;
            word-break: break-word;
            border-left: 1px solid #f22f2f;
            padding-left: 10px;
        }
        .infor-second {
            display: flex;
            margin-top: 20px;
            justify-content: space-around;
        }
        .sidebar-left {
            width: 50%;
        }
    </style>
</head>

<body>
    <div class="resume border shadow d-flex aligh-items-center jusify-content-center">
        <div class="box">
            <div class="left-side">
                <div class="profile-view">
                    <div class="infor-primary">
                        <img class="img-fluid"
                        src="${userImage ? userImage : anh.anhdaidien}" alt="">
                        <div class="name">
                            <h5 class="text-uppercase mt-3">${userInfo?.ten? userInfo?.ten: anh.ten}</h5>
                            <p class="job">${userInfo?.nganhnghe? userInfo?.nganhnghe: anh.nganhnghe}</p>
                        </div>
                    </div>
                    <div class="contacts info-border ml-2 mt-2">
                        <div class="para mb-1">
                            <div class="info-personal">
                                Birthday:
                                <span class="">${userInfo?.ngaysinh? userInfo?.ngaysinh: anh.ngaysinh}</span>
                            </div>
                            <div class="info-personal"> Sex:
                                <span class="">${userInfo?.gioitinh? userInfo?.gioitinh: anh.gioitinh}</span>
                            </div>
                            <div class="info-personal"> Phone number:
                                <span class="">${userInfo?.dienthoai? userInfo?.dienthoai: anh.dienthoai}</span>
                            </div>
                            <div class="info-personal">Email:
                                <span class="">${userInfo?.email? userInfo?.email: anh.email}</span>
                            </div>
                            <div class="info-personal">Address:
                                <span class="">${userInfo?.diachihientai? userInfo?.diachihientai: anh.diachihientai}</span>
                            </div>
                            <div class="info-personal">Website
                                <span class="">${userInfo?.quequan? userInfo?.quequan: anh.quequan}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="infor-second">
                    <div class="sidebar-left">
                        <div class="contact info-border ml-3 my-2">
                            <div class="text-black heading-text text-uppercase">
                                <span>M???c ti??u ngh??? nghi???p</span>
                            </div>
                            <p class="para mb-1">
                            ${userInfo?.nguyenvong? userInfo?.nguyenvong: anh.nguyenvong}
                            </p>
                        </div>
                        <div class="education info-border ml-3 my-2">
                            <div class="text-black heading-text text-uppercase">
                              <span>H???c v???n</span>
                            </div>
                            ${duyenmanghocvan(userInfo?.hocvan? userInfo?.hocvan: anh.hocvan)}
                        </div>
                        <div class="personal info-border ml-3 my-2">
                            <div class="text-black heading-text text-uppercase">
                                <span>Kinh nghi???m l??m vi???c</span>
                            </div>
                            ${duyenmangkinhnghiem(userInfo?.kinhnghiem? userInfo?.kinhnghiem: anh.kinhnghiem)}
                        </div>
                    </div>

                    <div class="sidebar-right">
                        <div class="skill info-border ml-2 mt-2">
                            <div class=" heading-text  text-uppercase">K??? n??ng</div>
                            <p class="para mb-1  ">
                            ${duyetmang(userInfo?.kynang? userInfo?.kynang: anh.kynang)}
                            </p>
                        </div>

                        <div class="hobbies info-border ml-2 mt-2">
                            <div class=" heading-text text-uppercase">S??? th??ch</div>
                            <ul class="para mb-1 ">
                            ${duyetmang2(userInfo?.sothich? userInfo?.sothich: anh.sothich)}
                            </ul>
                        </div>
                 
                    <div class="award info-border ml-3 my-2">
                        <div class=" text-black heading-text text-uppercase">
                           
                            <span>??i???u ki???n ?????c bi???t</span>
                        </div>
                        <div class="cvo-detail-edu fz-13 para">
                        <ul class="pl-1">
                            <li>${userInfo?.dieukiendacbiet? userInfo?.dieukiendacbiet: anh.dieukiendacbiet}</li>
                        </ul>
                        </div>
                    </div>
                    <div class="certificate info-border ml-3 my-2">
                        <div class="text-black heading-text text-uppercase">
                        
                            <span>Ch???ng ch???</span>
                        </div>
                        <div class="cvo-detail-edu fz-13 para">
                        <ul class="pl-1">
                            ${duyetmang2(userInfo?.chungchi? userInfo?.chungchi: anh.chungchi)}
                        </ul>
                        </div>
                    </div>
                    <div class="additional-info info-border ml-3 my-2">
                        <div class="text-black heading-text text-uppercase">
                          
                            <span>Th??ng tin kh??c</span>
                        </div>
                        <div class="cvo-detail-edu fz-13 para">
                            <p>??i???n c??c th??ng tin kh??c (n???u c??)</p>
                        </div>
                    </div>
                </div>
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
module.exports = resume3_vn;