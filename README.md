To get CLIENT_ID AND CLIENT_SECRET, create a spotify app in the api developer dashboard.


when running locally ensure to add your .env file with the following vaiables. Add this to the root directory.

When hosting ensure to deploy then include your env variables then redeploy. Also ensure to update your url and redirect url in your spotify api app in the dashboard.

- to access the top tracks and artists of the user navigate to localhost:3000/dashboard.

- to search tracks navigate to localhost:3000/searchtracks.

TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

CLIENT_ID = "";

CLIENT_SECRET = ""; 

REDIRECT_URI = "http://localhost:3000/callback";


NEXT STEPS:

- CORS POLICYS/INTEGRATION WITH PERSONAL PORTFOLIO
- UI DESIGN
