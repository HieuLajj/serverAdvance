const greenResume =()=>{
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
                background-color: rgb(139, 247, 205);
                width: 100%;
                height: 100%;
            }
    
            .left-side {
                color: rgb(183, 217, 255);
                width: 33%;
                height: 100%;
                background-color: rgb(0, 119, 89);
    
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
                    <!-- SPELLING MISTAKE -->
                    <div class="left-side d-inline-block">
                        <div class="profile-image">
                            <img class="img-fluid" src="https://i.pinimg.com/564x/91/7f/1a/917f1ae7f2f72e5a975e207d1a9fed54.jpg" alt="">
                        </div>
                        <div class="contact ml-2 mt-2">
                            <div class="heading-text text-uppercase">Contact</div>
                            <p class="para mb-1">
                                House no: 72-2 Jigatola, Dhaka <br>
                                +88017293723762434 <br>
                                +88015283727345643 <br>
                                example@gmail.com <br>
                                www.website-domain.com
                            </p>
                        </div>
                        <div class="expert ml-2 mt-2">
                            <div class="heading-text text-uppercase">Expertise Area</div>
                            <p class="para mb-1">
                                Web development <br>
                                Financial Analysis <br>
                                Video Editing <br>
                                Digital marketing<br>
                            </p>
                        </div>
        
                        <div class="skill ml-2 mt-2">
                            <div class="heading-text text-uppercase">IT Skill</div>
                            <p class="para mb-1">
                                MC Office, Libre Office, Google<br>
                                Docs, EViews, Digital Marketing, <br>
                                Video Editing, Linux, Windows, <br>
                                Web Developer (Freelancer)<br>
                            </p>
                        </div>
        
        
                        <div class="hobbies ml-2 mt-2">
                            <div class="heading-text text-uppercase">hobbies</div>
                            <p class="para mb-1">
                                Cricket<br>
                                Football <br>
                                Watching Movies<br>
                                Travel<br>
                            </p>
                        </div>
                    </div>
                    <div class="right-side d-inline-block m-0 p-0 align-top">
                        <h2 class="name text-uppercase ml-3 my-2">Md. Samsuzzoha</h2>
        
                        <div class="contact ml-3 mt-3">
                            <div class="heading-text text-uppercase">About Me</div>
                            <p class="para mb-1">
                                Multi-telented with knowledge of accounting & financial analysis, digital merketing,
                                web development and others consistently rewarded for success in planning and operational
                                improvements. Expert in IT and good in delivering effective and engaging presentations to
                                variety of audiences
                            </p>
                        </div>
                        <div class="personal ml-3 mt-3">
                            <div class="heading-text text-uppercase">Personal Informations</div>
                            <table class="per-info">
                                <tbody>
                                    <tr class="border">
                                        <td>Father's Name</td>
                                        <td>Shahab Udding</td>
                                    </tr>
                                    <tr class="border">
                                        <td>Mather's Name</td>
                                        <td>Sahida Akhter</td>
                                    </tr>
                                    <tr class="border">
                                        <td>Date of Birth</td>
                                        <td>12 feb 1997</td>
                                    </tr>
                                    <tr class="border">
                                        <td>Permanent Address</td>
                                        <td>Shohorbari, Singra, Natore</td>
                                    </tr>
                                </tbody>
        
                            </table>
                        </div>
                        <div class="education ml-3 mt-3">
                            <div class="heading-text text-uppercase">Educational informations</div>
                            <table class="per-info">
                                <tbody>
                                    <tr class="border">
                                        <td>2016-2019</td>
                                        <td>
                                            bachelor of Business Administration <br>
                                            CGPA 3.03 <br>
                                            Major in FInance <br>
                                            Daffodil international University
                                        </td>
                                    </tr>
                                    <tr class="border">
                                        <td>2013-2015</td>
                                        <td>
                                            HSC <br>
                                            CGPA 3.33 <br>
                                            Business Studies <br>
                                            Singra Damdama Pilot School and Collage
                                        </td>
                                    </tr>
                                    <tr class="border">
                                        <td>2008-2013</td>
                                        <td>
                                            SSC <br>
                                            CGPA 3.63 <br>
                                        </td>
                                    </tr>
                                </tbody>
        
                            </table>
                        </div>
        
        
        
                        <div class="key-skills ml-3 mt-3">
                            <div class="heading-text text-uppercase">Key Skills</div>
                            <ul class="pl-1">
                                <li>Understanding accounting and financial principles</li>
                                <li>Computer literate and highly proficient in MS excel</li>
                                <li>Strong analytical and problem solving skills</li>
                                <li>Excellent interpersonal, cross-cultural</li>
                                <li>Encourating and inspiring to others</li>
                                <li>Verbal and written communications skill</li>
        
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
module.exports = greenResume;