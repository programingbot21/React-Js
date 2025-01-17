export const getPosts = async () => {
    const response = await fetch("https://cat-fact.herokuapp.com", {
        method:'Get'
    })
    return  await response.json();
}