const { default: client } = require("@/content/sanity-client")

const update = (data,id) => {
    const updated_data = {
        ...data,
        doc_id:id
    }
    client.patch(id)
    .set(updated_data)
    .commit()
    .then()
    .catch(err=>console.log(err))
}

export default update