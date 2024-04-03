import { OAUTH_CLIENT_ID } from "../constant";
function OAuthSignIn() {

  const oauthSignIn = () => {
    // Google's OAuth 2.0 endpoint for requesting an access token
    var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
    console.log(OAUTH_CLIENT_ID)
    // Parameters to pass to OAuth 2.0 endpoint.
    var params = {
      'client_id': OAUTH_CLIENT_ID,
      'redirect_uri': window.location.origin,
      'response_type': 'token',
      'scope': 'https://www.googleapis.com/auth/youtube.force-ssl',
      'include_granted_scopes': 'true',
      'state': 'pass-through value'
    };

    // Convert params object into query string
    var queryString = Object.keys(params)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
      .join('&');      
      // Redirect user to OAuth 2.0 endpoint
      window.location.href = oauth2Endpoint + '?' + queryString;
  
    };



  return (
    <div className="w-full h-screen flex justify-center items-center">
    <button className="border border-black-400 px-3 py-2" onClick={oauthSignIn}>
      SignIn with Google
    </button>
    </div>
  );
}


export default OAuthSignIn;
