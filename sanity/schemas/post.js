export default {
    name:'post',
    type:'document',
    title:'Post',
    fields: [
        {
            name:'author',
            type:'string',
            title:'Author',
            live:true
        },
        {
            name:'file_name',
            type:'string',
            title:'File',
            live:true
        },
        {
            name:'date_uploaded',
            type:'date',
            title:'Date Uploaded',
            live:true
        },
        {
            name:'file_url',
            type:'url',
            title:'File URL',
            live:true
        },
        {
            name:'branch',
            type:'string',
            title:'Branch',
            live:true
        },
        {
            name:'semester',
            type:'string',
            title:'Semester',
            live:true
        },
        {
            name:'email',
            type:'string',
            title:'Email',
            live:true
        },
        {
            name:'doc_id',
            type:'string',
            title:'Doc_id',
            live:true
        }
    ]
}