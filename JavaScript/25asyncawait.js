function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully")
        }, 1000)
    })
}

async function fetchDataAsync() {
    try {
        const result = await fetchData()
        console.log(result)
    }
    catch (error) {
        console.log(error)
    }
}

//calling async function
// fetchDataAsync()






function fetchUserData(apiEndpoint) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const apiData = {
                users: [{ id: 1, name: "jack" }, { id: 2, name: "john" }],
                posts: [{ userId: 1, title: "Post 1" }, { userId: 2, title: "Post 2" }]
            }

            const result = apiData[apiEndpoint]
            // console.log(result)
            if (result) {
                resolve(result)
            } else {
                reject(`failed to fetch data from ${apiEndpoint}`)
            }
        }, 1000)
    }
    )
}

async function fetchDataAsync() {
    try {
        const users = await fetchUserData('users')
        console.log("Users data async", users)

        const invalidData = await fetchUserData('products')
        console.log("Invalid Products endpoints", invalidData)
    } catch (error) {
        console.log(error)
    }
}

fetchDataAsync()