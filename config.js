exports.domain = "http://resto.digid.tn/api/v2";
exports.APP_SECRET="base64:cleqsZQ0FQGaaEpuNR228wvo02JTLgsj2Qko9Y9N4LI="; //Your app secret - same as in the .env file in your web project 
exports.APP_NAME="DIGIRESTO";
exports.LOGO="https://i.imgur.com/xC0qyZZ.png";

exports.SINGLE_MODE=false;
exports.SINGLE_MODE_ID=1;
exports.SINGLE_MODE_NAME="Restaurant Name";

exports.MULTI_CITY=true;


//Currency
exports.currency="DT";
exports.currencySign="DT";

//COD setup
exports.enableCOD=true;  //Cash on deliver

//Stripe settup
exports.enableStripe=false; 
exports.stripePublishKey="";

//Other payment gateways
exports.enablePayPal=false; 
exports.enableMollie=false; 
exports.enablePayStack=false; 

//Date format
exports.dateTimeFormat="MMMM Do YYYY, h:mm a";
exports.dateFormat="MMMM Do YYYY";

//OneSignal APP KEY
exports.ONESIGNAL_APP_ID="a26ad421-5ca0-4be7-80ba-dc91a3a222eb";

//Google setup
exports.GOOGLE_API_KEY="YOUR-GOOGLE_API_KEY";
exports.queryTypes="address"
exports.queryCountries=['us']; //{['pl', 'fr','us']}


/*
    searchRadius={500}
    searchLatitude={51.905070}
    searchLongitude={19.458834}
*/
exports.searchLatitude=null;
exports.searchLongitude=null;
exports.searchRadius=null;