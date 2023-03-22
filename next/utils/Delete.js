// const { default: client } = require("@/content/sanity-client")

// const del = (id) => {
//     client.delete(id)
//     .then(res => console.log(`Document deleted`) )
//     .catch(err => console.log(err))
// }

// export default del

const { default: client } = require("@/content/sanity-client");

const del = (id) => {
    client.delete(id)
    .then(res => console.log(`Document deleted`) )
    .catch(err => console.log(err))
};

export default del;