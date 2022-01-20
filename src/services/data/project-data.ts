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
                logo: "https://firebasestorage.googleapis.com/v0/b/ideas-4c887.appspot.com/o/resource_logos%2FJira.png?alt=media&token=8b77309a-ad4c-40e5-b32f-7dc1d5ef36a4",
                url: "https://ideasio.atlassian.net/jira/software/c/projects/IDEA/boards/1"
            },
            {
                name: "Github Repository",
                logo: "https://firebasestorage.googleapis.com/v0/b/ideas-4c887.appspot.com/o/resource_logos%2FGithub.png?alt=media&token=b64a2d5a-4969-49d9-a4f4-2d23d7dba29c",
                url: "https://github.com/Ighsaan/idea"
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
                type: "NOTE_ADDED",
                note: "This is a test note for Idea App",
                date: "17 September 2020", 
                user: {
                    name: "Bob",
                    image: "https://firebasestorage.googleapis.com/v0/b/ideas-4c887.appspot.com/o/users%2Fuser_1.jpg?alt=media&token=cb970c7c-b21b-4743-9603-1f4e97b94ff3",
                    url: "/user/1"
                },
                item: {
                    name: "",
                    logo: "",
                    url: ""
                }
            },
            {
                type: "SOCIAL_ADDED",
                note: "Social Added",
                date: "15 September 2020", 
                user: {
                    name: "Bob",
                    image: "https://firebasestorage.googleapis.com/v0/b/ideas-4c887.appspot.com/o/users%2Fuser_1.jpg?alt=media&token=cb970c7c-b21b-4743-9603-1f4e97b94ff3",
                    url: "/user/1"
                },
                item: {
                    name: "Twitter",
                    logo: "logo_url",
                    url: "resource_url"
                }
            },
            {
                type: "RESOURCE_ADDED",
                note: "Resource Added",
                date: "15 September 2020", 
                user: {
                    name: "Bob",
                    image: "https://firebasestorage.googleapis.com/v0/b/ideas-4c887.appspot.com/o/users%2Fuser_1.jpg?alt=media&token=cb970c7c-b21b-4743-9603-1f4e97b94ff3",
                    url: "/user/1"
                },
                item: {
                    name: "Jira Dashboard",
                    logo: "logo_url",
                    url: "resource_url"
                }
            },
            {
                type: "PROJECT_CREATED",
                note: "Project Created",
                date: "12 September 2020", 
                user:             {
                    name: "Mandy",
                    image: "https://firebasestorage.googleapis.com/v0/b/ideas-4c887.appspot.com/o/users%2Fuser_2.jfif?alt=media&token=26ea7514-10be-45ee-8905-ae33737379fc",
                    url: "/user/2"
                },
                item: {
                    name: "Vervet",
                    logo: "",
                    url: ""
                },
            }
        ],
        collaborators: [
            {
                name: "Bob",
                image: "https://firebasestorage.googleapis.com/v0/b/ideas-4c887.appspot.com/o/users%2Fuser_1.jpg?alt=media&token=cb970c7c-b21b-4743-9603-1f4e97b94ff3",
                url: "/user/1"
            },            
            {
                name: "Mandy",
                image: "https://firebasestorage.googleapis.com/v0/b/ideas-4c887.appspot.com/o/users%2Fuser_2.jfif?alt=media&token=26ea7514-10be-45ee-8905-ae33737379fc",
                url: "/user/2"
            }
        ]
    }]
])