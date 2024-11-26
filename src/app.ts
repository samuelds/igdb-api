import IgdbClient from "./config/igdbClient";

const client = IgdbClient.getInstance();

client.getAccessToken().then((response) => {
    console.log(response.data);
});