const defaultRecruit = (recruitUpdate, recruitInfo, bangmau)=>{
    return`
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
                background-color: rgb(200, 255, 2);
                width: 100%;
                height: 100%;
            }
    
            .left-side {
                color: rgb(247, 251, 5);
                width: 33%;
                height: 100%;
                background-color: rgb(255, 162, 2);
    
            }
    
            .right-side {
                height: 100%;
                width: 65%;
                color: rgb(0, 119, 89);
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
                <div class="right-side d-inline-block m-0 p-0 align-top">
                    <h2 class="name text-uppercase ml-3 my-2">${recruitUpdate?.nhatuyendung ? recruitUpdate.nhatuyendung : recruitInfo.nhatuyendung}</h2>
                    <h2 class="name text-uppercase ml-3 my-2">${recruitUpdate?.diachilamviec ?recruitUpdate.diachilamviec  :recruitInfo.diachilamviec}</h2>
                    <h2 class="name text-uppercase ml-3 my-2">${recruitUpdate?.khuvuc ? recruitUpdate.khuvuc : recruitInfo.khuvuc}</h2>
                    <h2 class="name text-uppercase ml-3 my-2">${recruitUpdate?.thongtinlienhe ? recruitUpdate.thongtinlienhe : recruitInfo.thongtinlienhe}</h2>
                    <h2 class="name text-uppercase ml-3 my-2">${recruitUpdate?.kinhnghiem ? recruitUpdate.kinhnghiem : recruitInfo.kinhnghiem}</h2>
                    <h2 class="name text-uppercase ml-3 my-2">${recruitUpdate?.nganhnghe ? recruitUpdate.nganhnghe : recruitInfo.nganhnghe}</h2>
                    <h2 class="name text-uppercase ml-3 my-2">${recruitUpdate?.trinhdongoaingu ? recruitUpdate.trinhdongoaingu : recruitInfo.trinhdongoaingu}</h2>
                    <h2 class="name text-uppercase ml-3 my-2">${recruitUpdate?.dotuoi ? recruitUpdate.dotuoi : recruitInfo.dotuoi}</h2>
                    <h2 class="name text-uppercase ml-3 my-2">${recruitUpdate?.yeucaukhac ? recruitUpdate.yeucaukhac : recruitInfo.yeucaukhac}</h2>
                    <h2 class="name text-uppercase ml-3 my-2">${recruitUpdate?.gioitinh ? recruitUpdate.gioitinh : recruitInfo.gioitinh}</h2>
                    <h2 class="name text-uppercase ml-3 my-2">${recruitUpdate?.soluongtuyen ? recruitUpdate.soluongtuyen : recruitInfo.soluongtuyen}</h2>
                    <h2 class="name text-uppercase ml-3 my-2">${recruitUpdate?.luongcoban ? recruitUpdate.luongcoban : recruitInfo.luongcoban}</h2>
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
module.exports = defaultRecruit;