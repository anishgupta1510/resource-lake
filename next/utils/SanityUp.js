import client from "@/content/sanity-client"
import update from "./UpdateId";
const upload = async(url,data) => {

    const {author,filename,date,branch,semester,email} = data

    const updata = {
        _type:'post',
        author:author,
        file_name:filename,
        date_uploaded:date,
        file_url:url,
        branch:branch,
        semester:semester,
        email:email
    }

    try{
        const res = await client.create(updata);
        const id = res._id
        update(updata,id)
        console.log(`doc Id is ${res._id}`)
    }
    catch(error){
        console.log(error)
    }

}

export default upload