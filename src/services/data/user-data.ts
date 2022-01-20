import { Project } from "../types/project-types";

export const data: Map<string, Project> = new Map<string, any>([
    ["1", {
        name: "Ighsaan",
        surname: "Levy",
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        country: "ZA",
        created_at: "12 Septemeber 2020",
        image_url: "https://firebasestorage.googleapis.com/v0/b/ideas-4c887.appspot.com/o/icon-vervet.png?alt=media&token=47ef7b2c-ace6-490a-bdbf-f74558bb6f40",
        organizations: [{
            name: "NiFa",
            logo: "https://firebasestorage.googleapis.com/v0/b/ideas-4c887.appspot.com/o/intel.png?alt=media&token=1cda783a-4e83-4ebb-92f4-3cc248552aeb",
            url: "profile_url"
        }],
        socials: [
            "https://github.com/jaketrent",
            "https://twitter.com/jaketrent"
        ],
        projects: [
            {
                name: "Vervet",
                url: "project_url",
                logo: "logo_url"
            }
        ],
        skills: [
            {
                name: "Software Engineering",
                logo: "logo_url",
                level: "5"
            },
            {
                name: "Graphic Design",
                logo: "logo_url",
                level: "0"
            }
        ]
    }]
])