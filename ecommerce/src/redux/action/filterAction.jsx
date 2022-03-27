export const submitFilter = (data) =>{
    return{
        type: 'SUBMIT_FILTER',
        payload: data,
    }
}