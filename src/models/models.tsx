export type AppProfileDB = {
    app_id: string,
    change_date: number,
    app_status: number
}

export type AppProfile = {
    appID: string
    appDate: number
    appStatus: number
}

export type Personal = {
    first_name: string
    last_name: string
    middle_name: string | undefined
    dl_num: string
    dob: string
    gender: "M" | "F" | "X"
    height: number
}

export type Residential = {
    province: string
    postalcode: string
    city: string
    street: string
    street_num: number
}

export type ApplicationInfo = {
    app_id: string
    [key: string]: any
} & Personal & Residential