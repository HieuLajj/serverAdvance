const Recruit = (recruitUpdate, recruitInfo)=>{
    return`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Resume maker</title>
    <style>
        .recruiment {
            width: 6.1in;
            height: 7.86in;
        }

        .top–recruit {
            margin: 10px 20px;
            padding-top: 20px;
        }

        .icon i {
            font-size: 20px;
            border: 1px solid #eee;
            padding: 7px;
            border-radius: 7px;
        }

        .icon {
            text-align: right;
            margin-bottom: 10px;
        }

        .infor-recruit {
            justify-content: space-between;
        }

        .address–work p {
            font-size: 14px;
            color: gray;
            padding-top: 10px;
        }

        .infor-primary {
            justify-content: space-around;
            border: 1px solid #eee;
            border-radius: 10px;
        }

        .infor-primary .infor-mini {
            border-right: 1px solid #eee;
            padding-right: 15px;
        }

        .infor-primary .infor-mini:last-child {
            border: none;
        }

        .infor-mini .title {
            margin: 10px;
            text-align: center;
            color: #333;
            font-weight: 600;
        }

        .infor-mini .text {
            text-align: center;
        }

        .body–recruit {
            padding: 10px 30px;
        }

        .body–recruit p {
            margin-bottom: 5px;
        }

        .mainInfo {
            display: grid;
        }

        .blockTitle {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 10px;
        }
    </style>
</head>

<body>
    <div class="recruiment shadow">
        <div class="top–recruit">
            <div class="row infor-recruit">
                <div class="col–4">
                    <h4>${recruitUpdate?.nganhnghe ? recruitUpdate.nganhnghe : recruitInfo.nganhnghe}</h4>
                    <div class="address–work">
                        <p>${recruitUpdate?.diachilamviec ?recruitUpdate.diachilamviec  :recruitInfo.diachilamviec},<br> ${recruitUpdate?.khuvuc ? recruitUpdate.khuvuc : recruitInfo.khuvuc}</p>
                    </div>
                </div>
                <div class="col–4">
                    <div class="icon">
                        <i class="fa-regular fa-heart"></i>
                        <i class="fa-solid fa-share"></i>
                    </div>
                    <div class="time–posted">
                        <span><strong>${recruitUpdate?.nhatuyendung ? recruitUpdate.nhatuyendung : recruitInfo.nhatuyendung}</strong></span>
                    </div>
                </div>
            </div>
            <div class="row infor-primary">
                <div class="col–3 infor-mini ">
                    <p class="title">Experience</p>
                    <p class="text">${recruitUpdate?.kinhnghiem ? recruitUpdate.kinhnghiem : recruitInfo.kinhnghiem}</p>
                </div>
                <div class="col–3 infor-mini ">
                    <p class="title">Age</p>
                    <p class="text">${recruitUpdate?.dotuoi ? recruitUpdate.dotuoi : recruitInfo.dotuoi}</p>
                </div>
                <div class="col–3  infor-mini">
                    <p class="title">Foreign language</p>
                    <p class="text">>${recruitUpdate?.trinhdongoaingu ? recruitUpdate.trinhdongoaingu : recruitInfo.trinhdongoaingu}</p>
                </div>
                <div class="col–3  infor-mini">
                    <p class="title">Offer salary</p>
                    <p class="text">>$${recruitUpdate?.luongcoban ? recruitUpdate.luongcoban : recruitInfo.luongcoban}</p>
                </div>
            </div>
        </div>
        <div class="body–recruit">
            <div class="row mainInfo">
                <p class="blockTitle"><i class="fa-solid fa-circle-info pr-2"></i>Work Description</p>
                <p>${recruitUpdate?.motacongviec ? recruitUpdate.motacongviec : recruitInfo.motacongviec}</p>
                
            </div>
            <div class="row mainInfo">
                <p class="blockTitle"> <i class="fa-solid fa-circle-info pr-2"></i>Applicant Requirement</p>
                <p>${recruitUpdate?.yeucauungvien ? recruitUpdate.yeucauungvien : recruitInfo.yeucauungvien}</p>
            </div>
            <div class="row mainInfo">
                <p class="blockTitle"><i class="fa-solid fa-circle-info pr-2"></i>Contact Information</p>
                <p>${recruitUpdate?.thongtinlienhe ? recruitUpdate.thongtinlienhe : recruitInfo.thongtinlienhe}</p>
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
module.exports = Recruit;