console.log("localStorage length: ", localStorage.length);

const uid = localStorage.getItem("user_id");

console.log("user_id: ", uid);

if (!uid) {
    console.log('User ID not found. Setting the user id and token...');
    localStorage.setItem("token", "QWO2342DFS5AD52FsaS3V6Bsk58Q34JLgYAi867SDT");
    localStorage.setItem("user_id", "12345");
} else {
    console.log('User ID found.', uid);
    console.log('cleaning the User ID...');
    localStorage.removeItem("user_id");
    localStorage.removeItem("token");
}

// The issue with this code, is that localStorage api, is only accesible in browser environment.
// Hence, there is need for an adapter, 
// to make the code run in both: node environment as well as browser environment.