export interface Company {
    name : string,
    address : {
        line1 : string,
        line2 : string,
        city: string,
        state: string,
        pincode: number,
        country: string
    },
    owner: {
        firstname: string,
        lastname: string,
        phone: number,
        email: string,
        idtype: string,
        idvalue: string
    },
    gst: string,
    stock: number
}