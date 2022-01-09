
export interface Project {
    name: string;
    subtitle: string;
    description: string;
    country: string;
    created_at: string;
    logo_url: string;
    organization: Organization;
    socials: Array<string>;
    resources: Array<Resource>;
    events: Array<Event>;
    collaborators: Array<User>
}

export interface Organization {
    name: string;
    logo: string;
    url: string;
}

export interface Resource {
    name: string;
    logo: string;
    url: string;
}

export interface Event {
    type: string;
    note: string;
    date: string;
    user: User;
    item: Item;
}

export interface User {
    name: string;
    image: string;
    url: string;
}

export interface Item {
    logo: string;
    url: string;
}