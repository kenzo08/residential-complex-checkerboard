export interface IFlat {
    id: string;
    cost: number;
    type: string;
    floor: number;
    state: null;
    number: string;
    square: number;
    status: string;
    article: null;
    subsidy: boolean;
    marginal: boolean;
    plan_type: string;
    renovation: boolean;
    installment: boolean;
}


export interface IflatMini {
    id: string | number;
    number: number;
}

export interface IHouse {
    id: string | number;
    houseName: string;
}


export interface IFloor {
    floor: number;
    flats: IflatMini;
}

export interface IEntrance {
    id: string | number;
    house_id: string;
    title: string;
    floors: IFloor;
}
