Input formats for all 5 api's

--> 1) /api/login ==>
  Input :
        email: <email>
        pwd: <password>
   output:
        access_token: <jwt-token>
        (save this token for further use)
--> 2) /api/user/signup ==>
   Input:
      email : <email> (used for login)
      pwd: <password>
      phone: <phone number>
      fullname: <name>
      profile: <profile-pic>
--> 3) /api/admin/signup  ==>
    Input:
      email : <email> (used for login)
      pwd: <password>
      phone: <phone number>
      fullname: <name>
      profile: <profile-pic>
--> 4) /api/details/update ==>
     Input:
       access_token: <jwt-token>
       email: <email-of-account--you-want-to-change-details>
       name: <new-name-(optional)>
       profile: <new-profile-image-(optional)>
-->5) /api/user/delete ==>
     Input:
       access_token: <jwt-token>
       email: <email-of-account-you-want-to-delete>

-----------------------------------------------------------------------------
-> create .env file and save the below variables
--> Images are stored in cloudinary

DB_URL="mongodb+srv://hemanthbonala11:hb123@buildwithinnovationtask.81fzz4e.mongodb.net/?retryWrites=true&w=majority"
SECRET_KEY="buildWithInnovation"
CLOUD_NAME="diyvqgj54"
API_KEY="456185937395311"
API_SECRET="MH3huYJZGgKdCg__QPqPbizsJL4"