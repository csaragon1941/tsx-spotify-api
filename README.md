when running locally ensure to add your .env file with the following vaiables. Add this to the root directory.

When hosting ensure to deploy then include your env variables then redeploy.

TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
CLIENT_ID = "";
CLIENT_SECRET = ""; 
REDIRECT_URI = "http://localhost:3000/callback";
