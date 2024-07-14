import { api } from "./api";

export type TripDeatils = {
    id: string,
    destination: string,
    starts_at: string,
    ends_at: string,
    is_confirmed: string
}


type TripeCreate =  Omit<TripDeatils, "id" | "is_confirmed"> & {
    emails_to_invite: string,
    owner_name: string,
    owner_email: string
}


async function getById( id: string) {
    try{
        const {data} = await api.get<{trip: TripDeatils}>(`/trips/${id}`)
        return data.trip
    } catch(error){
        throw error
    }
}

async function create({
    destination, 
    starts_at, 
    ends_at,
    emails_to_invite,
    owner_name = "Nataniel junior",
    owner_email = "mj.58santos@gmail.com"
}:TripeCreate) {
    try {
        const {data} = await api.post<{tripId: string}>("trips",{
            destination,
            starts_at,
            ends_at,
            emails_to_invite,
            owner_name,
            owner_email            
        })

        return data
    } catch (error) {
        throw error
    }
}

export const trpipServer = {getById, create}