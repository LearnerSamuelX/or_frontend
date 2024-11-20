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

export type Personal = {
    firstname: string
    lastname: string
    middlename: string | undefined
    dlNum: string
    dob: string
    gender: "M" | "F" | "X"
    height: number
}

export type Residential = {
    province: string
    postalcode: string
    city: string
    street: string
    streetNum: number
}

export type ApplicationInfo = {
    appID: string
} & Personal & Residential