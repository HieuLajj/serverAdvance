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
const blueResume =(anh,userInfo,userImage,bangmau)=>{
   console.log(bangmau);
   console.log("=================")
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
                background-color: ${bangmau[0]};
                width: 100%;
                height: 100%;
            }
    
            .left-side {
                color:  ${bangmau[1]};
                width: 33%;
                height: 100%;
                background-color:  ${bangmau[2]};
    
            }
    
            .right-side {
                height: 100%;
                width: 65%;
                color:  ${bangmau[3]};
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
                        <img class="img-fluid" src="${userImage ? userImage : anh.anhdaidien}" alt="">
                    </div>
                    <div class="contact ml-2 mt-2">
                        <div class="heading-text text-uppercase">Th??ng tin c?? nh??n</div>
                        <p class="para mb-1">
                            Qu?? qu??n: ${userInfo?.quequan? userInfo?.quequan: anh.quequan}<br>
                            ?????a ch??? hi???n t???i: ${userInfo?.diachihientai? userInfo?.diachihientai: anh.diachihientai}<br>
                            ??i???n tho???i: ${userInfo?.dienthoai? userInfo?.dienthoai: anh.dienthoai}<br>
                            Email: ${userInfo?.email? userInfo?.email: anh.email}<br>
                            Ng??y sinh: ${userInfo?.ngaysinh? userInfo?.ngaysinh: anh.ngaysinh}<br>
                            Chi???u cao: ${userInfo?.chieucao? userInfo?.chieucao: anh.chieucao}<br>
                            C??n n???ng: ${userInfo?.cannang? userInfo?.cannang: anh.cannang}<br>
                            S??? h??? kh???u: ${userInfo?.sohokhau? userInfo?.sohokhau: anh.sohokhau}<br>
                            S??? CMND/CCCD: ${userInfo?.socccd? userInfo?.socccd: anh.socccd}<br>
                            T??nh c??ch: ${userInfo?.tinhcach? userInfo?.tinhcach: anh.tinhcach}<br>
                            Tr??nh ????? v??n h??a: ${userInfo?.trinhdovanhoa? userInfo?.trinhdovanhoa: anh.trinhdovanhoa}<br>
                        </p>
                    </div>
                    <div class="expert ml-2 mt-2">
                        <div class="heading-text text-uppercase">L??nh v???c chuy??n m??n</div>
                        <p class="para mb-1">
                           ${duyetmang(userInfo?.linhvucchuyenmon? userInfo?.linhvucchuyenmon: anh.linhvucchuyenmon)}
                        </p>
                    </div>
    
                    <div class="skill ml-2 mt-2">
                        <div class="heading-text text-uppercase">K??? n??ng</div>
                        <p class="para mb-1">
                           ${duyetmang(userInfo?.kynang? userInfo?.kynang: anh.kynang)}
                        </p>
                    </div>
    
    
                    <div class="hobbies ml-2 mt-2">
                        <div class="heading-text text-uppercase">S??? th??ch</div>
                        <p class="para mb-1">
                           ${duyetmang(userInfo?.sothich? userInfo?.sothich: anh.sothich)}
                        </p>
                    </div>
                </div>
                <div class="right-side d-inline-block m-0 p-0 align-top">
                    <h2 class="name text-uppercase ml-3 my-2">${userInfo?.ten? userInfo?.ten: anh.ten}</h2>
    
                    <div class="contact ml-3 mt-3">
                        <div class="heading-text text-uppercase">Gi???i thi???u v??? b???n th??n v?? nguy???n v???ng</div>
                        <p class="para mb-1">
                            ${userInfo?.nguyenvong? userInfo?.nguyenvong: anh.nguyenvong}
                        </p>
                    </div>
                    <div class="personal ml-3 mt-3">
                        <div class="heading-text text-uppercase">Kinh nghi???m</div>
                        <table class="per-info">
                            <tbody>
                               ${duyenmangthanhbang(userInfo?.kinhnghiem? userInfo?.kinhnghiem: anh.kinhnghiem)}
                            </tbody>
    
                        </table>
                    </div>
                    <div class="education ml-3 mt-3">
                        <div class="heading-text text-uppercase">H???c v???n</div>
                        <table class="per-info">
                            <tbody>
                             ${duyenmangthanhbang(userInfo?.hocvan? userInfo?.hocvan: anh.hocvan)}
                            </tbody>
                        </table>
                    </div>   
    
                    <div class="key-skills ml-3 mt-3">
                        <div class="heading-text text-uppercase">Ch???ng ch???</div>
                        <ul class="pl-1">
                            ${duyetmang2(userInfo?.chungchi? userInfo?.chungchi: anh.chungchi)}
                        </ul>
                    </div>
                    <div class="key-skills ml-3 mt-3">
                        <div class="heading-text text-uppercase">??i???u ki???n ?????c bi???t</div>
                        <ul class="pl-1">
                            <li>${userInfo?.dieukiendacbiet? userInfo?.dieukiendacbiet: anh.dieukiendacbiet}</li>
                        </ul>
                    </div>
                    <div class="key-skills ml-3 mt-3">
                        <div class="heading-text text-uppercase">M???c l????ng</div>
                        <ul class="pl-1">
                            <li>${userInfo?.mucluong? userInfo?.mucluong: anh.mucluong}</li>
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