interface Post {
    id: string
    title: string
    keyword: string
    description: string
    content: any

    tags: Array<string>
    slug: string 
    coverImage: Object 

    date: string 
}