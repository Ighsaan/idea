import { Project } from "../types/project-types";

export const data: Map<string, Project> = new Map<string, Project>([
    ["1", {
        name: "Vervet",
        subtitle: "Security through unity",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        country: "ZA",
        created_at: "12 Septemeber 2020",
        logo_url: "https://firebasestorage.googleapis.com/v0/b/ideas-4c887.appspot.com/o/icon-vervet.png?alt=media&token=47ef7b2c-ace6-490a-bdbf-f74558bb6f40",
        organization: {
            name: "NiFa",
            logo: "https://firebasestorage.googleapis.com/v0/b/ideas-4c887.appspot.com/o/intel.png?alt=media&token=1cda783a-4e83-4ebb-92f4-3cc248552aeb",
            url: "profile_url"
        },
        socials: [
            "https://github.com/jaketrent",
            "https://twitter.com/jaketrent"
        ],
        resources: [
            {
                name: "Jira Board",
                logo: "logo_url",
                url: "resource_url"
            },
            {
                name: "Github Repository",
                logo: "logo_url",
                url: "resource_url"
            }
        ], 
        events: [
            // Types:
            // - RESOURCE_ADDED
            // - SOCIAL_ADDED
            // - NOTE_ADDED
            // - PROJECT_CREATED
            // - MILESTONE_ADDED
            {
                type: "RESOURCE_ADDED",
                note: "Resource Added",
                date: "12 September 2020", 
                user: {
                    name: "Bob",
                    image: "image_url",
                    url: "url_to_profile"
                },
                item: {
                    logo: "logo_url",
                    url: "resource_url"
                }
            },
            {
                type: "PROJECT_CREATED",
                note: "Project Created",
                date: "12 September 2020", 
                user: {
                    name: "Bob",
                    image: "image_url",
                    url: "url_to_profile"
                },
                item: {
                    logo: "",
                    url: ""
                },
            }
        ],
        collaborators: [
            {
                name: "Bob",
                image: "image_url",
                url: "url_to_profile"
            },            
            {
                name: "Mandy",
                image: "image_url",
                url: "url_to_profile"
            }
        ]
    }]
])