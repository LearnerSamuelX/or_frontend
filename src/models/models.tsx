export type AppProfileDB = {
    app_id: string,
    app_date: string,
    app_status: number
}

export type AppProfile = {
    appID: string
    appDate: string
    appStatus: number
}

export type ApplicationInfo = {
    appID: string
    firstname: string
    lastname: string
    middlename: string
    dlNum: string
    dob: number
    gender: string
    height: number

    province: string
    postalcode: string
    city: string
    street: string
    streetNum: number
}