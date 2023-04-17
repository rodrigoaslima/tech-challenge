import io from "socket.io-client";

const ENDPOINT = `http://${window.location.hostname}:3003`;

const Api = io(ENDPOINT);

export default Api;