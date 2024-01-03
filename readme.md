Input formats for all 5 api's

--> 1) /api/login ==><br/>
  Input : <br/>
        email: email <br/>
        pwd: <assword <br/>
   output: <br/>
        access_token: jwt-token <br/>
        (save this token for further use) <br/>
--> 2) /api/user/signup ==><br/>
   Input: <br/>
      email : email (used for login)<br/>
      pwd: password <br/>
      phone: phone number <br/>
      fullname: name <br/>
      profile: profile-pic <br/>
--> 3) /api/admin/signup  ==><br/>
    Input:<br/>
      email : email (used for login)<br/>
      pwd: password <br/>
      phone: phone number<br/>
      fullname: name <br/>
      profile: profile-pic <br/>
--> 4) /api/details/update ==><br/>
     Input:<br/>
       access_token: jwt-token <br/>
       email: email-of-account--you-want-to-change-details <br/>
       name: new-name-(optional) <br/>
       profile: new-profile-image-(optional) <br/>
-->5) /api/user/delete ==><br/>
     Input:<br/>
       access_token: jwt-token<br/>
       email: email-of-account-you-want-to-delete <br/>

-----------------------------------------------------------------------------
-> create .env file and save the below variables <br/>
--> Images are stored in cloudinary <br/>
<br/>
DB_URL="mongodb+srv://hemanthbonala11:hb123@buildwithinnovationtask.81fzz4e.mongodb.net/?retryWrites=true&w=majority"<br/>
SECRET_KEY="buildWithInnovation"<br/>
CLOUD_NAME="diyvqgj54"<br/>
API_KEY="456185937395311"<br/>
API_SECRET="MH3huYJZGgKdCg__QPqPbizsJL4"